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

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="px-32 py-4 p-6">
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
                <div className="rounded-full w-4 h-4 ellipse-1"></div>
                <div className="rounded-full w-4 h-4 ellipse-2"></div>
                <div className="rounded-full w-4 h-4 ellipse-3"></div>
              </div>
            </div>

            <div className="relative">
              <img alt="hero-pic" src={canon} className="h-80 w-80 object-cover" />
              <div className="canon-price text-white text-center font-semibold p-8 rounded-full w-28 h-28 absolute inset-y-44 right-0">only $89</div>
            </div>
          </div>

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
        </section>

        <div className="flex justify-center gap-2 mt-10 items-center">
          <div className="rounded-full w-4 h-4 ellipse-1"></div>
          <div className="rounded-full w-4 h-4 ellipse-2"></div>
          <div className="rounded-full w-4 h-4 ellipse-3"></div>
        </div>

        <div>
          <img src={sale} alt="sale" className="mb-12 realtive"/>
          <div className="absolute">
          <button className="rounded-xl text-white text-xs px-6 py-4 shop-now-btn">Shop now</button>
          <p>Sale upto 50% off</p>
          <p>12 inch hd display</p>
          <button className="rounded-xl text-white text-xs px-6 py-4 shop-now-btn">Shop now</button>
          </div>
        </div>

      </div>

      <Footer />
    </>
  )
}

export default HomePage;