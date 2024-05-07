import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

const useAuthMiddleware = () => {

    const token = useSelector((state) => state.admin.admin_auth.token);
    const router = useRouter();

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
