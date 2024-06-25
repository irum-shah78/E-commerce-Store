import React from "react"
import "../../custom.d.ts"
import "../../styles/HomePage.css"
import Header from "../../components/header/Header.tsx"
import Footer from "../../components/footer/Footer.tsx"
import canon from "../../assets/images/canon-camera.png"
import speaker from "../../assets/images/speaker.png"
import leftArrow from "../../assets/icons/arrow-left.svg"
import laptop from "../../assets/images/laptop.png"
import dslr from "../../assets/images/dslr.png"
import rightArrow from "../../assets/icons/arrow-right.svg"
import camera from "../../assets/images/camera.png"
import headphone from "../../assets/images/wireless-headphones.png"
import playGame from "../../assets/images/play-games.png"
import heart from "../../assets/icons/heart.png"
import cart from "../../assets/icons/shopping-cart.svg"
import eye from "../../assets/icons/eye.svg"
import vector from "../../assets/icons/Vector.svg"
import sale from "../../assets/images/sale.png"
import speakers from "../../assets/images/speakers.png"
import boxTick from "../../assets/icons/box-tick.svg"
import crown from "../../assets/icons/crown.svg"
import shield from "../../assets/icons/shield-security.svg"
import reviewOne from "../../assets/images/review-1.png"
import reviewTwo from "../../assets/images/review-2.png"
import reviewThree from "../../assets/images/review-3.png"
import brandOne from "../../assets/images/brand-1.png"
import brandTwo from "../../assets/images/brand-2.png"
import brandThree from "../../assets/images/brand-3.png"
import brandFour from "../../assets/images/brand-4.png"
import brandFive from "../../assets/images/brand-5.png"
import blogOne from "../../assets/images/blog-1.png"
import blogTwo from "../../assets/images/blog-2.png"

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="px-32 py-4 p-6">

        {/* HERO SECTION */}
        <section>
          <div className="flex items-center justify-around mt-4">
            <div>
              <p className="text-4xl font-bold">Canon</p>
              <p className="text-4xl font-bold mt-4">Camera</p>
              <div className="flex gap-4 mt-4">
                <button className="rounded-xl text-white text-xs px-6 py-4 shop-now-btn">Shop now</button>
                <button className="rounded-xl text-xs px-6 py-4 view-more-btn">View more</button>
              </div>

              <div className="flex justify-center gap-2 mt-8 items-center">
                <div className="rounded-full w-4 h-4 ellipse-1 cursor-pointer"></div>
                <div className="rounded-full w-4 h-4 ellipse-2 cursor-pointer"></div>
                <div className="rounded-full w-4 h-4 ellipse-3 cursor-pointer"></div>
              </div>
            </div>

            <div className="relative">
              <img alt="hero-pic" src={canon} className="h-80 w-80 object-cover" />
              <div className="canon-price text-white text-center font-semibold p-8 rounded-full w-28 h-28 absolute inset-y-44 right-0">only $89</div>
            </div>
          </div>
        </section>

        {/* PRODUCTS SECTION */}
        <section>
          <div className="flex justify-around items-center mt-6">
            <div className="flex items-center justify-around rounded-xl w-80 h-32 card relative">
              <div className="rounded-full w-8 h-8 text-center p-1 cursor-pointer arrow absolute -inset-x-4">
                <img src={leftArrow} alt="left-arrow" className="w-6 h-6" />
              </div>
              <img className="object-cover w-20 h-20" src={speaker} alt="speaker" />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <p className="font-bold text-lg">Speaker</p>
                <p className="text-sm mt-2">(6 items)</p>
              </div>
            </div>

            <div className="flex items-center justify-around rounded-xl w-80 h-32 card">
              <img className="object-cover w-24 h-24" src={laptop} alt="speaker" />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <p className="font-bold text-lg">Desktop & Laptop</p>
                <p className="text-sm mt-2">(6 items)</p>
              </div>
            </div>

            <div className="flex items-center justify-around rounded-xl w-80 h-32 card">
              <img className="object-cover w-20 h-20" src={dslr} alt="speaker" />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <p className="font-bold text-lg">DSLR Camera</p>
                <p className="text-sm mt-2">(6 items)</p>
              </div>
              <div className="relative">
                <div className="rounded-full w-8 h-8 text-center p-1 cursor-pointer arrow absolute -inset-y-3">
                  <img src={rightArrow} alt="left-arrow" className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* POPULAR PRODUCTS - HEADING*/}
        <section className="mt-16">
          <div className="flex justify-between items-center">
            <p className="font-bold text-2xl">Popular products</p>
            <div className="flex items-center gap-4">
              <button className="rounded-2xl px-6 py-2 font-semibold text-sm product-btn-1">Cameras</button>
              <button className="rounded-2xl px-6 py-2 font-semibold text-sm product-btn">Laptops</button>
              <button className="rounded-2xl px-6 py-2 font-semibold text-sm product-btn">Tablets</button>
              <button className="rounded-2xl px-6 py-2 font-semibold text-sm product-btn">Mouse</button>
            </div>
          </div>
        </section>

        {/* POPULAR PRODUCTS */}
        <section className="mt-10">
          <div className="flex items-center justify-between cursor-pointer">

            <div className="rounded-2xl w-64 h-64 product-card">
              <div className="flex items-stretch justify-center mt-6">
                <img className="w-36 h-30" src={camera} alt="camera" />
                <div className="rounded-full w-6 h-6 p-1 text-center cursor-pointer favorite-product"><img src={heart} alt="heart" /></div>
              </div>
              <div className="flex justify-between mt-7">
                <div className=" flex justify-between gap-4 rounded-xl ms-2 px-5 py-3 cursor-pointer add-to-cart">
                  <p className="text-black font-semibold">Add to cart</p>
                  <div className="cart-btn h-6 w-6 rounded-full p-0.5 text-center">
                    <button><img alt="cart" src={cart} className="w-4 h-4" /></button>
                  </div>
                </div>
                <div className="rounded-xl eye-icon px-4 py-2 mr-2 p-0.5 text-center cursor-pointer"><img src={eye} alt="eye" /></div>
              </div>
            </div>

            <div className="rounded-2xl w-64 h-64 product-card">
              <div className="flex items-stretch justify-center mt-6">
                <img className="w-36 h-30" src={headphone} alt="headphone" />
                <div className="rounded-full w-6 h-6 p-1 text-center cursor-pointer favorite-product"><img src={heart} alt="heart" /></div>
              </div>
              <div className="ms-2 mt-1">
                <p className="font-semibold text-sm">Wireless headphones</p>
                <p className="font-semibold text-gray-600 mt-2">$11,70</p>
                <div className="flex gap-2 mt-2">
                  <img src={vector} alt="star" />
                  <img src={vector} alt="star" />
                  <img src={vector} alt="star" />
                  <img src={vector} alt="star" />
                  <img src={vector} alt="star" />
                </div>
              </div>
            </div>

            <div className="rounded-2xl w-64 h-64 product-card">
              <div className="flex items-stretch justify-center mt-6">
                <img className="w-36 h-30" src={playGame} alt="playGame" />
                <div className="rounded-full w-6 h-6 p-1 text-center cursor-pointer favorite-product"><img src={heart} alt="heart" /></div>
              </div>
              <div className="ms-2 mt-1">
                <p className="font-semibold text-sm">Play game</p>
                <p className="font-semibold text-gray-600 mt-2">$11,70</p>
                <div className="flex gap-2 mt-2">
                  <img src={vector} alt="star" />
                  <img src={vector} alt="star" />
                  <img src={vector} alt="star" />
                  <img src={vector} alt="star" />
                  <img src={vector} alt="star" />
                </div>
              </div>
            </div>

            <div className="rounded-2xl w-64 h-64 product-card">
              <div className="flex items-stretch justify-center mt-6">
                <img className="w-36 h-30" src={laptop} alt="laptop" />
                <div className="rounded-full w-6 h-6 p-1 text-center cursor-pointer favorite-product"><img src={heart} alt="heart" /></div>
              </div>
              <div className="ms-2 mt-1">
                <p className="font-semibold text-sm">Tablet as a aptop</p>
                <p className="font-semibold text-gray-600 mt-2">$11,70</p>
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
        </section>

        <section className="mt-6">
          <div className="flex items-center justify-between cursor-pointer">

            <div className="rounded-2xl w-64 h-64 product-card">
              <div className="flex items-stretch justify-center mt-6">
                <img className="w-36 h-30" src={headphone} alt="headphone" />
                <div className="rounded-full w-6 h-6 p-1 text-center cursor-pointer favorite-product"><img src={heart} alt="heart" /></div>
              </div>
              <div className="ms-2 mt-1">
                <p className="font-semibold text-sm">Wireless headphones</p>
                <p className="font-semibold text-gray-600 mt-2">$11,70</p>
                <div className="flex gap-2 mt-2">
                  <img src={vector} alt="star" />
                  <img src={vector} alt="star" />
                  <img src={vector} alt="star" />
                  <img src={vector} alt="star" />
                  <img src={vector} alt="star" />
                </div>
              </div>
            </div>

            <div className="rounded-2xl w-64 h-64 product-card">
              <div className="flex items-stretch justify-center mt-6">
                <img className="w-36 h-30" src={playGame} alt="playGame" />
                <div className="rounded-full w-6 h-6 p-1 text-center cursor-pointer favorite-product"><img src={heart} alt="heart" /></div>
              </div>
              <div className="ms-2 mt-1">
                <p className="font-semibold text-sm">Play game</p>
                <p className="font-semibold text-gray-600 mt-2">$11,70</p>
                <div className="flex gap-2 mt-2">
                  <img src={vector} alt="star" />
                  <img src={vector} alt="star" />
                  <img src={vector} alt="star" />
                  <img src={vector} alt="star" />
                  <img src={vector} alt="star" />
                </div>
              </div>
            </div>

            <div className="rounded-2xl w-64 h-64 product-card">
              <div className="flex items-stretch justify-center mt-6">
                <img className="w-36 h-30" src={laptop} alt="laptop" />
                <div className="rounded-full w-6 h-6 p-1 text-center cursor-pointer favorite-product"><img src={heart} alt="heart" /></div>
              </div>
              <div className="ms-2 mt-1">
                <p className="font-semibold text-sm">Tablet as a aptop</p>
                <p className="font-semibold text-gray-600 mt-2">$11,70</p>
                <div className="flex gap-2 mt-2">
                  <img src={vector} alt="star" />
                  <img src={vector} alt="star" />
                  <img src={vector} alt="star" />
                  <img src={vector} alt="star" />
                  <img src={vector} alt="star" />
                </div>
              </div>
            </div>

            <div className="rounded-2xl w-64 h-64 product-card">
              <div className="flex items-stretch justify-center mt-6">
                <img className="w-36 h-30" src={playGame} alt="playGame" />
                <div className="rounded-full w-6 h-6 p-1 text-center cursor-pointer favorite-product"><img src={heart} alt="heart" /></div>
              </div>
              <div className="ms-2 mt-1">
                <p className="font-semibold text-sm">Play game</p>
                <p className="font-semibold text-gray-600 mt-2">$11,70</p>
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
          <div className="flex justify-center gap-2 mt-10 items-center">
            <div className="rounded-full w-4 h-4 ellipse-1 cursor-pointer"></div>
            <div className="rounded-full w-4 h-4 ellipse-2 cursor-pointer"></div>
            <div className="rounded-full w-4 h-4 ellipse-3 cursor-pointer"></div>
          </div>
        </section>

        {/* SALES SECTION */}
        <section>
          <div className="relative mt-12 mb-12">
            <img src={sale} alt="sale" className="object-cover w-full h-full" />
            <div className="absolute inset-y-0 right-0 flex flex-col items-center justify-center space-y-4 p-4 pr-28">
              <button className="rounded-2xl text-white text-xs px-4 py-2 shop-now-btn">New laptop</button>
              <p className="text-4xl font-bold" style={{ color: 'rgba(46, 143, 197, 1)' }}>Sale up to 50% off</p>
              <p className="text-white">12 inch hd display</p>
              <button className="rounded-2xl text-white text-xs px-4 py-2 shop-now-btn">Shop now</button>
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section className="flex justify-between mt-12 gap-6">
          <div className="rounded-2xl product-card w-3/4">
            <div className="flex justify-around items-center ">
              <img className="object-cover" src={speakers} alt="speakers" />
              <div className="p-4 leading-normal">
                <p className="font-semibold text-lg">JBL bar 2.1 deep bass</p>
                <p className="font-semibold text-gray-600 mt-4">$11,70</p>
                <div className="flex gap-2 mt-4">
                  <img src={vector} alt="star" />
                  <img src={vector} alt="star" />
                  <img src={vector} alt="star" />
                  <img src={vector} alt="star" />
                  <img src={vector} alt="star" />
                </div>
                <div className="flex mt-6 gap-2">
                  <button className="rounded-full h-14 w-14 font-semibold size-btn">57</button>
                  <button className="rounded-full h-14 w-14 font-semibold size-btn">11</button>
                  <button className="rounded-full h-14 w-14 font-semibold size-btn">33</button>
                  <button className="rounded-full h-14 w-14 font-semibold size-btn">59</button>
                </div>
                <div className="flex justify-between items-center mt-7">
                  <div className=" flex justify-between gap-4 rounded-2xl px-5 py-3 cursor-pointer add-to-cart">
                    <p className="text-black font-semibold">Add to cart</p>
                    <div className="cart-btn h-6 w-6 rounded-full p-0.5 text-center">
                      <button><img alt="cart" src={cart} className="w-6 h-6" /></button>
                    </div>
                  </div>
                  <div className="rounded-2xl eye-icon px-5 py-3 mr-2 text-center cursor-pointer"><img src={eye} alt="eye" /></div>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-2 items-center pb-6">
              <div className="rounded-full w-4 h-4 ellipse-1 cursor-pointer"></div>
              <div className="rounded-full w-4 h-4 ellipse-2 cursor-pointer"></div>
            </div>
          </div>

          <div>
            <div className="rounded-2xl product-card h-52 w-96">
              <div className="flex justify-around items-center pt-4 gap-4 ">
                <img className="object-cover" src={playGame} alt="play game" />
                <div className="p-4 leading-normal">
                  <p className="font-semibold text-sm">Play game</p>
                  <p className="font-semibold text-gray-600 mt-4">$11,70</p>
                  <div className="flex gap-2 mt-4">
                    <img src={vector} alt="star" />
                    <img src={vector} alt="star" />
                    <img src={vector} alt="star" />
                    <img src={vector} alt="star" />
                    <img src={vector} alt="star" />
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl product-card h-52 w-96 mt-2">
              <div className="flex justify-around items-center pt-4 gap-4  ">
                <img className="object-cover" src={laptop} alt="laptop" />
                <div className="p-4 leading-normal">
                  <p className="font-semibold text-sm">Laptop</p>
                  <p className="font-semibold text-gray-600 mt-4">$11,70</p>
                  <div className="flex gap-2 mt-4">
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
          <div className="flex justify-around features rounded-2xl p-10">
            <div className="flex justify-around items-center gap-4">
              <img src={boxTick} alt="box-tick" />
              <div>
                <p className="font-semibold text-lg">Free delivery</p>
                <p>on order above $50,00</p>
              </div>
            </div>

            <div className="flex justify-around items-center gap-4">
              <img src={crown} alt="box-tick" />
              <div>
                <p className="font-semibold text-lg">Best quality</p>
                <p>best quality in low price</p>
              </div>
            </div>

            <div className="flex justify-around items-center gap-4">
              <img src={shield} alt="box-tick" />
              <div>
                <p className="font-semibold text-lg">1 year warranty</p>
                <p>Available warranty</p>
              </div>
            </div>
          </div>
        </section>

        {/* REVIEWS SECTION */}
        <section className="mt-14">
          <div className="flex justify-between items-center">
            <div className="rounded-2xl product-card h-52 w-96">
              <div className="flex justify-around items-center mt-4">
                <div className="rounded-full p-2 border-dashed border-2 review-pic">
                  <img className="rounded-full" src={reviewOne} alt="play game" />
                </div>
                <div>
                  <p className="font-semibold">Savannah Nguyen</p>
                </div>
              </div>
              <div className="review-text mx-2 rounded-xl text-center mt-6">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit voluptas ipsam repellendus veritatis </p>
              </div>
            </div>

            <div className="rounded-2xl product-card h-52 w-96">
              <div className="flex justify-around items-center mt-4">
                <div className="rounded-full p-2 border-dashed border-2 review-pic">
                  <img className="rounded-full" src={reviewTwo} alt="play game" />
                </div>
                <div>
                  <p className="font-semibold">Esther Howard</p>
                </div>
              </div>
              <div className="review-text mx-2 rounded-xl text-center mt-6">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit voluptas ipsam repellendus veritatis </p>
              </div>
            </div>

            <div className="rounded-2xl product-card h-52 w-96">
              <div className="flex justify-around items-center mt-4">
                <div className="rounded-full p-2 border-dashed border-2 review-pic">
                  <img className="rounded-full" src={reviewThree} alt="play game" />
                </div>
                <div>
                  <p className="font-semibold">Savannah Nguyen</p>
                </div>
              </div>
              <div className="review-text mx-2 rounded-xl text-center mt-6">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit voluptas ipsam repellendus veritatis </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-10 items-center">
            <div className="rounded-full w-4 h-4 ellipse-1 cursor-pointer"></div>
            <div className="rounded-full w-4 h-4 ellipse-2 cursor-pointer"></div>
            <div className="rounded-full w-4 h-4 ellipse-3 cursor-pointer"></div>
          </div>
        </section>

        {/* BRANDS SECTION */}
        <section className="mt-12">
          <div className="flex justify-between features py-10">
            <img src={brandOne} alt="box-tick" className="h-10 w-52" />
            <img src={brandTwo} alt="box-tick" className="h-10 w-52" />
            <img src={brandThree} alt="box-tick" className="h-10 w-52" />
            <img src={brandFour} alt="box-tick" className="h-10 w-52" />
            <img src={brandFive} alt="box-tick" className="h-10 w-52" />
          </div>
        </section>

        {/* LATEST NEWS SECTION */}
        <section className="mt-16">
          <div className="flex justify-between items-center">
            <p className="font-bold text-2xl">Latest news</p>
            <p>View all</p>
          </div>

          <div className="flex justify-between gap-6 mt-12">
            <div className="rounded-2xl p-8 product-card">
              <div className="flex justify-between items-center gap-6">
                <img className="object-cover" src={blogOne} alt="speakers" />
                <div className="leading-normal text-wrap gap-4">
                  <button className="news-btn p-2 rounded-3xl">20 Oct, 2021</button>
                  <p className="font-semibold text-2xl mt-4">Who avoids a pain that produces?</p>
                  <p className="text-sm mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sint voluptates quas aspernatur impedit dolorem quidem officiis non ad recusandae.</p>
                  <p className="text-sm mt-4">By spacing tech</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl p-8 product-card">
              <div className="flex justify-between items-center gap-6">
                <img className="object-cover" src={blogTwo} alt="speakers" />
                <div className="leading-normal text-wrap gap-4">
                  <button className="news-btn p-2 rounded-3xl">20 Oct, 2021</button>
                  <p className="font-semibold text-2xl mt-4">Who avoids a pain that produces?</p>
                  <p className="text-sm mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sint voluptates quas aspernatur impedit dolorem quidem officiis non ad recusandae.</p>
                  <p className="text-sm mt-4">By spacing tech</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-10 items-center">
            <div className="rounded-full w-4 h-4 ellipse-1 cursor-pointer"></div>
            <div className="rounded-full w-4 h-4 ellipse-2 cursor-pointer"></div>
            <div className="rounded-full w-4 h-4 ellipse-3 cursor-pointer"></div>
            <div className="rounded-full w-4 h-4 ellipse-3 cursor-pointer"></div>
            <div className="rounded-full w-4 h-4 ellipse-3 cursor-pointer"></div>
          </div>
        </section>

      </div>

      <Footer />
    </>
  )
}

export default HomePage;