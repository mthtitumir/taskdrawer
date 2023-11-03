import Banner from "@/components/HomepageComponents/Banner";
import Trust from "@/components/HomepageComponents/Trust";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <div className="bgc flex flex-col gap-10">
        <div className="bgi">
          <Navbar />
          <Banner />
        </div>
        <Trust />
      </div>
    </>
  )
}
