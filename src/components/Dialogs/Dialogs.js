import React from "react"
import './Dialogs.css'
import { NavLink } from "react-router-dom"

const Dialogs = () => {
 return (
  <div>
   <div className='dialogs'>
    <ul className='dialogs__list'>
     <li className='dialog__item'>
      <NavLink className='dialog__link' to='/dialogs/1'>Robert</NavLink>
     </li>
     <li className='dialog__item'>
      <NavLink className='dialog__link' to='/dialogs/2'>John</NavLink>
     </li>
     <li className='dialog__item'>
      <NavLink className='dialog__link' to='/dialogs/3'>Bobby</NavLink>
     </li>
     <li className='dialog__item'>
      <NavLink className='dialog__link' to='/dialogs/4'>Neil</NavLink>
     </li>
     <li className='dialog__item'>
      <NavLink className='dialog__link' to='/dialogs/5'>Jack</NavLink>
     </li>
    </ul>
    <ul className='dialogs__messages'>
     <li className="dialog__message">I do not really know...</li>
     <li className="dialog__message">Hey, how is your mum?</li>
     <li className="dialog__message">Let is go, it should be nice</li>
     <li className="dialog__message">Hmmmmm</li>
     <li className="dialog__message">Got it</li>
    </ul>
   </div>
  </div>
 )
}
export default Dialogs