import type { NextPage } from 'next';
import Head from 'next/head';

import CaptionCarousel from '../components/CaptionCarousel';
import Navbar from '../components/Navbar';
import ItemsSwiper from '../components/ItemsSwiper';
import LikeButton from '../components/LikeButton';
import AnimatedNews from '../components/AnimatedNews';
import ProductDetails from '../components/ProductDetails';

const Home: NextPage = () => {
  const isLiked = false;
  return (
    <>
      <Navbar />
      <CaptionCarousel />
      <ItemsSwiper />
      {/* <LikeButton isLiked={isLiked} /> */}
      {/* <AnimatedNews /> */}
      {/* <ProductDetails /> */}
    </>
  )
}

export default Home;
