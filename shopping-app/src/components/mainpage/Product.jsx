import React,{useState} from 'react'
import { connect } from 'react-redux'
import { Button, Card, Form, ListGroup, ListGroupItem } from 'react-bootstrap'
import * as actions from '../../store/actions/actions'
import './product.css'
import { BiPlusCircle,BiMinusCircle } from "react-icons/bi";
import { IconContext } from "react-icons";
import { firebase, db } from '../../components/firebase/firebase';
const Product = props => {
  const [CartButton, setCartButton] = useState(false);
  const { incrementQty, decrementQty, data,addToCart } = props

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
    <Card className="text-center .ml-3">
      <Card.Img variant='top' src={image} alt={category} id='card_img' />
      <Card.Body key={Product._id}>
        <Card.Title className='shopTitle'>{category}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>{price}</Card.Text>
        <Card.Text>{brand}</Card.Text>
      </Card.Body>
      <ListGroup className='list-group-flush'>
       
      </ListGroup>
      <IconContext.Provider value={{ color: "purple" ,size:'2em' }}>
      <Card.Body>
        {/* <Button onClick = {() => setCartButton({CartButton: true})}>Add To Cart</Button> */}
        
          <Form.Label  onClick={() => incrementQty(_id)}><BiPlusCircle /></Form.Label>
        {quantity}
        <Form.Label onClick={() => decrementQty(_id)}><BiMinusCircle/></Form.Label>
       
     

  

      {/* <Button className='addTocart' onClick={() => addToCart(_id,quantity,price)}>Add to Cart</Button> */}
      </Card.Body>
      </IconContext.Provider>

    </Card>
  )
}


// eslint-disable-next-line no-undef
// const addToCart = (_id,quantity,price) =>  {
//   db.collection("cities").doc("LA").set({
//     name: "Los Angeles",
//     state: "CA",
//     country: "USA"
// })
// .then(() => {
//     console.log("Document successfully written!");
// })
// .catch((error) => {
//     console.error("Error writing document: ", error);
// });
// }

const mapDispatchToProps = dispatch => {
  return {
    incrementQty: itemId => dispatch(actions.incrementQty(itemId)),
    decrementQty: itemId => dispatch(actions.decrementQty(itemId)),
    // addToCart:(itemId,quantity,price) => dispatch(actions.addToCart(itemId,quantity,price))
  }
}

export default connect(null, mapDispatchToProps)(Product)
