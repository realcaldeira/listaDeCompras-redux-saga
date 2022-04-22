import React from 'react';

export default function ListFooter(props){
  return(
    <div className='list-footer'>
      <p>{props.date}</p>
      <p>{props.total}</p>
    </div>
  )
}