import type { NextPage } from 'next';
import Head from 'next/head';

import CaptionCarousel from '../components/CaptionCarousel';
import Navbar from '../components/Navbar';
import ItemsSwiper from '../components/ItemsSwiper';
import LikeButton from '../components/LikeButton';
import AnimatedNews from '../components/AnimatedNews';

import { useUser, login, logout } from "../lib/auth";
import Sample from '../components/Sample';
import Sample2 from '../components/Sample2';

import { Product } from '../types/types'
// import { products } from '../types/cms-types'

import data from '../utils/restaurants.json';
import { GetServerSideProps, GetStaticProps } from "next";
import { Box, Heading } from "@chakra-ui/layout";

import { createClient } from 'microcms-js-sdk';
import Navbar2 from '../components/Navbar2';

import { atom, useRecoilState } from 'recoil';
import LineUp from '../components/LineUp';
import Hero from '../components/Hero';
import CarouselSection from '../components/CarouselSection';




export const client = createClient({
  serviceDomain: 'myec',
  apiKey: '44042749f2a84662ac22cdb3391585c61e43',
});

export const productsState = atom<Product[] | undefined>({
  key: 'productsState',
  default: undefined
})


const Home = ( props : Product[]) => {
  const [products, setProducts] = useRecoilState(productsState);
  // setProducts(props)
  // console.log(products);
  // console.log(props)
  // const isLiked = false;

  const user = useUser();

  const handleLogin = (): void => {
    login().catch((error) => console.error(error));
  };

  const handleLogout = (): void => {
    logout().catch((error) => console.error(error));
  }

  // window.alert('alert!!!!!!!')

  return (
    <>
      <div>
        {user !== null ? (
          <h2>ログインしている</h2>
        ) : (
          <h2>ログインしていない</h2>
        )}
        <button onClick={handleLogin}>ログイン</button>
        <button onClick={handleLogout}>ログアウト</button>
      </div>
      {/* <h1>{contents[0].body}</h1> */}

      <Navbar2 />
      {/* <Hero /> */}
      {/* <CarouselSection /> */}
      <CaptionCarousel />
      {/* <Navbar2 /> */}
      {/* <ItemsSwiper /> */}
      {/* <Sample />
      <Sample2 />
      <LikeButton isLiked={isLiked} /> */}
      {/* <AnimatedNews /> */}
      <LineUp />
    </>
  )
}

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const products: Product[] = await client.get({
    endpoint: 'products',
  });
  
  return {
    props: {
      products,
    },
  };
}










