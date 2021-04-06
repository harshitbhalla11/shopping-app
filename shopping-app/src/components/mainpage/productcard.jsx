import React from 'react';
import { Container,Button, Card, ListGroup, ListGroupItem, Col, Row } from "react-bootstrap";
import data from "./data";
import AfterLoginNav from "../afterLoginnav"
const Productlist = () => {

 
    return (
      <Container>
        <AfterLoginNav />
        
        {data.products.map(product=>
         

          <Col md={4}>
            <Card >

              <Card.Img variant="top" src={product.image} id="card_img" />
              <Card.Body>
                <Card.Title className="shopTitle">{data.category}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>{product.price}</Card.Text>
                <Card.Text>{product.brand}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>

              </ListGroup>
              <Card.Body>
                <Card.Link >Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
                <Button>Add to Cart</Button>
              </Card.Body>

            </Card>
          </Col>
    
          
          )}
        
      </Container>
    );

};

export default Productlist;