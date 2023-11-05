"use client"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "@/hooks/useAuth";

const GetUsersAllTasks = () => {
    const { user, loading } = useAuth();
    const { data: myTasks, isLoading: isMyTasksLoading, refetch: userAllTaskRefetch } = useQuery({
        queryKey: ['myTasks', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios.get(`/api/tasks/get-all-tasks/${user?.email}`);
            return res.data;
        }
    })
    return [myTasks, isMyTasksLoading, loading, userAllTaskRefetch];
}
export default GetUsersAllTasks;