import DbConnect from "@/config/db";
import { NextResponse } from "next/server";

export const GET = async (request:any, {params}:any) => {
    if (request.method === "GET") {
        try {
            const email = params?.email;
            const db = await DbConnect();
            const allTasks = db.collection('all-tasks');
            const query = { creatorEmail: email };
            const result = await allTasks.find(query).toArray();
            return NextResponse.json(result);
        } catch (error) {
            console.error("Error fetching user tasks:", error);
            return NextResponse.json({ error: "Error fetching user tasks" });
        }
    } else {
        return NextResponse.json({ message: "Method not allowed" });
    }
};