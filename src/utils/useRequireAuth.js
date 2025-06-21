import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from 'react-oidc-context'

const useRequireAuth = () => {
    const { isAuthenticated, isLoading } = useAuth()
    const router = useRouter()
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])
    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            router.replace(`${process.env.NEXT_PUBLIC_LOGOUT_URI}`)
        }
    }, [isClient, isLoading, isAuthenticated, router])

    return { isAuthenticated, isLoading }
}

export default useRequireAuth
