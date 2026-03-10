export default function BuyTempleteBtn({ text }) {
    return (
        <div>
             <button className="hidden sm:block cursor-pointer bg-[#416BCD] text-white py-2 px-4 rounded-lg font-[500] hover:bg-[#3355A0]">
              {text}
            </button>
        </div>
    )
}