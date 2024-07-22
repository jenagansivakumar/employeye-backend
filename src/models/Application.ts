import mongoose, {Schema, Document} from "mongoose";

interface IApplication extends Document {
    applicantName : string;
    applicantEmail : string;
    jobId: mongoose.Schema.Types.ObjectId;
    status: string;
    createdAt: Date;
    updatedAt: Date;

}

const applicationSchema = new Schema({
    applicantName: {
        type: String,
        required: true
    },
    applicantEmail: {
        type: String,
        required: true
    },
    jobId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    
})