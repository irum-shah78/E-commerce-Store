import React, { useState } from "react";
import "../../custom.d.ts";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import leftArrow from "../../assets/icons/arrow-left.svg";
import rightArrow from "../../assets/icons/arrow-right.svg";
import cart from "../../assets/icons/cart.svg";
import eye from "../../assets/icons/eye.svg";
import vector from "../../assets/icons/Vector.svg";
import ProductCard from "../../components/productCard/ProductCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import useFetchCategories from '../../hooks/useFetchCategories';
import useFetchProducts from '../../hooks/useFetchProducts';
import useFetchProductsByCategory from '../../hooks/useFetchProductsByCategories';
import { Link } from "react-router-dom";
import useInitialHomePageData from "../../hooks/useFetchInitialData";
import Sale from "src/components/sale/Sale";
import Brands from "src/components/brands/Brands";
import News from "src/components/news/News";

const HomePage: React.FC = () => {
  const { categories } = useFetchCategories();
  const { products: allProducts } = useFetchProducts();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const { products: categoryProducts } = useFetchProductsByCategory(selectedCategory);
  const { upperSwiperProducts, setHeroProducts, lowerSwiperProducts, setFeaturedProducts, categoriesProducts } = useInitialHomePageData();
  const [currentIndex, setCurrentIndex] = useState(0);

  const swapUpperItems = (direction: 'left' | 'right') => {
    let newItems = [...upperSwiperProducts];

    if (direction === 'left') {
      if (currentIndex === 0) return;

      const item = newItems.pop();
      if (item) {
        newItems.unshift(item);
        setCurrentIndex(currentIndex - 1);
      }
    } else if (direction === 'right') {
      if (currentIndex === newItems.length - 1) return;

      const item = newItems.shift();
      if (item) {
        newItems.push(item);
        setCurrentIndex(currentIndex + 1);
      }
    }
    setHeroProducts(newItems);
  };

  const swapLowerItems = (direction: 'left' | 'right') => {
    let newItems = [...lowerSwiperProducts];
    if (direction === 'left') {
      const item = newItems.pop();
      if (item) {
        newItems.unshift(item);
      }
    } else if (direction === 'right') {
      const item = newItems.shift();
      if (item) {
        newItems.push(item);
      }
    }
    setFeaturedProducts(newItems);
  };

  return (
    <>
      <Header />
      <div className="px-4 md:px-8 lg:px-27 py-4">
        {/* Hero Swiper */}
        <section className="lg:h-[395px]">
          <Swiper
            slidesPerView={"auto"}
            onClick={() => swapUpperItems('left')}
            modules={[Navigation, Pagination]}
            navigation
            className="mySwiper"
            spaceBetween={10}
            loop={false}
            pagination={{ clickable: true }}
          >
            {upperSwiperProducts.map(product => (
              <SwiperSlide key={product.id}>
                <div className="flex flex-col md:flex-row items-center justify-center relative p-8">
                  <div className="w-full md:w-1/2 flex flex-col justify-center md:order-1 order-2 mt-4 md:mt-0">
                    <p className="text-2xl md:text-4xl font-bold text-customBlue text-center md:text-left truncate w-4/5">{product.title}</p>
                    <div className="flex flex-col md:flex-row gap-4 mt-4 justify-center md:justify-start">
                      <Link to={`/category/all`} className="w-full md:w-auto">
                        <button className="rounded-xl text-white text-xs px-6 py-4 bg-customYellow w-full">Shop now</button>
                      </Link>
                      <Link to={`/product/${product.id}`} className="w-full md:w-auto">
                        <button className="rounded-xl text-xs px-6 py-4 text-customBlue border border-customBlue w-full">View more</button>
                      </Link>
                    </div>
                  </div>
                  <div className="relative order-1 md:order-2">
                    <img src={product.image} alt={product.title} className="h-80 sm:h-80 md:h-80 mx-auto w-72" />
                    <div className="bg-customYellow text-white text-center font-semibold p-4 sm:p-6 md:p-8 rounded-full w-20 h-20 sm:w-20 sm:h-20 md:w-28 md:h-28 absolute top-1/2 right-0 transform -translate-y-1/2">
                      only ${product.price}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* Featured Swiper */}
        <section>
          <div className="flex flex-col items-center mt-14 lg:flex-row lg:justify-center gap-4">
            {lowerSwiperProducts.map((product, index) => (
              <div key={product.id} className="relative flex items-center justify-around rounded-xl gap-3 w-full lg:w-96 h-36 border border-cardBorderColor mb-4">
                {index === 0 && (
                  <div className="absolute rounded-full w-8 h-8 text-center p-1 cursor-pointer bg-customArrowBg left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-0 lg:left-[-40px] lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:translate-x-0"
                    onClick={() => swapLowerItems('left')}>
                    <img src={leftArrow} alt="left-arrow" className="w-6 h-6" />
                  </div>
                )}
                <img className="object-cover w-32 h-24" src={product.image} alt={product.title} />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <p className="font-bold text-lg text-customBlue truncate lg:w-40 w-32">{product.title}</p>
                  <p className="text-sm mt-2 text-customBlue">${product.price}</p>
                </div>
                {index === lowerSwiperProducts.length - 1 && (
                  <div className="absolute rounded-full w-8 h-8 text-center p-1 cursor-pointer bg-customArrowBg left-1/2 transform -translate-x-1/2 translate-y-1/2 bottom-0 lg:left-auto lg:right-[-60px] lg:top-1/2 lg:transform lg:-translate-y-1/2"
                    onClick={() => swapLowerItems('right')}>
                    <img src={rightArrow} alt="right-arrow" className="w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Popular Products */}
        <section className="mt-16">
          <div className="flex flex-col sm:flex-row sm:justify-between items-center">
            <p className="font-bold text-2xl text-customBlue mb-4 sm:mb-0">Popular products</p>
            <div className="flex flex-col sm:flex-row items-center gap-4 flex-wrap sm:justify-end sm:ml-auto">
              <button
                className={`rounded-2xl px-6 py-2 font-semibold text-sm border ${selectedCategory === "all" ? "bg-customBlue text-white" : "border-customBlue text-categoryBtn hover:text-white hover:bg-customBlue"}`}
                onClick={() => setSelectedCategory("all")}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  className={`rounded-2xl px-6 py-2 font-semibold text-sm border ${selectedCategory === category ? "bg-customBlue text-white" : "border-customBlue text-categoryBtn hover:text-white hover:bg-customBlue"}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
        <section className="mt-10 px-2 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
            {(selectedCategory === 'all' ? allProducts : categoryProducts).map(product => (
              < ProductCard
                key={product.id} product={product}
              />
            ))}
          </div>
        </section>
      </div>
      {/* Sale Section */}
      <Sale />

      <div className="px-4 md:px-8 lg:px-27">
        {/* CATEGORY SECTION */}
        <section className="flex-col sm:flex-row justify-between mt-12 gap-6 hidden sm:flex">
          {categoriesProducts.length > 0 && (
            <div className="rounded-2xl border border-productCardBorder w-full sm:w-3/4 mb-6 sm:mb-0 sm:mr-6 hidden sm:inline-block">
              <div className="flex flex-col sm:flex-row justify-around items-center h-full">
                <img className="object-cover h-auto w-auto sm:w-48" src={categoriesProducts[0].image} alt={categoriesProducts[0].title} />
                <div className="p-4 leading-normal">
                  <p className="font-semibold text-lg text-customBlue">{categoriesProducts[0].title}</p>
                  <p className="font-semibold text-gray-600 mt-4">${categoriesProducts[0].price}</p>
                  <div className="flex gap-2 mt-4">
                    {[...Array(5)].map((_, index) => (
                      <img key={index} src={vector} alt="star" />
                    ))}
                  </div>
                  <div className="flex mt-6 gap-2">
                    <button className="rounded-full h-14 w-14 font-semibold bg-sizeColor text-customYellow">57</button>
                    <button className="rounded-full h-14 w-14 font-semibold bg-sizeColor text-customYellow">11</button>
                    <button className="rounded-full h-14 w-14 font-semibold bg-sizeColor text-customYellow">33</button>
                    <button className="rounded-full h-14 w-14 font-semibold bg-sizeColor text-customYellow">59</button>
                  </div>
                  <div className="flex justify-between items-center mt-7">
                    <div className="flex justify-between gap-4 rounded-2xl px-5 py-3 cursor-pointer bg-iconLightBlue">
                      <p className="text-black font-semibold">Add to cart</p>
                      <div className="bg-customYellow h-6 w-6 rounded-full p-0.5 text-center">
                        <button><img alt="cart" src={cart} className="w-6 h-6" /></button>
                      </div>
                    </div>
                    <div className="rounded-2xl bg-iconLightBlue px-5 py-3 ml-2 text-center cursor-pointer">
                      <img src={eye} alt="eye" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="flex flex-col items-center sm:items-start gap-4">
            {categoriesProducts.slice(1).map((product) => (
              <div key={product.id} className="rounded-2xl border border-productCardBorder h-48 w-full sm:w-96 mb-4 sm:mb-0">
                <div className="flex flex-col sm:flex-row justify-around items-center p-4 gap-2">
                  <img className="object-cover mt-2 w-20 h-20 sm:w-32 sm:h-32" src={product.image} alt={product.title} />
                  <div className="p-4 leading-normal">
                    <p className="font-semibold text-sm text-customBlue truncate w-40">{product.title}</p>
                    <p className="font-semibold text-gray-600 mt-2">${product.price}</p>
                    <div className="flex gap-2 mt-2">
                      {[...Array(5)].map((_, index) => (
                        <img key={index} src={vector} alt="star" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      {/* Brands */}
      <Brands />

      {/* News */}
      <News />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default HomePage;