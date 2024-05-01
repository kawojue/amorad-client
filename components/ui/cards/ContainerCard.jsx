import React from 'react'

const ContainerCard = ({ children, title, desc }) => {
    return (
        <div className="flex-1 w-full flex flex-col min-w-0 break-words py-5 bg-white rounded-lg bg-clip-border mt-4">

            <div className="px-5 border-b pb-3">
                <div className="w-full md:w-[65%]">
                    <div className="flex items-center flex-wrap gap-x-3 gap-y.1">
                        <p className="text-base text-black font-medium capitalize"> {title} </p>
                    </div>
                    <p className="text-dark/70 text-xs 2xl:text-sm pt-1 leading-5 "> {desc} </p>
                </div>
            </div>

            <div className="pt-5 pb-1 text-xs px-5">
                {children}
            </div>

        </div>
    )
}

export default ContainerCard