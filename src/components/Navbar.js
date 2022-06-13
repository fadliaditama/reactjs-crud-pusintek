import React from 'react'
import { NavLink } from "react-router-dom";
import logoKemenkeu from '../assets/img/kemenkeu.png';

const Navbar = () => {
    let activeLink = "block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0";
    

  return (
    <div>
        <nav className="bg-orange-400 px-2 sm:px-4 py-2.5">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
            <a href="https://www.kemenkeu.go.id/" target="__blank" className="flex items-center">
                <img src={ logoKemenkeu } className="mr-3 h-6 sm:h-9" alt="Kemenkeu Logo" />
                <span className="self-center text-xl font-semibold whitespace-nowrap">Kementerian Keuangan</span>
            </a>
            <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4">
                <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? activeLink : "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"} aria-current="page">Beranda</NavLink>
                </li>
                <li>
                    <NavLink to="/list-anggaran" className={({ isActive }) => isActive ? activeLink : "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"}>Dana Anggaran</NavLink>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    </div>
    
  )
}

export default Navbar