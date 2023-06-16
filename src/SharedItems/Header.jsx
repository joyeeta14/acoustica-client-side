// import React from 'react';
import { useContext, useState } from 'react'
import { Dialog } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { FcMenu } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthProvider';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const { user,logout } = useContext(AuthContext);

    const elements = <>
        <Link to='/'>Home</Link>
        <Link to='/instructors'>Instructor</Link>
        <Link to='/addClasses'>Add Classes</Link>
        <Link to='/approvedClasses'>Classes</Link>
        <Link to='/myClasses'>My Classes</Link>
        <Link to='/manageUser'>Manage User </Link>
        <Link to='/manageClasses'>Manage Classes </Link>
    </>
    return (
        <div>
            <header className="absolute inset-x-0 top-0 z-50">
                <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <div className="-m-1.5 p-1.5 flex justify-center">
                            <div className='pt-2'>
                                <span className="sr-only">Your Company</span>
                                <img
                                    className="h-8 w-auto"
                                    src="https://media.istockphoto.com/id/939144958/vector/guitar-stylized-icon-vector-simple-lines-acoustic-guitar-design-element.jpg?s=612x612&w=0&k=20&c=KOw-qKVwYAPgriQq4svN10gdHbzItr3bzQLLdXumops="
                                    alt=""
                                />
                            </div>
                            <div>
                                <h2 className='ps-3 text-white font-bold text-lg'>ACOUSTICA</h2>
                                <p className="text-white ps-3 font-extralight">
                                    Music School
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <FcMenu className='w-6 h-6'></FcMenu>
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        <div className="text-white  lg:flex lg:gap-x-12">
                            {elements}
                        </div>
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        {/* Userphoto here */}
                        {
                            user ?
                                <div className='flex justify-center items-center'>
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src={user.photoURL} />
                                        </div>
                                    </label>
                                    <button onClick={logout} className='text-white ps-5'>
                                        <Link className='text-white' to='/login'>LogOut</Link>
                                    </button>
                                </div>
                                :
                                <button className='text-white ps-5'>
                                    <Link className='text-white' to='/login'>Log In</Link>
                                </button>
                        }
                    </div>
                </nav>
                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-50" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                    className="h-8 w-auto"
                                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                    alt=""
                                />
                            </a>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    <div className='-mx-3 rounded-lg px-3 py-2 pt-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 flex flex-col'>
                                        {elements}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
        </div>
    );
};

export default Header;