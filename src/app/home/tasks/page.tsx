"use client"
import TasksNavbar from "@/components/Navbar/TasksNavbar"
import Modal from "@/components/miniComponents/Modal"
import GetUsersAllTasks from "@/hooks/tanstackHooks/GetUsersAllTasks"
import { BiEdit, BiSelectMultiple } from 'react-icons/bi'
import { ImCross } from 'react-icons/im'
import { useState } from 'react';
import EditTask from "@/components/Tasks/EditTask"
import axios from "axios"
import toast from "react-hot-toast"

const TasksHome = () => {
    const [myTasks, isMyTasksLoading, loading, userAllTaskRefetch] = GetUsersAllTasks();
    const [isOpen, setIsOpen] = useState(false);
    const [editedTask, setEditedTask] = useState(null);
    console.log(myTasks);
    const updateTaskStatus = async (id: any, status: any) => {
        const toastId = toast.loading("Loading...");
        try {
            const res = await axios.patch(`/api/tasks/task-status-update/${id}`, { status: status })
            // console.log(res.data, res);
            if (res.data.modifiedCount) {
                toast.dismiss(toastId);
                userAllTaskRefetch();
                toast.success('Task Updated Successfully!')
            } else {
                toast.dismiss(toastId);
                toast.error('Error updating Task!')
            }
        } catch (error: any) {
            toast.dismiss(toastId);
            toast.error("Task Update Error", error.message)
        }

    }

    return (
        <div className="tasks-bgc pb-5 min-h-screen">
            <TasksNavbar />
            {/* all | completed | incomplete | tasks tab  */}
            <div className="grid grid-cols-3 gap-3 c-auto mt-5  text-center">
                <h1 className="border py-3 hover:bg-sky-950 rounded-lg">All Tasks</h1>
                <h1 className="border py-3 hover:bg-sky-950 rounded-lg">Completed</h1>
                <h1 className="border py-3 hover:bg-sky-950 rounded-lg">Incomplete</h1>
            </div>
            <hr className="c-auto my-8" />
            <table className="c-auto text-center">
                <thead className="border border-gray-500 p-2">
                    <tr className="">
                        <th className="py-3">TaskId</th>
                        <th>Task Title</th>
                        <th>Description</th>
                        <th>Due Date</th>
                        <th>Status</th>
                        <th>Priority</th>
                        <th>Mark Completed</th>
                        <th>Mark Incomplete</th>
                        <th>Edit Task</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myTasks?.map((task: any) => <tr className="border border-gray-500 py-1" key={task._id}>
                            <td className="py-2">{task?.taskID}</td>
                            <td>{task?.taskName}</td>
                            <td>{task?.description ? task.description : `Null`}</td>
                            <td>{task?.deadline}</td>
                            <td className={task.status == 'completed' ? 'text-green-500' : 'text-orange-500'}>{task?.status}</td>
                            <td>{task?.priority}</td>
                            <td>{task?.status == 'completed' ? 'Completed' : <BiSelectMultiple onClick={() => updateTaskStatus(task?.taskID, 'completed')} className="text-lg mx-auto" title={'Mark as Completed'} />}</td>
                            <td>{task?.status == 'incomplete' ? 'Incomplete' : <ImCross onClick={() => updateTaskStatus(task?.taskID, 'incomplete')} className="text-lg mx-auto" title={'Mark as Incomplete'} />}</td>
                            <>
                                <td className="" onClick={() => {
                                    setEditedTask(task);  // Set the task to be edited
                                    setIsOpen(!isOpen);     // Open the modal
                                }}>
                                    <BiEdit className="text-lg mx-auto text-cyan-500" />
                                    <Modal isOpen={isOpen} setIsOpen={setIsOpen} >
                                        <EditTask task={editedTask} />
                                    </Modal>
                                </td>
                            </>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TasksHome