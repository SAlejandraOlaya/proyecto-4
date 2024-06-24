'use client'
import React from 'react';
import Head from 'next/head';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div>
      <Head>
        <title>Contacto - BlackTech</title>
        <meta name="description" content="Página de contacto de BlackTech" />
      </Head>

      <section className="bg-white py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Contáctanos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Información de Contacto</h3>
              <p className="mb-4">
                Si tienes alguna pregunta, consulta o simplemente quieres ponerte en contacto con
                nosotros, puedes utilizar la siguiente información:
              </p>
              <ul className="space-y-2">
                <li>
                  <strong>Dirección:</strong> Calle Principal 123, Bogotá, Colombia
                </li>
                <li>
                  <strong>Teléfono:</strong> +57 (1) 123-4567
                </li>
                <li>
                  <strong>Email:</strong> info@blacktech.com
                </li>
                <li>
                  <strong>Horario de Atención:</strong> Lunes a Viernes, 9:00 AM - 6:00 PM
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Formulario de Contacto</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block mb-2">
                    Nombre:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block mb-2">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block mb-2">
                    Mensaje:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    rows={4}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;