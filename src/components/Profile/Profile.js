import React from "react";
import My_posts from "./My_posts/My_posts";
import './Profile.css'

const Profile = () => {
 return (
  <main className='Profile'>
   <div>
    <img className='Profile__img'
     src="https://catherineasquithgallery.com/uploads/posts/2021-03/1614612249_142-p-fon-dlya-fotoshopa-priroda-216.jpg" alt="" />
   </div>
   <div>
    photo + description
   </div>
   <My_posts />
  </main>
 )
}

export default Profile;