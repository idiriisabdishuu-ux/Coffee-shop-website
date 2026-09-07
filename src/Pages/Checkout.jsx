
import React, { useState } from 'react'
import { useCart} from './CartContext';
import { FiMapPin, FiMail, FiPhone, FiLoader, FiCheckCircle } from 'react-icons/fi';
import  {Link}  from 'react-router-dom';

function Checkout() {

    const { cartCount, cartItems, clearCart} = useCart()
    const [orderPlaced, setOrderPlaced] = useState(false);

  

    const [formData, setFormData] = useState({
        address: "",
        email:"",
        phone:"",
    })

    const [error, setError] = useState("");

    const [loading, setLoading] = useState(false);

    if(orderPlaced){
        return(
            <div className="max-w-lg mx-auto px-4 py-20 text-center">
                <FiCheckCircle  size={72} className="text-green-500 mx-auto mb-4"/>
                <h2 className='text-3xl font-bold text-coffee-orange mb-2'>Order Placed Successfully!</h2>
                <p className='text-gray-700 mb-2'>Your order has been placed successfully. Thank you for your purchase!</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
                    <Link to="/menu" className="bg-coffee-orange text-white font-bold py-2 px-4 rounded-lg hover:bg-coffee-brown transition-colors">
                        Order More
                    </Link>
                    <Link to="/" className="bg-coffee-brown text-white py-2 px-4 font-bold rounded-lg hover:bg-coffee-orange transition-colors">
                        Go to Home
                    </Link>
                </div>
            </div>
        )
    }

    const subtotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity, 0
    );


    const shipping = subtotal >= 20 ? 0 : 5.00;

    const tax = subtotal * 0.1;
    const total = subtotal + shipping + tax;

   function handleChange(e){
    const {name, value} = e.target
    setFormData((prev)=>({
        ...prev,
        [name] : value,
    })) 

    if(error) setError("");
   }

   function validaetForm(){
    if(!formData.address.trim()){
        return "Shipping address required."
    }
    if(!formData.email.trim()){
return "Email is required."
    }
    if(!formData.phone.trim()){
        return "Phone number required."
    }
    return "";
   }

function handlePlaceOlder(){
    const validationError = validaetForm();

    if(validationError){
        setError(validationError);
        return;
    }

    setLoading(true);

    setTimeout(()=>{
        setLoading(false)
        clearCart();
      
       setOrderPlaced(true);

  setFormData({
    address: "",
      email: "",
      phone: "",
  })

    }, 2000);

    
}

  return (
    <div className='bg-linear-to-b from-coffee-cream to-white py-12'>
        <div className='max-w-6xl mx-auto px-4'>
            <h1 className='text-4xl font-bold text-coffee-orange mb-2'>Checkout</h1>

            <div className='grid md:grid-cols-[70%_30%] gap-8 '>
                <div className='md:grid-cols-2 space-y-6'>
                 <h2 className='text-2xl font-bold mb-2'>Order Items {cartCount}</h2>

                 <div className='space-y-4'>
                    {
                        cartItems.map((item)=>(
                            <div key={item.id} className=' flex  gap-4 justify-between border-b pb-3 border-gray-400'>
                                <div className='flex items-center gap-4 flex-1'>
                                    {item.image && (
                                        <img src={item.image} alt={item.name} 
                                        className='w-16 h-16 rounded-lg object-cover '/>
                                    )}

                                    <div>
                                        <p className='font-bold text-coffee-brown'>{item.name}</p>
                                        <p className='text-sm font-semibold text-gray-700'>${item.price.toFixed(2)} x {item.quantity }</p>
                                        
                                    </div>
                                </div>

                                <div>
                                    <p className='font-bold text-coffee-brown'>${(item.price * item.quantity).toFixed(2)}</p>
                                </div>

                            </div>
                        ))
                    }
                 </div>
                      <div className=' bg-white rounded-lg border border-coffee-orange shadow-amber-200 p-4 mx-auto'>
                          <h2 className='text-2xl text-coffee-brown flex items-center gap-2 mb-2 font-bold '><FiMapPin />Shipping Details</h2>
                          <div className='space-y-2 '>
                              <div>
                                  <label className='block text-sm font-semibold text-coffee-brown mb-3'>Shipping Address</label>
                                  <textarea 
                                  name="address"
                                      value={formData.address}
                                      onChange={handleChange}
                                      typeof='text'
                                      placeholder='123 Main street, City, State 12345'
                                      rows={3}
                                      className=' text-sm border border-coffee-caramel px-4 py-2 rounded-lg focus:outline-none w-full'>

                                  </textarea>
                              </div>
                              <div>
                                  <label className='text-sm font font-semibold text-coffee-brown flex items-center gap-2 mb-2 '>
                                      <FiMail />Email
                                  </label>
                                  <input
                                      type="email"
                                      value={formData.email}
                                      onChange={handleChange}
                                      name='email'
                                      placeholder='Email'
                                      className='w-full border border-coffee-caramel px-4 py-2 rounded-lg text-sm focus:outline-none' />

                              </div>
                              <div>
                                  <label className='text-sm font font-semibold text-coffee-brown flex items-center gap-2 mb-2 '>
                                      <FiPhone />Phone Number
                                  </label>
                                  <input
                                      type="tel"
                                      name='phone'
                                      value={formData.phone}
                                      onChange={handleChange}
                                      placeholder='(+966) 123-456'
                                      className='w-full border border-coffee-caramel px-4 py-2 rounded-lg text-sm focus:outline-none' />
                              </div>
                              {error && (
                                <span className='text-red-500'>{error}</span>
                              )

                              }
                          </div>
                      </div>

                </div>
 
              <div>
                <div className='bg-white border border-coffee-orange rounded-lg p-6 sticky top-20'>
                    <h2 className=' text-2xl text-coffee-brown font-semibold mb-4 '>Order Summary</h2>
                          <div className='flex justify-between mb-2  font-bold '>
                        <span>Subtotal</span>
                              <span className='text-coffee-brown'>${subtotal.toFixed(2)}</span>
                        </div>
                          <div className='flex justify-between mb-2  font-bold '>
                            <span>Shipping</span>
                              <span className='text-coffee-brown'>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                        </div>
                          <div className='flex justify-between mb-2 font-bold '>
                              <span>Tax (5%)</span>
                              <span className='text-coffee-brown'>${tax.toFixed(2)}</span>
                       </div>
                          <div className='flex justify-between mb-2 text-lg font-bold border-t border-gray-400'>
                        <span>Total</span>
                              <span className='text-coffee-brown'>${total.toFixed(2)}</span>
                       </div>
                       <button onClick={handlePlaceOlder}
                          disabled={loading}
                        className='w-full py-3 bg-green-400 font-bold hover:bg-green-600  rounded-lg'>
                        {
                            loading ? (
                                
                                <span className='flex items-center justify-center gap-2'>
                                          <FiLoader className='animate-spin'/>
                                    Placing Order...
                                    </span>
                            ): (
                                "Place Order"

                            )

                        }
                       </button>
                       <Link to="/menu" className='block text-center mt-3 text-coffee-orange border p-3 rounded-lg hover:bg-coffee-orange   hover:text-coffee-brown font-bold'>Continue Shopping</Link>
                </div>
              </div>
      
            </div>
        </div>
    </div>
  )
}

export default Checkout;