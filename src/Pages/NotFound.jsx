import React from 'react'
import { Link } from 'react-router-dom'
import {FiHome, FiCoffee, FiLoader} from 'react-icons/fi'
function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 ">
        <div className="text-center">
            <FiCoffee size={64} className="text-coffee-orange mb-4 mx-auto block"/>
            <h1 className="text-6xl font-bold text-coffee-orange mb-4">404</h1>
            <h2 className="text-2xl font-bold text-coffee-brown mb-3">Page Not Found</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
                  <Link to="/" className="bg-coffee-brown text-white py-2 px-4 font-bold rounded-lg hover:bg-coffee-orange transition-colors flex items-center justify-center gap-2">
                      <FiHome />
                      Go to Home
                  </Link>
                                <Link to="/menu" className="bg-coffee-orange text-white font-bold py-2 px-4 rounded-lg hover:bg-coffee-brown transition-colors">
                                   
                                    Order More
                                </Link>
                               
                            </div>
        </div>
    </div>
  )
}

export default NotFound;