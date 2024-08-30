import { useEffect, useState } from "react";
import LogoDark from "../assets/placeamblack.svg"
import LogoWhite from "../assets/placeamwhite.svg"
import { NavLink, Outlet } from "react-router-dom";
import Footer from "./footer";


export default function Header() {

    const [scrolling, setScrolling] = useState(false);
  

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };


  return (

    <> 
   
   
<nav className={`w-full  py-5 px-6 sm:px-4  ${scrolling ? "fixed top-0 left-0 z-20 bg-gray-500 bg-opacity-70 backdrop-blur  transform translate-x-0 duration-1000" : " transform translate-x-100 duration-1000"}`}>
<div className="container mx-auto flex max-w-6xl flex-wrap items-center justify-between">
  <NavLink to={"/"} className="flex items-center">
    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="mr-3 h-6 text-yellow-600 sm:h-9">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
    </svg> */}
    <img src={scrolling ? LogoDark : LogoWhite} alt="logo" className="h-6 text-yellow-600 sm:h-20 aspect-square" />
    

    {/* <span className="self-center whitespace-nowrap text-xl font-semibold">Placeam</span> */}
  </NavLink>
  <div className="mt-2 sm:mt-0 sm:flex md:order-2">
 
 <NavLink to={"/login"}>
    <button type="button" className={`rounded mr-3 hidden border ${!scrolling ? "border-yellow-600 text-yellow-600 hover:text-white" : "border-black text-black"}  hover:bg-yellow-600 hover:bg-opacity-50 py-1.5 px-6 text-center text-sm font-medium  focus:outline-none focus:ring-4 focus:ring-blue-300 md:inline-block sm:rounded-lg`}>Login</button>
 </NavLink>
 <NavLink to={"/register"}>
    <button type="button" className={`rounded mr-3 hidden ${!scrolling ? "bg-yellow-600" : "bg-black"} py-1.5 px-6 text-center text-sm font-medium text-white hover:bg-opacity-50 focus:outline-none focus:ring-4 focus:ring-blue-300 md:mr-0 md:inline-block sm:rounded-lg`}>Register</button>
    </NavLink>
    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden" aria-controls="navbar-sticky" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
    </button>
  </div>

  <div className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto" id="navbar-sticky">
    <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm md:font-medium">
      <li>
        <NavLink to={"/"} className={({ isActive }) => `block rounded  ${!isActive ? "text-gray-700" : "text-yellow-600 "} py-2 pl-3 pr-4  md:bg-transparent md:p-0  border-b-2 border-transparent   hover:border-yellow-600`}     aria-current="page">Home</NavLink>
      </li>
      <li>
        <NavLink to={"/buy"} className={({ isActive }) => `${!isActive ? "text-gray-700" : "text-yellow-600 "}  block rounded py-2 pl-3 pr-4  hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-yellow-600 border-b-2 border-transparent   hover:border-yellow-600`}>Buy</NavLink>
      </li>
      <li>
        <NavLink to={"/bid"} className={({ isActive }) => `${!isActive ? "text-gray-700" : "text-yellow-600 "} block rounded py-2 pl-3 pr-4  hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-yellow-600 border-b-2 border-transparent   hover:border-yellow-600`}>Bid</NavLink>
      </li>
      <li>
        <NavLink to={"/donate"} className={({ isActive }) => `${!isActive ? "text-gray-700" : "text-yellow-600 "} block rounded py-2 pl-3 pr-4  hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-yellow-600 border-b-2 border-transparent   hover:border-yellow-600`}>Donate</NavLink>
      </li>
      <li>
        <NavLink to={"/cart"} className={({ isActive }) => `${!isActive ? "text-gray-700" : "text-yellow-600 "} block rounded py-2 pl-3 pr-4  hover:bg-gray-100 md:p-0 md:hover:bg-transparent md:hover:text-yellow-600 border-b-2 border-transparent hover:border-yellow-600`}>Cart</NavLink>
      </li>
    </ul>
  </div>


  {/* <div className="flex items-center justify-center  text-gray-600 capitalize dark:text-gray-300">
<NavLink to={"/"} >
   <button type='button' className="text-gray-800 dark:text-gray-200 border-b-2 border-yellow-600 mx-1.5 sm:mx-6">Home</button>
</NavLink>
<NavLink to={"/sell"} >
 <button type='button' className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-yellow-600 mx-1.5 sm:mx-6">Buy</button>
</NavLink>
<NavLink to={"/bid"} >
<button type='button' className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-yellow-600 mx-1.5 sm:mx-6">Bid</button>
</NavLink>
<NavLink to={"/"} >
            <button type='button' className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-yellow-600 mx-1.5 sm:mx-6">Contact</button>
</NavLink>




          </div> */}

</div>
</nav>
<Outlet />
<Footer />
</>
  )
}
