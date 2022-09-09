import Layout from "../../layout/Layout";
import Bestseller from "../../parts/Bestseller";
import Bigdiscount from "../../parts/Bigdiscount";
import Brands from "../../parts/Brands";
import Categories from "../../parts/Categories";
import Products from "../../parts/Products";
import Sideslider from "../../parts/Sideslider";


function Main() {

    return (
        <Layout>
            <div className="  bg-white sm:px-2 md:px-14">
                <Sideslider />
            </div>
            <div className="bg-[#f7f7f7] h-full">
                <Products />
                <Brands />
                <Categories />
                <Bigdiscount />
                <Bestseller />
            </div>

        </Layout>
    )
}

export default Main;
