import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import ProductCard from '../../components/productCard/ProductCard';
import Loader from 'src/components/loader/Loader';
import useSelectedCategories from '../../hooks/useSelectedCategories';
import useCategoryData from '../../hooks/useCategoryData';
import Sale from 'src/components/sale/Sale';

const CategoryPage: React.FC = () => {
  const {
    selectedCategories,
    allCategoriesChecked,
    handleCategoryChange,
    handleReset
  } = useSelectedCategories();

  const {
    categories,
    categoriesLoading,
    categoriesError,
    products = [],
    productsLoading,
    productsError
  } = useCategoryData(selectedCategories, allCategoriesChecked);

  const colors = [
    'bg-yellow-600',
    'bg-red-600',
    'bg-teal-950',
    'bg-gray-500',
    'bg-green-800',
    'bg-blue-700',
    'bg-purple-700',
    'bg-orange-600'
  ];

  const sizes = [
    { size: 'M', quantity: 5 },
    { size: 'S', quantity: 5 },
    { size: 'X', quantity: 5 },
    { size: 'XX', quantity: 5 },
  ];

  const otherCategories = [
    { name: 'Electronics', quantity: 5 },
    { name: 'Dresses', quantity: 5 },
    { name: 'Jewelry', quantity: 5 },
  ];
  return (
    <>
      <Header />
      <div className="category-page px-4 py-4 md:px-8 lg:px-32 md:py-6 mt-14">
        <section className="flex flex-col md:flex-row md:justify-between">
          <aside className="w-full md:w-64 text-sm mb-6 md:mb-0">
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
              {categories.map((category) => (
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
              {otherCategories.map((category, index) => (
                <li key={index}>
                  <label className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" className="h-5 w-5 accent-gray-700 rounded" />
                      <span className="text-gray-800">{category.name}</span>
                    </div>
                    <span className="text-gray-500">{category.quantity}</span>
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
            <div className='flex gap-4'>
              {colors.map((color, index) => (
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
              {sizes.map((item, index) => (
                <li key={index}>
                  <label className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" className="h-5 w-5 accent-gray-700 rounded" />
                      <span className="text-gray-800">{item.size}</span>
                    </div>
                    <span className="text-gray-500">{item.quantity}</span>
                  </label>
                </li>
              ))}
            </ul>
            <hr className='mt-6 border-gray-300' />
          </aside>
          <main className="products flex-1 md:ml-4 flex flex-col items-center md:items-stretch">
            {productsLoading && <p className='text-center'><Loader /></p>}
            {productsError && <p className='text-center'>{productsError}</p>}
            <div className="product-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array.isArray(products) && products.map((product) => (
                <ProductCard key={product.id} product={product} />
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