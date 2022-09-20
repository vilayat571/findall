import Bestseller from "../../parts/Bestsellers/Bestseller";
import Bigdiscount from "../../parts/Bigdiscounts/Bigdiscount";
import Brands from "../../parts/Brands/Brands";
import Categories from "../../parts/Categories/Categories";
import Products from "../../parts/Products/Products";

function Maindiv() {
    return (
        <div >
            <Products />
            <Brands />
            <Categories />
            <Bigdiscount />
            <Bestseller />
        </div>
    )
}

export default Maindiv;