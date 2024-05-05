import { ChevronDownIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import staffs from '@/json/staff'
import { EachElement } from "@/utils/Each";

const getStatusStyles = (status) => {
    let textColor, bgColor;

    switch (status) {
        case "active":
            textColor = "text-[#35C332]";
            bgColor = "bg-[#F4FFF3]";
            break;
        case "suspended":
            textColor = "text-danger";
            bgColor = "bg-[#FEEAEA]";
            break;
    }

    return { textColor, bgColor };
};

const RoleTable = () => {

    // ACTIONS
    const [open, setOpen] = useState(null);

    const toggleDropdown = (index) => {
        if (open == index) {
            setOpen(null);
        } else {
            setOpen(index);
        }
    };

    return (
        <>

            <div className="mx-auto">
                <div className="flex flex-col">
                    <div className="-m-1.5 overflow-x-auto scrollbar-thin">
                        <div className="min-w-full inline-block align-middle">
                            <table className="min-w-full divide-y divide-border">

                                <thead className="bg-[#F9FAFB] rounded-2xl text-dark">

                                    <tr>

                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left whitespace-nowrap"
                                        >
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs tracking-tight font-semibold">
                                                    Name
                                                </span>
                                            </div>
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-right whitespace-nowrap"
                                        >
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs tracking-tight">
                                                    Date added
                                                </span>
                                            </div>
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-right whitespace-nowrap"
                                        >
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs tracking-tight">
                                                    Role
                                                </span>
                                            </div>
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-right whitespace-nowrap"
                                        >
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs tracking-tight">
                                                    Action
                                                </span>
                                            </div>
                                        </th>

                                    </tr>

                                </thead>

                                <tbody className="divide-y divide-border_color ">

                                    <EachElement of={staffs} render={(staff, index) => (

                                        <>

                                            <tr>

                                                <td className="px-6 py-3 whitespace-nowrap">

                                                    <div className="">

                                                        <div className="flex items-center gap-x-2">

                                                            <div className="h-10 w-10 rounded-full bg-[#ECF6FA] flex items-center justify-center">
                                                            </div>

                                                            <div className="grow">
                                                                <span className="block text-sm font-medium text-dark">
                                                                    {staff.name}
                                                                </span>
                                                                <span className="block -mt-1 text-[11px] font-light text-textColor">
                                                                    {staff.email}
                                                                </span>

                                                            </div>
                                                        </div>

                                                    </div>

                                                </td>

                                                <td className="px-6 py-3 whitespace-nowrap">
                                                    <div className="">
                                                        <span className="block text-xs text-textColor ">
                                                            {staff.reg_date}
                                                        </span>
                                                    </div>
                                                </td>

                                                <td className="px-6 py-3 whitespace-nowrap">
                                                    <div className="">
                                                        <span
                                                            className={`inline-flex items-center justify-center gap-1.5 py-0.5 px-3 tracking-tight rounded-full font-medium text-[11px] capitalize text-center ${getStatusStyles(staff.status).bgColor
                                                                } ${getStatusStyles(staff.status).textColor
                                                                }`}
                                                        >
                                                            {staff.status}
                                                        </span>
                                                    </div>
                                                </td>

                                                <td className="relative px-6 py-3 whitespace-nowrap">

                                                    <div onClick={() => toggleDropdown(index)} className="flex items-center gap-x-2 text-textColor cursor-pointer">
                                                        <span className="block text-xs font-medium">
                                                            Expand
                                                        </span>
                                                        <ChevronDownIcon className="w-3 h-3" />
                                                    </div>

                                                </td>

                                            </tr>

                                        </>

                                    )} />

                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>



        </>
    );
};

export default RoleTable;
