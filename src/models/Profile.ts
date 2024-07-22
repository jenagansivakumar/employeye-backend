import mongoose, {Schema, Document} from "mongoose";

interface IProfile extends Document {
    userId: String,
    name: String,
    email: String,
    phone: Number,
    address: String,
    experience: String,
    education: String,
    skills: String,
    createdAt: Date,
    updatedAt: Date
}

