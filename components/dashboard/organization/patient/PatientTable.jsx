import React from "react";
import { EachElement } from "@/utils/Each";
import PatientAction from "./PatientAction";
import moment from "moment";

const getStatusStyles = (status) => {
    let textColor, bgColor;

    switch (status) {
        case "New":
            textColor = "text-[#027A48]";
            bgColor = "bg-[#ECFDF3]";
            break;
        case "Archived":
            textColor = "text-[#0000FF]";
            bgColor = "bg-[#F4F4FF]";
            break;
    }

    return { textColor, bgColor };
};

const PatientTable = ({ patients }) => {

    return (
        <div className="mx-auto">
            <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto scrollbar-thin">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        
                        {patients.length === 0 ? (
                            <div className="text-center py-5">
                                <span className="text-lg font-semibold text-gray-600">
                                    No patients found
                                </span>
                            </div>

                        ) : (
                            <table className="min-w-full divide-y divide-border_color">
                                <thead className="bg-white rounded-t-xl text-dark">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left whitespace-nowrap">
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs tracking-tight font-semibold">
                                                    Patient Name
                                                </span>
                                            </div>
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left whitespace-nowrap">
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs tracking-tight font-semibold">
                                                    MRN
                                                </span>
                                            </div>
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left whitespace-nowrap">
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs tracking-tight font-semibold">
                                                    Phone number
                                                </span>
                                            </div>
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left whitespace-nowrap">
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs tracking-tight font-semibold">
                                                    Gender
                                                </span>
                                            </div>
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left whitespace-nowrap">
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs tracking-tight font-semibold">
                                                    DOB
                                                </span>
                                            </div>
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left whitespace-nowrap">
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs tracking-tight font-semibold">
                                                    Status
                                                </span>
                                            </div>
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left whitespace-nowrap">
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs tracking-tight font-semibold">
                                                    Created
                                                </span>
                                            </div>
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-right whitespace-nowrap">
                                            <div className="flex items-center gap-x-2">
                                                <span className="text-xs tracking-tight">
                                                    Action
                                                </span>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border_color">
                                    <EachElement
                                        of={patients}
                                        render={(patient, index) => (
                                            <tr key={index}>
                                                <td className="px-6 py-3 whitespace-nowrap">
                                                    <span className="block text-xs pb-0 mb-0 text-dark">
                                                        {patient.fullname}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-3 whitespace-nowrap">
                                                    <div className="">
                                                        <span className="block text-xs text-textColor">
                                                            {patient.mrn}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-3 whitespace-nowrap">
                                                    <div className="">
                                                        <span className="block text-xs text-textColor">
                                                            {patient.phone}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-3 whitespace-nowrap">
                                                    <div className="">
                                                        <span className="block text-xs text-textColor">
                                                            {patient.gender}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-3 whitespace-nowrap">
                                                    <div className="">
                                                        <span className="block text-xs text-textColor">
                                                            { moment(patient.dob).format('LL') }
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-3 whitespace-nowrap">
                                                    <div className="">
                                                        <span
                                                            className={`inline-flex items-center justify-center gap-1.5 py-0.5 px-3 tracking-tight rounded-full font-medium text-[11px] capitalize text-center ${getStatusStyles(patient.status).bgColor} ${getStatusStyles(patient.status).textColor}`}
                                                        >
                                                            {patient.status}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-3 whitespace-nowrap">
                                                    <div className="">
                                                        <span className="block text-xs text-textColor">
                                                            { moment(patient.created_at).format('LLLL') }
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="relative px-6 py-3 whitespace-nowrap">
                                                    <PatientAction data={patient} index={index} />
                                                </td>
                                            </tr>
                                        )}
                                    />
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientTable;
