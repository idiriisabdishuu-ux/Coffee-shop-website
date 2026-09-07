
import React, { useState } from 'react'
import { FiLock, FiMail, FiUser, FiEye, FiEyeOff } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'

function SignUp() {

  const [name,  setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirPassword, setShowConfirmPassword] = useState(false);
    
  const {signup, loading, error} = useAuth();
  const navigate = useNavigate();

  function handleSubmit (e){
  e.preventDefault();

  if(password  !== confirmPassword){
    alert("Password don't match")
    return
  }

  const result = signup(email, password, name);

  if(result.success){
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setShowPassword(false);
    setShowConfirmPassword(false);
    navigate("/");

  }

  }

 
    


  return (
    <div className='min-h-screen bg-linear-to-b from-coffee-cream  to-white flex items-center justify-center mb-4 px-4'>
<div className='w-full max-w-md'>
  <div className='text-center mb-8'>
    <h1 className='font-bold text-coffee-brown text-4xl'>Join Us ☕</h1>
    <p className='text-gray-600 mb-3 mt-2'>Create Your IDU Coffee Account</p>
  </div>
  <div className='bg-white  border border-coffee-caramel rounded-lg p-8 shadow-lg'>
    <form onSubmit={handleSubmit}
     className='space-y-5'>
                      <div>
                          <label className='block font-semibold text-coffee-brown mb-2'>
                              Full Name
                          </label >

                          <div className='relative'>
                              <FiUser className='absolute top-4 text-gray-500 left-3' />
                              <input type="text"
                                     value={name}
                                     onChange={(e)=> setName(e.target.value)}
                                  placeholder='Enter Your Full Name'
                                  className=' pl-9 border border-coffee-orange w-full py-2.5 focus:outline-none focus-ring-2 focus:ring-coffee-orange rounded-lg' />
                          </div>
                      </div>
      <div>
        <label className='block font-semibold text-coffee-brown mb-2'>
          Email Address
        </label >
          
        <div className='relative'>
          <FiMail className='absolute top-4.5 text-gray-500 left-3'/>
          <input type="email" 
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
          placeholder='you@example.com'
          className=' pl-9 border border-coffee-orange w-full py-2.5 focus:outline-none focus-ring-2 focus:ring-coffee-orange rounded-lg'/>
        </div>
      </div>

            <div>
              <label className='block font-semibold text-coffee-brown mb-2'>
                Password
              </label >

              <div className='relative'>
                <FiLock className='absolute top-4 text-gray-500 left-3' />
                <input type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                  placeholder='Enter your password'
                  className=' pl-9 border border-coffee-orange w-full py-2.5 focus:outline-none focus-ring-2 focus:ring-coffee-orange rounded-lg' />
                <button type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute right-3 top-4 text-gray-500'>
                  {showPassword ? <FiEye /> :  <FiEyeOff /> }
                </button>
              </div>
            </div>
                      <div>
                          <label className='block font-semibold text-coffee-brown mb-2'>
                             Confirm Password
                          </label >

                          <div className='relative'>
                              <FiLock className='absolute top-4 text-gray-500 left-3' />
                <input type={showConfirPassword ? "text" : "password"}
                                value={confirmPassword}
                                onChange={(e)=> setConfirmPassword(e.target.value)}
                                  placeholder='Enter your password'
                                  className=' pl-9 border border-coffee-orange w-full py-2.5 focus:outline-none focus-ring-2 focus:ring-coffee-orange rounded-lg' />
                                  <button type='button' 
                                  onClick={()=> setShowConfirmPassword(!showConfirPassword)}
                                  className='absolute right-3 top-4 text-gray-500'>
                                  {showConfirPassword ? <FiEye /> : <FiEyeOff />}
                                  </button>
                          </div>
                      </div>

          {
            error && <p className='text-red-500 text-sm'>{error}</p>
          }
                   
            <button type='submit'
            disabled={loading}
            className=' w-full bg-coffee-orange py-3 text-white font-bold rounded-lg hover:bg-coffee-brown transition'>
              {loading ? "Creating Account..." : "Sign Up"}
            </button>

    </form>

    <div className='mt-3 pt-3 border-t border-gray-400 text-center'>
      <p className='text-gray-500 font-semibold'>Already have an account?

        <Link to="/signin" className='text-coffee-orange font-bold ml-2 hover:text-coffee-brown'>Sign In</Link>
      </p>
    </div>
  </div>
</div>
     
    </div>
  )
}

export default SignUp;