import { ChevronDownIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { EachElement } from "@/utils/Each";
import moment from "moment";
import RadiologistAction from "./RadiologistAction";

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

const RadiologistTable = ({ datas }) => {

    // ACTIONS
    // const [open, setOpen] = useState(null);

    // const toggleDropdown = (index) => {
    //     if (open == index) {
    //         setOpen(null);
    //     } else {
    //         setOpen(index);
    //     }
    // };

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
                                                    Affiliation
                                                </span>
                                            </div>
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left whitespace-nowrap"
                                        >
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs tracking-tight font-semibold ">
                                                Practice Number
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
                                        </th>

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

                                        {/* <th
                                            scope="col"
                                            className="px-6 py-3 text-right whitespace-nowrap"
                                        >
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs tracking-tight">
                                                    Action
                                                </span>
                                            </div>
                                        </th> */}

                                    </tr>

                                </thead>

                                <tbody className="divide-y divide-border_color ">

                                    <EachElement of={datas} render={(item, index) => (

                                        <>

                                            <tr>

                                                <td className="px-6 py-3 whitespace-nowrap">
                                                    <span className="block text-xs pb-0 mb-0 text-dark ">
                                                        {item.fullname}
                                                    </span>
                                                </td>

                                                <td className="px-6 py-3 whitespace-nowrap">
                                                    <div className="">
                                                        <span className="block text-xs text-textColor ">
                                                            {item.affiliation}
                                                        </span>
                                                    </div>
                                                </td>

                                                <td className="px-6 py-3 whitespace-nowrap">
                                                    <div className="">
                                                        <span className="block text-xs text-textColor ">
                                                            {item.practiceNumber}
                                                        </span>
                                                    </div>
                                                </td>

                                                <td className="px-6 py-3 whitespace-nowrap">
                                                    <div className="">
                                                        <span className="block text-xs text-textColor ">
                                                            {item.email}
                                                        </span>
                                                    </div>
                                                </td>

                                                <td className="px-6 py-3 whitespace-nowrap">
                                                    <div className="">
                                                        <span className="block text-xs text-textColor ">
                                                            {item.phone}
                                                        </span>
                                                    </div>
                                                </td>

                                                <td className="px-6 py-3 whitespace-nowrap">
                                                    <div className="">
                                                        <span className="block text-xs text-textColor ">
                                                            {item.city}
                                                        </span>
                                                    </div>
                                                </td>

                                                <td className="px-6 py-3 whitespace-nowrap">
                                                    <div className="">
                                                        <span className="block text-xs text-textColor ">
                                                            {item.country}
                                                        </span>
                                                    </div>
                                                </td>

                                                <td className="px-6 py-3 whitespace-nowrap">
                                                    <div className="">
                                                        <span className="block text-xs text-textColor ">
                                                            {moment(item.createdAt).format('lll')}
                                                        </span>
                                                    </div>
                                                </td>

                                                <td className="px-6 py-3 whitespace-nowrap">
                                                    <div className="">
                                                        <span
                                                            className={`inline-flex items-center justify-center gap-1.5 py-0.5 px-3 tracking-tight rounded-full font-medium text-[10px] text-center ${getStatusStyles(item.status).bgColor
                                                                } ${getStatusStyles(item.status).textColor
                                                                }`}
                                                        >
                                                            {item.status}
                                                        </span>
                                                    </div>
                                                </td>

                                                {/* <td className="relative px-6 py-3 whitespace-nowrap">

                                                    <div onClick={() => toggleDropdown(index)} className="flex items-center gap-x-2 text-textColor cursor-pointer">
                                                        <span className="block text-xs font-medium">
                                                            Expand
                                                        </span>
                                                        <ChevronDownIcon className="w-3 h-3" />
                                                    </div>

                                                    <RadiologistAction index={index} open={open} setOpen={setOpen} />

                                                </td> */}

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

export default RadiologistTable;
