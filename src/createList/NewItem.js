import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import CustomCard from '../components/CustomCard/CustomCard';
// import { Creators as FormActions } from '../store/action/form';

const NewItem = (props) => (
  <CustomCard link="#" containerClass="list-item">
    <p className='title'>Novo Produto</p>
    <FontAwesomeIcon icon={faPlusCircle} color="e4e4e4" size='8x' />
  </CustomCard>
)

export default NewItem;