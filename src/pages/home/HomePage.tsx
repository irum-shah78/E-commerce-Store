import React, { useEffect, useState } from "react";
import "../../custom.d.ts";
import Header from "../../components/header/Header.tsx";
import Footer from "../../components/footer/Footer.tsx";
import sandisk from "../../assets/images/sandisk ssd.jpg";
import whitegold from "../../assets/images/white gold.jpg";
import cottonjacket from "../../assets/images/cotton jacket.jpg";
import danvouy from "../../assets/images/danvouy.jpg";
import gaming from "../../assets/images/gaming drive.jpg";
import leftArrow from "../../assets/icons/arrow-left.svg";
import piercedowl from "../../assets/images/pierced owl.jpg";
import rainjacket from "../../assets/images/rain jacket women.jpg";
import rightArrow from "../../assets/icons/arrow-right.svg";
import menscasual from "../../assets/images/mens casual.jpg"
import biylaclesen from "../../assets/images/biylaclesen.jpg";
import chainbracelet from "../../assets/images/chain bracelet.jpg";
import cart from "../../assets/icons/shopping-cart.svg";
import eye from "../../assets/icons/eye.svg";
import vector from "../../assets/icons/Vector.svg";
import sale from "../../assets/images/sale.png";
import boxTick from "../../assets/icons/box-tick.svg";
import crown from "../../assets/icons/crown.svg";
import shield from "../../assets/icons/shield-security.svg";
import reviewOne from "../../assets/images/review-1.png";
import reviewTwo from "../../assets/images/review-2.png";
import reviewThree from "../../assets/images/review-3.png";
import brandOne from "../../assets/images/brand-1.png";
import brandTwo from "../../assets/images/brand-2.png";
import brandThree from "../../assets/images/brand-3.png";
import brandFour from "../../assets/images/brand-4.png";
import brandFive from "../../assets/images/brand-5.png";
import blogOne from "../../assets/images/blog-1.png";
import blogTwo from "../../assets/images/blog-2.png";
import { fetchCategories, fetchProducts, fetchProductsByCategory } from "../../api.ts";
import ProductCard from "../../components/productCard/ProductCard.tsx";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';


interface Item {
  id: number;
  name: string;
  img: string;
  count: number;
}

const HomePage: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const categoriesData = await fetchCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    getCategories();
  }, []);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsData = selectedCategory === "all"
          ? await fetchProducts()
          : await fetchProductsByCategory(selectedCategory);
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getProducts();
  }, [selectedCategory]);


  const [items, setItems] = useState<Item[]>([
    { id: 1, name: 'Gaming Drive', img: gaming, count: 6 },
    { id: 2, name: 'Pierced Owl', img: piercedowl, count: 6 },
    { id: 3, name: 'Rain Jacket', img: rainjacket, count: 6 }
  ]);

  const swapItems = (direction: 'left' | 'right') => {
    let newItems = [...items];
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
    setItems(newItems);
  };

  return (
    <>
      <Header />
      <div className="px-4 md:px-8 lg:px-32 py-4">

        {/* HERO SECTION */}
        <section>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            className="mySwiper"
            spaceBetween={10}
            slidesPerView={"auto"}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <div className="flex flex-col md:flex-row items-center justify-center relative p-8">
                <div className="w-full md:w-1/2 flex flex-col justify-center md:order-1 order-2 mt-4 md:mt-0">
                  <p className="text-2xl md:text-4xl font-bold text-customBlue text-center md:text-left">SanDisk</p>
                  <p className="text-2xl md:text-4xl font-bold mt-4 text-customBlue text-center md:text-left">SSD</p>
                  <div className="flex gap-4 mt-4 justify-center md:justify-start">
                    <button className="rounded-xl text-white text-xs px-6 py-4 bg-customYellow">Shop now</button>
                    <button className="rounded-xl text-xs px-6 py-4 text-customBlue border border-customBlue">View more</button>
                  </div>
                </div>
                <div className="relative order-1 md:order-2">
                  <img src={sandisk} alt="SanDisk SSD" className="h-60 md:h-80 mx-auto" />
                  <div className="bg-customYellow text-white text-center font-semibold p-8 rounded-full w-28 h-28 absolute inset-y-44 right-0">only $109</div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col md:flex-row items-center justify-center relative p-8">
                <div className="w-full md:w-1/2 flex flex-col justify-center md:order-1 order-2 mt-4 md:mt-0">
                  <p className="text-2xl md:text-4xl font-bold text-customBlue text-center md:text-left">White</p>
                  <p className="text-2xl md:text-4xl font-bold mt-4 text-customBlue text-center md:text-left">Gold</p>
                  <div className="flex gap-4 mt-4 justify-center md:justify-start">
                    <button className="rounded-xl text-white text-xs px-6 py-4 bg-customYellow">Shop now</button>
                    <button className="rounded-xl text-xs px-6 py-4 text-customBlue border border-customBlue">View more</button>
                  </div>
                </div>
                <div className="relative order-1 md:order-2">
                  <img src={whitegold} alt="White Gold" className="h-60 md:h-80 mx-auto" />
                  <div className="bg-customYellow text-white text-center font-semibold p-8 rounded-full w-28 h-28 absolute inset-y-44 right-0">only $9.99</div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col md:flex-row items-center justify-center relative p-8">
                <div className="w-full md:w-1/2 flex flex-col justify-center md:order-1 order-2 mt-4 md:mt-0">
                  <p className="text-2xl md:text-4xl font-bold text-customBlue text-center md:text-left">Cotton</p>
                  <p className="text-2xl md:text-4xl font-bold mt-4 text-customBlue text-center md:text-left">Jacket</p>
                  <div className="flex gap-4 mt-4 justify-center md:justify-start">
                    <button className="rounded-xl text-white text-xs px-6 py-4 bg-customYellow">Shop now</button>
                    <button className="rounded-xl text-xs px-6 py-4 text-customBlue border border-customBlue">View more</button>
                  </div>
                </div>
                <div className="relative order-1 md:order-2">
                  <img src={cottonjacket} alt="Cotton Jacket" className="h-60 md:h-80 mx-auto" />
                  <div className="bg-customYellow text-white text-center font-semibold p-8 rounded-full w-28 h-28 absolute inset-y-44 right-0">only $55.99</div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col md:flex-row items-center justify-center relative p-8">
                <div className="w-full md:w-1/2 flex flex-col justify-center md:order-1 order-2 mt-4 md:mt-0">
                  <p className="text-2xl md:text-4xl font-bold text-customBlue text-center md:text-left">DANVOUY</p>
                  <p className="text-2xl md:text-4xl font-bold mt-4 text-customBlue text-center md:text-left">Womens</p>
                  <div className="flex gap-4 mt-4 justify-center md:justify-start">
                    <button className="rounded-xl text-white text-xs px-6 py-4 bg-customYellow">Shop now</button>
                    <button className="rounded-xl text-xs px-6 py-4 text-customBlue border border-customBlue">View more</button>
                  </div>
                </div>
                <div className="relative order-1 md:order-2">
                  <img src={danvouy} alt="DANVOUY Womens" className="h-60 md:h-80 mx-auto" />
                  <div className="bg-customYellow text-white text-center font-semibold p-8 rounded-full w-28 h-28 absolute inset-y-44 right-0">only $12.99</div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>

        {/* PRODUCTS SECTION */}
        <section>
          <div className="flex flex-col lg:flex-row justify-around items-center mt-14">
            <div className="relative">
              <div className="rounded-full w-8 h-8 text-center p-1 cursor-pointer bg-customArrowBg absolute left-0 top-1/2 transform -translate-y-1/2" onClick={() => swapItems('left')}>
                <img src={leftArrow} alt="left-arrow" className="w-6 h-6" />
              </div>
            </div>
            {items.map((item, index) => (
              <div key={item.id} className="flex items-center justify-around rounded-xl w-full lg:w-80 h-32 border border-cardBorderColor mb-4 lg:mb-0">
                <img className="object-cover w-20 h-20" src={item.img} alt={item.name} />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <p className="font-bold text-lg text-customBlue">{item.name}</p>
                  <p className="text-sm mt-2 text-customBlue">({item.count} items)</p>
                </div>
              </div>
            ))}
            <div className="relative">
              <div className="rounded-full w-8 h-8 text-center p-1 cursor-pointer bg-customArrowBg absolute right-0 top-1/2 transform -translate-y-1/2" onClick={() => swapItems('right')}>
                <img src={rightArrow} alt="right-arrow" className="w-6 h-6" />
              </div>
            </div>
          </div>
        </section>

        {/* POPULAR PRODUCTS */}
        <section className="mt-16">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="font-bold text-2xl text-customBlue mb-4 sm:mb-0">Popular products</p>
            <div className="flex items-center gap-4 flex-wrap">
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
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
              />
            ))}
          </div>
        </section>

        {/* SALES SECTION */}
        <section>
          <div className="relative mt-12 mb-12">
            <img src={sale} alt="sale" className="object-cover w-full h-96 sm:h-full" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:items-end sm:pr-28 space-y-4 text-center sm:text-right">
              <button className="rounded-3xl text-white text-xs sm:text-sm md:text-base lg:text-sm px-4 py-2 bg-customYellow">New laptop</button>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-saleColor">Sale up to 50% off</p>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white">12 inch HD display</p>
              <button className="rounded-3xl text-white text-xs sm:text-sm md:text-base lg:text-sm px-4 py-2 bg-customYellow">Shop now</button>
            </div>
          </div>
        </section>

        {/* CATEGORY SECTION */}
        <section className="flex flex-col sm:flex-row justify-between mt-12 gap-6">
          <div className="rounded-2xl border border-productCardBorder w-full sm:w-3/4 mb-6 sm:mb-0 sm:mr-6 hidden sm:inline-block">
            <div className="flex flex-col sm:flex-row justify-around items-center p-4 h-full">
              <img className="object-cover h-40 w-auto sm:w-48" src={menscasual} alt="speakers" />
              <div className="p-4 leading-normal">
                <p className="font-semibold text-lg text-customBlue">Mens Casual Premium</p>
                <p className="font-semibold text-lg text-customBlue"> Slim Fit T-Shirts</p>
                <p className="font-semibold text-gray-600 mt-4">$22.3</p>
                <div className="flex gap-2 mt-4">
                  <img src={vector} alt="star" />
                  <img src={vector} alt="star" />
                  <img src={vector} alt="star" />
                  <img src={vector} alt="star" />
                  <img src={vector} alt="star" />
                </div>
                <div className="flex mt-6 gap-2">
                  <button className="rounded-full h-10 w-10 sm:h-14 sm:w-14 font-semibold bg-sizeColor text-customYellow">57</button>
                  <button className="rounded-full h-10 w-10 sm:h-14 sm:w-14 font-semibold bg-sizeColor text-customYellow">11</button>
                  <button className="rounded-full h-10 w-10 sm:h-14 sm:w-14 font-semibold bg-sizeColor text-customYellow">33</button>
                  <button className="rounded-full h-10 w-10 sm:h-14 sm:w-14 font-semibold bg-sizeColor text-customYellow">59</button>
                </div>
                <div className="flex justify-between items-center mt-7">
                  <div className="flex justify-between gap-4 rounded-2xl px-5 py-3 cursor-pointer bg-iconLightBlue">
                    <p className="text-black font-semibold">Add to cart</p>
                    <div className="bg-customYellow h-6 w-6 rounded-full p-0.5 text-center">
                      <button><img alt="cart" src={cart} className="w-6 h-6" /></button>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-iconLightBlue px-5 py-3 ml-2 text-center cursor-pointer"><img src={eye} alt="eye" /></div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <div className="rounded-2xl border border-productCardBorder h-56 w-full sm:w-96 mb-4 sm:mb-0">
              <div className="flex flex-col sm:flex-row justify-around items-center p-4 gap-4 h-full">
                <img className="object-cover w-20 h-20 sm:w-32 sm:h-32" src={biylaclesen} alt="play game" />
                <div className="p-4 leading-normal">
                  <p className="font-semibold text-sm text-customBlue">BIYLACLESEN</p>
                  <p className="font-semibold text-gray-600 mt-2">$56.99</p>
                  <div className="flex gap-2 mt-2">
                    <img src={vector} alt="star" />
                    <img src={vector} alt="star" />
                    <img src={vector} alt="star" />
                    <img src={vector} alt="star" />
                    <img src={vector} alt="star" />
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-productCardBorder h-56 w-full sm:w-96 mt-2">
              <div className="flex flex-col sm:flex-row justify-around items-center p-4 gap-4 h-full">
                <img className="object-cover w-20 h-20 sm:w-32 sm:h-32" src={chainbracelet} alt="laptop" />
                <div className="p-4 leading-normal">
                  <p className="font-semibold text-sm text-customBlue">Chain Bracelet</p>
                  <p className="font-semibold text-gray-600 mt-2">$695</p>
                  <div className="flex gap-2 mt-2">
                    <img src={vector} alt="star" />
                    <img src={vector} alt="star" />
                    <img src={vector} alt="star" />
                    <img src={vector} alt="star" />
                    <img src={vector} alt="star" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section className="mt-12">
          <div className="flex flex-col lg:flex-row justify-around bg-sizeColor rounded-2xl p-10 gap-4 lg:gap-0">
            <div className="flex justify-around items-center gap-4">
              <img src={boxTick} alt="box-tick" />
              <div>
                <p className="font-semibold text-lg text-customBlue">Free delivery</p>
                <p className="text-customBlue">on order above $50,00</p>
              </div>
            </div>
            <div className="flex justify-around items-center gap-4">
              <img src={crown} alt="box-tick" />
              <div>
                <p className="font-semibold text-lg text-customBlue">Best quality</p>
                <p className="text-customBlue">best quality in low price</p>
              </div>
            </div>
            <div className="flex justify-around items-center gap-4">
              <img src={shield} alt="box-tick" />
              <div>
                <p className="font-semibold text-lg text-customBlue">1 year warranty</p>
                <p className="text-customBlue">Available warranty</p>
              </div>
            </div>
          </div>
        </section>

        {/* REVIEWS SECTION */}
        <section className="mt-14">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="rounded-2xl border border-productCardBorder h-52 w-full sm:w-96">
              <div className="flex justify-around items-center mt-4">
                <div className="rounded-full p-2 border-dashed border-2 border-customYellow">
                  <img className="rounded-full" src={reviewOne} alt="review" />
                </div>
                <div>
                  <p className="font-semibold text-customBlue">Savannah Nguyen</p>
                </div>
              </div>
              <div className="bg-sizeColor mx-2 rounded-xl text-center mt-6">
                <p className="text-customBlue">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit voluptas ipsam repellendus veritatis</p>
              </div>
            </div>

            <div className="rounded-2xl border border-productCardBorder h-52 w-full sm:w-96">
              <div className="flex justify-around items-center mt-4">
                <div className="rounded-full p-2 border-dashed border-2 border-customYellow">
                  <img className="rounded-full" src={reviewTwo} alt="review" />
                </div>
                <div>
                  <p className="font-semibold text-customBlue">Esther Howard</p>
                </div>
              </div>
              <div className="bg-sizeColor mx-2 rounded-xl text-center mt-6">
                <p className="text-customBlue">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit voluptas ipsam repellendus veritatis</p>
              </div>
            </div>

            <div className="rounded-2xl border border-productCardBorder h-52 w-full sm:w-96">
              <div className="flex justify-around items-center mt-4">
                <div className="rounded-full p-2 border-dashed border-2 border-customYellow">
                  <img className="rounded-full" src={reviewThree} alt="review" />
                </div>
                <div>
                  <p className="font-semibold text-customBlue">Savannah Nguyen</p>
                </div>
              </div>
              <div className="bg-sizeColor mx-2 rounded-xl text-center mt-6">
                <p className="text-customBlue">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit voluptas ipsam repellendus veritatis</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-10 items-center">
            <div className="rounded-full w-4 h-4 bg-customYellow cursor-pointer"></div>
            <div className="rounded-full w-4 h-4 border border-ellipseBorderColor cursor-pointer"></div>
            <div className="rounded-full w-4 h-4 border border-ellipseBorderColor cursor-pointer"></div>
          </div>
        </section>

        {/* BRANDS SECTION */}
        <section className="mt-12">
          <div className="flex flex-wrap justify-between bg-sizeColor py-10 gap-4 lg:gap-0">
            <div className="flex justify-center w-full sm:w-1/2 lg:w-auto sm:mt-4">
              <img src={brandOne} alt="brand-one" className="h-10 w-52" />
            </div>
            <div className="flex justify-center w-full sm:w-1/2 lg:w-auto sm:mt-4">
              <img src={brandTwo} alt="brand-two" className="h-10 w-52" />
            </div>
            <div className="flex justify-center w-full sm:w-1/2 lg:w-auto sm:mt-4">
              <img src={brandThree} alt="brand-three" className="h-10 w-52" />
            </div>
            <div className="flex justify-center w-full sm:w-1/2 lg:w-auto sm:mt-4">
              <img src={brandFour} alt="brand-four" className="h-10 w-52" />
            </div>
            <div className="flex justify-center w-full sm:w-1/2 lg:w-auto sm:mt-4">
              <img src={brandFive} alt="brand-five" className="h-10 w-52" />
            </div>
          </div>
        </section>

        {/* LATEST NEWS SECTION */}
        <section className="mt-16">
          <div className="flex justify-between items-center">
            <p className="font-bold text-2xl text-customBlue">Latest news</p>
            <p className="text-customBlue">View all</p>
          </div>

          <div className="flex flex-col lg:flex-row justify-between gap-6 mt-12">
            <div className="rounded-2xl p-8 border border-productCardBorder w-full lg:w-auto">
              <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                <img className="object-cover" src={blogOne} alt="blog" />
                <div className="leading-normal text-wrap gap-4">
                  <button className="p-2 rounded-3xl border border-newsBorder text-categoryBtn">20 Oct, 2021</button>
                  <p className="font-semibold text-2xl mt-4 text-customBlue">Who avoids a pain that produces?</p>
                  <p className="text-sm mt-4 text-customBlue">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sint voluptates quas aspernatur impedit dolorem quidem officiis non ad recusandae.</p>
                  <p className="text-sm mt-4 text-customBlue">By spacing tech</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl p-8 border border-productCardBorder w-full lg:w-auto">
              <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                <img className="object-cover" src={blogTwo} alt="blog" />
                <div className="leading-normal text-wrap gap-4">
                  <button className="p-2 rounded-3xl border border-newsBorder text-categoryBtn">20 Oct, 2021</button>
                  <p className="font-semibold text-2xl mt-4 text-customBlue">Who avoids a pain that produces?</p>
                  <p className="text-sm mt-4 text-customBlue">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sint voluptates quas aspernatur impedit dolorem quidem officiis non ad recusandae.</p>
                  <p className="text-sm mt-4 text-customBlue">By spacing tech</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-10 items-center mb-4">
            <div className="rounded-full w-4 h-4 bg-customYellow cursor-pointer"></div>
            <div className="rounded-full w-4 h-4 border border-ellipseBorderColor cursor-pointer"></div>
            <div className="rounded-full w-4 h-4 border border-ellipseBorderColor cursor-pointer"></div>
            <div className="rounded-full w-4 h-4 border border-ellipseBorderColor cursor-pointer"></div>
            <div className="rounded-full w-4 h-4 border border-ellipseBorderColor cursor-pointer"></div>
          </div>
        </section>
      </div >
      <Footer />
    </>
  );
};

export default HomePage;
