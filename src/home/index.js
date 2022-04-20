import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './styles.css';
import NewList from './NewList';
import List from './List';
import { getListTotal, getClosedItems, getOpenedItems } from '../store/reducers/list';
import { Creators as ListActions } from '../store/action/list';

function Home(props){
  return(
    <div className='page-container'>
      <NewList newList={props.newList} />
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
});

const mapDispatchToProps = dispatch => bindActionCreators(ListActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home);