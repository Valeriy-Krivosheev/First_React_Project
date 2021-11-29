import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from 'react-router-dom';




const App = (props) => {

 return (
  <BrowserRouter>
   <div className='app-wrapper'>
    <Header />
    <Nav />
    <div className='main'>
     <Routes>
      <Route path='/dialogs' element={<Dialogs DialogsData={props.state.MessagesPage.DialogsData} MessagesData={props.state.MessagesPage.MessagesData} />} />
      <Route path='/' element={<Profile PostesData={props.state.ProfilePage.PostesData} />} />
     </Routes>

    </div>


   </div>
  </BrowserRouter>
 );

}

export default App;
