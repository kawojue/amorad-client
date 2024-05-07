import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const useAuthMiddleware = () => {
    const token = useSelector((state) => state.admin.admin_auth.token);
    const router = useRouter();

    const isAuthenticated = () => !!token;

    const checkAuthorization = () => {
        if (!isAuthenticated()) {
            router.replace('/admin/login');
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
