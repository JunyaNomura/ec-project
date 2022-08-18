import { Product } from '../types/types';

import imgPurple from '../public/purple.jpg';
import imgRed from '../public/red.jpg';
import imgViolet from '../public/violet.jpg';

import imgLemon from '../public/lemon_lip.jpg';
import imgAnzu from '../public/anzu_lip.jpg';
import imgCotton from '../public/cotton_lip.jpg';
import imgSakura from '../public/sakura_lip.jpg';


import imgHeatherOrange from '../public/heather_orange.jpg';
import imgHeatherGray from '../public/heather_gray.jpg';
import imgHeatherPurple from '../public/heather_purple.jpg';
import imgGreenRugby from '../public/green_rugby.jpg';
import imgPinkStripe from '../public/pink_stripe.jpg';


export const productItems: Product[] = [
  {
    id: 1, 
    brandName: 'sampleBrand1',
    productName: 'sampleName1',
    slug: 'samplename1',
    description: 'みずみずしいテクスチャーでフワフワした仕上がりのWATERY、サラッとした質感で唇に軽くフィットするMATTE。シーンに合わせて毎日のメイクをアップデート。',
    price: 500,
    colors: [
      {
        imgData: imgPurple,
        colorHex: '#8b3c98',
        colorName: 'purple',
      },
      {
        imgData: imgRed,
        colorHex: '#9f4141',
        colorName: 'red',
      },
      {
        imgData: imgViolet,
        colorHex: '#973c67',
        colorName: 'violet',
      },        
    ]
  },
  {
    id: 2, 
    brandName: 'haomii',
    productName: 'melty flower lip tint',
    slug: 'melty-flower-lip-tint',
    description: 'オリーブ果実油、アルガンオイル、カニナバラ果実エキスなど、植物由来のオイル成分をたっぷり配合。なめらかな塗り心地で、うるおいを守ります。',
    price: 600,
    colors: [
      {
        imgData: imgLemon,
        colorHex: '#F0D497',
        colorName: 'lemon cookie',
      },
      {
        imgData: imgAnzu,
        colorHex: '#F7B97F',
        colorName: 'anzu butter',
      },
      {
        imgData: imgCotton,
        colorHex: '#9f3232',
        colorName: 'cotton sweet pea',
      },
      {
        imgData: imgSakura,
        colorHex: '#F8C8B3',
        colorName: 'sakura milk',
      },     
    ]
  },
  {
    id: 3, 
    brandName: 'Amazon Essentials',
    productName: 'T shirt',
    slug: 't-shirt',
    description: '目を引く直球なプリントが印象的なMPオリジナルのロックTシャツ。ヴィンテージ加工が施されたダークグレーのカラーが合わせやすく、程よいダメージ加工がストリートにもモードにも落とし込めるユーティリティーなTシャツです。',
    price: 700,
    colors: [
      {
        imgData: imgHeatherOrange,
        colorHex: '#D96147',
        colorName: 'heather orange',
      },
      {
        imgData: imgHeatherGray,
        colorHex: '#849FBC',
        colorName: 'heather gray',
      },
      {
        imgData: imgHeatherPurple,
        colorHex: '#704E94',
        colorName: 'heather purple',
      },    
      {
        imgData: imgPinkStripe,
        colorHex: '#E9C4C1',
        colorName: 'pink stripe',
      }, 
      {
        imgData: imgGreenRugby,
        colorHex: '#03B991',
        colorName: 'green rugby',
      },    
    ]
  },
]