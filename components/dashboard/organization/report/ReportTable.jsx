import { ChevronDownIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import reportsData from '@/json/reports'
import { EachElement } from "@/utils/Each";
import ReportAction from "./ReportAction";
import moment from "moment";

const getStatusStyles = (status) => {
    let textColor, bgColor;

    switch (status) {
        case "Opened":
            textColor = "text-[#027A48]";
            bgColor = "bg-[#ECFDF3]";
            break;
        case "Assigned":
            textColor = "text-[#0000FF]";
            bgColor = "bg-[#F4F4FF]";
            break;
        case "Unassigned":
            textColor = "text-[#97741A]";
            bgColor = "bg-[#FFFAED]";
            break;
        case "Closed":
            textColor = "text-danger";
            bgColor = "bg-[#FEEAEA]";
            break;
    }

    return { textColor, bgColor };
};

const ReportTable = ({ hideName }) => {

    const [expandedRow, setExpandedRow] = useState(null);

    const toggleRow = (index) => {
        if (expandedRow === index) {
            setExpandedRow(null);
        } else {
            setExpandedRow(index);
        }
    };

    // ACTIONS
    const [open, setOpen] = useState(null);

    const toggleDropdown = (index) => {
        if (open === index) {
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
                        <div className="p-1.5 min-w-full inline-block align-middle">
                            <table className="min-w-full divide-y divide-border_color">

                                <thead className="bg-white rounded-t-xl text-dark">

                                    <tr>

                                        {!hideName && (
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left whitespace-nowrap"
                                            >
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs tracking-tight font-semibold">
                                                        Patient Name
                                                    </span>
                                                </div>
                                            </th>
                                        )}

                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left whitespace-nowrap"
                                        >
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs tracking-tight font-semibold ">
                                                    Study ID
                                                </span>
                                            </div>
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left whitespace-nowrap"
                                        >
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs tracking-tight font-semibold ">
                                                    Body Part
                                                </span>
                                            </div>
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left whitespace-nowrap"
                                        >
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs tracking-tight font-semibold ">
                                                    Priority
                                                </span>
                                            </div>
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left whitespace-nowrap"
                                        >
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs tracking-tight font-semibold ">
                                                    Modality
                                                </span>
                                            </div>
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left whitespace-nowrap"
                                        >
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs tracking-tight font-semibold ">
                                                    CPT Code
                                                </span>
                                            </div>
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left whitespace-nowrap"
                                        >
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs tracking-tight font-semibold ">
                                                    Paper Work
                                                </span>
                                            </div>
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left whitespace-nowrap"
                                        >
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs tracking-tight font-semibold ">
                                                    Dicoms
                                                </span>
                                            </div>
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left whitespace-nowrap"
                                        >
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs tracking-tight font-semibold ">
                                                    Created At
                                                </span>
                                            </div>
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left whitespace-nowrap"
                                        >
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs tracking-tight font-semibold ">
                                                    Updated At
                                                </span>
                                            </div>
                                        </th>

                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left whitespace-nowrap"
                                        >
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs tracking-tight font-semibold ">
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

                                    <EachElement of={reportsData} render={(report, index) => (

                                        <>

                                            <tr>

                                                {!hideName && (
                                                    <td className="px-6 py-3 whitespace-nowrap">
                                                        <span className="block text-xs pb-0 mb-0 text-dark ">
                                                            {report.patient_name}
                                                        </span>
                                                    </td>
                                                )}

                                                <td className="px-6 py-3 whitespace-nowrap">
                                                    <div className="">
                                                        <span className="block text-xs text-textColor ">
                                                            {report.study_id}
                                                        </span>
                                                    </div>
                                                </td>

                                                <td className="px-6 py-3 whitespace-nowrap">
                                                    <div className="">
                                                        <span className="block text-xs text-textColor ">
                                                            {report.body_part}
                                                        </span>
                                                    </div>
                                                </td>

                                                <td className="px-6 py-3 whitespace-nowrap">
                                                    <div className="">
                                                        <span className="block text-xs text-textColor ">
                                                            {report.priority}
                                                        </span>
                                                    </div>
                                                </td>

                                                <td className="px-6 py-3 whitespace-nowrap">
                                                    <div className="">
                                                        <span className="block text-xs text-textColor ">
                                                            {report.modality}
                                                        </span>
                                                    </div>
                                                </td>

                                                <td className="px-6 py-3 whitespace-nowrap">
                                                    <div className="">
                                                        <span className="block text-xs text-textColor ">
                                                            {report.cpt_code}
                                                        </span>
                                                    </div>
                                                </td>

                                                <td className="px-6 py-3 whitespace-nowrap">
                                                    <div className="">
                                                        <span className="block text-xs text-[#0070FF] underline underline-offset-4 cursor-pointer">
                                                            View Paper Work
                                                        </span>
                                                    </div>
                                                </td>

                                                <td className="px-6 py-3 whitespace-nowrap">
                                                    <div className="">
                                                        <span className="block text-xs text-[#0070FF] underline underline-offset-4 cursor-pointer">
                                                            View Dicoms
                                                        </span>
                                                    </div>
                                                </td>

                                                <td className="px-6 py-3 whitespace-nowrap">
                                                    <div className="">
                                                        <span className="block text-xs text-textColor ">
                                                            {moment(report.created_at).format('lll')}
                                                        </span>
                                                    </div>
                                                </td>

                                                <td className="px-6 py-3 whitespace-nowrap">
                                                    <div className="">
                                                        <span className="block text-xs text-textColor ">
                                                            {moment(report.updated_at).format('lll')}
                                                        </span>
                                                    </div>
                                                </td>

                                                <td className="px-6 py-3 whitespace-nowrap">
                                                    <div className="">
                                                        <span
                                                            className={`inline-flex items-center justify-center gap-1.5 py-0.5 px-3 tracking-tight rounded-full font-medium text-[11px] capitalize text-center ${getStatusStyles(report.status).bgColor
                                                                } ${getStatusStyles(report.status).textColor
                                                                }`}
                                                        >
                                                            {report.status}
                                                        </span>
                                                    </div>
                                                </td>

                                                <td className="relative px-6 py-3 whitespace-nowrap">

                                                    <div onClick={() => toggleRow(index)} className="flex items-center gap-x-2 text-textColor cursor-pointer">
                                                        <span className="block text-xs font-medium">
                                                            Expand
                                                        </span>
                                                        <ChevronDownIcon className="w-3 h-3" />
                                                    </div>

                                                    {/* <ReportAction data={report} index={index} open={open} toggleRow={toggleRow} setOpen={setOpen} /> */}

                                                </td>

                                            </tr>

                                            {expandedRow === index && (

                                                <tr key={`${index}-expanded`} className="bg-secondary">

                                                    <td colSpan="2" className="px-6 py-4">

                                                        <div className="space-y-2 whitespace-nowrap">

                                                            <div className="flex items-start gap-x-1 text-[12px] text-black">
                                                                <h2 className="font-semibold">DOB:</h2>
                                                                <p>1985-01-23</p>
                                                            </div>

                                                            <div className="flex items-start gap-x-1 text-[12px] text-black">
                                                                <h2 className="font-semibold">Age:</h2>
                                                                <p>32</p>
                                                            </div>

                                                            <div className="flex items-start gap-x-1 text-[12px] text-black">
                                                                <h2 className="font-semibold">SEX:</h2>
                                                                <p>F</p>
                                                            </div>

                                                            <div className="flex items-start gap-x-1 text-[12px] text-black">
                                                                <h2 className="font-semibold">Series:</h2>
                                                                <p>1</p>
                                                            </div>

                                                            <div className="flex items-start gap-x-1 text-[12px] text-green">
                                                                <h2 className="font-semibold">Images:</h2>
                                                                <p> 4 (38mb)</p>
                                                            </div>

                                                        </div>

                                                    </td>

                                                    <td colSpan="3" className="px-6 py-4">

                                                        <div className="space-y-2 whitespace-nowrap">

                                                            <div className="flex items-start gap-x-1 text-[12px] text-black">
                                                                <h2 className="font-semibold">DOR:</h2>
                                                                <p>2023-07-23, 10:03:13</p>
                                                            </div>

                                                            <div className="flex items-start gap-x-1 text-[12px] text-black">
                                                                <h2 className="font-semibold">DOU:</h2>
                                                                <p>2023-07-28, 12:06:23</p>
                                                            </div>

                                                            <div className="flex items-start gap-x-1 text-[12px] text-black">
                                                                <h2 className="font-semibold">DOS:</h2>
                                                                <p>0000-00-00, 00:00:00</p>
                                                            </div>

                                                            <div className="flex items-start gap-x-1 text-[12px] text-black">
                                                                <h2 className="font-semibold">DOF:</h2>
                                                                <p>0000-00-00, 00:00:00</p>
                                                            </div>

                                                            <div className="flex items-start gap-x-1 text-[12px] text-danger">
                                                                <h2 className="font-semibold">RTA:</h2>
                                                                <p> 2023-07-29, 12:06:23</p>
                                                            </div>

                                                        </div>

                                                    </td>

                                                    <td colSpan="8" className="px-6 py-4 w-full">

                                                        <div className="flex items-start gap-x-3">
                                                            <h2 className="text-xs font-semibold">Summary:</h2>
                                                            <p className="text-[12px] text-textColor leading-5">
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                            </p>
                                                        </div>

                                                    </td>

                                                </tr>
                                            )}

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

export default ReportTable;