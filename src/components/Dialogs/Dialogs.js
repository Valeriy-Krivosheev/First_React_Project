import React from "react"
import './Dialogs.css'
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
const MessageItem = (props) => {
 return (
  <div>
   <li className="dialog__message">{props.message}</li>
  </div>
 )
}

const Dialogs = () => {
 let DialogsData = [
  { id: 1, name: 'Trey' },
  { id: 2, name: 'John' },
  { id: 3, name: 'Bobby' },
  { id: 4, name: 'Neil' },
  { id: 5, name: 'Jack' },
 ]
 const MessagesData = [
  { id: 1, message: 'I do not really know...' },
  { id: 2, message: 'Hey, how is your mum?' },
  { id: 3, message: 'Let is go, it should be nice' },
  { id: 4, message: 'Hmmmmm' },
  { id: 5, message: 'Got it' },

 ]
 const DialogsElem = DialogsData.map(item=> <DialogItem name={item.name} id={item.id} />)
 const Messageselem = MessagesData.map(item=><MessageItem message={item.message} /> )

 return (
  <div>
   <div className='dialogs'>
    <div className='dialogs__list'>
     {DialogsElem}
    </div>
    <div className='dialogs__messages'>
     {Messageselem}
    </div>
   </div>
  </div>
 )
}
export default Dialogs