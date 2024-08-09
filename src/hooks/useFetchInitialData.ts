import { useState, useEffect } from "react";
import { fetchProductById } from "../helper/api";

const useInitialHomePageData = () => {
  const [upperSwiperProducts, setHeroProducts] = useState<any[]>([]);
  const [lowerSwiperProducts, setFeaturedProducts] = useState<any[]>([]);
  const [categoriesProducts, setCategoryProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const upperProductIds = [4, 5, 13, 17];
        const upperProductsPromises = upperProductIds.map(id => fetchProductById(id));
        const upperProducts = await Promise.all(upperProductsPromises);
        setHeroProducts(upperProducts);

        const lowerProductIds = [11, 8, 15];
        const lowerProductsPromises = lowerProductIds.map(id => fetchProductById(id));
        const lowerProducts = await Promise.all(lowerProductsPromises);
        setFeaturedProducts(lowerProducts);

        const categoryProductIds = [3, 5, 20];
        const categoryProductsPromises = categoryProductIds.map(id => fetchProductById(id));
        const categoryProduct = await Promise.all(categoryProductsPromises);
        setCategoryProducts(categoryProduct);
      } catch (error) {
        console.error("Error fetching initial data:", error);
      }
    };

    fetchInitialData();
  }, []);

  return { upperSwiperProducts, setHeroProducts, lowerSwiperProducts, setFeaturedProducts, categoriesProducts };
};

export default useInitialHomePageData;