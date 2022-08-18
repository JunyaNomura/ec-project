import { StaticImageData } from "next/image";

export interface Product {
  id: number
  brandName: string
  productName: string
  slug: string
  description: string
  price: number
  colors: {
    imgData: string, 
    colorHex: string, 
    colorName: string
  }[]
}

export interface ProductProps {
  item: Product;
}

export interface Restaurant {
  name: string
  description: string
  created_at: any
  updated_at: any
  published_at: any
}

export interface RestaurantJsonResponse {
  data: Restaurant[]
}