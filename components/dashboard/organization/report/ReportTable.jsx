import { ChevronDownIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { EachElement } from "@/utils/Each";
import moment from "moment";
import PapperWorkModal from "../../PapperWorkModal";
import ReportAction from "./ReportAction";
import { calculateAge } from "@/utils/calculateAge";

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

const ReportTable = ({ hideName, reports, token, fetchData }) => {

    const [expandedRow, setExpandedRow] = useState(null);
    const [open, setOpen] = useState(false);
    const [paper, setPaper] = useState(null)

    const toggleRow = (index) => {
        if (expandedRow === index) {
            setExpandedRow(null);
        } else {
            setExpandedRow(index);
        }
    };

    const handleViewPaperWork = (report) => {
        setPaper(report.paperwork);
        setOpen(true);
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
                                            <>

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

                                            {/* <th
                                                scope="col"
                                                className="px-6 py-3 text-left whitespace-nowrap"
                                            >
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs tracking-tight font-semibold">
                                                        Patient Phone
                                                    </span>
                                                </div>
                                            </th> */}

                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left whitespace-nowrap"
                                            >
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs tracking-tight font-semibold">
                                                        Patient Gender
                                                    </span>
                                                </div>
                                            </th>

                                            </>
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
                                    <EachElement of={reports} render={(report, index) => (
                                        <>
                                            <tr key={report.study_id}>
                                                {!hideName && (
                                                    <>

                                                        <td className="px-6 py-3 whitespace-nowrap">
                                                            <span className="block text-xs pb-0 mb-0 text-dark ">
                                                                {report?.patient?.fullname}
                                                            </span>
                                                        </td>

                                                        {/* <td className="px-6 py-3 whitespace-nowrap">
                                                            <span className="block text-xs pb-0 mb-0 text-dark ">
                                                                {report?.patient?.phone}
                                                            </span>
                                                        </td> */}

                                                        <td className="px-6 py-3 whitespace-nowrap">
                                                            <span className="block text-xs pb-0 mb-0 text-dark ">
                                                                {report?.patient?.gender}
                                                            </span>
                                                        </td>

                                                    </>
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
                                                        <span className="block text-xs text-textColor capitalize">
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
                                                        <span
                                                            className="block text-xs text-[#0070FF] underline underline-offset-4 cursor-pointer"
                                                            onClick={() => handleViewPaperWork(report)}
                                                        >
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
                                                            {moment(report.createdAt).format('llll')}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-3 whitespace-nowrap">
                                                    <div className="">
                                                        <span className="block text-xs text-textColor ">
                                                            {moment(report.updatedAt).format('llll')}
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

                                                    <ReportAction fetchData={fetchData} token={token} data={report} index={index} toggleRow={toggleRow} />

                                                </td>
                                            </tr>

                                            {expandedRow === index && (

                                                <tr key={`${index}-expanded`} className="bg-secondary">

                                                    <td colSpan="2" className="px-6 py-4">
                                                        <div className="space-y-2 whitespace-nowrap">

                                                            <div className="flex items-start gap-x-1 text-[12px] text-black">
                                                                <h2 className="font-semibold">DOB:</h2>
                                                                <p> {moment(report?.patient?.dob).format('LL')} </p>
                                                            </div>

                                                            <div className="flex items-start gap-x-1 text-[12px] text-black">
                                                                <h2 className="font-semibold">Age:</h2>
                                                                <p> { calculateAge(report?.patient?.dob) } </p>
                                                            </div>

                                                            <div className="flex items-start gap-x-1 text-[12px] text-black">
                                                                <h2 className="font-semibold">SEX:</h2>
                                                                <p> { report?.patient?.gender } </p>
                                                            </div>

                                                            <div className="flex items-start gap-x-1 text-[12px] text-black">
                                                                <h2 className="font-semibold">Marital Status:</h2>
                                                                <p>1</p>
                                                            </div>

                                                            {/* <div className="flex items-start gap-x-1 text-[12px] text-green">
                                                                <h2 className="font-semibold">Images:</h2>
                                                                <p> 4 (38mb)</p>
                                                            </div> */}

                                                        </div>
                                                    </td>

                                                    <td colSpan="3" className="px-6 py-4">
                                                        <div className="space-y-2 whitespace-nowrap">
                                                            <div className="flex items-start gap-x-1 text-[12px] text-black">
                                                                <h2 className="font-semibold">DOR:</h2>
                                                                <p> {moment(report?.createdAt).format('llll')} </p>
                                                            </div>
                                                            <div className="flex items-start gap-x-1 text-[12px] text-black">
                                                                <h2 className="font-semibold">DOU:</h2>
                                                                <p> {moment(report?.updatedAt).format('llll')} </p>
                                                            </div>
                                                            <div className="flex items-start gap-x-1 text-[12px] text-black">
                                                                <h2 className="font-semibold">Site:</h2>
                                                                <p> {report?.site} </p>
                                                            </div>
                                                            <div className="flex items-start gap-x-1 text-[12px] text-black">
                                                                <h2 className="font-semibold"> Access Code :</h2>
                                                                <p> {report?.access_code} </p>
                                                            </div>
                                                            {/* <div className="flex items-start gap-x-1 text-[12px] text-danger">
                                                                <h2 className="font-semibold">RTA:</h2>
                                                                <p> 2023-07-29, 12:06:23</p>
                                                            </div> */}
                                                        </div>
                                                    </td>

                                                    <td colSpan="8" className="px-6 py-4 w-full space-y-5">

                                                        <div className="flex items-start gap-x-3">
                                                            <h2 className="text-xs font-semibold whitespace-nowrap">Clinical Info:</h2>
                                                            <p className="text-[12px] text-textColor leading-5">
                                                                {report?.clinical_info}
                                                            </p>
                                                        </div>

                                                        <div className="flex items-start gap-x-3">
                                                            <h2 className="text-xs font-semibold">Description:</h2>
                                                            <p className="text-[12px] text-textColor leading-5">
                                                                {report?.description}
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

            <PapperWorkModal open={open} setOpen={setOpen} data={paper} />

        </>
    );
};

export default ReportTable;
