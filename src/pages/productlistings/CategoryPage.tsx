import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getProductsByCategory } from '../../store/ProductSlice.ts';
import { AppDispatch, RootState } from '../../store';
import Header from '../../components/header/Header.tsx';
import Footer from '../../components/footer/Footer.tsx';
import ProductCard from '../../components/productCard/ProductCard.tsx';
import sale from "../../assets/images/sale.png";

const CategoryPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { categories, products, loading, error } = useSelector((state: RootState) => state.products);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(() => {
    const savedCategories = localStorage.getItem('selectedCategories');
    return savedCategories ? JSON.parse(savedCategories) : [];
  });
  const [allCategoriesChecked, setAllCategoriesChecked] = useState<boolean>(() => {
    const savedAllCategoriesChecked = localStorage.getItem('allCategoriesChecked');
    return savedAllCategoriesChecked ? JSON.parse(savedAllCategoriesChecked) : false;
  });

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    if (allCategoriesChecked) {
      dispatch(getProductsByCategory('all'));
    } else if (selectedCategories.length > 0) {
      selectedCategories.forEach(category => {
        dispatch(getProductsByCategory(category));
      });
    }
  }, [selectedCategories, allCategoriesChecked, categories, dispatch]);

  useEffect(() => {
    localStorage.setItem('selectedCategories', JSON.stringify(selectedCategories));
    localStorage.setItem('allCategoriesChecked', JSON.stringify(allCategoriesChecked));
  }, [selectedCategories, allCategoriesChecked]);

  const handleCategoryChange = (category: string) => {
    if (category === 'all') {
      setAllCategoriesChecked(!allCategoriesChecked);
      setSelectedCategories([]);
      if (!allCategoriesChecked) {
        dispatch(getProductsByCategory('all'));
      }
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
    dispatch(getProductsByCategory('all'));
  };

  return (
    <>
      <Header />
      <div className="category-page px-32 py-4 p-6 mt-14">
        <section className="flex justify-between">
          <aside className="w-64 text-sm">
            {/* Categories */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold text-customBlue">Categories</h2>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={handleReset}>Reset</button>
            </div>
            {loading && <p className='text-center'>Loading...</p>}
            {error && <p className='text-center'>{error}</p>}
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
                    <span className="text-gray-800">Jewlery</span>
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

          <main className="products">
            {loading && <p className='text-center'>Loading...</p>}
            {error && <p className='text-center'>{error}</p>}
            <div className="product-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </main>
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
      </div>
      <Footer />
    </>
  );
};

export default CategoryPage;
