import React, { useEffect, useState } from 'react';

import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { InputAdornment } from '@mui/material';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as FormActions} from '../store/action/form'

const units = ['Quilos', 'Litros', 'Unidades']

function Form(props){
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
      props.form.action === 'update' ?  updateItem(product, quantity, unit, price) : addItem(product, quantity, unit, price)
    }
  }

  function addItem(product, quantity, unit, price){
    props.addProduct({product, quantity, unit, price}, list);
    clearState()
    props.finishAdd();
  }

  function updateItem(product, quantity, unit, price){
    const { id, checked } = props.form.productToUpdate;
    console.log(props.productToUpdate)
    props.updateProduct({product, quantity, unit, price, id, checked}, list);
    clearState();
    props.finishUpdate();
  }

  function clearState(){
    setProduct('');
    setQuantity('');
    setUnit('');
    setPrice('');
    setShowError(false);
  }

  useEffect(()=>{
    if(props.form.action === 'update'){
      const { product, quantity, unit, price } = props.form.productToUpdate;
      setList(props.form.listToUpdate);
      setProduct(product);
      setQuantity(quantity);
      setUnit(unit);
      setPrice(price);
      setShowError(false);
    }

    if(props.form.action === 'new'){
      setList(props.form.listToUpdate)
    }
  },[props.form.action, props.form])

  if(!props.showForm){
    return <div></div> 
  }else{
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
              Salvar
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
}

const mapStateToProps = (state, ownProps) => ({
  form: state.form,
  showForm: state.form.action || ownProps.url === 'novo'
});

const mapDispatchToProps = dispatch => bindActionCreators(FormActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Form);