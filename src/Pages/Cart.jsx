import React, { use } from 'react'
import { useCart } from './CartContext'
import { FiPlus, FiMinus, FiTrash } from 'react-icons/fi'
import { Link } from 'react-router-dom'



function Cart() {
    const { cartItems, removeFromCart, increaseQuantity,
        decreaseQuantity, cartCount, cartTotal } = useCart()

    if(cartItems.length === 0){
        return(
            <div className='max-w-6xl mx-auto px-4 py-14 '>

                <h1 className='text-4xl font-bold text-coffee-orange py-6 px-4  text-center'>Your Cart is Empty</h1>
                <Link to="/menu" className='mt-6 block px-6 py-3 border text-coffee-orange rounded-lg text-center border-coffee-orange hover:bg-coffee-brown font-bold'>
                Continue shopping
                </Link>
            </div>
        )
    }
  return (
      <div className='max-w-6xl mx-auto px-4 py-14'>
        <h1 className='text-4xl text-center font-bold text-coffee-orange py-6 px-4 '>Shopping cart</h1>
       <div className='space-y-4 mb-8'>
        {
            cartItems.map(item =>(
                <div key={item.id} className='grid grid-cols-[90px_1fr] gap-3 items-start border border-coffee-orange rounded-2xl bg-white p-4 '>
                <img src={item.image} alt={item.image}
                className='w-[90px] h-[90px] object-cover rounded-lg' />
                <div className='min-w-0'>
                    <h3 className='font-bold text-coffee-brown text-lg '>{item.name}</h3> 
                        <p className='text-sm mt-1 text-gray-500 '>{item.description}</p> 
                        <p className='text-coffee-orange font-bold mt-2 text-lg'>{item.price.toFixed(2)}</p> 
                </div>
                 
                <div className='col-span-2 w-auto flex items-center justify-end mt-2 gap-3 bg-gray-200 p-1 rounded-lg '>
                   
                        <button className='p-2 hover:bg-gray-500 rounded-lg transition'>
                            <FiMinus  onClick={() =>decreaseQuantity(item.id)}/>
                        </button> 
                        <span>{item.quantity}</span>
                        <button className='p-2 hover:bg-gray-500 rounded-lg transition'>
                            <FiPlus onClick={() =>increaseQuantity(item.id)}/>
                        </button>
                        <button className='p-2 hover:bg-red-400 text-red-600  hover:text-white rounded-lg transition'>
                            <FiTrash onClick={()=> removeFromCart(item.id)}/>
                        </button>
                </div>
                </div>
            ))
        }
       </div>

       <div className='bg-coffee-cream border border-coffee-orange rounded-lg p-6'>
        <div className='space-y-3 mb-4'>
        <div className='flex justify-between'>
            <span className='text-gray-700'>Subtotal {(cartCount)} Items</span>
            <span className='font-bold'>$ {cartTotal.toFixed(2)}</span>
        </div>
              <div className='flex justify-between'>
             <span className='text-gray-700'>Shipping</span>
                      <span className='font-bold'>Free</span>
        </div>
        <div className='flex justify-between border-coffee-orange  border-t pt-3'>
         <span className='text-lg font-bold'>Total</span>
                      <span className=' text-lg text-coffee-orange font-bold'>${cartTotal.toFixed(2)}</span>
        </div>

       </div>
       <Link className='w-full block text-center px-6 py-3 bg-coffee-orange text-white font-bold rounded-xl hover:bg-coffee-brown transition '
       to="/checkout">
       Proceed to Checkout 
       </Link>
              <Link className='w-full block text-center px-6 py-3 border border-coffee-orange bg-white text-coffee-orange font-bold rounded-xl mt-4 hover:bg-coffee-cream'
       to="/menu">
       Continue Shopping
       </Link>
          </div>
    </div>
  )
}

export default Cart;