import React from 'react';

import CustomCard from '../components/CustomCard/CustomCard';

export default function newList(props){
  return(
    <CustomCard action={props.newList} link="/lista/novo" containerClass="new-list-container">
        <div>
          <p className='title'> Adicionar Novas Listas!</p>
        </div>
    </CustomCard>
  )
}