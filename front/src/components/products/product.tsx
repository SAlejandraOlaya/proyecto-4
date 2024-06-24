import React, { useState } from 'react';
import { IProduct } from '@/Interfaces/IProducts';

const Product: React.FC<IProduct> = ({
    name,
    image,
    description,
    price,
    stock,
}) => {
    const limitedDescription = description.slice(0, 100) + (description.length > 100 ? '...' : '');

    return (
        <div style={{ width: '100%' }}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={image} alt={name} className="w-full h-64 object-cover" />
                <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{name}</h3>
                    <p className="text-gray-600 mb-4">
                        {limitedDescription}
                    </p>
                    <div className="flex justify-between items-center">
                        <p className="text-lg font-bold">${price}</p>
                        <p className="text-gray-600">Stock: {stock}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Product;
