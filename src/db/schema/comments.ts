import mongoose, {Document , Schema} from "mongoose";
interface Comments extends Document {
    comment_id: mongoose.Types.ObjectId;
    user_id: string;
    post_id: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
}
const CommentSchema: Schema = new Schema({
    comment_id: {type: mongoose.Types.ObjectId, auto: true},
    user_id: {type: String, required: true},
    post_id: {type: String, required: true},
    content: {type: String, required: true},
    createdAt: {type: Date, required: true},
    updatedAt: {type: Date, required: true},

})
const Comments= mongoose.model<Comments>('Comment', CommentSchema);
export default Comments;