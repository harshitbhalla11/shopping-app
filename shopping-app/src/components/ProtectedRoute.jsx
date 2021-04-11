
import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux'

function ProtectedRoute ({ isAuth, component: Component, ...rest }) {

  return (
    <Route
      {...rest}
      render={props => {
        return isAuth ? <Component {...props} /> : <Redirect to='/signin' />
      }}
    ></Route>
  )
}


const mapStateToProps = state=>{
	return{
		isAuth:state.isAuth
	}
}
export default connect(mapStateToProps,null)(ProtectedRoute)