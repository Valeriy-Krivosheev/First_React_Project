import React from "react";
import './My_posts.css'
import Post from "./Post_1/Post";

const My_posts = () => {
 return (
  <div>
   <div>
    <h2>
     My posts
    </h2>

    <input type="text" />
    <button>Add new post</button>
   </div>
   <div>
    <Post />
    <div>
    <Post />
    </div>
    <div>
    <Post />
    </div>
    <div>
    <Post />
    </div>
   </div>
  </div>
 )
}
export default My_posts;
