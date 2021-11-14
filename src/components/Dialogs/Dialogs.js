import React from "react"
import './Dialogs.css'

const Dialogs = () => {
 return (
  <div>
   <div className='dialogs'>
    <ul className='dialogs__list'>
     <li className='dialog__item active'>
      Robert
     </li>
     <li className='dialog__item'>
      John
     </li>
     <li className='dialog__item'>
      Bobby
     </li>
     <li className='dialog__item'>
      Neil
     </li>
     <li className='dialog__item'>
      Jack
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