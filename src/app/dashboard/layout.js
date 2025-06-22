"use client"
import { useAuth } from "react-oidc-context";
import Sidebar from "@components/Sidebar/Sidebar";
import Header from "@components/Header/Header";
const DashboardLayout = ({ children }) => {
    const auth = useAuth();

    const signOutRedirect = async () => {
        await auth.removeUser();
        sessionStorage.clear();
        localStorage.clear();
        const clientId = process.env.NEXT_PUBLIC_CLIENT_ID
        const logoutUri = process.env.NEXT_PUBLIC_LOGOUT_URI
        const cognitoDomain = process.env.NEXT_PUBLIC_COGNITO_DOMAIN
        // window.location.href = "http://localhost:3000/"
        window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
    };

    if (auth.isLoading) {
        return <div>Loading...</div>;
    }

    if (auth.error) {
        return <div>Encountering error... {auth.error.message}</div>;
    }

    if (auth.isAuthenticated) {
        return (
            <div className="flex h-screen bg-gray-100">
                {<Sidebar signOutRedirect={signOutRedirect} />}
                <div className="flex flex-col flex-1 md:ml-16">
                    {<Header />}
                    <main className="flex-1 overflow-y-auto">
                        {children}
                    </main>
                </div>
            </div>
        );
    }

    return (
        <div>Loading...</div>
    );
}

export default DashboardLayout