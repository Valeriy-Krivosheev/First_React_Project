import React from "react";
import './Post.css'

const Post = (props) => {
 return (
  <div className='new__post'>

   <img src="https://ae01.alicdn.com/kf/Hb99c267b684d42ed86fdcfc6dd8c3a40M/Xxxtentacion.jpg_q50.jpg" alt="" />
   {props.message}
   <div className='new__post-like'>
    <div> 
     <button>{props.likesCount} likes</button> 
     </div> 
   </div>
  </div>
 )
}
export default Post;

