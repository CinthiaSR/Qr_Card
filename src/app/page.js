"use client"
import { useAuth } from "react-oidc-context";
import Login from "@components/Main/Login";

export default function Home() {
  const auth = useAuth();

  const signOutRedirect = async () => {
    await auth.removeUser();
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

  return (
    <Login signOutRedirect={signOutRedirect} />
  );
}
