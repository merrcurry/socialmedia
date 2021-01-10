import React from "react";
import s from './DialogsItem.module.css'
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
   return (
      <div className={s.dialogs_item}>
         <img src="https://sun9-34.userapi.com/c623116/v623116626/46a18/ULJZYvSsER0.jpg?ava=1" alt=""/>
         <NavLink to={'/im/' + props.id} activeClassName={s.activeDialog}>{props.name}</NavLink>
      </div>
   )
}

export default DialogsItem;
