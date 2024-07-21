import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import ProductCard from '../../components/productCard/ProductCard';
import useFetchCategories from '../../hooks/useFetchCategories';
import useFetchProductsByCategory from '../../hooks/useFetchProductsByCategories';
import sale from "../../assets/images/hero-sale.svg";

const CategoryPage: React.FC = () => {
  const { categories, loading: categoriesLoading, error: categoriesError } = useFetchCategories();
  const [selectedCategories, setSelectedCategories] = useState<string[]>(() => {
    const savedCategories = localStorage.getItem('selectedCategories');
    return savedCategories ? JSON.parse(savedCategories) : [];
  });
  const [allCategoriesChecked, setAllCategoriesChecked] = useState<boolean>(() => {
    const savedAllCategoriesChecked = localStorage.getItem('allCategoriesChecked');
    return savedAllCategoriesChecked ? JSON.parse(savedAllCategoriesChecked) : false;
  });

  const { products, loading: productsLoading, error: productsError } = useFetchProductsByCategory(
    allCategoriesChecked ? 'all' : selectedCategories.join(',')
  );

  useEffect(() => {
    localStorage.setItem('selectedCategories', JSON.stringify(selectedCategories));
    localStorage.setItem('allCategoriesChecked', JSON.stringify(allCategoriesChecked));
  }, [selectedCategories, allCategoriesChecked]);

  const handleCategoryChange = (category: string) => {
    if (category === 'all') {
      setAllCategoriesChecked(!allCategoriesChecked);
      setSelectedCategories([]);
    } else {
      setAllCategoriesChecked(false);
      if (selectedCategories.includes(category)) {
        setSelectedCategories(selectedCategories.filter(cat => cat !== category));
      } else {
        setSelectedCategories([...selectedCategories, category]);
      }
    }
  };

  const handleReset = () => {
    setSelectedCategories([]);
    setAllCategoriesChecked(false);
  };

  return (
    <>
      <Header />
      <div className="category-page px-4 py-4 md:px-8 lg:px-32 md:py-6 mt-14">
        <section className="flex flex-col md:flex-row md:justify-between">
          <aside className="w-full md:w-64 text-sm mb-6 md:mb-0">
            {/* Categories */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold text-customBlue">Categories</h2>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={handleReset}>Reset</button>
            </div>
            {categoriesLoading && <p className='text-center'>Loading categories...</p>}
            {categoriesError && <p className='text-center'>{categoriesError}</p>}
            <ul className="space-y-2">
              <li>
                <label className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={allCategoriesChecked}
                      onChange={() => handleCategoryChange('all')}
                      className="h-5 w-5 accent-gray-700"
                    />
                    <span className="text-gray-800">All Categories</span>
                  </div>
                  <span className="text-gray-500">20</span>
                </label>
              </li>
              {categories.map((category) => (
                <li key={category}>
                  <label className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCategoryChange(category)}
                        className="h-5 w-5 accent-gray-700"
                      />
                      <span className="text-gray-800">{category}</span>
                    </div>
                    <span className="text-gray-500">5</span>
                  </label>
                </li>
              ))}
            </ul>
            <hr className='mt-6 border-gray-300' />
            {/* </aside> */}

            {/* Availability */}
            <h2 className="font-semibold text-customBlue mt-4">Availability</h2>
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-500 hover:text-gray-700">0 selected</p>
              <button className="text-gray-500 hover:text-gray-700">Reset</button>
            </div>
            <ul className="space-y-2 cursor-pointer">
              <li>
                <label className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="h-5 w-5 accent-gray-700 rounded"
                    />
                    <span className="text-gray-800">In stock</span>
                  </div>
                  <span className="text-gray-500">5</span>
                </label>
              </li>
              <li>
                <label className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="h-5 w-5 accent-gray-700 rounded" disabled />
                    <span className="text-gray-300">Out of stock</span>
                  </div>
                  <span className="text-gray-300">0</span>
                </label>
              </li>
            </ul>
            <hr className='mt-6 border-gray-300' />

            {/* Product Type */}
            <h2 className="font-semibold text-customBlue mt-4">Product type</h2>
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-500 hover:text-gray-700">0 selected</p>
              <button className="text-gray-500 hover:text-gray-700">Reset</button>
            </div>
            <ul className="space-y-2 cursor-pointer">
              <li>
                <label className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" className="h-5 w-5 accent-gray-700 rounded" />
                    <span className="text-gray-800">Electronics</span>
                  </div>
                  <span className="text-gray-500">5</span>
                </label>
              </li>
              <li>
                <label className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" className="h-5 w-5 accent-gray-700 rounded" />
                    <span className="text-gray-800">Dresses</span>
                  </div>
                  <span className="text-gray-500">5</span>
                </label>
              </li>
              <li>
                <label className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" className="h-5 w-5 accent-gray-700 rounded" />
                    <span className="text-gray-800">Jewelry</span>
                  </div>
                  <span className="text-gray-500">5</span>
                </label>
              </li>
            </ul>
            <hr className='mt-6 border-gray-300' />

            {/* Color */}
            <h2 className="font-semibold text-customBlue mt-4">Color</h2>
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-500 hover:text-gray-700">0 selected</p>
              <button className="text-gray-500 hover:text-gray-700">Reset</button>
            </div>
            <div className='flex gap-4'>
              <div className='rounded-full bg-yellow-600 p-2'></div>
              <div className='rounded-full bg-red-600 p-2'></div>
              <div className='rounded-full bg-teal-950 p-2'></div>
              <div className='rounded-full bg-gray-500 p-2'></div>
              <div className='rounded-full bg-green-800 p-2'></div>
              <div className='rounded-full bg-blue-700 p-2'></div>
              <div className='rounded-full bg-purple-700 p-2'></div>
              <div className='rounded-full bg-orange-600 p-2'></div>
            </div>
            <hr className='mt-6 border-gray-300' />

            {/* Size */}
            <h2 className="font-semibold text-customBlue mt-4">Size</h2>
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-500 hover:text-gray-700">0 selected</p>
              <button className="text-gray-500 hover:text-gray-700">Reset</button>
            </div>
            <ul className="space-y-2 cursor-pointer">
              <li>
                <label className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" className="h-5 w-5 accent-gray-700 rounded" />
                    <span className="text-gray-800">M</span>
                  </div>
                  <span className="text-gray-500">5</span>
                </label>
              </li>
              <li>
                <label className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" className="h-5 w-5 accent-gray-700 rounded" />
                    <span className="text-gray-800">S</span>
                  </div>
                  <span className="text-gray-500">5</span>
                </label>
              </li>
              <li>
                <label className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" className="h-5 w-5 accent-gray-700 rounded" />
                    <span className="text-gray-800">X</span>
                  </div>
                  <span className="text-gray-500">5</span>
                </label>
              </li>
              <li>
                <label className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" className="h-5 w-5 accent-gray-700 rounded" />
                    <span className="text-gray-800">XX</span>
                  </div>
                  <span className="text-gray-500">5</span>
                </label>
              </li>
            </ul>
            <hr className='mt-6 border-gray-300' />
          </aside>

          {/* <main className="products flex-1 md:ml-4 flex flex-col items-center md:items-stretch">
            {loading && <p className='text-center'>Loading...</p>}
            {error && <p className='text-center'>{error}</p>}
            <div className="product-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </main> */}
          <main className="products flex-1 md:ml-4 flex flex-col items-center md:items-stretch">
            {productsLoading && <p className='text-center'>Loading products...</p>}
            {productsError && <p className='text-center'>{productsError}</p>}
            <div className="product-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </main>
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
      </div>
      <Footer />
    </>
  );
};

export default CategoryPage;
