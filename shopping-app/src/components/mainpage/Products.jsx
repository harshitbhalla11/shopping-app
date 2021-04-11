import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import Product from './Product'
import * as actions from '../../store/actions/actions'

const Products = props => {
  const { products, totalQuantity, amount, loading, error, fetchProducts }=props
    
  useEffect(fetchProducts, [])

  const getProducts = () => {
    if(error)
      return (<div>Error - {error}</div>)
    
    return (
      <>
        <Row>
          {products && products.map(product => (
            <Col key={product._id} lg={3} md={6} xs={6}>
              <Product key={product._id} data={product} />
            </Col>
          ))}
        </Row>
        <div className='carttable'>
          <h1>Summary</h1>
          <hr className='hr1'/>
         <h3> Total Quantity :</h3><h1>{totalQuantity}</h1> 
          <br></br>
          <h3> Amount: Rs</h3><h1> {amount}</h1>
        </div>
      </>
    )  
  }

  return (
    <>
      {loading? <div>Loading ... </div>: getProducts()}
    </>
  )
  }

  

const mapStateToProps = state => {
  return {
    products: state.products,
    amount: state.amount,
    totalQuantity: state.totalQuantity,
    loading:state.loadingProducts,
    error:state.productsFetchError
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    fetchProducts: ()=>dispatch(actions.fetchProducts())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Products)
