import mongoose, {Document , Schema} from "mongoose";
interface Likes extends Document {
    like_id: mongoose.Types.ObjectId;
    user_id: string;
    post_id: string;

}
const LikeSchema: Schema = new Schema({
    like_id: {type: mongoose.Types.ObjectId, auto: true},
    user_id: {type: String, required: true},
    post_id: {type: String, required: true},

})
const Likes = mongoose.model<Likes>('Likes', LikeSchema);
export default Likes;