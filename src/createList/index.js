import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './styles.css';
import Form from './Form';
import Card from '../components/Card';
import ListItemFooter from './ListItemFooter';
import { Creators as ListAction } from '../store/action/list';
import NewItem from './NewItem';

function CreateList(props){
  function addProduct(product, list){
    props.addProduct(product, list)
  }

  return(
    <div className='page-container'>
      <Form 
        addProduct={addProduct}
        updateProduct={props.updateProduct}
        url={props.match.params.action}
     />

      <div className='list-items-container'>
        {props.list.items.map(item => 
          <Card 
            
            key={item.id} 
            toggleProduct={props.toggleProduct}
            item={item} 
            footer={<ListItemFooter item={item} deleteProduct={props.deleteProduct} list={props.list.list} />} />
        )}   

        { props.match.params.action === 'edicao' &&
          <NewItem />
        }
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  list: state.list
});

const mapDispatchToProps = dispatch => bindActionCreators(ListAction, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CreateList);
