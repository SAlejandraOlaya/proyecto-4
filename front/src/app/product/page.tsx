import Products from "../../components/products/products";
import { getProductsBD } from "@/helpers/producthelpers";

const ProductsPage = async () => {
    const products = await getProductsBD();

    return (
        <div>
            <Products products={products} />
        </div>
    )
}

export default ProductsPage;