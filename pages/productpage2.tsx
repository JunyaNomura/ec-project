import React, { useState } from "react"
import LikeButton from "../components/LikeButton"
import Image, { StaticImageData } from 'next/image'


import img1 from '../public/anzu_lip.jpg';
import img2 from '../public/sakura_lip.jpg';
import img3 from '../public/cotton_lip.jpg';
import img4 from '../public/lemon_lip.jpg';
import { NextPage } from "next";
import Navbar from "../components/Navbar";

const productpage2: NextPage = () => {
  const [count, setCount] = useState<number>(1);  
  const [mainImg, setMainImg] = useState<StaticImageData>(img1);
  // const [productCount, setProductCount] = useState(0);
  const [isOnCart, setIsOnCart] = useState(false);

  const height: number = 100;
  const width: number = height;

  let stock = 15;

  const handleIncrease = () => {
    if (count < stock) {
      setCount((prev) => prev + 1)
    }
  }

  const handleDecrease = () => {
    if (count > 1) {
      setCount((prev) => prev - 1)
    }
  }

  return (
    <>
      <Navbar isOnCart={isOnCart} />
      <div className="h-12"></div>
      <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4 mt-10">
        <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
          {/* <img className="w-full" alt="img of a girl posing" src="https://i.ibb.co/QMdWfzX/component-image-one.png" /> */}
          <Image src={mainImg} className="w-full" />
          <div>---------------------------------------</div>
          <Image src={img4} onMouseEnter={() => setMainImg(img1)} className="w-full" width={width} height={height} />
          <Image src={img2} onMouseEnter={() => setMainImg(img2)} className="w-full" width={width} height={height} />
          <Image src={img3} onMouseEnter={() => setMainImg(img3)} className="w-full" width={width} height={height} />
          <Image src={img4} onMouseEnter={() => setMainImg(img4)} className="w-full" width={width} height={height} />
          {/* <img className="mt-6 w-full" alt="img of a girl posing" src="https://i.ibb.co/qxkRXSq/component-image-two.png" /> */}
        </div>
        <div className="md:hidden">
          {/* <img className="w-full" alt="img of a girl posing" src="https://i.ibb.co/QMdWfzX/component-image-one.png" /> */}
          <Image src={mainImg} className="w-full" />
          <div className="flex items-center justify-between mt-3 space-x-4 md:space-x-0">
            <Image src={img4} onMouseEnter={() => setMainImg(img1)} className="w-full" width={width} height={height} />
            <Image src={img2} onMouseEnter={() => setMainImg(img2)} className="w-full" width={width} height={height} />
            <Image src={img3} onMouseEnter={() => setMainImg(img3)} className="w-full" width={width} height={height} />
            <Image src={img4} onMouseEnter={() => setMainImg(img4)} className="w-full" width={width} height={height} />            
            {/* <img alt="img-tag-one" className="md:w-48 md:h-48 w-full" src="https://i.ibb.co/cYDrVGh/Rectangle-245.png" />
            <img alt="img-tag-one" className="md:w-48 md:h-48 w-full" src="https://i.ibb.co/f17NXrW/Rectangle-244.png" />
            <img alt="img-tag-one" className="md:w-48 md:h-48 w-full" src="https://i.ibb.co/cYDrVGh/Rectangle-245.png" />
            <img alt="img-tag-one" className="md:w-48 md:h-48 w-full" src="https://i.ibb.co/f17NXrW/Rectangle-244.png" /> */}
          </div>
        </div>
        <LikeButton isLiked={false} />
        <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
          <div className="border-b border-gray-200 pb-6">
            <p className="text-sm leading-none text-gray-600">
              Crisis Brand
            </p>
            <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 mt-2">
              Simple Confident Lip(Autumn)
            </h1>
            <p>¥5,000</p>
            <p>Quantity: {count}</p>
            <button onClick={handleIncrease}>+</button>
            <br />
            <button onClick={handleDecrease}>-</button>
          </div>
          {/* <div className="py-4 border-b border-gray-200 flex items-center justify-between">
            <p className="text-base leading-4 text-gray-800">Colours</p>
            <div className="flex items-center justify-center">
              <p className="text-sm leading-none text-gray-600">Smoke Blue with red accents</p>
              <div className="w-6 h-6 bg-gradient-to-b from-gray-900 to-indigo-500 ml-3 mr-4 cursor-pointer">
              </div>
              <svg className="cursor-pointer" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L1 9" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div> */}
          {/* <div className="py-4 border-b border-gray-200 flex items-center justify-between">
            <p className="text-base leading-4 text-gray-800">Size</p>
            <div className="flex items-center justify-center">
              <p className="text-sm leading-none text-gray-600 mr-3">38.2</p>
              <svg className="cursor-pointer" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L1 9" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div> */}
          <button
            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 
              text-base flex items-center justify-center leading-none
              text-white bg-gray-800 w-full py-4 hover:bg-gray-700"
            onClick={() => setIsOnCart(!isOnCart)}
          >
            { isOnCart ? "Remove from Cart" : "Add to Cart" }
          </button>
          <div>
            <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 mt-7">It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout. The point of usingLorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
            <p className="text-base leading-4 mt-7 text-gray-600">Product Code: 8BN321AF2IF0NYA</p>
            <p className="text-base leading-4 mt-4 text-gray-600">Length: 13.2 inches</p>
            <p className="text-base leading-4 mt-4 text-gray-600">Height: 10 inches</p>
            <p className="text-base leading-4 mt-4 text-gray-600">Depth: 5.1 inches</p>
            <p className="md:w-96 text-base leading-normal text-gray-600 mt-4">Composition: 100% calf leather, inside: 100% lamb leather</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default productpage2;