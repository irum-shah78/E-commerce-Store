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

const Brands = () => {
  const circleStyles = [
    { bgColor: "bg-customYellow", borderColor: "" },
    { bgColor: "", borderColor: "border border-ellipseBorderColor" },
    { bgColor: "", borderColor: "border border-ellipseBorderColor" },
  ];
  return (
    <>
      <div className="md:px-8 lg:px-27">
        {/* FEATURES SECTION */}
        <section className="mt-12">
          <div className="flex flex-col lg:flex-row justify-around bg-sizeColor lg:rounded-2xl p-10 gap-4 lg:gap-0">
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
      </div>

      <div className="px-4 md:px-8 lg:px-27">
        {/* REVIEWS SECTION */}
        <section className="mt-14 p-2">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-2">
            <div className="rounded-2xl border border-productCardBorder h-60 w-full">
              <div className="flex justify-around items-center mt-4">
                <div className="rounded-full p-2 border-dashed border-2 border-customYellow">
                  <img className="rounded-full" src={reviewOne} alt="review" />
                </div>
                <div>
                  <p className="font-semibold text-customBlue">Savannah Nguyen</p>
                </div>
              </div>
              <div className="bg-sizeColor mx-2 rounded-xl text-center mt-6 lg:text-base text-sm">
                <p className="text-customBlue">Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.</p>
              </div>
            </div>

            <div className="rounded-2xl border border-productCardBorder h-60 w-full">
              <div className="flex justify-around items-center mt-4">
                <div className="rounded-full p-2 border-dashed border-2 border-customYellow">
                  <img className="rounded-full" src={reviewTwo} alt="review" />
                </div>
                <div>
                  <p className="font-semibold text-customBlue">Esther Howard</p>
                </div>
              </div>
              <div className="bg-sizeColor mx-2 rounded-xl text-center mt-6 lg:text-base text-sm">
                <p className="text-customBlue">orem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque</p>
              </div>
            </div>

            <div className="rounded-2xl border border-productCardBorder h-60 w-full">
              <div className="flex justify-around items-center mt-4">
                <div className="rounded-full p-2 border-dashed border-2 border-customYellow">
                  <img className="rounded-full" src={reviewThree} alt="review" />
                </div>
                <div>
                  <p className="font-semibold text-customBlue">Savannah Nguyen</p>
                </div>
              </div>
              <div className="bg-sizeColor mx-2 rounded-xl text-center mt-6 lg:text-base text-sm">
                <p className="text-customBlue">orem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque</p>
              </div>
            </div>
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
      </div>
    </>
  )
}

export default Brands;