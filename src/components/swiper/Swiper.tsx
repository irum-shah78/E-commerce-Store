import leftArrow from "../../assets/icons/arrow-left.svg";
import rightArrow from "../../assets/icons/arrow-right.svg";
import useHome from "../../hooks/useHome";
const Swiper = () => {
  const { lowerSwiperProducts, swapLowerItems, } = useHome();
  return (
    <>
      <div className="px-4 md:px-8 lg:px-27 py-4">
        <section>
          <div className="flex flex-col items-center mt-14 lg:flex-row lg:justify-center gap-4">
            {lowerSwiperProducts?.map((product, index) => (
              <div key={product?.id} className="relative flex items-center justify-around rounded-xl gap-3 w-full lg:w-96 h-36 border border-cardBorderColor mb-4">
                {index === 0 && (
                  <div className="absolute rounded-full w-8 h-8 text-center p-1 cursor-pointer bg-customArrowBg left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-0 lg:left-[-40px] lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:translate-x-0"
                    onClick={() => swapLowerItems('left')}>
                    <img src={leftArrow} alt="left-arrow" className="w-6 h-6" />
                  </div>
                )}
                <img className="object-cover w-32 h-24 ms-2" src={product?.image} alt={product?.title} />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <p className="font-bold text-lg text-customBlue truncate lg:w-40 w-32">{product?.title}</p>
                  <p className="text-sm mt-2 text-customBlue">${product?.price}</p>
                </div>
                {index === lowerSwiperProducts?.length - 1 && (
                  <div className="absolute rounded-full w-8 h-8 text-center p-1 cursor-pointer bg-customArrowBg left-1/2 transform -translate-x-1/2 translate-y-1/2 bottom-0 lg:left-auto lg:right-[-60px] lg:top-1/2 lg:transform lg:-translate-y-1/2"
                    onClick={() => swapLowerItems('right')}>
                    <img src={rightArrow} alt="right-arrow" className="w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}

export default Swiper;