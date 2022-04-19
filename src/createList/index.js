import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './styles.css';
import Form from './Form';
import Card from '../components/Card';
import ListItemFooter from './ListItemFooter';
import { Creators as ListAction } from '../store/action/list';

function CreateList(props){
  function addProduct(product, list){
    props.addProduct(product, list)
  }

  return(
    <div className='page-container'>
      <Form addProduct={addProduct} />

      <div className='list-items-container'>
        <Card 
          footer={<ListItemFooter />}
        />
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  list: state.list
});

const mapDispatchToProps = dispatch => bindActionCreators(ListAction, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CreateList);
