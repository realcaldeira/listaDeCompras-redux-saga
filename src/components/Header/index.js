import React from 'react';

import AppBar from '@material-ui/core/AppBar';

export default function Header(){
  return(
    <AppBar position="static" color='primary'>
        <div className='header'>
          <p className='title'>Lista de compras</p>
        </div>
      </AppBar>
  )
}