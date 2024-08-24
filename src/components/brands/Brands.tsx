import { brands } from "src/constants/brands";
import { reviews } from "src/constants/reviews";
import { circleStyles } from "src/constants/circle";
import { brandss } from "src/constants/brands";

const Brands = () => {
  return (
    <>
      <div className="md:px-8 lg:px-27">
        {/* FEATURES SECTION */}
        <section className="mt-12 md:text-center">
          <div className="flex flex-col lg:flex-row justify-around bg-sizeColor lg:rounded-2xl p-10 gap-3 lg:gap-0">
            {brands?.map((item, index) => (
              <div key={index} className="flex justify-around items-center gap-4">
                <img src={item?.img} alt={item?.title} />
                <div>
                  <p className="font-semibold text-lg text-customBlue">{item?.title}</p>
                  <p className="text-customBlue">{item?.description}</p>
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
            {reviews?.map((item, index) => (
              <div key={index} className="rounded-2xl border border-productCardBorder h-auto w-full sm:p-1">
                <div className="flex justify-around items-center mt-4 sm:p-1">
                  <div className="rounded-full p-2 border-dashed border-2 border-customYellow">
                    <img className="rounded-full" src={item?.img} alt="review" />
                  </div>
                  <div>
                    <p className="font-semibold text-customBlue">{item?.name}</p>
                  </div>
                </div>
                <div className="bg-sizeColor mx-2 rounded-xl text-center mt-6 lg:text-base text-sm mb-4">
                  <p className="text-customBlue">{item?.review}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-10 items-center">
            {circleStyles?.map((style, index) => (
              <div
                key={index}
                className={`rounded-full w-4 h-4 ${style?.bgColor} ${style?.borderColor} cursor-pointer`}
              ></div>
            ))}
          </div>
        </section>

      </div>

      <div className="md:px-8 lg:px-27">
        {/* BRANDS SECTION */}
        <section className="mt-12">
          <div className="flex flex-wrap justify-between bg-sizeColor py-10 gap-4 lg:gap-0">
            {brandss?.map((brand, index) => (
              <div key={index} className="flex justify-center w-full sm:w-1/2 lg:w-full md:w-full sm:mt-4">
                <img src={brand?.src} alt={brand?.alt} className="h-10 w-52 md:w-48" />
              </div>
            ))}
          </div>
        </section>

      </div>
    </>
  )
}

export default Brands;