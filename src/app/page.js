"use client"
import { useAuth } from "react-oidc-context";
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function Home() {
  const auth = useAuth();

  const signOutRedirect = () => {
    const clientId = process.env.NEXT_PUBLIC_CLIENT_ID
    const logoutUri = process.env.NEXT_PUBLIC_LOGOUT_URI
    const cognitoDomain = process.env.NEXT_PUBLIC_COGNITO_DOMAIN
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
      <div>
        <pre> Hello: {auth.user?.profile.email} </pre>
        <pre> ID Token: {auth.user?.id_token} </pre>
        <pre> Access Token: {auth.user?.access_token} </pre>
        <pre> Refresh Token: {auth.user?.refresh_token} </pre>
        {/* <button onClick={() => auth.removeUser()}>Sign out</button> */}

        <button className="flex items-center gap-5 self-start rounded-lg bg-[#e79363] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-600 md:text-base"
          onClick={() => auth.removeUser()}>
          Sign out
        </button>
      </div>
    );
  }

  return (
    // <div>
    //   <button onClick={() => auth.signinRedirect()}>Sign in</button>
    //   <button onClick={() => signOutRedirect()}>Sign out</button>
    // </div>
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
  );
}
