import { useState } from 'react';

const useMenu = (initialState: boolean = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return { isOpen, toggleMenu };
};

export default useMenu;
