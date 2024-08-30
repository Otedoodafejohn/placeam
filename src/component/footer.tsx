import { useNavigate } from "react-router-dom"

export default function Footer() {
    const navigate = useNavigate()
  return (
    <div className=" bg-gray-900 mt-5">
        <div className="max-w-2xl mx-auto text-white py-10">
            <div className="text-center">
                <h3 className="text-3xl mb-3"> Download placeam app </h3>
                <p> Buy - Sell - Bid - Donate - every day. </p>
                <div onClick={() => navigate("/download")} className="flex justify-center my-10">
                    <div className="flex items-center border w-auto rounded-lg px-4 py-2 sm:w-52 mx-2">
                        <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" className="w-7 md:w-8" />
                        <div className="text-left ml-3">
                            <p className='text-xs text-gray-200'>Download on </p>
                            <p className="text-sm md:text-base"> Google Play Store </p>
                        </div>
                    </div>
                    <div className="flex items-center border w-auto rounded-lg px-4 py-2 sm:w-44 mx-2">
                        <img src="https://cdn-icons-png.flaticon.com/512/888/888841.png" className="w-7 md:w-8" />
                        <div className="text-left ml-3">
                            <p className='text-xs text-gray-200'>Download on </p>
                            <p className="text-sm md:text-base"> Apple Store </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
                <p className="order-2 md:order-1 mt-8 md:mt-0"> &copy; Placeam, 2024. </p>
                <div className="order-1 md:order-2">
                    <span onClick={() => navigate("/contact-us")} className="px-2">Contact us</span>
                    {/* <span className="px-2 border-l">Contact us</span> */}

                    <a href="https://www.termsfeed.com/live/4cecf127-b1b4-429c-9bdc-01f462d16a0f" target="_blank" rel="noopener noreferrer"> <span className="px-2 border-l">Privacy Policy</span></a>
                </div>
            </div>
        </div>
    </div>
  )
}
