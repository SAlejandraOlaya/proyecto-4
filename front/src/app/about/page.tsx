import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white py-12 min-h-[100vh] mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            ¿Por qué elegir BlackTech?
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Somos una tienda en línea de tecnología líder en Colombia, ofreciendo una experiencia de compra excepcional a nuestros clientes.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-500 text-white">
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <dt className="text-lg font-medium text-gray-900">Amplio Catálogo</dt>
                <dd className="mt-2 text-base text-gray-500">
                  Ofrecemos una amplia selección de productos de tecnología de las mejores marcas del mercado.
                </dd>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-500 text-white">
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <dt className="text-lg font-medium text-gray-900">Envíos Rápidos</dt>
                <dd className="mt-2 text-base text-gray-500">
                  Ofrecemos envíos rápidos y confiables en todo el territorio colombiano.
                </dd>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-500 text-white">
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <dt className="text-lg font-medium text-gray-900">Seguridad</dt>
                <dd className="mt-2 text-base text-gray-500">
                  Brindamos una experiencia de compra segura y confiable a nuestros clientes.
                </dd>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-500 text-white">
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <dt className="text-lg font-medium text-gray-900">Servicio al Cliente</dt>
                <dd className="mt-2 text-base text-gray-500">
                  Nuestro equipo de servicio al cliente está disponible para ayudarte en todo lo que necesites.
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default About;