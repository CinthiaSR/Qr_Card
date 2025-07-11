"use client"
import { useAuth } from "react-oidc-context"

const Login = (signOutRedirect) => {
    const auth = useAuth()
    return (
        <main className="flex min-h-screen flex-col">

            <div className="mt-4 mx-auto flex grow flex-col gap-4 md:flex-row w-4/5">
                <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
                    <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
                        <strong>Bienvenido a QR Card </strong> Una manera diferente de conocer a tu público
                    </p>
                    <button className="flex items-center gap-5 self-start rounded-lg bg-[#e79363] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-600 md:text-base"
                        onClick={() => auth.signinRedirect()}>
                        Sign in</button>
                    <button className="flex items-center gap-5 self-start rounded-lg bg-[#e79363] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-600 md:text-base"
                        onClick={() => signOutRedirect()}>
                        Sign out
                    </button>

                </div>
                <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
                    <img src="./hero-desktop.png" alt="Screenshots of the dashboard" width={1000} height={700} className="hidden md:block" />
                    <img src="./hero-mobile.png" alt="Screenshots of the dashboard mobile" width={560} height={620} className="block md:hidden" />
                </div>
            </div>
        </main>
    )
}
export default Login