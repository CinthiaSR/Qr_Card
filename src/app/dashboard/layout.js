"use client"
import { useAuth } from "react-oidc-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Sidebar from "@components/Sidebar/Sidebar";
import Header from "@components/Header/Header";

const DashboardLayout = ({ children }) => {
    const auth = useAuth();
    const router = useRouter();

    const signOutRedirect = async () => {
        await auth.removeUser();
        const clientId = process.env.NEXT_PUBLIC_CLIENT_ID
        const logoutUri = process.env.NEXT_PUBLIC_LOGOUT_URI
        const cognitoDomain = process.env.NEXT_PUBLIC_COGNITO_DOMAIN
        // window.location.href = "http://localhost:3000/"
        window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
    };

    useEffect(() => {
        if (!auth.isLoading && !auth.isAuthenticated) {
            router.push('/login');
        }
    }, [auth.isLoading, auth.isAuthenticated]);

    if (auth.isLoading) {
        return <div className="flex items-center justify-center h-screen">Cargando autenticación...</div>;
    }

    if (!auth.isAuthenticated) {
        return null;
    }
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

export default DashboardLayout