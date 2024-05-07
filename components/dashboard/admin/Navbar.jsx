'use client'
import BellIcon from '@/components/icons/BellIcon';
import ProfileDropdown from './ProfileDropdown';
import { useSelector } from 'react-redux';
import { getProfile } from '@/redux/features/slices/adminAuthSlice';

const NavBar = ({ open, setOpen }) => {

    const profile = useSelector(getProfile)
    const user = JSON.parse(profile)

    return (
        <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-[#FAFAFA]  text-xs py-3 ">
            <nav className="flex basis-full items-center w-full mx-auto px-3 md:px-6">

                <div className="w-full flex items-center ml-auto justify-between sm:gap-x-3 sm:order-3">

                    <div className="mr-5 md:mr-8 tracking-tighter">
                        <h2 class="flex-none text-sm font-bold text-dark capitalize">Hello, { user.fullname.split(' ')[0] }!</h2>
                        <p className="text-xs text-textColor">See your activities for the day</p>
                    </div>

                    {/* MENU BAR ICON */}
                    <div onClick={() => setOpen(!open)} className="xl:hidden">
                        <button type="button" className="inline-flex flex-shrink-0 justify-center items-center pr-4 gap-2  rounded-full font-medium hover:bg-white/[.2] text-black align-middle  transition-all text-xs">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M3 9a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9zm0 6.75a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                            </svg>

                        </button>
                    </div>

                    <div className="flex flex-row items-center justify-end gap-x-6">

                        {/* NOTIFICATION */}
                        <div className="relative cursor-pointer">
                            <div className="absolute w-[15px] h-[15px] -top-1.5 -right-2 rounded-full text-white flex items-center justify-center text-[10px] bg-danger">2</div>
                            <BellIcon className='w-5 h-5' />
                        </div>

                        <ProfileDropdown user={user} />

                    </div>

                </div>

            </nav>
        </header>
    )
}

export default NavBar