import React from 'react'
import Products from './Products'
import {Sidebar} from "./sidecart";

const Home = () => {
    return (
        <div>
            <div className="productright">
            <Products/>
            </div>
            <Sidebar/>
         
        </div>
    )
}

export default Home
 