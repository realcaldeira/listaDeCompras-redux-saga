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
        image={item.img}
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