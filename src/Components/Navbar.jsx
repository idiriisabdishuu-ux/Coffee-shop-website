import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FiShoppingCart, FiMenu, FiX, FiUser } from "react-icons/fi"
import { useCart } from "../Pages/CartContext";
import { useAuth } from "../Context/AuthContext";

function Navbar() {
  const [open, setOpen] = useState(false);
  const {cartCount} = useCart();

  const {user, signOut} = useAuth();
  const navigate = useNavigate();

  const linkClass = ({isActive})=>
    isActive ? "text-orange-500 font-bold border-b-2 w-fit" : "text-coffee-brown-800 hover:text-orange-600"
    

  function handleSignOut(){
    signOut();
    setOpen (false)
    navigate("/")
  }

    return (
        <header className="bg-coffee-cream border-b border border-b-coffee-orange  sticky top-0 z-50">
            <div className="max-w-7xl mx-auto p-4 ">
                <div className="flex items-center justify-between">
                    <Link className="flex items-center gap-2 " to="/">
                        <span className="text-2xl">☕</span>
                        <span className="font-bold text-lg text-coffee-brown tracking-tighter">IDU</span>
                        <span className="text-coffee-orange font-bold text-lg">Coffee Shop</span>
                    </Link>

                    <nav className="md:flex hidden gap-2 ">
                        <NavLink to="/" className={linkClass}>

                            Home

                        </NavLink>
                        <NavLink to="menu" className={linkClass}>

                            Menu

                        </NavLink>
                        <NavLink to="/about" className={linkClass}>

                            About

                        </NavLink>
                        <NavLink to="/contact" className={linkClass}>

                            Contact

                        </NavLink>
                    </nav>
                    
                    <div className="flex items-center gap-4">
                        <Link to="/cart" className="text-coffee-brown relative hover:text-coffee-orange">
                            <FiShoppingCart size={24} />
                            {
                                cartCount > 0 && <span className="absolute -top-2 -right-2 h-5 px-1 etxt-sm rounded-full bg-red-700 text-white font-bold flex items-center justify-center " 
                                >{cartCount}</span>
                            }
                        </Link>
                        <div className="md:flex gap-3 items-center hidden">
                          {
                            user ? (
                                <div>
                                    <Link to="/profile" title={user.name}
                                    className="w-9 h-9 rounded-full bg-coffee-orange text-white font-bold flex items-center justify-center overflow-hidden hover:bg-coffee-brown">
                                        {
                                            user.profileImage ? <img src={user.profileImage} className="w-full h-full object-cover"/> 
                                                    : (user.name?.[0].toUpperCase() || <FiUser />)

                                        }
                                    
                                    </Link>
                                        
                                </div>
                            ) : (
                                <div>
                                    <Link to="/signin">
                                    <button className=" m-2 bg-coffee-orange px-4 py-1 rounded-xl text-white hover:bg-coffee-brown">
                                        Sign in
                                        </button>
                                        </Link>
                                     <Link to="/signup">
                                     <button className="px-4 py-1 border border-coffee-orange rounded-xl text-coffee-orange hover:bg-coffee-brown">
                                        Sign Up 
                                     </button>
                                     </Link>
                                </div>
                            )
                          }
                    </div>
                    <button className="md:hidden felx justify-center text-coffee-brown hover:text-coffee-orange"
                     onClick={()=>setOpen(!open)}>
                        {
                        open ? <FiX  size={24}/> : <FiMenu  size={24}/>
                        }
                       
                       
                    </button>
                    </div>
                </div>
            </div>

        {
            open && (
                <div className="felx md:hidden">
                        <nav className="flex flex-col p-4 gap-4 ">
                            <NavLink to="/" className={linkClass} onClick={()=>setOpen(false)}>

                                Home

                            </NavLink>
                            <NavLink to="menu" className={linkClass} onClick={() => setOpen(false)}>

                                Menu

                            </NavLink>
                            <NavLink to="/about" className={linkClass} onClick={() => setOpen(false)}>

                                About

                            </NavLink>
                            <NavLink to="contact" className={linkClass} onClick={() => setOpen(false)}>

                                Contact

                            </NavLink>
                           
                          {
                            user ? (
                                <div>
                                    <Link to="/profile" onClick={() => setOpen(false)} className="flex items-center text-coffee-brown font-semibold">
                                    <span className="w-8 h-8 rounded-full bg-coffee-orange text-white font-bold items-center justify-center overflow-hidden ">
                                    {user.profileImage ?
                                <img src={user.profileImage} className="w-full h-full object-center"/>  
                                                    : (user.name ?.[0].toUpperCase || <FiUser />)  
                                }
                                            </span>
                                            My Profile
                                    </Link>
                                </div>
                            ): (
                                <div>
                                            <Link to="/signin" onClick={()=> setOpen(false)}>
                                                <button className="bg-coffee-orange px-4 py-1 rounded-xl text-white hover:bg-coffee-brown">
                                                    Sign in
                                                </button>
                                            </Link>
                                            <Link to="/signup" onClick={() => setOpen(false) }>
                                                <button className="px-4 py-1 border border-coffee-orange rounded-xl text-white hover:bg-coffee-brown">
                                                    Sign Up
                                                </button>
                                            </Link>
                                </div>
                            )
                          }

                        </nav> 
                </div>
            )
        }

        </header>
    );
}

export default Navbar;