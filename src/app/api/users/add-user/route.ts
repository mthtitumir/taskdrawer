import DbConnect from "@/config/db";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
    if (request.method === "POST") {
        try {
            const newUser = await request.json();
            const db = await DbConnect();
            const allUsers = db.collection('all-users');
            const query = { email: newUser.email };
            const existingUser = await allUsers.findOne(query);
            if (existingUser) {
                return NextResponse.json({ message: 'User already added' });
            }
            const result = await allUsers.insertOne(newUser);
            return NextResponse.json({ message: 'User added', result, newUser });
        } catch (error) {
            console.error("Error adding user:", error);
            return NextResponse.json({ error: "Error adding new user" });
        }
    } else {
        return NextResponse.json({ message: "Method not allowed" });
    }
}