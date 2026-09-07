import React from 'react'
import { useParams,Link } from 'react-router-dom';
import products from '../Data/products';
import AddToCart from '../Components/AddToCart';
import {FiArrowLeft} from 'react-icons/fi'

function ProductDetail() {
    const {id} = useParams();
    const product = products.find((p) => p.id === Number(id));

    if(!product){
        return(
            <div className="max-2xl mx-auto px-4 py-20 text-center"> 
            <h1 className="text-2xl font-bold text-coffee-brown mt-8">Product Not Found</h1>
            <p className="text-gray-600 mt-4">We couldn't find the product you're looking for.</p>
            <Link to="/menu" className="inline-flex items-center mt-6 bg-coffee-orange font-bold text-white hover:bg-coffee-brown px-6 py-2 rounded-lg transition-colors">
                <FiArrowLeft className="mr-2"/> Back to Menu
            </Link>
            </div>
        )
    }

  return (
    <div className=' bg-coffee-cream min-h-screen py-12 px-4 '>
       <div className="max-w-4xl mx-auto">
        <Link to="/menu" className="inline-flex items-center font-bold text-coffee-orange hover:text-coffee-brown transition-colors">
          <FiArrowLeft className="mr-2"/> Back to Menu
        </Link>
        <div className="bg-white border border-coffee-orange rounded-lg p-4 overflow-hidden grid md:grid-cols-2 gap-4 mt-4">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-lg" />
                  <div className="p-8">
                      <h1 className="text-3xl font-bold text-coffee-brown mb-2 "> {product.name}</h1>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                      <p className="text-2xl font-bold text-coffee-orange mb-4">${product.price.toFixed(2)}</p>
                     
                      <AddToCart product={product} />
                  </div>
        </div>
        
            
       </div>
    </div>
  )
}

export default ProductDetail