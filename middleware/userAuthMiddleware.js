import { getExpiresPeriod, getProfile, getToken, resetAuth } from '@/features/slices/users/authSlice';
import { redirect } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';

const useUserAuthMiddleware = (allowedRoles = []) => {

    const dispatch = useDispatch()

    const user = useSelector(getProfile);
    const expiresPeriod = useSelector(getExpiresPeriod);
    const token = useSelector(getToken);

    const isAuthenticated = () => {
        const currentTime = new Date().toISOString(); 

        let isTokenValid = false;

        if (typeof expiresPeriod === 'string') {
            isTokenValid = expiresPeriod > currentTime;
        } else if (expiresPeriod instanceof Date) {
            isTokenValid = expiresPeriod > new Date();
        }

        return !!user && !!token && isTokenValid;
    };

    const handleUnauthorizedAccess = () => {
        dispatch(resetAuth())
        redirect('/signin');
    };

    const checkAuthorization = () => {
        if (!isAuthenticated() || (!allowedRoles.includes(user?.role))) {
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

export default useUserAuthMiddleware;
