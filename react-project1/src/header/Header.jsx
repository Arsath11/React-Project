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
                    <div className='p-2 sm:block md:block lg:hidden'>
                        <div className=' mx-6  shadow-lg  border rounded-xl opacity-1' >
                            <div className='flex justify-end pr-3 pt-3'>
                                <IoClose size={25} onClick={() => setModalOpen(false)} />
                            </div>
                            <div className='flex items-center  p-5 gap-2 font-bold flex-col '>

                                <p className='cursor-pointer hover:underline hover:decoration-2  hover:decoration-[#6415ff]'>About</p>
                                <p className='cursor-pointer hover:underline hover:decoration-2  hover:decoration-[#6415ff]'>Blog</p>
                                <p className='cursor-pointer hover:underline hover:decoration-2  hover:decoration-[#6415ff]'>Pricing</p>
                                <p className='cursor-pointer hover:underline hover:decoration-2  hover:decoration-[#6415ff]'>Contact Us</p>
                                <p className='cursor-pointer hover:underline hover:decoration-2  hover:decoration-[#6415ff]'>Login</p>

                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='flex justify-between p-4'>
                        <span className='font-bold text-xl'>
                            Arsath

                        </span>
                        <RxHamburgerMenu size={25} onClick={() => setModalOpen(true)} />
                    </div>
                )
            }
        </>


    )
}

export default Header