import React from "react";
import './Header.css'

const Header = () => {
 return (
  <header className='header'>
   <a className='header__link'>
    <img className='header__logo' src="http://cdn.onlinewebfonts.com/svg/img_176857.png" alt="" />
    <h1 className='header__title'>LinkInBear</h1>
    </a>
    <div className='header__top'>
     <h2>Jahseh </h2>
     <img src="https://ae01.alicdn.com/kf/Hb99c267b684d42ed86fdcfc6dd8c3a40M/Xxxtentacion.jpg_q50.jpg" alt="" />
    </div>

  </header>
 )
}

export default Header;