import React from 'react'
import  {useSelector} from 'react-redux'

function Navbar(){

    const cartdata = useSelector(store=>store)

    return(
        <div>
            <h1>This is the Navbar Component: Number of Items in Cart {cartdata.cartcount}</h1>
        </div>
    )
}
export default Navbar