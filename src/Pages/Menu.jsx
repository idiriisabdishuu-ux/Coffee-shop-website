
import React, { use, useMemo, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import products from '../data/products'
import AddToCart from '../Components/AddToCart'
import { useSearchParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Menu() {

const [searchQuery, setSearchQuery] = useState("");
const filterProduct = useMemo(()=>{
  return products.filter((product)=>

    product.name.toLowerCase().includes(searchQuery.toLocaleLowerCase())
  )
}, [searchQuery])

  return (
    <div className='bg-coffee-cream '>
        <div className='max-w-6xl mx-auto px-4 py-10'>
            <div className='mb-12'>
                <h1 className='text-4xl font-bold text-coffee-orange mb-3'>Our Menu ☕</h1>
                <p className='text-lg text-gray-500'>Discover our premium selection of coffee.</p>
            </div>
          <div className='mb-8 relative'>
           <FiSearch className='absolute left-5 text-gray-500 top-5 ' size={18} />
           <input type="text"
           placeholder='serarch fo coffee...'
            value={searchQuery}
            onChange={(e)=> setSearchQuery(e.target.value)}
           className='border-2 rounded-xl  border-coffee-orange p-4 w-full pl-12 pr-4 py-3 focus:outline-none' />
          </div>
          <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
            {
          filterProduct.map((product)=>(
            <div className='border border-coffee-orange rounded-2xl bg-white overflow-hidden' key={product.id}>
              <img src={product.image} alt={product.name} className='w-full h-48 object-cover'/>
              <div className='p-4'>
                <h3 className='font-bold text-coffee-brown'>{product.name}</h3>
                <p className='text-sm text-gray-500 mt-2'>{product.description}</p>
                <p className='text-coffee-orange font-bold text-lg mt-2'>${product.price.toFixed(2)}</p>
                <div className='mt-2'>
                  <AddToCart product={product}/>

                  <Link className='mt-6 block text-center bg-coffee-caramel px-3 py-2 rounded-2xl text-coffee-brown  text-sm hover:bg-coffee-orange'
                    to={`/product/${product.id}`}>
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))
            }

          </div>
        </div>
    </div>
  )
}

export default Menu;