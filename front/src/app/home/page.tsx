
import React from 'react';
import MyCarousel from "@/components/carousel/carousel";
import CategoryList from "@/components/categories/cardCategories";
import NewProductsCarousel from '@/components/new/newProducts';
import { newProductsList } from '@/components/new/newProductsList';
import FeatureCards from '@/components/info/info';


const Home: React.FC = () => {
    return (
        <div>
            <MyCarousel />
            <CategoryList />
            <div>
                <h1 className="text-3xl font-bold mb-4 text-center">Echa un vistazo a las novedades</h1>
                <NewProductsCarousel items={newProductsList} />
            </div>
            <FeatureCards/>
            
            

        </div>
    );
};

export default Home;
