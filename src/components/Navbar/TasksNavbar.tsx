import Image from "next/image"
import PrimaryButton from "../miniComponents/PrimaryButton"
import { AiOutlinePlusCircle } from "react-icons/ai"

const TasksNavbar = () => {
  return (
    <div className="flex justify-between items-center c-auto py-3 shadow-lg ">
      <div className="">
        <h1 className=" fji gap-2 border border-gray-600 hover:border-gray-400 px-2 py-1 rounded-lg"> <AiOutlinePlusCircle /> Add Task</h1>
      </div>
      <div className="">
        <input type="text" className="focus:outline-none bg-inherit border border-gray-600 hover:border-gray-200 rounded-md px-10 py-2" placeholder="Search Your Task" />
      </div>
      <div className="">
        <PrimaryButton href="" text="Login" />
      </div>
    </div>
  )
}

export default TasksNavbar