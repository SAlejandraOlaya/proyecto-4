

import { IProduct } from "@/Interfaces/IProducts";
const apiUrl = process.env.NEXT_PUBLIC_API_URL
export async function getProductsBD()  {
try {
    const response = await fetch(`${apiUrl}/products`, {
        method: "GET",
        headers: {
        }, 
        next: {revalidate: 3600}
      });
    const products: IProduct[] = await response.json();
    return products;
} catch (error:any) {
    throw new Error(error)
}
}

export async function getProducts() {
    try {
        const productsDB = await getProductsBD();
        return productsDB
    } catch (error:any) {
        throw new Error(error)
    }
}

export async function getProductById(id: number) {
    try {
      const response = await fetch(`${apiUrl}/products/${id}`, {
        method: "GET",
      });
  
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error:any) {
      throw error;
    }
  }



