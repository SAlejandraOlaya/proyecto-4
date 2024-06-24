'use client';

import React, { useState } from 'react';

const MyDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="text-white hover:text-gray-300 font-medium focus:outline-none"
      >
        Categorías
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-black ring-1 ring-white ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <a
              href="#"
              className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
              role="menuitem"
            >
              Laptops
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
              role="menuitem"
            >
              Smartphones
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
              role="menuitem"
            >
              Tablets
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
              role="menuitem"
            >
              Cámaras
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
              role="menuitem"
            >
              Accesorios
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
              role="menuitem"
            >
              Audífonos
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
              role="menuitem"
            >
              Monitores
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
              role="menuitem"
            >
              Impresoras
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyDropdown;