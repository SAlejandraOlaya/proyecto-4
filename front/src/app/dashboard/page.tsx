'use client';
import { IUserSession } from "@/types/userSession";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHistory, faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from "next/navigation";
import Orders from "./orders/page";
import Cart from "../cart/page";

const Dashboard: React.FC = () => {
  const [userSession, setUserSession] = useState<IUserSession>();
  const [activeTab, setActiveTab] = useState('account');
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userToken = localStorage.getItem('userSession');
      setUserSession(JSON.parse(userToken!));
    }
  }, []);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex">
      
      <div className="w-64 bg-gray-200 text-gray-800 min-h-screen">
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Menú</h2>
          <ul className="space-y-2">
            <li
              className={`flex items-center p-2 rounded cursor-pointer ${activeTab === 'account' ? 'bg-gray-300' : ''}`}
              onClick={() => handleTabClick('account')}
            >
              <FontAwesomeIcon icon={faUserCircle} className="mr-2" />
              <span>Detalles de la cuenta</span>
            </li>
            <li
              className={`flex items-center p-2 rounded cursor-pointer ${activeTab === 'history' ? 'bg-gray-300' : ''}`}
              onClick={() => handleTabClick('history')}
            >
              <div>
              <FontAwesomeIcon icon={faHistory} className="mr-2" />
                <span>Historial de pedidos</span>
            
              </div>

            </li>
            <li
              className={`flex items-center p-2 rounded cursor-pointer ${activeTab === 'cart' ? 'bg-gray-300' : ''}`}
              onClick={() => handleTabClick('cart')}
            >
              <div>
                <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                <span>Tu carrito</span>
              </div>
            </li>
          </ul>
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-12"
            onClick={() => {
              localStorage.removeItem('userSession');
              router.push('/');
            }}
          >
            Cerrar sesión
          </button>
        </div>
      </div>

      
      <div className="flex-1 p-4">
        {activeTab === 'account' ? (
          <div>
            <h2 className="text-3xl font-bold mt-4 mb-4">Detalles de la cuenta</h2>
            <p>{userSession?.userData?.name}</p>
            <p>{userSession?.userData?.address}</p>
          </div>
        ) : activeTab === 'history' ? (
          <Orders/>
        ) : (
          <Cart/> 
        )}
      </div>
    </div>
  );
};

export default Dashboard;