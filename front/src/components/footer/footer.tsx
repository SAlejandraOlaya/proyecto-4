"use client";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black shadow dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-2 md:p-4">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/" className="flex items-center mb-2 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src={`/logo.jpg`} className="h-10" alt="Flowbite Logo" />
          </Link>
          <ul className="flex flex-wrap items-center mb-2 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
            <li>
              <Link href="/about" className="hover:underline me-2 md:me-4">Sobre nosotros</Link>
            </li>
            <li>
              <Link href="#" className="hover:underline me-2 md:me-4">Política de privacidad</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">Contacto</Link>
            </li>
          </ul>
        </div>
        <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />
        <span className="block text-xs text-gray-500 sm:text-center dark:text-gray-400">© 2024 BlackTech. Todos los derechos reservados.</span>
      </div>
    </footer>
  );
};

export default Footer;