import React from 'react';

import CustomCard from '../components/CustomCard/CustomCard';

export default function newList(){
  return(
    <CustomCard link="/lista" containerClass="new-list-container">
        <div>
          <p className='title'> Adicionar Novas Listas!</p>
        </div>
    </CustomCard>
  )
}