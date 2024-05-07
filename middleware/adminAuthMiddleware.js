'use client'
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

const useAuthMiddleware = () => {

    const router = useRouter();
    const token = useSelector((state) => state.admin_auth.token);

    const isAuthenticated = () => {
        return !!token;
    };

    const handleUnauthorizedAccess = () => {
        router.replace('/admin/login');
    };

    const checkAuthorization = () => {
        if (!isAuthenticated()) {
            handleUnauthorizedAccess();
            return false;
        }
        return true;
    };

    return {
        isAuthenticated,
        checkAuthorization,
    };
};

export default useAuthMiddleware;
