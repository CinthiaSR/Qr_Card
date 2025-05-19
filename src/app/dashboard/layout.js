"use client"
import Sidebar from "@components/Sidebar/Sidebar";
import Header from "@components/Header/Header";
import OidcProviderWrapper from "@services/serviceCognito";
const DashboardLayout = ({ children }) => {
    return (
        // <OidcProviderWrapper>
        <div className="flex h-screen bg-gray-100">
            {<Sidebar />}
            <div className="flex flex-col flex-1 md:ml-16">
                {<Header />}
                <main className="flex-1 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
        // </OidcProviderWrapper>

    );
}

export default DashboardLayout