import React from "react";
import { EachElement } from "@/utils/Each";
import FacilityAction from "./FacilityAction";
import moment from "moment";

const getStatusStyles = (status) => {
    let textColor, bgColor;

    switch (status) {
        case "ACTIVE":
            textColor = "text-[#35C332]";
            bgColor = "bg-[#F4FFF3]";
            break;
        case "PENDING":
            textColor = "text-[#6667FA]";
            bgColor = "bg-[#F4F7FE]";
            break;
        case "SUSPENDED":
            textColor = "text-danger";
            bgColor = "bg-[#FEEAEA]";
            break;
    }

    return { textColor, bgColor };
};

const FacilityTable = ({ token, staffs, fetchData }) => {

    return (
        <>

            <div className="mx-auto">
                <div className="flex flex-col">
                    <div className="-m-1.5 overflow-x-auto scrollbar-thin">
                        <div className="p-1.5 min-w-full inline-block align-middle">
                            <table className="min-w-full divide-y divide-border_color">

                                <thead className="bg-white rounded-t-xl text-dark">

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
                                            className="px-6 py-3 text-left whitespace-nowrap"
                                        >
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs tracking-tight font-semibold ">
                                                    ID
                                                </span>
                                            </div>
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left whitespace-nowrap"
                                        >
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs tracking-tight font-semibold ">
                                                    Email
                                                </span>
                                            </div>
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left whitespace-nowrap"
                                        >
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs tracking-tight font-semibold ">
                                                    Phone
                                                </span>
                                            </div>
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left whitespace-nowrap"
                                        >
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs tracking-tight font-semibold ">
                                                    Role
                                                </span>
                                            </div>
                                        </th>

                                        {/* <th
                                            scope="col"
                                            className="px-6 py-3 text-right whitespace-nowrap"
                                        >
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs tracking-tight">
                                                    City
                                                </span>
                                            </div>
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-right whitespace-nowrap"
                                        >
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs tracking-tight">
                                                    Country
                                                </span>
                                            </div>
                                        </th> */}

                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-right whitespace-nowrap"
                                        >
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs tracking-tight">
                                                    Reg. Date
                                                </span>
                                            </div>
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-right whitespace-nowrap"
                                        >
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs tracking-tight">
                                                    Status
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
                                                    <span className="block text-xs pb-0 mb-0 text-dark ">
                                                        {staff.fullname}
                                                    </span>
                                                </td>

                                                <td className="px-6 py-3 whitespace-nowrap">
                                                    <div className="">
                                                        <span className="block text-xs text-textColor ">
                                                            {staff.id}
                                                        </span>
                                                    </div>
                                                </td>

                                                {/* <td className="px-6 py-3 whitespace-nowrap">
                                                    <div className="">
                                                        <span className="block text-xs text-textColor ">
                                                            {staff.gender}
                                                        </span>
                                                    </div>
                                                </td> */}

                                                <td className="px-6 py-3 whitespace-nowrap">
                                                    <div className="">
                                                        <span className="block text-xs text-textColor ">
                                                            {staff.email}
                                                        </span>
                                                    </div>
                                                </td>

                                                <td className="px-6 py-3 whitespace-nowrap">
                                                    <div className="">
                                                        <span className="block text-xs text-textColor ">
                                                            {staff.phone}
                                                        </span>
                                                    </div>
                                                </td>

                                                <td className="px-6 py-3 whitespace-nowrap">
                                                    <div className="">
                                                        <span className="block capitalize text-xs text-textColor ">
                                                            {staff.role}
                                                        </span>
                                                    </div>
                                                </td>

                                                {/* <td className="px-6 py-3 whitespace-nowrap">
                                                    <div className="">
                                                        <span className="block text-xs text-textColor ">
                                                            {staff.city}
                                                        </span>
                                                    </div>
                                                </td>

                                                <td className="px-6 py-3 whitespace-nowrap">
                                                    <div className="">
                                                        <span className="block text-xs text-textColor ">
                                                            {staff.country}
                                                        </span>
                                                    </div>
                                                </td> */}

                                                <td className="px-6 py-3 whitespace-nowrap">
                                                    <div className="">
                                                        <span className="block text-xs text-textColor ">
                                                            { moment(staff.createdAt).format('llll') }
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

                                                    <FacilityAction fetchData={fetchData} token={token} index={index} data={staff} />

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

export default FacilityTable;
