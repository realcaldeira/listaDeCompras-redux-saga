import React from 'react';

import { faShoppingBasket, faCheck } from '@fortawesome/free-solid-svg-icons';

import CustomCard from '../components/CustomCard/CustomCard';
import ListFooter from './ListFooter';
import ListItem from './ListItem';

import './list.css'

export default function List(props){
  return(
    <CustomCard 
      containerClass="list-container"
      link="/lista"
      footer={<ListFooter total={props.total} />}
     
    >
     <div>
        <p className="title">{props.list}</p>
        <div className='list-card-body'>
          <ListItem icon={faShoppingBasket} text="1 Item(s) Restante" />
          
          <ListItem icon={faCheck} text="2 Item(s) Comprados" />

        </div>
      </div>
   </CustomCard>
  )
}