import React from 'react'
import { connect } from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import Product from './Product'

const Products = ({ products, totalQuantity, amount }) => {
  return (
    <>
      <Row>
        {products.map(product => (
          <Col key={product._id} lg={3} md={6} xs={6}>
            <Product key={product._id} data={product} />
          </Col>
        ))}
      </Row>
      <div>
        Total Quantity : {totalQuantity}
        <br></br>
        Amount: Rs {amount}
      </div>
    </>
  )
}
const mapStateToProps = state => {
  return {
    products: state.products,
    amount: state.amount,
    totalQuantity: state.totalQuantity
  }
}
export default connect(mapStateToProps)(Products)
