import React from 'react'
import { connect } from 'react-redux'
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import * as actions from '../../store/actions/actions'
const Product = props => {
  const { incrementQty, decrementQty, data } = props

  const {
    description,
    price,
    brand,
    image,
    category,
    quantity,
    _id
  } = data

  return (
    <Card>
      <Card.Img variant='top' src={image} id='card_img' />
      <Card.Body>
        <Card.Title className='shopTitle'>{category}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>{price}</Card.Text>
        <Card.Text>{brand}</Card.Text>
      </Card.Body>
      <ListGroup className='list-group-flush'>
        <ListGroupItem>Cras justo odio</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Button onClick={() => incrementQty(_id)}>+</Button>
        {quantity}
        <Button onClick={() => decrementQty(_id)}>-</Button>
      </Card.Body>
    </Card>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    incrementQty: itemId => dispatch(actions.incrementQty(itemId)),
    decrementQty: itemId => dispatch(actions.decrementQty(itemId))
  }
}

export default connect(null, mapDispatchToProps)(Product)
