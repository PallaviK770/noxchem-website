import indiaMap from "../assets/maps/india.svg";

export default function IndiaServiceMap() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0A4DA3]">
            Expanding Our Service Network Across India
          </h2>

            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
           NOxchem Industries is proudly serving key industrial regions across India while expanding our distribution network to ensure reliable access to premium NxBlue Diesel Exhaust Fluid.
          </p>
          
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="flex justify-center">
            <img
              src={indiaMap}
              alt="India Service Map"
              className="w-full max-w-lg transition duration-300 hover:scale-105"
            />
          </div>

          <div>

            <div className="mb-8">
                
              <div className="flex items-center gap-3 mb-4">
                
                <div className="w-4 h-4 rounded-full bg-[#43B02A]"></div>
            
                <span className="font-semibold">
                  Currently Serving
                </span>
              </div>

              <p className="text-gray-600 ml-7">
                Gujarat, Delhi, Kolkata (West Bengal)
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-4 h-4 rounded-full bg-[#0A4DA3]"></div>
                <span className="font-semibold">
                  Coming Soon
                </span>
              </div>

              <p className="text-gray-600 ml-7">
                Pune, Nashik (Maharashtra) & Bengaluru (Karnataka)
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-10">

  <div className="text-center">
    <h3 className="text-4xl font-bold text-[#0A4DA3]">3</h3>
    <p className="text-gray-600 mt-2">Active States</p>
  </div>

  <div className="text-center">
    <h3 className="text-4xl font-bold text-[#0A4DA3]">2</h3>
    <p className="text-gray-600 mt-2">Expanding Soon</p>
  </div>

  <div className="text-center">
    <h3 className="text-4xl font-bold text-[#0A4DA3]">6+</h3>
    <p className="text-gray-600 mt-2">Major Cities</p>
  </div>

</div>

          </div>

        </div>

      </div>
    </section>
  );
}