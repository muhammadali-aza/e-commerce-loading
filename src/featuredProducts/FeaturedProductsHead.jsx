import BuyTempleteBtn from "../navbar/BuyTempleteBtn";

export default function FeaturedProductsHead() {
    return (
        <div className="max-w-[1200px] mx-auto px-4 mt-[30px]">
            <div className="flex justify-between items-center">
            <h2 className="sm:text-[29px] text-[20px] font-bold mb-4">Featured Products</h2>
            <BuyTempleteBtn text="See All Products"/>
            </div>
        </div>
    )
}