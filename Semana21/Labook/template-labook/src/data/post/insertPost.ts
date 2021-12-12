import { post } from "../../type/post";
import { connection } from "../connection";

export const insertPost = async(
   post: post
) => {
   await connection.insert({
    id:post.id,
    photo: post.photo,
    description: post.description,
    type: post.type,
    created_at: post.createdAt,
    author_id: post.authorId 
   }).into('labook_posts')
}