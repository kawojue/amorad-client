import { redirect } from 'next/navigation';
import { useSelector } from 'react-redux';

const useAuthMiddleware = () => {

    const token = useSelector((state) => state.admin_auth.token);

    const isAuthenticated = () => {
        return !!token; 
    };

    const handleUnauthorizedAccess = () => {
        redirect('/admin/login');
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
