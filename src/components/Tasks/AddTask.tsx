"use client"
import useAuth from '@/hooks/useAuth';
import axios from 'axios';
import moment from 'moment';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import PrimaryButton from '../miniComponents/PrimaryButton';


const AddTask = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { user } = useAuth();
    const taskID = Math.floor(1000000000 + Math.random() * 9000000000);
    const status = 'incomplete';
    const creatorEmail = user?.email;
    const onSubmit = async (data: any) => {
        const { taskName, description, deadline, priority } = data;
        const task = { taskID, taskName, description, deadline, status, priority, deadline, creatorEmail };
        console.log(task);
        
        try {
            const response = await axios.post(`/api/tasks/add-task`, task);
            console.log(response.data);
            if (response.data.insertedId) {
                toast.success("Task added successfully!");
            } else {
                toast.error("Task posting failed!");
            }
        } catch (error:any) {
            console.error('Error submitting form:', error);
            toast.error(error.message || "Task posting failed!");
        }
        reset();
    }

    return (
        <div>
            <div className="p-3 w-full shadow-2xl border border-cyan-500 rounded-md mt-3">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
                    <div className="">
                        <label className="label">
                            <span className="">Task Name:</span>
                        </label>
                        <input type="text" placeholder="Task Name" {...register("taskName", { required: true })} className="input" />
                        {errors.taskName?.type === 'required' && <p className="text-red-500">taskName is required</p>}
                    </div>
                    <div className="">
                        <label className="label">
                            <span className=""> Description:</span>
                        </label>
                        <input type="text" placeholder="Description" {...register("description", { required: true })} className="input" />
                        {errors.description?.type === 'required' && <p className="text-red-500">description is required</p>}
                    </div>
                    <div className="">
                        <label className="label">
                            <span className="">Deadline:</span>
                        </label>
                        <input type="date" placeholder="Deadline" {...register("deadline", { required: true })} className="input" />
                        {errors.deadline?.type === 'required' && <p className="text-red-500">deadline is required</p>}
                    </div>
                    <div className="">
                        <label className="label">
                            <span className="">Priority:</span>
                        </label>
                        <select className='input rounded-lg' {...register("priority", { required: true })}>
                            <option className='bg-black' value="" disabled >Select Priority </option>
                            <option className='bg-black' value="high">High</option>
                            <option className='bg-black' value="medium">Medium</option>
                            <option className='bg-black' value="low">Low</option>
                        </select>
                    </div>
                    <div className="mt-3">
                        <button type='submit' className=" input ">
                            Add Task
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTask;