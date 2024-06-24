import CategoryCard from "./categoryCard";
import { ICategory } from "@/Interfaces/ICategory";

const CategoryList: React.FC = () => {
  const categories: ICategory[] = [
    
    { name: 'Laptops', image: 'category5.png' },
    { name: 'Smartphones', image: 'category1.png' },
    { name: 'Tablets', image: 'category2.png' },
    { name: 'Cámaras', image: 'category3.png' },
    { name: 'Audifonos', image: 'category7.png' },
    { name: 'Monitores', image: 'category6.png' },
    { name: 'Acccesorios', image: 'category4.png' },
    { name: 'Almacenamiento', image: 'category4.png'},
    { name: 'Impresoras' ,image: 'category4.png'}
  
  ];

  return (
    <div className="flex flex-wrap justify-center mt-10 mb-10">
      {categories.map((category, index) => (
        <CategoryCard
          key={index}
          name={category.name}
          image={category.image}
        />
      ))}
    </div>
  );
};

export default CategoryList;