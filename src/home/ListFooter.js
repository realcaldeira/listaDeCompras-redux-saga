import React from 'react';

export default function ListFooter(props){
  return(
    <div className='list-footer'>
      <p>01/01/2022</p>
      <p>{props.total}</p>
    </div>
  )
}