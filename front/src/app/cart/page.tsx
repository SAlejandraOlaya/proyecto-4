'use client';
import { IProduct } from "@/Interfaces/IProducts";
import { createOrder } from "@/helpers/orderhelper";
import { IUserSession } from "@/types/userSession";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Cart: React.FC = () => {
    const router = useRouter();
    const [token, setToken] = useState<IUserSession>();
    const [cart, setCart] = useState<IProduct[]>([]);
    const [total, setTotal] = useState<number>(0);
    const shippingCost = 20;

    useEffect(() => {
        if (typeof window !== "undefined" && window.localStorage) {
            const userToken = localStorage.getItem('userSession');
            setToken(JSON.parse(userToken!));
            !userToken && redirect("/login");
        }

        const storeCart = JSON.parse(localStorage.getItem('cart') || '[]');
        if (storeCart) {
            let totalCart = 0;
            storeCart.forEach((item: IProduct) => {
                totalCart += item.price;
            });
            setTotal(totalCart);
            setCart(storeCart);
        }
    }, []);

    const handleRemoveItem = (productId: number) => {
        const updatedCart = cart.filter((item) => item.id !== productId);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        calculateTotal(updatedCart);
    };

    const calculateTotal = (cartItems: IProduct[]) => {
        let totalCart = 0;
        cartItems.forEach((item: IProduct) => {
            totalCart += item.price;
        });
        setTotal(totalCart);
    };

    async function handleClick() {
        try {

            const orderProducts: Set<number> = new Set(cart.map((product) => product.id).filter((id): id is number => id !== undefined));// filtra los valores nulos o indefinidos para qu el array solo tenga numeros no repetidos 
            await createOrder(Array.from(orderProducts), token?.token!)
            localStorage.setItem('cart', "[]");
            setCart([])
            setTotal(0)
            alert('felicidades! compra realizada con exito')
            router.push('/product')
        } catch (error: any) {
            throw new Error(error);

        }
    }
    return (
        <div className="container mx-auto px-4 py-8 min-h-[100vh] mt-4">
            <h1 className="text-3xl font-bold mb-8"> Tu carrito de compras</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                    <div className="bg-white shadow-md rounded-lg">
                        <div className="p-6">
                            {cart.length > 0 ? (
                                <table className="w-full text-lg">
                                    <thead>
                                        <tr>
                                            <th className="px-4 py-2 text-center">Producto</th>
                                            <th className="px-4 py-2 text-center">Precio</th>
                                            <th className="px-4 py-2"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.map((element) => (
                                            <tr key={element.id}>
                                                <td className="px-4 py-4">
                                                    <div className="flex items-center">
                                                        <img
                                                            src={element?.image}
                                                            alt="imagen del producto"
                                                            className="w-24 h-24 object-cover rounded mr-6"
                                                        />
                                                        <span className="text-xl text-center">{element.name}</span>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-4 text-xl text-center">${element.price}</td>
                                                <td className="px-4 py-4 text-center">
                                                    <button
                                                        className="bg-red-500 text-white px-4 py-2 rounded"
                                                        onClick={() => element.id && handleRemoveItem(element.id)}
                                                    >
                                                        Eliminar
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ) : (
                                <div className="text-center py-8 text-xl">
                                    No tienes ningún producto agregado a tu carrito
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div>
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h2 className="text-2xl font-bold mb-6">Total del carrito</h2>
                        <div className="flex justify-between mb-4 text-xl">
                            <span>Subtotal</span>
                            <span>${total}</span>
                        </div>
                        <div className="flex justify-between text-xl">
                            <span>Envío</span>
                            <div>
                                {cart.length > 0 ? (
                                    <div>
                                        <span>Envío standar:</span>
                                        <span>${shippingCost}</span>
                                        <p className="text-lg">Envios en Colombia</p>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                        <hr className="my-6" />
                        <div className="flex justify-between font-bold text-2xl">
                            <span>Total</span>
                            <span> {cart.length > 0 ? total + shippingCost : total}</span>
                        </div>
                        <button onClick={handleClick} className="bg-blue-500 text-white px-6 py-3 rounded w-full mt-6 text-xl">
                            FINALIZAR COMPRA
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;

// a ? b : c