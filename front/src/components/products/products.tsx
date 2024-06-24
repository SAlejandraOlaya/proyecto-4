'use client'

import { IProduct } from '@/Interfaces/IProducts';
import React from "react";
import Product from "./product";
import { CardContainer } from './products.styles';
import Link from 'next/link';

const Products = ({ products }: { products: IProduct[] }) => {
  return (
    <CardContainer >
      {products ? (
        products.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`}>
            <Product
              name={product.name}
              image={product.image}
              description={product.description}
              price={product.price}
              stock={product.stock}
              categoryId={product.categoryId}
            />
          </Link>
        ))
      ) : (
        <p>No hay productos disponibles</p>
      )}
    </CardContainer>
  );
}

export default Products;


