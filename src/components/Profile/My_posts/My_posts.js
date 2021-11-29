import React from "react";
import './My_posts.css'
import Post from "./Post_1/Post";

const My_posts = (props) => {
 

const PostsElem = props.PostesData.map(item=><Post message={item.message} likesCount={item.likesCount}/> )
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
   {PostsElem}
  </div>
 )
}
export default My_posts;

