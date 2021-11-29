import React from "react";
import My_posts from "./My_posts/My_posts";
import About from "./About/About";
import './Profile.css'

const Profile = (props) => {

 return (
  <main className='Profile'>
   <About />
   <My_posts PostesData={props.PostesData}/>
  </main>
 )
}

export default Profile;