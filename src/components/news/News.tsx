import blogOne from "../../assets/images/bolg-1.svg";
import blogTwo from "../../assets/images/blog-2.svg";

const News = () => {
  const circleStyles = [
    { bgColor: "bg-customYellow", borderColor: "" },
    { bgColor: "", borderColor: "border border-ellipseBorderColor" },
    { bgColor: "", borderColor: "border border-ellipseBorderColor" },
  ];
  return (
    <div className="px-4 md:px-8 lg:px-27">
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
          {circleStyles.map((style, index) => (
            <div
              key={index}
              className={`rounded-full w-4 h-4 ${style.bgColor} ${style.borderColor} cursor-pointer`}
            ></div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default News;