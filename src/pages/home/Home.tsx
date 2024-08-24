import React from 'react';
import Header from "../../components/header/Header";
import ProductCard from '../../components/productCard/ProductCard';
import Sale from '../../components/sale/Sale';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import useHome from "../../hooks/useHome";
import Brands from "src/components/brands/Brands";
import News from "src/components/news/News";
import Footer from "src/components/footer/Footer";
import Loader from 'src/components/loader/Loader';
import Slider from 'src/components/slider/Slider';
import Swiper from 'src/components/swiper/Swiper';
import Category from 'src/components/category/Category';

const HomePage: React.FC = () => {
  const { categories, allProducts, selectedCategory, setSelectedCategory, categoryProducts, loading, error } = useHome();

  if (loading) return <p><Loader /></p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Header />
      <div className="px-4 md:px-8 lg:px-27 py-4">
        <Slider />
        <Swiper />
        {/* Categories Section */}
        <section className="mt-16">
          <div className="flex flex-col sm:flex-row sm:justify-between items-center">
            <p className="font-bold text-2xl text-customBlue mb-4 sm:mb-0">Popular products</p>
            <div className="flex flex-row lg:flex-row sm:flex-row  md:flex-row items-center gap-4 flex-wrap sm:justify-end sm:ml-auto">
              <button className={`rounded-2xl px-6 py-2 font-semibold text-sm border ${selectedCategory === "all" ? "bg-customBlue text-white" : "border-customBlue text-categoryBtn hover:text-white hover:bg-customBlue"}`} onClick={() => setSelectedCategory("all")}>
                All</button>
              {categories?.map((category) => (
                <button key={category} className={`rounded-2xl px-6 py-2 font-semibold text-sm border ${selectedCategory === category ? "bg-customBlue text-white" : "border-customBlue text-categoryBtn hover:text-white hover:bg-customBlue"}`}
                  onClick={() => setSelectedCategory(category)}>{category}</button>
              ))}
            </div>
          </div>
        </section>
        <section className="mt-10 px-2 sm:px-6 lg:px-1">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-4 lg:gap-4 place-items-center">
            {(selectedCategory === 'all' ? allProducts : categoryProducts).map(product => (< ProductCard key={product?.id} product={product} />))}
          </div>
        </section>
        <Sale />
        <Category />
        <Brands />
        <News />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;