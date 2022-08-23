import { useState } from 'react'
import { useUser, login, logout } from "../lib/auth"

import { AiOutlineShoppingCart } from 'react-icons/ai'
import { MdOutlineAccountCircle, MdOutlineFavoriteBorder } from 'react-icons/md'
import Link from 'next/link'


import { User } from 'firebase/auth'


const Navbar = ({isOnCart} : any) => {
  const [isOpen, setIsOpen] = useState(false)
  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 600) {
      setColor(true)
    } else {
      setColor(false)
    }
  }
  console.log(`${isOnCart} is passed`)

  window.addEventListener('scroll', changeColor)

  let user = useUser()

  console.log(window.scrollY)
  return (
    
    <nav className={color ? "w-full fixed z-50 bg-gray-50" :"w-full fixed z-50 bg-gray-50 bg-opacity-50" }>

      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex justify-between items-center py-3 md:py-5 md:block">

            {/* hamburger menu  */}
            <div className="flex md:hidden mr-8">
              <button
                onClick={() => setIsOpen(!isOpen)}
                data-collapse-toggle="navbar-fixed"
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-gray-800"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-gray-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  )
                }
              </button>
            </div>

            

            {/* logo */}
            
            <Link href="/">
              <a>
                <h1 className="text-2xl font-mono italic text-gray-800">Canvas</h1>
              </a>
            </Link>

            <div className="flex">
            <Link href="/favorites">
              <a>
                <MdOutlineFavoriteBorder className="w-8 h-12 text-gray-800 md:hidden"/>
              </a>
            </Link>
            <Link href="/cart">
              <a>
                <AiOutlineShoppingCart className="w-8 h-12 text-gray-800 md:hidden"/>
              </a>
            </Link>
            </div>

          </div>
        </div>


        <div>   
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="flex text-gray-800 hover:text-gray-500">
                <MdOutlineAccountCircle className="w-8 h-8 mr-1"/> 
                <button
                  className="inline-block"
                  onClick={user ? logout : login }
                >
                  {user ? "Logout" : "Login"}
                </button>
              </li>
              <li className="text-gray-800 hover:text-gray-500">
                <Link href="#">
                  <a>Best Seller</a>
                </Link>
              </li>
              <li>
            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Dropdown <svg className="ml-1 w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>

            <div id="dropdownNavbar" className="hidden z-10 w-44 font-normal bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-1 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                  </li>
                  <li>
                    <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                  </li>
                </ul>
                <div className="py-1">
                  <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Sign out</a>
                </div>
            </div>
        </li>

              
              
              <li className="text-gray-800 hover:text-gray-500">
                <Link href="#">
                  <a>Products</a>
                </Link>
                <ul>
                  <li>Lip</li>
                  <li>Eyeshadow</li>
                  <li>Cheek</li>
                  <li>Neil</li>
                </ul>
              </li>
              <li className="text-gray-800 hover:text-gray-500">
                <Link href="#">
                  <a>News</a>
                </Link>
              </li>
              <li className="text-gray-800 hover:text-gray-500">
                <Link href="#">
                  <a>Contact</a>
                </Link>
              </li>
                <MdOutlineFavoriteBorder className="w-8 h-8 text-gray-800 invisible md:visible"/>
                <AiOutlineShoppingCart className="w-8 h-8 text-gray-800 invisible md:visible"/>
                {isOnCart ? "1" : "0"}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar
