import { ChevronDownIcon } from "@heroicons/react/24/solid";
import roles from '@/json/roles'
import { EachElement } from "@/utils/Each";
import RoleImage from '@/public/images/role.png'
import Image from "next/image";

const getStatusStyles = (status) => {
    let textColor, bgColor;

    switch (status) {
        case "specialist":
            textColor = "text-[#35C332]";
            bgColor = "bg-[#F4FFF3]";
            break;
        case "admin":
            textColor = "text-[#1671D9]";
            bgColor = "bg-[#E3EFFC]";
            break;
    }

    return { textColor, bgColor };
};

const RoleTable = () => {

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

                                    <EachElement of={roles} render={(item, index) => (

                                        <>

                                            <tr>

                                                <td className="px-6 py-3 whitespace-nowrap">

                                                    <div className="">

                                                        <div className="flex items-center gap-x-2">

                                                                <Image src={RoleImage} width={44} height={44} className=" object-cover h-12 w-12 rounded-full" />

                                                            <div className="grow">
                                                                <span className="block text-sm font-medium text-dark">
                                                                    {item.name}
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
                                                            {item.joined_datetime}
                                                        </span>
                                                    </div>
                                                </td>

                                                <td className="px-6 py-3 whitespace-nowrap">
                                                    <div className="">
                                                        <span
                                                            className={`inline-flex items-center justify-center gap-1.5 py-0.5 px-3 tracking-tight rounded-full font-medium text-[11px] capitalize text-center ${getStatusStyles(item.role).bgColor
                                                                } ${getStatusStyles(item.role).textColor
                                                                }`}
                                                        >
                                                            {item.role}
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
