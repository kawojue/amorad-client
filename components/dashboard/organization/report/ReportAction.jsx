import EditIcon from "@/components/icons/EditIcon";
import ActionBar from '../../ActionBar';
import { useState } from "react";
import Spinner from "@/components/loader/Spinner";
import toast from "react-hot-toast";
import { getErrorMessage } from "@/utils/errorUtils";
import organizationService from "@/services/organizationService";
import Link from "next/link";
import ForwardIcon from "@/components/icons/ForwardIcon";

const ReportAction = ({ index, data, token, fetchData, toggleRow }) => {

    const status = data?.status

    const [loading, setLoading] = useState(false);

    const toggleStatusChange = async (status, onClose) => {

        setLoading(true);

        const params = {
            mrn: data?.mrn,
            studyId: data?.studyId,
            practitionerId: data?.practitionerId
        }

        try {

            const response = await organizationService.designateStudy(params?.mrn, params?.studyId, params?.practitionerId, status, token)
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
            trigger={<span className="block text-xs font-medium">Action</span>}
        >
            {({ onClose }) => (
                <div className="px-1">

                    <Link onClick={() => toggleRow(index)} href="javascript:void(0)">
                        <div className="flex items-center gap-x-2 px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 cursor-pointer">
                            <ForwardIcon className='w-4 h-4' />
                            <span>Expand</span>
                        </div>
                    </Link>

                    {/* <Link href={`report/${data.id}`} passHref>
                        <div className="flex items-center gap-x-2 px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 cursor-pointer">
                            <ForwardIcon className='w-4 h-4' />
                            <span>View Details</span>
                        </div>
                    </Link> */}

                    <Link href={`patient/${data?.patient?.mrn}/study/${data?.study_id}/edit`} passHref>
                        <div className="flex items-center gap-x-2 px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 cursor-pointer">
                            <EditIcon className='w-4 h-4' />
                            <span>Edit Report</span>
                        </div>
                    </Link>

                    { !status == 'Unassigned' ? (

                        <Link href={`patient/${data?.patient?.mrn}/study/${data?.study_id}/assign`} passHref>
                            <div className="flex items-center gap-x-2 px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 cursor-pointer">
                                <EditIcon className='w-4 h-4' />
                                <span>Assign Record</span>
                            </div>
                        </Link>

                    ) : (

                        <button disabled={loading}>
                            <div
                                className="flex items-center gap-x-2 px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 cursor-pointer"
                                onClick={() => toggleStatusChange('Unassigned', onClose)}
                            >
                                {loading ? (
                                    <Spinner className='w-3 h-3' />
                                ) : (
                                    <EditIcon className='w-4 h-4' />
                                )}
                                <span> Unassign Record </span>
                            </div>
                        </button>

                    )}



                </div >
            )}
        </ActionBar >
    );
};

export default ReportAction;
