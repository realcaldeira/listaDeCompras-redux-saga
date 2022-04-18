import React from 'react';
import CustomCard from '../CustomCard/CustomCard';

import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

import './styles.css';
import { Divider } from '@material-ui/core';

export default function Card({footer}){
  return(
    
      <CustomCard
        link="#"
        image="http://s2.glbimg.com/P6Nn4AXYPq-K1Xek4cCKyONYYyA=/e.glbimg.com/og/ed/f/original/2014/01/15/cafe.jpg"
        containerClass="list-item"
      >

        <div>
          <div className='list-item-header'>
            <Typography variant='subtitle1' component='h2'>Café</Typography>
            <Checkbox />
          </div>
            <Typography component='p'>1 Unidade</Typography>
            <Typography component='p'>R$ 10.00</Typography>
        </div>

        <Divider />
          {footer}
      </CustomCard>
  )
}