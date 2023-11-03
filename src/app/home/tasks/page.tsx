import TasksNavbar from "@/components/Navbar/TasksNavbar"

const TasksLayout = () => {
    return (
        <div className="tasks-bgc pb-5">
            <TasksNavbar />
            {/* all | completed | incomplete | tasks tab  */}
            <div className="grid grid-cols-3 gap-3 c-auto mt-5  text-center">
                <h1 className="border py-3 hover:bg-sky-950 rounded-lg">All Tasks</h1>
                <h1 className="border py-3 hover:bg-sky-950 rounded-lg">Completed</h1>
                <h1 className="border py-3 hover:bg-sky-950 rounded-lg">Incomplete</h1>
            </div>
            <hr className="c-auto my-8" />
            <table className="c-auto">
                <thead className="border">
                    <tr>
                        <th>#</th>
                        <th>Task Title</th>
                        <th>Description</th>
                        <th>Due Date</th>
                        <th>Status</th>
                        <th>Priority</th>
                        <th>Completed</th>
                        <th>Incomplete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Malcolm Lockyer</td>
                        <td>1961</td>
                        <td>34/34</td>
                        <td>Completed</td>
                        <td>High</td>
                        <td>Tick</td>
                        <td>Tick</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>The Eagles</td>
                        <td>1972</td>
                        <td>34/34</td>
                        <td>Completed</td>
                        <td>High</td>
                        <td>Tick</td>
                        <td>Tick</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Earth, Wind, and Fire</td>
                        <td>1975</td>
                        <td>34/34</td>
                        <td>Completed</td>
                        <td>High</td>
                        <td>Tick</td>
                        <td>Tick</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TasksLayout