import { StaticImageData } from "next/image";

export interface Product {
  id: number
  brandName: string
  productName: string
  slug: string
  description: string
  price: number
  colors: {
    imgData: StaticImageData, 
    colorHex: string, 
    colorName: string
  }[]
}

export interface ProductProps {
  item: Product;
}