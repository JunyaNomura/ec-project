import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";


// import product data
import { productItems } from '../utils/data';
import { FC } from 'react';

// import product card
import ProductCard from './ProductCard';


const ItemsSwiper: FC = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={5}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {productItems.map((item) => (
        <SwiperSlide 
          key={item.id}
        >
          <ProductCard item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ItemsSwiper;