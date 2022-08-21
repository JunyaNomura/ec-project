import { useState, FC } from 'react'
import { useUser, login, logout } from "../lib/auth"

import { AiOutlineShoppingCart } from 'react-icons/ai'
import { MdOutlineAccountCircle, MdOutlineFavoriteBorder } from 'react-icons/md'
import Link from 'next/link'

import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu'
import { Button } from '@chakra-ui/button'
import { ChevronDownIcon } from '@chakra-ui/icons'
import DropdownPopup from './DropdownPopup'

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 600) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  const [dropdownOpen, setDropdownOpen] = useState(false)

  window.addEventListener('scroll', changeColor)

  let user = useUser()

  console.log(window.scrollY)
  return (
    
    <nav className={color ? "w-full fixed z-50 bg-gray-550" :"w-full fixed z-50 bg-gray-550 bg-opacity-25" }>

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
                <h2 className="text-2xl font-mono italic text-gray-800">Canvas</h2>
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



              <li className="text-gray-800 hover:text-gray-500">
                <div 
                  onMouseEnter={() => setDropdownOpen(!dropdownOpen)}
                  onMouseLeave={() => setDropdownOpen(!dropdownOpen)}
                >
                  <div>Categories</div>
                  <div className="relative">
                    {dropdownOpen && <DropdownPopup /> }
                  </div>
                </div>
              </li>
              
              {/* <li className="text-gray-800 hover:text-gray-500">
                <Link href="#">
                  <a>Products</a>
                </Link>
                <ul>
                  <li>Lip</li>
                  <li>Eyeshadow</li>
                  <li>Cheek</li>
                  <li>Neil</li>
                </ul>
              </li> */}


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
            </ul>
          </div>
        </div>
      </div>

    </nav>
  );
}

export default Navbar