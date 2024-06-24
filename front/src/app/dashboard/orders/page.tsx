'use client';
import { getAllOrders } from "@/helpers/orderhelper";
import { IOrder, IUserSession } from "@/types/userSession";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

const Orders = () => {
  const [token, setToken] = useState<IUserSession>();
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<IOrder | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userToken = localStorage.getItem('userSession');
      setToken(JSON.parse(userToken!));
      !userToken && redirect("/login");
    }
  }, []);

  useEffect(() => {
    async function getData() {
      try {
        const response = await getAllOrders(token?.token!);
        setOrders(response);
      } catch (error: any) {
        throw new Error(error);
      }
    }
    token && getData();
  }, [token]);

  const handleViewDetails = (order: IOrder) => {
    setSelectedOrder(order);
  };

  const handleCloseDetails = () => {
    setSelectedOrder(null);
  };

  return (
    <div className="container min-h-[100vh] mt-10 mr-5 ml-5" >
      <h2 className="text-3xl font-bold mb-4 mt-4"> Tu historial de Órdenes</h2>
      {orders?.length > 0 ? (
        <table className="w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Fecha</th>
              <th className="px-4 py-2">Número de Orden</th>
              <th className="px-4 py-2">Estado</th>
              <th className="px-4 py-2">Detalles</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t">
                <td className="px-10 py-2 text-center">{new Date(order.date).toLocaleDateString()}</td>
                <td className="px-18 py-2 text-center">{order.id}</td>
                <td className="px-4 py-2 text-center">{order.status}</td>
                <td className="px-4 py-2 text-center">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={() => handleViewDetails(order)}
                  >
                    Ver Detalles
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No tienes ninguna orden aún</p>
      )}
      {selectedOrder && (
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">Detalles de la Orden</h3>
          <div className="flex flex-row">
            <div className="w-1/2">
              <p><strong>Fecha:</strong> {new Date(selectedOrder.date).toLocaleDateString()}</p>
              <p><strong>Número de Orden:</strong> {selectedOrder.id}</p>
              <p><strong>Estado:</strong> {selectedOrder.status}</p>
            </div>
            <div className="w-1/2">
              <h4 className="font-bold mb-2">Productos:</h4>
              {selectedOrder.products.map((product) => (
                <div key={product.id} className="flex flex-row items-center mb-4">
                  <img src={product.image} alt={product.name} className="w-20 h-20 object-cover mr-4" />
                  <div>
                    <p>{product.name}</p>
                    <p>Precio: ${product.price}</p>
                  </div>
                </div>
              ))}
              <p><strong>Total:</strong> ${selectedOrder.products.reduce((total, product) => total + product.price, 0)}</p>
            </div>
          </div>
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded mt-4"
            onClick={handleCloseDetails}
          >
            Cerrar Detalles
          </button>
        </div>
      )}
    </div>
  );
};

export default Orders;