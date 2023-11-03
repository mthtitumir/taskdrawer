import Image from "next/image"
import PrimaryButton from "../miniComponents/PrimaryButton"

const Navbar = () => {
  return (
    <div className="flex justify-between items-center c-auto py-3">
      <div>
        {/* <Image alt="logo" width={50} height={50} src={''} /> */}
        <h1 className="text-2xl">TaskDrawer</h1>
      </div>
      <div>
        <ul className="flex items-center gap-5 text-sm">
          <li>Home</li>
          <li>About Us</li>
          <li>Pricing</li>
          <li>Features</li>
        </ul>
      </div>
      <div>
        <PrimaryButton href="" text="Login" />
      </div>
    </div>
  )
}

export default Navbar