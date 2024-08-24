import { Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import useHome from "../../hooks/useHome";
const Slider = () => {

  const { upperSwiperProducts, swapUpperItems } = useHome();

  return (
    <>
      <div className="px-4 md:px-8 lg:px-27 py-4">
        {/* Hero Swiper */}
        <section className="lg:h-[395px]">
          <Swiper slidesPerView={"auto"} onClick={() => swapUpperItems('left')} modules={[Navigation, Pagination]} navigation
            className="mySwiper" spaceBetween={10} loop={false} pagination={{ clickable: true }}>
            {upperSwiperProducts?.map(product => (
              <SwiperSlide key={product?.id}>
                <div className="flex flex-col md:flex-row items-center justify-center relative p-8">
                  <div className="w-full md:w-1/2 flex flex-col justify-center md:order-1 order-2 mt-4 md:mt-0">
                    <p className="text-2xl md:text-4xl font-bold text-customBlue text-center md:text-left truncate w-4/5">{product?.title}</p>
                    <div className="flex flex-col md:flex-row gap-4 mt-4 justify-center md:justify-start">
                      <Link to={`/category/all`} className="w-full md:w-auto">
                        <button className="rounded-xl text-white text-xs px-6 py-4 bg-customYellow w-full">Shop now</button>
                      </Link>
                      <Link to={`/product/${product?.id}`} className="w-full md:w-auto">
                        <button className="rounded-xl text-xs px-6 py-4 text-customBlue border border-customBlue w-full">View more</button>
                      </Link>
                    </div>
                  </div>
                  <div className="relative order-1 md:order-2">
                    <img src={product?.image} alt={product?.title} className="h-80 sm:h-80 md:h-80 mx-auto w-72" />
                    <div className="bg-customYellow text-white text-center font-semibold p-4 sm:p-6 md:p-8 rounded-full w-20 h-20 sm:w-20 sm:h-20 md:w-28 md:h-28 absolute top-1/2 right-0 transform -translate-y-1/2">
                      only ${product?.price}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>
    </>
  )
}

export default Slider;