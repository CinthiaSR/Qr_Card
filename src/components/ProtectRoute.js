'use client';
import { useAuth } from 'react-oidc-context';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ProtectedRoute({ children }) {
    const auth = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!auth.isLoading && !auth.isAuthenticated) {
            router.replace('/unauthorized'); // usa `replace` para evitar ir atrás
        }
    }, [auth.isLoading, auth.isAuthenticated, router]);

    if (auth.isLoading) {
        return <p>Cargando...</p>;
    }

    if (!auth.isAuthenticated) {
        return null;
    }

    return children;
}
