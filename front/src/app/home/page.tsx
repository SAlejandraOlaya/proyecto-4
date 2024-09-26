import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import MyCarousel from "@/components/carousel/carousel";
import CategoryList from "@/components/categories/cardCategories";
import { newProductsList } from '@/components/new/newProductsList';
import FeatureCards from '@/components/info/info';

const NewProductsCarousel = dynamic(() => import('@/components/new/NewProductsCarousel'), {
    ssr: false
});

const Home: React.FC = () => {
    return (
        <div>
            <MyCarousel />
            <CategoryList />
            <div>
                <h1 className="text-3xl font-bold mb-4 text-center">Echa un vistazo a las novedades</h1>
                <Suspense fallback={<div>Loading...</div>}>
                    <NewProductsCarousel items={newProductsList} />
                </Suspense>
            </div>
            <FeatureCards />
        </div>
    );
};

export default Home;
