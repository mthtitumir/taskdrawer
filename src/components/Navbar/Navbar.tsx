"use client"
import useAuth from "@/hooks/useAuth"
import PrimaryButton from "../miniComponents/PrimaryButton"

const Navbar = () => {
  const { user }: any = useAuth();
  console.log(user);
  
  return (
    <div className="flex justify-between items-center c-auto py-3">
      <div>
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
        {
          user ? <PrimaryButton href="/home/tasks" text="Add Tasks" /> : <PrimaryButton href="/login" text="Login" />
        }
      </div>
    </div>
  )
}

export default Navbar