import { useState, useEffect } from 'react';

const useSelectedCategories = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(() => {
    const savedCategories = localStorage.getItem('selectedCategories');
    return savedCategories ? JSON.parse(savedCategories) : [];
  });

  const [allCategoriesChecked, setAllCategoriesChecked] = useState<boolean>(() => {
    const savedAllCategoriesChecked = localStorage.getItem('allCategoriesChecked');
    return savedAllCategoriesChecked ? JSON.parse(savedAllCategoriesChecked) : false;
  });

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

  return {
    selectedCategories,
    allCategoriesChecked,
    handleCategoryChange,
    handleReset
  };
};

export default useSelectedCategories;