import mongoose, { Schema, Document } from 'mongoose';

interface IProfile extends Document {
  userId: mongoose.Schema.Types.ObjectId;
  name: string;
  email: string;
  phone: string;
  address: string;
  experience: string;
  education: string;
  skills: string;
  createdAt: Date;
  updatedAt: Date;
}

const ProfileSchema: Schema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  experience: { type: String, required: true },
  education: { type: String, required: true },
  skills: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Profile = mongoose.model<IProfile>('Profile', ProfileSchema);

export default Profile;
