import { ICategory } from "@/Interfaces/ICategory";
  
const CategoryCard: React.FC<ICategory> = ({ name, image }) => {
    return (
        <div className="flex flex-col items-center bg-white rounded-full shadow-md p-4 m-4 w-40 h-40">
        <img src={image} alt={name} className="w-24 h-24 object-contain mb-2" />
        <h3 className="text-lg font-semibold text-center">{name}</h3>
      </div>
    );
  };

  export default CategoryCard;