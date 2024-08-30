

export default function Paymentplan() {
  return (
    <div className="py-16 overflow-hidden">
        <div className="container m-auto px-6 space-y-8 text-white md:px-12">
            <div>
                {/* <span className=" text-lg font-semibold">Main features</span> */}
                <h2 className="mt-4 text-2xl text-white font-bold md:text-4xl">A technology-first approach to payments <br className="lg:block" hidden /> and finance</h2>
            </div>
            <div className="mt-16 grid border divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-4">
                <div className="relative group bg-[#161719] transition hover:z-[1] hover:shadow-2xl">
                    <div className="relative p-8 space-y-8">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjt6kYNwFy4_gStca5N_ZMrGu0SjfwN9IvGQ&s" className="w-10" width="512" height="512" alt="burger illustration" />
                        
                        <div className="space-y-2">
                            <h5 className="text-xl font-medium transition group-hover:text-yellow-600">Signup in Minutes</h5>
                            <p className="text-sm ">Sign up on our Web App or Mobile App. Available for Android and IOS devices.</p>
                        </div>
                        
                    </div>
                </div>
                <div className="relative group bg-[#161719] transition hover:z-[1] hover:shadow-2xl">
                    <div className="relative p-8 space-y-8">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe3zbbTYJqLjRfhpuZY-h9aysJHFM29jfKzw&s" className="w-10" width="512" height="512" alt="burger illustration" />
                        
                        <div className="space-y-2">
                            <h5 className="text-xl  font-medium transition group-hover:text-yellow-600">Identity verification</h5>
                            <p className="text-sm ">Provide extra basic information to assist us with verifying your details.</p>
                        </div>
                    
                    </div>
                </div>
                <div className="relative group bg-[#161719] transition hover:z-[1] hover:shadow-2xl">
                    <div className="relative p-8 space-y-8">
                        <img src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/package-delivery.png" className="w-10" width="512" height="512" alt="burger illustration" />
                        
                        <div className="space-y-2">
                            <h5 className="text-xl  font-medium transition group-hover:text-yellow-600">Earn</h5>
                            <p className="text-sm ">Buy, sell and bid for awesome product while also earning from our bonus</p>
                        </div>
                    
                    </div>
                </div>
                <div className="relative group bg-[#161719] transition hover:z-[1] hover:shadow-2xl lg:hidden xl:block">
                    <div className="relative p-8 space-y-8 border-dashed rounded-lg transition duration-300 group-hover:bg-[#161719] group-hover:border group-hover:scale-90">
                        <img src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/metal.png" className="w-10" width="512" height="512" alt="burger illustration" />
                        
                        <div className="space-y-2">
                            <h5 className="text-xl  font-medium transition group-hover:text-yellow-600">More features</h5>
                            <p className="text-sm ">Explore endless posibility with placeam.</p>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
