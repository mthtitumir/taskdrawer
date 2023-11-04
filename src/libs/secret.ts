export const serverPort = process.env.SERVER_PORT  || 3000;
// export const mongoUrl = process.env.MONGODB_ATLAS_URL || "mongodb://localhost:27017/taskDrawerDB";
export const jwtKey = process.env.JWT_SECRET_KEY || 'lfslk4hi3hr#t3ttehke444/$$##';
export const smtpUsername = process.env.SMTP_USERNAME;
export const smtpPassword = process.env.SMTP_PASSWORD;
export const clientUrl = process.env.CLIENT_URL;
export const mongoURI = process.env.MONGODB_URI || "mongodb://localhost:27017/taskDrawerDB";