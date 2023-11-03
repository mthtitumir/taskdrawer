import Image from "next/image"
import Link from "next/link"
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';


const Banner = () => {
    return (
        <div className="c-auto py-10 flex flex-col gap-5">
            <div className="fji">
                <h1 className="w-1/2 text-5xl leading-snug text-center font-semibold gradient-text">Simplified Productivity App <br /> To Track All Your <br /> Tasks</h1>
            </div>

            <div className="fji flex-col gap-3">
                <p className="w-1/4 text-center">TaskDrawer is a solution for managing your task efficiently and proactively.</p>
                <button className="bgc2  px-4 py-2 text-center rounded-md">Get Started</button>
                <p className="">Already using TaskDrawer? <Link className="text-pink-600 hover:underline" href={'/login'}>Sign In</Link></p>
            </div>
            <div className="fji gap-5">
                <div className=" flex -gap-5 ">
                    <Image className="rounded-full border-2 border-pink-600" alt="customer image" width={40} height={40} src={'https://i.ibb.co/3Mrx6Fg/blank-profile.webp'} />
                    <Image className="rounded-full border-2 border-pink-600" alt="customer image" width={40} height={40} src={'https://i.ibb.co/3Mrx6Fg/blank-profile.webp'} />
                    <Image className="rounded-full border-2 border-pink-600" alt="customer image" width={40} height={40} src={'https://i.ibb.co/3Mrx6Fg/blank-profile.webp'} />
                </div>
                <div className="border-r pr-5">
                    <h1 className="text-xl">3300</h1>
                    <p className="text-sm">Happy Customers</p>
                </div>
                <div>
                    <h1 className="text-xl">4.8/5</h1>
                    <p className="text-sm fji"><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiOutlineStar /> <span className="ml-1">Ratings</span></p>
                </div>
            </div>
        </div>
    )
}

export default Banner

