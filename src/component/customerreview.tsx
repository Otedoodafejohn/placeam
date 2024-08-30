import Boy from "../assets/boy.jpeg"
import Girl from "../assets/girl.jpeg"
import Girl2 from "../assets/girl2.jpeg"

export default function Customerreview() {
  return (
    <div className="py-16 white">  
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <h2 className="mb-12 text-center text-2xl text-white font-bold md:text-4xl">What's our customers say</h2>
            <div className="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
              <div className="row-span-2 p-6 border border-gray-100 rounded-xl bg-gray-50 text-center sm:p-8">
                <div className="h-full flex flex-col justify-center space-y-4">
                  <img className="w-20 h-20 mx-auto rounded-full object-cover" src={Boy} alt="user avatar" height="220" width="220" loading="lazy" />
                  <p className="text-gray-600 md:text-xl"> <span className="font-serif">"</span> I was skeptical about buying a luxury item, but the products are thoroughly inspected and authenticated. I've made multiple purchases and love everything!
                  <span className="font-serif">"</span></p>
                  <div>
                      <h6 className="text-lg font-semibold leading-none">Godman Jame</h6>
                      {/* <span className="text-xs text-gray-500">Product Designer</span> */}
                  </div>
                </div>
              </div>
    
              <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
                <img className="w-20 h-20 mx-auto rounded-full object-cover" src={Girl} alt="user avatar" height="220" width="220" loading="lazy" />
                <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                  <p className="text-gray-600"> <span className="font-serif">"</span>The rental service is perfect for special occasions. I rented a designer bag for a wedding and received countless compliments. Will definitely use again!
                  <span className="font-serif">"</span></p>
                  <div>
                      <h6 className="text-lg font-semibold leading-none">Asadebe Morie</h6>
                      {/* <span className="text-xs text-gray-500">Product Designer</span> */}
                  </div>
                </div>
              </div>
              <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
                <img className="w-20 h-20 mx-auto rounded-full object-cover" src={Girl2} alt="user avatar" height="220" width="220" loading="lazy" />
                <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                  <p className="text-gray-600"> <span className="font-serif">"</span> ⁠I've never seen such a wide selection of high-end, pre-owned items at affordable prices. The website is user-friendly and customer service is top-notch. Happy customer!<span className="font-serif">"</span></p>
                  <div>
                      <h6 className="text-lg font-semibold leading-none">Emmanuel George</h6>
                      {/* <span className="text-xs text-gray-500">Product Designer</span> */}
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}
