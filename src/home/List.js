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
      link="/lista/edicao"
      footer={<ListFooter total={props.total} date={props.date}/>}
      cardClass={props.openedItems < 1 ? 'closed-list' : 'opened-list'}
    >
     <div>
        <p className="title">{props.list}</p>
        <div className='list-card-body'>
          <ListItem icon={faShoppingBasket} text={`${props.openedItems } Item(s) Restante`} />
          
          <ListItem icon={faCheck} text={`${props.closedItems} Item(s) Comprados`} />

        </div>
      </div>
   </CustomCard>
  )
}