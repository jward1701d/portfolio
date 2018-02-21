import React from 'react';
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
            <Button color= "primary" disabled >Read More</Button>
            </CardBody>
        </Card>
      </div>
  );
}