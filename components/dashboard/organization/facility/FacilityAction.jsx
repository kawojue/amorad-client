import EditIcon from "@/components/icons/EditIcon";
// import Link from 'next/link';
// import ForwardIcon from "@/components/icons/ForwardIcon";
import ActionBar from '../../ActionBar';
import { useState } from "react";
import Spinner from "@/components/loader/Spinner";
import toast from "react-hot-toast";
import { getErrorMessage } from "@/utils/errorUtils";
import organizationService from "@/services/organizationService";

const FacilityAction = ({ data, token, fetchData }) => {

    const [loading, setLoading] = useState(false);

    const toggleStatusChange = async (status, onClose) => {

        // setLoading(true);

        const params = {
            id: data?.id,
            status: status
        }

        try {

            const response = await organizationService.toggleStaff(params, token)
            toast.success(response.message);
            fetchData()

        } catch (error) {

            const message = getErrorMessage(error);
            toast.error(message);

        } finally {
            setLoading(false);
            onClose();
        }

    }

    return (
        <ActionBar
            trigger={<span className="block text-xs font-medium">Expand</span>}
        >
            {({ onClose }) => (
                <div className="py-1">
                    {/* <Link href={`radiologists/${data.id}`} passHref>
                        <div className="flex items-center gap-x-2 px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 cursor-pointer">
                            <ForwardIcon className='w-4 h-4' />
                            <span>View Details</span>
                        </div>
                    </Link> */}

                    <button disabled={loading}>
                        <div
                            className="flex items-center gap-x-2 px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 cursor-pointer"
                            onClick={() => toggleStatusChange(data?.status === 'PENDING' || data?.status === 'SUSPENDED' ? 'ACTIVE' : 'SUSPENDED', onClose)}
                        >
                            {loading ? (
                                <Spinner className='w-3 h-3' />
                            ) : (
                                <EditIcon className='w-4 h-4' />
                            )}
                            <span>{data?.status === 'PENDING' || data?.status === 'SUSPENDED' ? 'Activate Staff' : 'Suspend Staff'}</span>
                        </div>
                    </button>
                </div>
            )}
        </ActionBar>
    );
};

export default FacilityAction;
