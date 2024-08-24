import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import ProductCard from '../../components/productCard/ProductCard';
import Loader from 'src/components/loader/Loader';
import useCategory from './useCategory';
import Sale from 'src/components/sale/Sale';
import { colors } from 'src/constants/colors';
import { sizes } from 'src/constants/sizes';
import { otherCategories } from 'src/constants/categories';

const CategoryPage: React.FC = () => {
  const { selectedCategories, allCategoriesChecked, handleCategoryChange, handleReset, categories, categoriesLoading, categoriesError, products = [], productsLoading, productsError } = useCategory();

  return (
    <>
      <Header />
      <div className="category-page px-4 py-4 md:px-6 lg:px-16 xl:px-24 md:py-6 mt-14">
        <section className="flex flex-col xl:flex-row lg:flex-row md:flex-col md:justify-between">
          <aside className="w-full xl:w-72 lg:w-64 md:w-full text-sm mb-6 md:mb-0">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold text-customBlue">Categories</h2>
              <button className="text-gray-500 hover:text-gray-700" onClick={handleReset}>Reset</button>
            </div>
            {categoriesLoading && <p className='text-center'><Loader /></p>}
            {categoriesError && <p className='text-center'>{categoriesError}</p>}
            <ul className="space-y-2">
              <li>
                <label className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" checked={allCategoriesChecked} onChange={() => handleCategoryChange('all')} className="h-5 w-5 accent-gray-700" />
                    <span className="text-gray-800">All Categories</span>
                  </div>
                  <span className="text-gray-500">20</span>
                </label>
              </li>
              {categories?.map((category) => (
                <li key={category}>
                  <label className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" checked={selectedCategories.includes(category)}
                        onChange={() => handleCategoryChange(category)} className="h-5 w-5 accent-gray-700" />
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
                    <input type="checkbox" className="h-5 w-5 accent-gray-700 rounded" />
                    <span className="text-gray-800">In stock</span>
                  </div>
                  <span className="text-gray-500">5</span>
                </label>
              </li>
              <li>
                <label className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" className="h-5 w-5 accent-gray-700 rounded" disabled />
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
              {otherCategories?.map((category, index) => (
                <li key={index}>
                  <label className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" className="h-5 w-5 accent-gray-700 rounded" />
                      <span className="text-gray-800">{category?.name}</span>
                    </div>
                    <span className="text-gray-500">{category?.quantity}</span>
                  </label>
                </li>
              ))}
            </ul>
            <hr className='mt-6 border-gray-300' />

            {/* Color */}
            <h2 className="font-semibold text-customBlue mt-4">Color</h2>
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-500 hover:text-gray-700">0 selected</p>
              <button className="text-gray-500 hover:text-gray-700">Reset</button>
            </div>
            <div className='flex gap-3'>
              {colors?.map((color, index) => (
                <div key={index} className={`rounded-full ${color} p-2`}></div>
              ))}
            </div>
            <hr className='mt-6 border-gray-300' />

            {/* Size */}
            <h2 className="font-semibold text-customBlue mt-4">Size</h2>
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-500 hover:text-gray-700">0 selected</p>
              <button className="text-gray-500 hover:text-gray-700">Reset</button>
            </div>
            <ul className="space-y-2 cursor-pointer">
              {sizes?.map((item, index) => (
                <li key={index}>
                  <label className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" className="h-5 w-5 accent-gray-700 rounded" />
                      <span className="text-gray-800">{item?.size}</span>
                    </div>
                    <span className="text-gray-500">{item?.quantity}</span>
                  </label>
                </li>
              ))}
            </ul>
            <hr className='mt-6 border-gray-300' />
          </aside>
          <main className="products flex-1 md:ml-3 flex flex-col items-center md:items-stretch md:mt-4">
            {productsLoading && <p className='text-center'><Loader /></p>}
            {productsError && <p className='text-center'>{productsError}</p>}
            <div className="product-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-6">
              {Array.isArray(products) && products.map((product) => (
                <ProductCard key={product?.id} product={product} />
              ))}
            </div>
          </main>
        </section>
      </div>
      <Sale />
      <Footer />
    </>
  );
};

export default CategoryPage;