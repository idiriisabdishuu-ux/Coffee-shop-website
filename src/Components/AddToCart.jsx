

import React from 'react'
import { useCart } from '../Pages/CartContext'

function AddToCart({product}) {

const {addToCart}  = useCart()

function handleClick(){
    addToCart(product)

}

  return (
    <button onClick={handleClick}
    className='bg-coffee-orange px-2 py-1 text-sm hover:bg-coffee-brown text-white rounded-lg'>
    Add To Cart 
    </button>
  )
}

export default AddToCart