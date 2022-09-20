import Logo from "../../atoms/Navbar/Logo"
import Navpart from "../../components/Navbar/Navpart"
import Searchbar from "../../components/Navbar/Searchbar"

function Navbar() {
  return (
    <div className="w-full h-auto px-14 py-4 flex flex-row sm:flex-col md:flex-row
    justify-between items-center">
      <div className="md:block sm:hidden">
        <Logo />
      </div>
      <Searchbar />
      <div className=" md:block sm:hidden">
        <Navpart />
      </div>
    </div>
  )
}

export default Navbar
