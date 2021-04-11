import React from "react";
import { Form,Button,Row,Col } from "react-bootstrap";
export const PoductPost=()=>{

    return(

<Form>
  <Row>
    <Col>
      <Form.Control placeholder="Enter ID" />
    </Col>
    <Col>
      <Form.Control placeholder="Enter Name " />
    </Col>
  </Row>

  <Row>
    <Col>
      <Form.Control placeholder="category " />
    </Col>
    <Col>
      <Form.Control placeholder="Price " />
    </Col>
  </Row>
  <Row>
    <Col>
      <Form.Control placeholder="brand:" />
    </Col>
    <Col>
      <Form.Control placeholder="Last name" />
    </Col>
  </Row>
</Form>


    )


}