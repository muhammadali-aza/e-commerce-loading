import { LiaSignalSolid } from "react-icons/lia";
import { HiOutlineShoppingCart } from "react-icons/hi";

export default function NavBar() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 mb-[20px]">
      <div className="py-4">
        <nav className="flex items-center justify-between">

          {/* Logo */}
          <a href="/" className="text-3xl flex items-center gap-1 hover:text-[#416BCD]">
            <LiaSignalSolid />
            <p className="text-[22px] font-[500] text-[#282A32] hover:text-[#416BCD]">
              CRESCENDO
            </p>
          </a>

          {/* Menu */}
          <ul className="hidden lg:flex gap-6">
            <li><a href="/" className="font-[500] hover:text-[#416BCD]">Home</a></li>
            <li><a href="/products" className="font-[500] hover:text-[#416BCD]">Products</a></li>
            <li><a href="/about" className="font-[500] hover:text-[#416BCD]">About</a></li>
            <li><a href="/find" className="font-[500] hover:text-[#416BCD]">Find Us</a></li>
            <li><a href="/pages" className="font-[500] hover:text-[#416BCD]">Pages</a></li>
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <a href="/cart">
              <HiOutlineShoppingCart className="text-[22px] hover:text-[#416BCD]"/>
            </a>

            <button className="hidden sm:block cursor-pointer bg-[#416BCD] text-white py-2 px-4 rounded-lg font-[500] hover:bg-[#3355A0]">
              Buy Template
            </button>
          </div>

        </nav>
      </div>
    </div>
  );
}