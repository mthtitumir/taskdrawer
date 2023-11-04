import DbConnect from "@/config/db";
import { NextResponse } from "next/server";
export const PATCH = async (request:any, {params}:any) => {
    if (request.method === "PATCH") {
        try {
            const db = await DbConnect();
            const {status} = await request.json();
            const allTasks = db.collection('all-tasks');
            console.log(params);
            const query = {taskID: parseInt(params?.id)}
            const result = await allTasks.updateOne(query, {$set:{status}})
            return NextResponse.json(result);
        } catch (error) {
            console.error("Error updating status:", error);
            NextResponse.json({ error: "Error updating status" });
        }
    } else {
        NextResponse.json({ message: "Method not allowed" });
    }
}