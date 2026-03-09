export default function Hero() {
  return (
    <div className="max-w-[1180px] mx-auto h-[60vh] px-4">

      <div className="flex items-center justify-between h-full bg-gradient-to-r from-blue-950 via-blue-700 to-blue-500 rounded-[20px] p-8 gap-10">
        
        {/* Text Section */}
        <div>
          <h1 className="text-white lg:text-[55px] md:text-[30px] font-medium text-[27px]">
            Elevate Your Audio Journey
          </h1>

          <div className="lg:max-w-[600px] md:max-w-[320px] md:text-[14px]">
            <p className="text-amber-50 lg:text-[16px] md:text-[15] mt-1 text-[13px]">
              Experience Sound in its Purest Form. Morbi justo sem, venenatis
              sit amet tortor id, porttitor facilisis metus. Ut scelerisque
              mauris vivamus fringilla elit eu felis cursus.
            </p>

            {/* Buttons */}
            <div className="mt-[40px] flex gap-8">
              <a
                href="/"
                className="bg-[#416BCD] py-[10px] px-[18px] rounded-[10px] text-amber-50 font-medium"
              >
                Shop Now
              </a>

              <a
                href="/"
                className="border border-white py-[10px] px-[18px] rounded-[10px] text-amber-50 font-medium"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Image */}
        <img
          src="/images/hero.png"
          alt="Hero"
          className="object-cover h-full sm:block hidden"
        />
        
      </div>
    </div>
  );
}