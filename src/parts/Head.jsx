import ResNav from "../components/Responsivenav/ResNav"
import Header from "./Header"
import Navbar from "./Navbar"

function Head() {
    return (
        <div className="bg-white">
           <div className="md:hidden sm:block">
           <ResNav />
           </div>
           <div className="md:block sm:hidden">
           <Header />
            </div>
            <Navbar />
        </div>
    )
}

export default Head
