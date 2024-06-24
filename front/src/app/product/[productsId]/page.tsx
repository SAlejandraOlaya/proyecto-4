'use client'

import { getProductById } from "@/helpers/producthelpers";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { IProduct } from "@/Interfaces/IProducts";

const DetailProduct: React.FC<{ params: { productsId: string } }> = ({ params }) => {
  const [userSession, setUserSession] = useState();
  const [product, setProduct] = useState<IProduct>();
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const product = await getProductById(Number(params.productsId));
      setProduct(product);
    }
    fetchData();

    if (typeof window !== 'undefined' && window.localStorage) {
      const userToken = localStorage.getItem('userSession');
      setUserSession(JSON.parse(userToken!))
    }
  }, []);

  const handleBuy = () => {
    if (!userSession) {
      alert("Debes iniciar sesion para añadir productos al carrito");
      router.push("/login");
    } else {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      if (product) {
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Producto añadido al carrito");
        router.push("/product");
      }
    }
  };


return (
  <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row">
    <div className="md:w-2/3">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gray-200 py-10 px-6">
          <h1 className="text-3xl font-bold text-gray-800">{product?.name}</h1>
        
        </div>
        <div className="px-6 py-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <img src={product?.image} alt="image product" className="w-full h-auto rounded-lg" />
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
            <p className="text-gray-600">{product?.description}</p>
            <p className="text-2xl font-bold text-gray-800 mt-4">Precio: ${product?.price}</p>
            <p className="text-gray-600 mt-2">Stock disponible: {product?.stock}</p>
            <p className="text-gray-600 mt-2">Financia hasta en 12 cuotas con 0% de interés.</p>
            <button onClick={() => handleBuy()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
              Comprar ahora
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="md:w-1/3 md:ml-8 mt-8 md:mt-0">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
        <p className="text-gray-600 mb-4">Recoge en Tienda en 1 hora hábil</p>
        <p className="text-gray-600 mb-4">
          Envío a Domicilio en 24 horas a Bogotá | En 48 horas a Barranquilla, Cali y Medellín |{' '}
          <a href="#" className="text-blue-500 hover:text-blue-700">
            Ver Otros destinos
          </a>
        </p>
        <p className="text-gray-600 mb-4">Envío a Domicilio es ¡GRATIS! desde $2000</p>
        <p className="text-gray-600 mb-4">1 año de garantía internacional en dispositivos Apple.</p>
        <hr className="my-4" />
        <p className="text-gray-600 mb-4">
          <span className="font-bold">Addi</span> | Paga en Cuotas con Addi al finalizar la compra
        </p>
        <hr className="my-4" />
        <p className="text-gray-600">
          <span className="font-bold">Davivienda</span> | Paga en 12 cuotas al 0% de interés con tu tarjeta Davivienda
        </p>
      </div>
    </div>
  </div>
)
};

export default DetailProduct;