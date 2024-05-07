import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { EachElement } from "@/utils/Each";
import RoleImage from '@/public/images/role.png'
import Image from "next/image";
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

const RoleTable = ({ data }) => {

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

                                    <EachElement of={data} render={(item, index) => (

                                        <>

                                            <tr>

                                                <td className="px-6 py-3 whitespace-nowrap">

                                                    <div className="pr-6 md:pr-0">

                                                        <div className="flex items-center gap-x-2">

                                                            <Image src={RoleImage} width={44} height={44} className=" object-cover h-10 w-10 rounded-full" />

                                                            <div className="grow">
                                                                <span className="block text-sm font-medium text-dark">
                                                                    {item.fullname}
                                                                </span>
                                                                <span className="block -mt-1 text-[11px] font-light text-textColor">
                                                                    {item.email}
                                                                </span>

                                                            </div>
                                                        </div>

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
                                                            className={`inline-flex items-center justify-center gap-1.5 py-0.5 px-3 tracking-tight rounded-full font-medium text-[11px] capitalize text-center ${getStatusStyles(item.status).bgColor
                                                                } ${getStatusStyles(item.status).textColor
                                                                }`}
                                                        >
                                                            {item.status}
                                                        </span>
                                                    </div>
                                                </td>

                                                <td className="relative px-6 py-3 whitespace-nowrap">

                                                    <div className="flex items-center gap-x-2 text-textColor cursor-pointer">
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
