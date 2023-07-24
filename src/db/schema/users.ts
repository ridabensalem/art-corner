import mongoose, {Schema , Document} from 'mongoose';
import Comment from './comments';
import Like from './likes';


interface User extends Document {
    user_id : mongoose.Types.ObjectId;
    name: string;
    email: string;
    password: string;
    likes: Like[];
    comments: Comment[];
}
const UserSchema: Schema = new Schema({
    user_id: {type: mongoose.Types.ObjectId, auto: true},
    name: {type: String, required: true},
    email: {type: String, required: true, unique:true},
    password: {type: String, required: true},
    likes: [{type: Schema.Types.ObjectId, ref: 'Like'}],
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
})

const User = mongoose.model<User>('User', UserSchema);

export default User;