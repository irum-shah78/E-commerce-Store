import { useState } from 'react';

const useDropdown = (initialState: boolean = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return { isOpen, toggleDropdown };
};

export default useDropdown;
