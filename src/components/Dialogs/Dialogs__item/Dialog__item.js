import './Dialog__item.css'
import { NavLink } from "react-router-dom"
const DialogItem = (props) => {
 return (
  <div>
   <li className='dialog__item'>
    <NavLink className='dialog__link' to={'/dialogs/' + props.id}>{props.name}</NavLink>
   </li>
  </div>
 )
}
export default DialogItem