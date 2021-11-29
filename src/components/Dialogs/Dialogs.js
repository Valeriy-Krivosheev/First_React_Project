import React from "react"
import './Dialogs.css'
import DialogItem from "./Dialogs__item/Dialog__item"
import MessageItem from "./Message/Message"




const Dialogs = (props) => {
 
 const DialogsElem = props.DialogsData.map(item=> <DialogItem name={item.name} id={item.id} />)
 const Messageselem = props.MessagesData.map(item=><MessageItem message={item.message} /> )

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