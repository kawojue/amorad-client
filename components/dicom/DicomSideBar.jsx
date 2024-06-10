const DicomSideBar = ({ open, setOpen }) => {

    const handleLinkClick = () => {
        setTimeout(() => {
            setOpen(false);
        }, 100);
    };

    return (
        <>

            <aside className={`fixed inset-y-0 left-0 flex-wrap items-center justify-between scrollbar-none overflow-x-hidden block p-0  pb-10 transition-all duration-200 -translate-x-full bg-black border-0 z-10 ${open && 'translate-x-0'} max-w-64 xl:translate-x-0 w-[250px] z-50 mt-16`}>


                <div className="pt-4 overflow-y-auto">

                    <div className="items-center block w-full h-auto grow basis-full px-4">

                    </div>

                </div>

            </aside>

        </>
    )
}

export default DicomSideBar