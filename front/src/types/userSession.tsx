import { IProduct } from "@/Interfaces/IProducts";

export interface IUserSession {
    token: string;
    userData: {
        name: string
        email: string
        address: string
        id: number
        phone: string
        role: string
        orders: []
    }
}

export interface IOrder {
    id: number;
    date: string;
    status: string;
    products: IProduct [];
}