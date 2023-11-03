import connectDB from "@/config/db";
import sendEmailWithNodeMailer from "@/helpers/email";
import createJwt from "@/libs/createJwt";
import { clientUrl, jwtKey } from "@/libs/secret";
import User from "@/models/UserModel";
import { NextResponse } from "next/server";
export const POST = async (request: any) => {
    if (request.method === "POST") {
        try {
            const newUser = await request.json();
            const userExists = await User.exists({ email: newUser?.email });
            if (userExists) {
                return NextResponse.json({ message: 'user already exists!' })
            }
            // jwt create 
            const token = createJwt(newUser, jwtKey, "10m");
            // prepare email
            const emailData = {
                email: newUser.email,
                subject: 'Account Activation Email',
                html: `
                <h2>Hello ${newUser.name}!</h2>
                <p> Please click here to <a href="${clientUrl}/api/users/activate-user/${token}" target="_blank">activate your account!</> </p>
                `
            }
            // send email with nodemailer
            try {
                await sendEmailWithNodeMailer(emailData);
            } catch (error) {
                console.log("error sending verification email!");
            }
            return NextResponse.json({ message: 'user create successfully!', success: true, payload: { newUser, token } });
        } catch (error) {
            console.error("Error adding user:", error);
            return NextResponse.json({ error: "Error adding user data!" });
        }
    } else if (request.method === "GET") {
        const name = 'titumir';
        return NextResponse.json({ message: 'titumir' })
    } else {
        return NextResponse.json({ message: "Method not allowed" });
    }
}