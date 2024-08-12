import { useState } from 'react';

const useSelectedCategories = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [allCategoriesChecked, setAllCategoriesChecked] = useState<boolean>(false);

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

  return {
    selectedCategories,
    allCategoriesChecked,
    handleCategoryChange,
    handleReset
  };
};

export default useSelectedCategories;