import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket, faCheck } from '@fortawesome/free-solid-svg-icons';

import './styles.css'
import CustomCard from '../components/CustomCard/CustomCard';

export default function Home(){
  return(
    <div className='page-container'>

      <CustomCard containerClass="new-list-container">
        <div>
          <p className='title'> Adicionar Novas Listas!</p>
        </div>
      </CustomCard>

      <CustomCard 
        containerClass="list-container"
        footer={
        <div className='list-footer'>
          <p>01/01/2022</p>
          <p>100.00</p>
        </div>}
      >
         <div>
            <p className="title">Mês</p>
            <div className='list-card-body'>
              <div className='list-card-item'>
                <FontAwesomeIcon icon={faShoppingBasket} size="sm" />
                <p>1 Item(s) Restante</p>
              </div>
              <div className='list-card-item'>
              <FontAwesomeIcon icon={faCheck} size="sm" />
                <p>2 Item(s) Comprados</p>
              </div>
            </div>
          </div>
      </CustomCard>

      {/* 

      <div className='list-container'>
        <Card className='card'>
          <CardActionArea className='card-action-area'>
            <CardContent className='card-content'>
              <div>
                <p className="title">Mês</p>
                <div className='list-card-body'>
                  <div className='list-card-item'>
                    <FontAwesomeIcon icon={faShoppingBasket} size="sm" />
                    <p>1 Item(s) Restante</p>
                  </div>
                  <div className='list-card-item'>
                  <FontAwesomeIcon icon={faCheck} size="sm" />
                    <p>2 Item(s) Comprados</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </CardActionArea>
          <Divider/>
          <CardActions className='card-footer'>
            <p>01/01/2022</p>
            <p>100.00</p>
          </CardActions>
        </Card>
      </div> */}
    </div>
  )
}