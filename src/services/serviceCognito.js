'use client';

import { AuthProvider } from 'react-oidc-context';

const cognitoAuthConfig = {
    authority: process.env.NEXT_PUBLIC_AUTHORITY,
    client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
    redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI,
    response_type: process.env.NEXT_PUBLIC_RESPONSE_TYPE,
    scope: process.env.NEXT_PUBLIC_SCOPE,
};

export default function OidcProviderWrapper({ children }) {
    return <AuthProvider {...cognitoAuthConfig}>{children}</AuthProvider>;
}
