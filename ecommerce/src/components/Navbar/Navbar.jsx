import React from 'react';
import { IoMdSearch } from 'react-icons/io';
import Logo from '../../assets/logo.png';
import {FaCaretDown, FaCartShopping} from 'react-icons/fa6';
import DarkMode from './DarkMode';
// import { IoMdSettings } from "react-icons/io";

const MenuLinks = [
    {
        id: 1,
        name: 'Home',
        link: '/'
    },
    {
        id: 2,
        name: 'Shop',
        link: '/shop'
    },
    {
        id: 3,
        name: ' Kids Wear',
        link: '/kids-wear'
    },
    {
        id: 4,
        name: 'About',
        link: '/about'
    },
    {
        id: 5,
        name: 'Products',
        link: '/products'
    },
];

const DropdownLinks = [
    {
        id:1,
        name: "Trending Products",
        link: "/#",
    },
    {
        id:2,
        name: "New Arrivals",
        link: "/#",
    },
    {
        id:3,
        name: "Featured Products",
        link: "/#",
    },
];
const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-800 dark:text-white duration-200 relative z-40" >
        <div className="  py-1">
            <div className="container flex justify-between items-center">
                {/* logo and link section  */}
                <div  >

                <a href="#">
                    <img src={Logo} alt="Logo" 
                    className="w-[150px] h-[100px]" />
                 </a>

                    {/* Menu Links  */}
                    {/* <div className="hidden lg:block">
                        <ul className="flex items-center gap-2">
                            { MenuLinks.map((data, index) => (
                                    <li key={index}>
                                        <a href={data.link} className="inline-block px-4 font-semibold text-grey-500 hover:text-black dark:hover:text-white duration-200"
                                        >
                                            {" "}
                                            {data.name}</a>
                                    </li>
                                ))}
                        </ul>
                    </div> */}
                </div>

                {/* search and order button section  */}
                    <div className='flex justify-between items-center gap-4'>
                        <div className='relative group hidden sm:block'>
                            <input type="text"
                            placeholder='Search ...'
                            className="w-[200px] sm:w-[400px] group-hover:w-[400px] trransition-all duration-400 rounded-full border border-gray-300 px-4 py-1 focus:outline-none focus:border-1 focus:border-gray-600 dark:border-gray-600 dark:bg-gray-900"/>

                            <IoMdSearch className='text-xl group-hover:text-grey-600 dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3'/>
                           
                  </div>
                  {/* order button */}
                  <button onClick={() => alert('Orders will be available soon')}
                  className='bg-yellow-500 transition-all duration-200 text-white px-5 py-1 rounded-full flex items-center gap-3 group'>
                    <span className='group-hover:block hidden transition-all duration-200'>Order</span> 
                    <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer'/>
                  </button>
                {/* DarkMode switch */}
                    <div>
                        <DarkMode/>
                        {/* <IoMdSettings /> */}
                    </div>
                </div>
            </div>  
        </div>
        {/* lower navbar */}
        <div className='flex justify-center bg-yellow-200'> 
                <ul className="sm:flex hidden items-center gap-12">
                    { MenuLinks.map((data) => (
                            <li key={data.id}>
                                <a href={data.link} 
                                className="inline-block px-4
                                 hover:text-red-500 duration-200 text-black font-semibold"
                                >       
                               {data.name}
                               </a>
                            </li>
                        ))}
                        {/* Simple dropdown */}
                        <li className='group relative cursor-pointer'>
                            <a
                             href="#" className="flex items-center gap-[2px] py-2 hover:text-red-500 text-black font-semibold">
                                 Trending Items
                                <span>
                                    <FaCaretDown
                                    className="transition-all duration-200
                                    group-hover:rotate-180 text-black font-semibold" />
                                </span> 
                            </a>
                            <div className='absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md'>
                            <ul>
                                 {DropdownLinks.map((data) => (
                                     <li
                                        key={data.id}>
                                            <a href={data.link} className="inline-block w-full rounded-md p-2 hover:bg-secondary/10 ">
                                                {data.name} 
                                            </a>
                                        </li>
                                     ))}
                                 </ul>
                            </div>
                        </li>
                </ul>
       
       
           </div>
    </div>
  )
}

export default Navbar