import React from 'react';
import { connect } from 'react-redux';

import './styles.css'

import NewList from './NewList';
import List from './List';
import { getListTotal, getClosedItems, getOpenedItems } from '../store/reducers/list';

function Home(props){
  return(
    <div className='page-container'>
      <NewList />
      { props.list.items.length > 0 &&
        <List list={props.list.list} total={props.total} openedItems={props.openedItems} closedItems={props.closedItems}/>
      }
    </div>
  )
}

const mapStateToProps = state => ({
  list: state.list,
  total: getListTotal(state),
  openedItems: getOpenedItems(state),
  closedItems: getClosedItems(state),
})

export default connect(mapStateToProps, null)(Home);