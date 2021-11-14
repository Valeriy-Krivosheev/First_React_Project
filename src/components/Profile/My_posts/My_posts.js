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
    <div className='new__post-item'>
     <textarea className='new__post-textarea'></textarea>
     <button>Add new post</button>
    </div>

   </div>
   <div>
    <Post message='Whats upp Guys?' />
    <div>
     <Post message='That is cool social network' />
    </div>
   </div>
  </div>
 )
}
export default My_posts;

