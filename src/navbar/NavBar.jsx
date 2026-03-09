import { LiaSignalSolid } from "react-icons/lia";
import { HiOutlineShoppingCart } from "react-icons/hi";

export default function NavBar() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 mb-">
      <div className="py-4">
        <nav className="flex items-center justify-between">

          {/* Logo */}
          <a href="/" className="text-3xl flex items-center gap-1">
            <LiaSignalSolid />
            <p className="text-[22px] font-[500] text-[#282A32]">
              CRESCENDO
            </p>
          </a>

          {/* Menu */}
          <ul className="hidden lg:flex gap-6">
            <li><a href="/" className="font-[500]">Home</a></li>
            <li><a href="/products" className="font-[500]">Products</a></li>
            <li><a href="/about" className="font-[500]">About</a></li>
            <li><a href="/find" className="font-[500]">Find Us</a></li>
            <li><a href="/pages" className="font-[500]">Pages</a></li>
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <a href="/cart">
              <HiOutlineShoppingCart className="text-[22px]" />
            </a>

            <button className="hidden sm:block bg-[#416BCD] text-white py-2 px-4 rounded-lg font-[500]">
              Buy Template
            </button>
          </div>

        </nav>
      </div>
    </div>
  );
}