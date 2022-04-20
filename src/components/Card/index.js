import React from 'react';
import CustomCard from '../CustomCard/CustomCard';

import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

import './styles.css';
import { Divider } from '@material-ui/core';

export default function Card({ item, toggleProduct, footer}){

  return(
      <CustomCard
        link="#"
        image="http://s2.glbimg.com/P6Nn4AXYPq-K1Xek4cCKyONYYyA=/e.glbimg.com/og/ed/f/original/2014/01/15/cafe.jpg"
        containerClass="list-item"
        action={()=> toggleProduct(item.id)}
      >
        <div>
          <div className='list-item-header'>
            <Typography variant='subtitle1' component='h2'>{item.product}</Typography>
            <Checkbox checked={item.checked} />
          </div>
            <Typography component='p'>{item.quantity} {item.unit}</Typography>
            <Typography component='p'>R$ {item.price}</Typography>
        </div>

        <Divider />
          {footer}
      </CustomCard>
  )
}