import React from "react";

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { Divider } from "@material-ui/core";

import './styles.css';

export default function CustomCard(props){
  return(
    <div className={props.containerClass}>
        <Card className='card'>
          <CardActionArea className='card-action-area'>
            <CardContent className='card-content'>
              {props.children}
            </CardContent>
          </CardActionArea>
          { props.footer && (
            <>
              <Divider />
              <CardActions className="card-footer">
                { props.footer }
              </CardActions>
            </>
          )}
        </Card>
      </div>
  )
}