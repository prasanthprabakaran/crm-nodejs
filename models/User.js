import mongoose from "mongoose";
import bcrypt from 'bcrypt'

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide username"],
    },
    password: {
        type: String,
        required: [true, "Please add a password"],
        minlength: 6,
        select: false,
    },
    roles: {
        type: [String],
        default: ["Employee"]
    },
    active: {
        type: Boolean,
        default: true
    }
})

UserSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}

const User = mongoose.model("User",UserSchema);

export default User;

    // firstname: {
    //     type: String,
    //     required: [true, "Please provide username"],
    // },
    // lastname: {
    //     type: String,
    //     required: [true, "Please provide username"],
    // },
    // email:{
    //     type: String,
    //     required: [true, "Please provide email address"],
    //     unique: true,
    //     match: [
    //         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    //         "Please provide a valid email",
    //       ],
    // },