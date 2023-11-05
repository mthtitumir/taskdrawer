import { useState } from "react";
import PrimaryButton from "../miniComponents/PrimaryButton"
import { AiOutlinePlusCircle } from "react-icons/ai"
import Modal from "../miniComponents/Modal"
import AddTask from "../Tasks/AddTask";
import Image from "next/image";
import useAuth from "@/hooks/useAuth";

const TasksNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user }:any = useAuth();
  // console.log(user);

  return (
    <div className="flex justify-between items-center c-auto py-3 shadow-lg border-b border-gray-400">
      <div className="hover:cursor-pointer">
        <h1 onClick={() => setIsOpen(!isOpen)} className=" fji gap-2 border border-gray-600 hover:border-gray-400 px-2 py-1 rounded-lg"> <AiOutlinePlusCircle /> Add Task</h1>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} >
          <AddTask />
        </Modal>
      </div>
      <div className="">
        <input type="text" className="focus:outline-none bg-inherit border border-gray-600 hover:border-gray-200 rounded-md px-10 py-2" placeholder="Search Your Task" />
      </div>
      <div className="w-10 ">
        <Image className="rounded-full hover:border-2 hover:border-cyan-500" height={40} width={40} alt='profile_image' src={user?.photoURL ? user?.photoURL : "https://i.ibb.co/3Mrx6Fg/blank-profile.webp"} />
      </div>
    </div>
  )
}

export default TasksNavbar