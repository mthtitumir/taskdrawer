"use client"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const GetSingleTaskById = (id:any) => {
    const { data: task, isLoading: isTaskLoading, refetch } = useQuery({
        queryKey: ['comments', id],
        enabled: false,
        queryFn: async () => {
            const res = await axios.get(`/api/tasks/single-task-by-id-get-patch-delete/${id}`);
            console.log(res.data);
            return res.data;
            
        }
    })
    return [task, isTaskLoading, refetch]
}
export default GetSingleTaskById;