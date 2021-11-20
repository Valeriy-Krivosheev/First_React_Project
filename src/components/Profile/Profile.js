import React from "react";
import My_posts from "./My_posts/My_posts";
import About from "./About/About";
import './Profile.css'

const Profile = () => {
 return (
  <main className='Profile'>
   <About />
   <My_posts />
  </main>
 )
}

export default Profile;