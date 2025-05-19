'use client';

import { useAuth } from 'react-oidc-context';

export default function Auth() {
    const auth = useAuth();

    if (auth.isLoading) return <p>Cargando...</p>;
    if (auth.error) return <p>Error: {auth.error.message}</p>;

    return auth.isAuthenticated ? (
        <div>
            <p>Hola, {auth.user?.profile.name}</p>
            <button onClick={() => auth.signoutRedirect()}>Cerrar sesión</button>
        </div>
    ) : (
        <button onClick={() => auth.signinRedirect()}>Iniciar sesión</button>
    );
}
