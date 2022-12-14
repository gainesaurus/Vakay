import mongoose from '../database';
import { IUser } from '../Types';

const Schema = mongoose.Schema;
const UserSchema = new Schema<IUser>({
  uid: { type: String, required: true },
  username: { type: String },
  email: { type: String, required: true },
  profile_pic: { type: String, required: true },
});

const User = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
export default User;
