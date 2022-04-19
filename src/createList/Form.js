import React, { useState } from 'react';

import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { InputAdornment } from '@mui/material';
import Button from '@material-ui/core/Button';

const units = ['kg', 'lt', 'un']

export default function Form(props){
  const [list, setList] = useState('');
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('');
  const [price, setPrice] = useState('');
  const [showError, setShowError] = useState(false);

  function handleSubmit(){
    if(!product || !quantity || !unit || !list){
      setShowError(true)
    }else{
      props.addProduct({product, quantity, unit, price}, list)
      setList('');
      setProduct('');
      setQuantity('');
      setUnit('');
      setPrice('');
      setShowError(false);
    }
  }

  return(
    <form className='form-container'>
        <div className='form-row'>
          <TextField
              label="Lista"
              name='list'
              value={list}
              onChange={(e)=> setList(e.target.value)}
              required
              error={!list && showError}
            />

          <Button
            variant='outlined' 
            color='secondary'
            onClick={handleSubmit}
          >
            Adicionar
          </Button>
        </div>

        <div className='form-row'>
          <TextField
              label="Produto"
              name='product'
              value={product}
              onChange={(e)=> setProduct(e.target.value)}
              required
              error={!product && showError}
            />
          <TextField
              label="Quantidade"
              name='quantity'
              value={quantity}
              onChange={(e)=> setQuantity(e.target.value)}
              required
              error={!quantity && showError}
            />
          <TextField
              select
              label="Unidade"
              name='unit'
              value={unit}
              onChange={(e)=> setUnit(e.target.value)}
              required
              error={!unit && showError}
            >
              {units.map((option) => (<MenuItem key={option} value={option}>{option}</MenuItem>))}
            </TextField>
          <TextField
              label="Preço"
              name='price'
              value={price}
              onChange={(e)=> setPrice(e.target.value)}
              InputProps={{
                startAdornment: <InputAdornment position='start'>R$ </InputAdornment>
              }}
            />
        </div> 
        
      </form>
  )
}