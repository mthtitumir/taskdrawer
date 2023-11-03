import connectDB from "@/config/db";
import { NextResponse } from "next/server";
export const GET = async (request:any) => {
    if (request.method === "GET") {
        try {
            const db = await connectDB();
            return NextResponse.json({message: "get successful from get test", });
        } catch (error) {
            console.error("Get error", error);
            NextResponse.json({ error: "Get error request" });
        }
    } else {
        NextResponse.json({ message: "Method not allowed" });
    }
}