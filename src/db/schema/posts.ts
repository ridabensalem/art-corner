import mongoose, {Document ,Schema} from "mongoose";
import Comments from "./comments";
import Likes from "./likes";
interface Post extends Document {
    post_id: mongoose.Types.ObjectId;
    title: string;
    content: string;
    comments: Comments[];
    likes: Likes[];

}
const PostSchema: Schema = new Schema({
    post_id: {type: mongoose.Types.ObjectId, auto: true},
    title: {type: String, required: true},
    content: {type: String, required: true},
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
    likes: [{type: Schema.Types.ObjectId, ref: 'Likes'}],
})
const Post = mongoose.model<Post>('Post', PostSchema);
export default Post;