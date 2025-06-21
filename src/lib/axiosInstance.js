import axios from "axios";

const getAccessTokenFromSessionStorage = () => {
    let infoUser = {}
    const key = Object.keys(sessionStorage).find(k => k.startsWith('oidc.user:'));
    if (!key) {
        console.warn("No se encontró una clave que comience con 'oidc.user:' en sessionStorage.");
        return null;
    }
    try {
        const data = JSON.parse(sessionStorage.getItem(key));
        infoUser = {
            access_token: data?.access_token || null,
            userId: data?.profile.sub || null
        }
        return infoUser;
    } catch (error) {
        console.log("Error al parsear el valor de sessionStorage:", error);
        return null;
    }
}



const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_HOST_BACKEND_URL || 'http://smmbp.duckdns.org:8081',
    headers: {
        "Content-Type": "application/json"
    }
})

axiosInstance.interceptors.request.use((config) => {
    if (typeof window !== "undefined") {
        const { access_token, userId } = getAccessTokenFromSessionStorage();

        if (access_token) {
            config.headers["Authorization"] = `Bearer ${access_token}`;
        }
        // if (userId) {
        //     config.headers["userid"] = userId;
        // }
    }

    return config;
},
    (error) => Promise.reject(error)
)

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        console.log("Error de Axios:", error.response?.data || error.message);
        return Promise.reject(error);
    }
);

export default axiosInstance