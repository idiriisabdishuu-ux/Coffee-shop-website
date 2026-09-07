import { CgShoppingCart } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import React from 'react'
import BlacCoffee from "../assets/images/BlackCoffee.jpg"
import products from "../data/products.js";
import AddToCart from './AddToCart.jsx';

function ProductPreview() {
    return (
        <section className='py-14 md:py-18 bg-white'>
            < div className='max-w-6xl mx-auto px-10'>
                <div className='mb-6 text-4xl md:tex-4xl font-extrabold text-coffee-orange'>
                    <h2>Popular Picks</h2>
                </div>
                {
                    /*sigle card */
                }
                <div className='grid  gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    {products.map((product) => (

                        <div key={product.id}className='p-4 rounded-2xl border border-coffee-caramel bg-white overflow-hidden shadow-md hover:shadow-xl transition-all'>
                            <div className='relative overflow-hidden h-48'>
                                <Link>
                                    <img className='w-full h-full object-cover  hover:scale-110 transition-transform duration-300 rounded-2xl'
                                        src={product.image} alt="BlacCoffee" /></Link>
                            </div>
                            <div className='p-4 '>
                                <h3 className='font-extrabold text-xl text-coffee-orange'>{product.name}</h3>
                                <p className='text-sm text-gray-500 pb-5'>{product.description}</p>

                                <div className='flex items-center justify-between'>
                                    <span className='text-coffee-orange text-xl font-extrabold'>${product.price}</span>
                                    <AddToCart  product={product} />
                                </div>
                                <Link className='mt-6 block text-center bg-coffee-caramel px-3 py-2 rounded-2xl text-coffee-brown  text-sm hover:bg-coffee-orange'
                                    to={`/product/${product.id}`}>
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}



                </div>
            </div>
        </section>
    )
}

export default ProductPreview;