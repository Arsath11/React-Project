import React from 'react'
import food1 from '../assets/food1.png'
import "../App.css"
const Content = () => {
    return (
        <div className='slide-right'>
            <div className='grid grid-cols-1  items-center md:grid-cols-1 lg:grid-cols-2 m-3 pt-5'>
                <div className=''>
                    <h2 className='text-[30px] font-bold'>
                        Delicious & Affordable
                    </h2>
                    <h2 className='text-[30px] p-1 ps-2 mt-3 text-white w-64 font-bold italic bg-[#6415ff]'>
                        Meals Near You.
                    </h2>

                    <p className='pt-3 text-justify mt-3  w-100 lg:w-[92%]'>
                   
Experience the charm of Bistro Delight, where delicious and affordable dishes await. Enjoy mouth-watering options like grilled chicken and creamy pasta, all crafted with care. With a cozy ambiance and wallet-friendly prices, it's the perfect spot for a satisfying meal.


                    </p>
                </div>
                <div>
                    <img src={food1} className='rounded-xl W-100 md:rounded-[25px] pt-5 md:pt-5 lg:pt-0 lg:rounded-[25px]' alt="Food Image" />
                </div>
            </div>
        </div>
    )
}

export default Content