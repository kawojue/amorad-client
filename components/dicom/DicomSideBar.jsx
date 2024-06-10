const DicomSideBar = ({ open, setOpen }) => {

    const handleLinkClick = () => {
        setTimeout(() => {
            setOpen(false);
        }, 100);
    };

    return (
        <>

            <aside className={`fixed inset-y-0 left-0 flex-wrap items-center justify-between scrollbar-none overflow-x-hidden block p-0  pb-10 transition-all duration-200 -translate-x-full bg-black border-0 z-10 ${open && 'translate-x-0'} max-w-64 md:translate-x-0 w-[250px] z-50 mt-16 border-r-2 border-primary`}>

                <div className="bg-primary p-3 text-center">
                    <h2 className="text-sm text-white font-medium">Studies</h2>
                </div>

                <div className="bg-blue p-3">

                    <div className="flex items-center justify-between pb-4">
                        <h2 className="text-xs text-white">15-Sept-2022</h2>
                        <p className="text-xs text-primary">10163</p>
                    </div>

                    <h2 className="text-sm text-textColor">CT/CP</h2>

                </div>

                <div className="overflow-y-auto pt-8 px-6 space-y-6">

                    <div className="border border-primary rounded-xl h-36">

                    </div>

                    <div className="border border-primary rounded-xl h-36">

                    </div>

                    <div className="border border-primary rounded-xl h-36">

                    </div>

                    <div className="border border-primary rounded-xl h-36">

                    </div>

                    <div className="border border-primary rounded-xl h-36">

                    </div>

                    <div className="border border-primary rounded-xl h-36">

                    </div>

                </div>

            </aside>

        </>
    )
}

export default DicomSideBar