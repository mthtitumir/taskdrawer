import DbConnect from "@/config/db";
import { NextResponse } from "next/server";
export const DELETE = async (request: any, { params }: any) => {
    if (request.method === "DELETE") {
        try {
            const db = await DbConnect();
            const allTasks = db.collection('all-tasks');
            // console.log(params);
            const query = { taskID: parseInt(params?.id) };
            const result = await allTasks.deleteOne(query);
            // console.log(result);
            return NextResponse.json(result);
        } catch (error) {
            console.error("Error deleting task:", error);
            NextResponse.json({ error: "Error deleting task" });
        }
    } else {
        NextResponse.json({ message: "Method not allowed" });
    }
}

export const PUT = async (request:any, { params }:any) => {
    if (request.method === "PUT") {
        try {
            const db = await DbConnect();
            const allTasks = db.collection('all-tasks');
            const newData = await request.json();
            const query = { taskID: parseInt(params?.id) };
            const updateDoc = { $set: newData };
            const result = await allTasks.updateOne(query, updateDoc);
            return NextResponse.json(result);
        } catch (error) {
            console.error("Error updating task:", error);
            NextResponse.json({ error: "Error updating task" });
        }
    } else {
        NextResponse.json({ message: "Method not allowed" });
    }
}