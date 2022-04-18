import React from 'react';

import './styles.css';
import Form from './Form';
import Card from '../components/Card';
import ListItemFooter from './ListItemFooter';



export default function CreateList(){
  return(
    <div className='page-container'>
      <Form />

      <div className='list-items-container'>
        <Card 
          footer={<ListItemFooter />}
        />
      </div>
    </div>
  )
}
