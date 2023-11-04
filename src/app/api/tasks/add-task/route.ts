import DbConnect from "@/config/db";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
    if (request.method === "POST") {
        try {
            const task = await request.json();
            const db = await DbConnect();
            const allTasks = db.collection('all-tasks');
            const result = await allTasks.insertOne(task);
            return NextResponse.json(result);
        } catch (error) {
            console.error("Error adding task:", error);
            return NextResponse.json({ error: "Error adding new task" });
        }
    } else {
        return NextResponse.json({ message: "Method not allowed" });
    }
}