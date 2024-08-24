import { numbers } from 'src/constants/sizes';
import cart from "../../assets/icons/cart.svg";
import eye from "../../assets/icons/eye.svg";
import vector from '../../../src/assets/icons/Vector.svg';
import useHome from "../../hooks/useHome";

const Category = () => {
  const { categoriesProducts } = useHome();
  return (
    <>
      <div className="px-4 md:px-8 lg:px-27">
        <section className="flex-col sm:flex-row justify-between mt-12 gap-6 md:flex">
          {categoriesProducts?.length > 0 && (
            <div className="rounded-2xl border border-productCardBorder w-full sm:w-3/4 mb-6 sm:mb-0 sm:mr-6 lg:p-1 md:hidden lg:block">
              <div className="flex flex-col sm:flex-row justify-around items-center h-full">
                <img className="object-cover lg:h-auto w-auto sm:w-48 p-3" src={categoriesProducts[0].image} alt={categoriesProducts[0].title} />
                <div className="p-4 leading-normal">
                  <p className="font-semibold text-lg text-customBlue truncate w-60">{categoriesProducts[0].title}</p>
                  <p className="font-semibold text-gray-600 mt-4">${categoriesProducts[0].price}</p>
                  <div className="flex gap-2 mt-4">
                    {[...Array(5)].map((_, index) => (<img key={index} src={vector} alt="star" />))}
                  </div>
                  <div className="flex mt-6 gap-2">
                    {numbers?.map((num, index) => (<button key={index} className="rounded-full h-14 w-14 font-semibold bg-sizeColor text-customYellow">{num}</button>))}
                  </div>
                  <div className="flex justify-between items-center mt-7">
                    <div className="flex justify-between gap-4 rounded-2xl px-5 py-3 cursor-pointer bg-iconLightBlue">
                      <p className="text-black font-semibold">Add to cart</p>
                      <div className="bg-customYellow h-6 w-6 rounded-full p-0.5 text-center">
                        <button><img alt="cart" src={cart} className="w-6 h-6" /></button>
                      </div>
                    </div>
                    <div className="rounded-2xl bg-iconLightBlue px-5 py-3 ml-2 text-center cursor-pointer">
                      <img src={eye} alt="eye" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="flex flex-col items-center sm:items-start gap-4">
            {categoriesProducts?.slice(1).map((product) => (
              <div key={product?.id} className="rounded-2xl border border-productCardBorder h-auto w-full mb-4 sm:mb-0">
                <div className="flex flex-col sm:flex-row justify-around items-center p-4 gap-2">
                  <img className="object-cover mt-2 w-20 h-20 sm:w-32 sm:h-32" src={product?.image} alt={product?.title} />
                  <div className="p-4 leading-normal">
                    <p className="font-semibold text-sm text-customBlue truncate w-40">{product?.title}</p>
                    <p className="font-semibold text-gray-600 mt-2">${product?.price}</p>
                    <div className="flex gap-2 mt-2">
                      {[...Array(5)].map((_, index) => (<img key={index} src={vector} alt="star" />))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}

export default Category;