import React from 'react';
import Link from 'next/link';

const FeatureCards: React.FC = () => {
  return (
    <div className="bg-white py-12 mt-4 mb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-center mb-4">
              <svg
                className="h-12 w-12 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Financiamiento</h3>
            <p className="text-gray-700">Compra 0% de interés con Plan 0es3 de Davivienda.</p>
            <a href="#" className="text-blue-500 hover:text-blue-700 font-medium">
              Más información
            </a>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-center mb-4">
              <svg
                className="h-12 w-12 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Envíos Rápidos</h3>
            <p className="text-gray-700">Certificados a todo Colombia. Recibe hoy mismo en Bogotá*</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-center mb-4">
              <svg
                className="h-12 w-12 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Retiro en Tienda</h3>
            <p className="text-gray-700">Compra Online y retira tu pedido en tu tienda favorita en 4 horas*</p>
            <Link href="/product"
               className="text-blue-500 hover:text-blue-700 font-medium">Comprar ahora
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;