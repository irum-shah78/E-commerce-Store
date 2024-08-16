import boxTick from "../../assets/icons/box-tick.svg";
import crown from "../../assets/icons/crown.svg";
import shield from "../../assets/icons/security.svg";
import reviewOne from "../../assets/images/review-1.svg";
import reviewTwo from "../../assets/images/review-2.svg";
import reviewThree from "../../assets/images/review-3.svg";
import brandOne from "../../assets/images/brand-1.svg";
import brandTwo from "../../assets/images/brand-2.svg";
import brandThree from "../../assets/images/brand-3.svg";
import brandFour from "../../assets/images/brand-4.svg";
import brandFive from "../../assets/images/brand-5.svg";
import { circleStyles } from "src/constants/circle";

const Brands = () => {
  return (
    <>
      <div className="md:px-8 lg:px-27">
        {/* FEATURES SECTION */}
        <section className="mt-12">
          <div className="flex flex-col lg:flex-row justify-around bg-sizeColor lg:rounded-2xl p-10 gap-4 lg:gap-0">
            {[
              { img: boxTick, title: "Free delivery", description: "on order above $50,00" },
              { img: crown, title: "Best quality", description: "best quality in low price" },
              { img: shield, title: "1 year warranty", description: "Available warranty" }
            ].map((item, index) => (
              <div key={index} className="flex justify-around items-center gap-4">
                <img src={item.img} alt={item.title} />
                <div>
                  <p className="font-semibold text-lg text-customBlue">{item.title}</p>
                  <p className="text-customBlue">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      <div className="px-4 md:px-8 lg:px-27">
        {/* REVIEWS SECTION */}
        <section className="mt-14 p-2">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-2">
            {[
              { img: reviewOne, name: "Savannah Nguyen", review: "Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque." },
              { img: reviewTwo, name: "Esther Howard", review: "Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque." },
              { img: reviewThree, name: "Savannah Nguyen", review: "Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque." }
            ].map((item, index) => (
              <div key={index} className="rounded-2xl border border-productCardBorder h-60 w-full">
                <div className="flex justify-around items-center mt-4">
                  <div className="rounded-full p-2 border-dashed border-2 border-customYellow">
                    <img className="rounded-full" src={item.img} alt="review" />
                  </div>
                  <div>
                    <p className="font-semibold text-customBlue">{item.name}</p>
                  </div>
                </div>
                <div className="bg-sizeColor mx-2 rounded-xl text-center mt-6 lg:text-base text-sm">
                  <p className="text-customBlue">{item.review}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-10 items-center">
            {circleStyles.map((style, index) => (
              <div
                key={index}
                className={`rounded-full w-4 h-4 ${style.bgColor} ${style.borderColor} cursor-pointer`}
              ></div>
            ))}
          </div>
        </section>

      </div>

      <div className="md:px-8 lg:px-27">
        {/* BRANDS SECTION */}
        <section className="mt-12">
          <div className="flex flex-wrap justify-between bg-sizeColor py-10 gap-4 lg:gap-0">
            {[
              { src: brandOne, alt: "brand-one" },
              { src: brandTwo, alt: "brand-two" },
              { src: brandThree, alt: "brand-three" },
              { src: brandFour, alt: "brand-four" },
              { src: brandFive, alt: "brand-five" }
            ].map((brand, index) => (
              <div key={index} className="flex justify-center w-full sm:w-1/2 lg:w-auto sm:mt-4">
                <img src={brand.src} alt={brand.alt} className="h-10 w-52" />
              </div>
            ))}
          </div>
        </section>

      </div>
    </>
  )
}

export default Brands;