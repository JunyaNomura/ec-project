import { useState } from 'react'
import { useUser, login, logout } from "../lib/auth"

import { AiOutlineShoppingCart } from 'react-icons/ai'

import Link from 'next/link'

import { createPopper } from "@popperjs/core";


import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react'


const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useUser();

  return (
    <nav className="w-full bg-red-400 shadow">

      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">

            {/* hamburger menu  */}
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
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
                    className="w-6 h-6 text-white"
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
                <h2 className="text-2xl font-bold text-white">Canvas</h2>
              </a>
            </Link>

            <div className="flex">

              <Popover>
                <PopoverTrigger>
                  {/* <Button>Trigger</Button> */}
                  <img
                    className="rounded-full mx-auto" 
                    src={user ? user.photoURL : 'https://placehold.jp/50x50.png'}
                    width='50'
                    height='50'
                  />
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Hey!!</PopoverHeader>
                  <PopoverBody>
                    <Button colorScheme='pink'>{user ? "ログアウト" : "ログイン"}</Button>
                  </PopoverBody>
                </PopoverContent>
              </Popover>

              <AiOutlineShoppingCart />
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
              <li className="text-white hover:text-red-200">
                <Link href="#">
                  <a>Best Seller</a>
                </Link>
              </li>
              <li className="text-white hover:text-red-200">
                <Link href="#">
                  <a>Recommended</a>
                </Link>
              </li>
              <li className="text-white hover:text-red-200">
                <Link href="#">
                  <a>Feature Products</a>
                </Link>
              </li>
              <li className="text-white hover:text-red-200">
                <Link href="#">
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </div>



        </div>
      </div>
    </nav>
  );
}

export default Navbar2