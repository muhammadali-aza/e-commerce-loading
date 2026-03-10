export default function BuyTempleteBtn({ text }) {
    return (
        <div>
             <button className=" sm:block cursor-pointer bg-[#416BCD] text-white sm:text-[17px] text-[12px] py-2 px-4 rounded-lg font-[500] hover:bg-[#3355A0]">
              {text}
            </button>
        </div>
    )
}