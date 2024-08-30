import  { useState } from 'react'
import BannerImg0 from "../assets/Onboard0.png"
import BannerImg1 from "../assets/onboard1.png"
import BannerImg2 from "../assets/onboard2.png"
import BannerImg3 from "../assets/onboard3.png"
import { useNavigate } from 'react-router-dom'


const data = [
    {
        id: "1",
        banner: BannerImg0,
        title: "Shop Red Carpet Looks",
        description:"Find dresses and gowns worn by celebrities at glamorous events, all at discounted prices just for you."
    },
    {
    id: "2",
    banner:BannerImg1,
    title:"Shop Red Carpet Looks",
    description:"Find dresses and gowns worn by celebrities at glamorous events, all at discounted prices just for you."
},
{
    id: "3",
    banner:BannerImg2,
    title:"Rent and Save",
    description:"Why buy when you can rent? Explore a wide range of bags, shoes, wigs, gowns, and more."
},
{
    id: "4",
    banner:BannerImg3,
    title:"Give Back with Style",
    description:"Donate your gently used items to children in need. Make a difference while decluttering your wardrobe. "
},
]

export default function Banner() {

const navigate = useNavigate()

    const[scrollData, setScrollData] = useState({
        id: "1",
            banner: BannerImg0,
            title: "Shop Red Carpet Looks",
            description:"Find dresses and gowns worn by celebrities at glamorous events, all at discounted prices just for you."
        },)




  return (
    <header className="">
       
    
        <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
            <div className="flex flex-col items-center w-full md:flex-row md:w-fit">
                <div className="flex justify-center order-2 mt-6 md:mt-0 md:space-y-3 md:flex-col">
                    

                    {
                        data.map((v) => <button key={v.id} onClick={() => setScrollData(v)} className={`w-3 h-3 mx-2 ${v.id == scrollData.id ?"bg-yellow-600" : "bg-gray-300"} rounded-full md:mx-0 focus:outline-none`}></button>)
                    }
                </div>
    
                <div className="max-w-lg md:mx-12 md:order-2">
                    <h1 className="text-3xl font-medium tracking-wide text-white md:text-4xl">{scrollData.title}</h1>
                    <p className="mt-4 text-white">{scrollData.description}</p>
                    <div className="mt-6">
                        <button type='button' onClick={() => navigate("/download")} className="block px-3 py-3 font-semibold text-center text-white transition-colors duration-200 transform bg-yellow-600 rounded-md md:inline hover:bg-black">Download from App Store</button>
                    </div>
                </div>
            </div>
    
            <div className="flex items-center justify-center w-full h-96 lg:h-[60vh] md:flex-1 ">
                <img className="rounded-3xl overflow-hidden object-cover lg:object-top w-full h-full max-w-2xl  " src={scrollData.banner} />
            </div>
        </div>
    </header>
  )
}
