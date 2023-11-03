import { smtpPassword, smtpUsername } from '@/libs/secret';
import nodemailer from 'nodemailer';
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587, // SMTP port
    secure: false, // true for 465, false for other ports
    auth: {
        user: smtpUsername,
        pass: smtpPassword,
    },
});

const sendEmailWithNodeMailer = async (emailData: any) => {
    try {
        const mailOptions = {
            from: smtpUsername, // sender address
            to: emailData.email, // list of receivers
            subject: emailData.subject, // Subject line
            html: emailData.html, // html body
        };
        const info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.response);
    } catch (error) {
        console.log(error);
        throw error;
    };

}

export default sendEmailWithNodeMailer;

