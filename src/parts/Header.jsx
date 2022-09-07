import Adduser from "../components/Header/Adduser";
import Info from "../components/Header/Info"

function Header() {
    return (
        <div className=" w-full h-auto px-8 flex flex-row sm:flex-col md:flex-row
    justify-between items-center border-b-[1px] border-[#e5e5e5]">
            <Info />
            <Adduser />
        </div>
    )
}

export default Header;