"use client"
import TasksNavbar from "@/components/Navbar/TasksNavbar"
import GetUsersAllTasks from "@/hooks/tanstackHooks/GetUsersAllTasks"
import { BiSelectMultiple } from 'react-icons/bi'
import { ImCross } from 'react-icons/im'

const TasksHome = () => {
    const [myTasks, isMyTasksLoading, loading] = GetUsersAllTasks();
    console.log(myTasks);

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
                    </tr>
                </thead>
                <tbody>
                    {
                        myTasks?.map((task: any) => <tr className="border border-gray-500 py-1" key={task._id}>
                            <th className="py-2">{task?.taskID}</th>
                            <th>{task?.taskName}</th>
                            <th>{task?.description ? task.description : `Null`}</th>
                            <th>{task?.deadline}</th>
                            <th className={task.status == 'completed' ? 'text-green-500' : 'text-orange-500'}>{task?.status}</th>
                            <th>{task?.priority}</th>
                            <th><BiSelectMultiple className="mx-auto text-red-600 font-semibold hover:animate-pulse" /></th>
                            <th><ImCross className="mx-auto text-center text-red-600 font-semibold hover:animate-pulse hover:text-red-500" /></th>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TasksHome