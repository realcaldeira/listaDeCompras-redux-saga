import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';


export default function ListItemFooter({item}){
  return(
    <div className='list-card-footer'>
      <div className='list-card-footer-actions'>
        <FontAwesomeIcon 
          icon={faPen}
          color="#00b0ff"
          size='1x' 
        />
        <FontAwesomeIcon 
          icon={faTrash}
          color="#e91e63"
          size='1x' 
        />
      </div>
      <p>Total: R$ {item.total}</p>
    </div>
  )
}