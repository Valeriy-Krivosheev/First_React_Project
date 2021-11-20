import React from "react";
import './My_posts.css'
import Post from "./Post_1/Post";

const My_posts = (props) => {
 let PostesData = [
  {id:1, message:'Whats upp Guys?', likesCount: 10},
  {id:2, message:'That is cool social network', likesCount: 21},
  {id:3, message:'Wow, i have found smth interesting here', likesCount: 3},
  {id:4, message:'Sometimes i feel tired...', likesCount: 25},
  {id:5, message:'Who is gonna go on date with me?', likesCount: 30},
]
const PostsElem = PostesData.map(item=><Post message={item.message} likesCount={item.likesCount}/> )
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

