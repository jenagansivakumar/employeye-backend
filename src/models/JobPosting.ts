import mongoose, { Schema, Document } from 'mongoose';

interface IJobPosting extends Document {
  jobTitle: string;
  companyName: string;
  location: string;
  jobType: string;
  salary: number;
  description: string;
  requirements: string;
  postedAt: Date;
  updatedAt: Date;
}

const JobPostingSchema: Schema = new Schema({
  jobTitle: { type: String, required: true },
  companyName: { type: String, required: true },
  location: { type: String, required: true },
  jobType: { type: String, required: true },
  salary: { type: Number, required: true },
  description: { type: String, required: true },
  requirements: { type: String, required: true },
  postedAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const JobPosting = mongoose.model<IJobPosting>('JobPosting', JobPostingSchema);

export default JobPosting;
