import React from 'react';
import {Link} from 'react-router-dom';
import { Card, 
         CardImg, 
         CardText, 
         CardBody,
         CardTitle, 
         Button } from 'reactstrap';

import './projectpage.css';

export default function ProjectCard(props)
{
  return(
    <div className="col-sm-5 col-md-3">
        <Card className="cardBody">
        <CardImg top width="100%" src={props.data.image} alt="Project image" />
            <CardBody>
            <CardTitle>{props.data.name}</CardTitle>
            <CardText>{props.data.description}</CardText>
            {props.data.linkTo ? (
            <Link to={props.data.linkTo}>
              <Button color= "primary">Read More</Button>
            </Link>
           ):
          ( <Button color= "primary" disabled >Read More</Button> )
            }
            </CardBody>
        </Card>
      </div>
  );
}