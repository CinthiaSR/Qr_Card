export const getAccessTokenFromSessionStorage = () => {
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

