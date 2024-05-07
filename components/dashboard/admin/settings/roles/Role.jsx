import Button from '@/components/ui/buttons/Button'
import React, { useEffect, useState } from 'react'
import RoleTable from './RoleTable'
import RoleModal from './RoleModal'
import adminService from '@/services/adminService'
import TableSkeletonLoader from '@/components/skeleton/TableSkeletonLoader'

const Role = ({ token }) => {

    const [open, setOpen] = useState(false)
    const [data, setData] = useState([])
    const [ loading, setLoading ] = useState(false)

    const fetchData = async () => {
        try {
            const response = await adminService.getMembers(token)
            setData(response?.data);
        } catch (error) {
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        setLoading(true);
        fetchData();
    }, [])

    return (
        <>

            <div className='w-full md:w-[80%]'>

                <div className="flex sm:items-center flex-col sm:flex-row justify-between flex-wrap gap-y-5">

                    <div className="flex flex-col tracking-tight">
                        <h2 class="text-sm font-bold text-dark capitalize">Add Members</h2>
                        <p className="text-xs text-textColor">Invite your colleagues to work faster and collaborate together.</p>
                    </div>

                    <div className="flex justify-end">
                        <Button type='button' onClick={() => setOpen(true)} className='btn-outline border-[#586283]'>
                            Add New Member
                        </Button>
                    </div>

                </div>

                <div className="mt-10">

                    {loading ? (

                        <TableSkeletonLoader count={5} height={40} />

                    ) : (

                        <RoleTable data={data} />

                    )}

                </div>

            </div>

            <RoleModal token={token} fetchData={fetchData} open={open} setOpen={setOpen} />

        </>
    )
}

export default Role