import sale from "../../assets/images/hero-sale.svg";

const Sale = () => {
  return (
    <div className="md:px-8 lg:px-27">
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
    </div>
  )
}

export default Sale;