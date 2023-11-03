import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
    userID: {
        type: String,
        required: [true, 'UserID is missing!'],
    },
    name: {
        type: String,
        required: [true, 'User name is missing!'],
        trim: true,
        maxLength: [31, "The length of user name can be maximum 31 characters!"],
        minLength: [3, "The length of user name can be maximum 3 characters!"]
    },
    email: {
        type: String,
        required: [true, "user name is required!"],
        trim: true,
        unique: true,
        lowercase: true,
        validate: {
            validator: function (v:string) {
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
            },
            message: 'Please enter a valid email!'
        }
    },
    password: {
        type: String,
        required: [true, "user password is required!"],
        trim: true,
        minlength: [6, "user name must be minimum 6 characters!"],
        set: (v:any) => bcrypt.hashSync(v, bcrypt.genSaltSync(10)),
    },
    image: {
        type: String,
        default: "https://i.ibb.co/3Mrx6Fg/blank-profile.webp"
    },
}, {timestamps: true});

const User = model('users', userSchema);
export default User;