import { Menu, Transition } from '@headlessui/react'

import { Fragment } from 'react'
import "./style.css"
import { NavLink } from "react-router-dom";

import { useSelector } from 'react-redux';
const Profile = () => {

    const activeUser = useSelector(item => item.users.activeUser)



    return (

        <>

            <Menu>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items>
                        <div className='layouts-leftsidebar-profile-menu'>
                            <svg viewBox="0 0 24 24" >
                                <g><path d="M22 17H2L12 6l10 11z"></path></g>
                            </svg>
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        className={`${active && 'bg-blue-500'}`}
                                        href="/account-settings"
                                    >
                                        Add an existing account
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <NavLink
                                        className={`${active && 'bg-blue-500'}`}
                                        href="/"

                                    >
                                        Log out {activeUser.userName}
                                    </NavLink>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>

                <Menu.Button className="w-[100%]">
                    <div className='flex justify-between items-center'>
                        <div className="flex">
                            <img className="w-[38px] h-[38px] rounded-full" src={activeUser.profilPhoto} alt="" />
                            <div className="ml-[11px]">
                                <p className="font-bold text-[14px] text-start">{activeUser.name}</p>
                                <p className="text-[#536471] text-[14px]">{activeUser.userName}</p>
                            </div>
                        </div>

                        <div>
                            <svg className='w-[17.5px] h-[17.5px]' viewBox="0 0 24 24" aria-hidden="true"><g><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></g></svg>
                        </div>

                    </div>
                </Menu.Button>

            </Menu>
        </>





    )
}

export default Profile
