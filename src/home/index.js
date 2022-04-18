import React from 'react';

import './styles.css'

import NewList from './NewList';
import List from './List';

export default function Home(){
  return(
    <div className='page-container'>
      <NewList />
      <List />
    </div>
  )
}