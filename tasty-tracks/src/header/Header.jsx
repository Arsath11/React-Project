import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Header = () => {
    const [modalOpen, setModalOpen] = useState(false);
    let bg = "#6415ff"
    return (
        <>


            {
                modalOpen ? (
                    <div className='p-2 block md:block lg:hidden'>
                        <div className=' mx-6  shadow-lg  border rounded-xl opacity-1' >
                            <div className='flex justify-end pr-3 pt-3'>
                                <IoClose size={25} onClick={() => setModalOpen(false)} />
                            </div>
                            <div className='flex items-center  p-5 gap-2 font-bold flex-col '>

                                <p className='cursor-pointer hover:underline hover:text-[#6415ff] font-bold hover:decoration-2  hover:decoration-[#6415ff]'>About</p>
                                <p className='cursor-pointer hover:underline hover:decoration-2 font-bold hover:text-[#6415ff]  hover:decoration-[#6415ff]'>Blog</p>
                                <p className='cursor-pointer hover:underline hover:decoration-2 font-bold hover:text-[#6415ff]  hover:decoration-[#6415ff]'>Pricing</p>
                                <p className='cursor-pointer hover:underline hover:decoration-2 font-bold hover:text-[#6415ff]  hover:decoration-[#6415ff]'>Contact Us</p>
                                <p className='cursor-pointer hover:underline hover:decoration-2 font-bold  hover:text-[#6415ff] hover:decoration-[#6415ff]'>Login</p>


                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className='block md:block lg:hidden'>
                            <div className='flex justify-between p-4 '>
                                <span className='font-bold text-xl'>
                                Tasty Tracks
                                </span>
                                <RxHamburgerMenu size={25} onClick={() => setModalOpen(true)} />
                            </div>

                        </div>


                        {/* Large Device */}
                        <div className='hidden md:hidden lg:block'>

                            <div className='p-4 flex justify-between items-center'>
                                <span className='font-bold text-xl'>
                                    Tasty Tracks

                                </span>
                                <div className='flex gap-8 items-center'>
                                    <p className='cursor-pointer hover:underline hover:text-[#6415ff] font-bold hover:decoration-2  hover:decoration-[#6415ff]'>About</p>
                                    <p className='cursor-pointer hover:underline hover:decoration-2 font-bold hover:text-[#6415ff]  hover:decoration-[#6415ff]'>Blog</p>
                                    <p className='cursor-pointer hover:underline hover:decoration-2 font-bold hover:text-[#6415ff]  hover:decoration-[#6415ff]'>Pricing</p>
                                    <p className='cursor-pointer hover:underline hover:decoration-2 font-bold hover:text-[#6415ff]  hover:decoration-[#6415ff]'>Contact Us</p>
                                    <span className='flex gap-2'>

                                    <button className='bg-[#6415ff] px-3 py-2 rounded text-white font-bold'>Login</button>
                                    <button className='bg-[#6415ff] px-3 py-2 rounded text-white font-bold'>Sign Up</button>
                                    </span>
                                </div>

                            </div>
                        </div>
                    </>
                )
            }
        </>


    )
}

export default Header