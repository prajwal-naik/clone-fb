import { useCollection } from "react-firebase-hooks/firestore";
import Post from "./Post.js";
import { db } from "../firebase";

function Posts(){
    const [realtimePosts] = useCollection(
        db.collection("posts").orderBy("timestamp", "desc")
    );
    return(
        <div>
            {/* <h1> INSIDE </h1> */}
            {realtimePosts?.docs.map(post =>{
                return(
                    <Post
                        key = {post.id}
                        name = {post.data().name}
                        message = {post.data().message}
                        email = {post.data().timestamp}
                        image = {post.data().image}
                        postImage = {post.data().postImage}
                    />
                );
            })}
        </div>
    );
}

export default Posts;