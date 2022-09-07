import Layout from "../../layout/Layout";
import Brands from "../../parts/Brands";
import Products from "../../parts/Products";
import Sideslider from "../../parts/Sideslider";


function Main() {

    return (
        <Layout>
            <div className="  bg-white sm:px-2 md:px-14">
                <Sideslider />
            </div>
            <div className="bg-[#f7f7f7] flex-col">
                <Products />
                <Brands />
            </div>
        </Layout>
    )
}

export default Main;
