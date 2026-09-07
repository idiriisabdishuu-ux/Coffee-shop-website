
import React, {useState} from 'react'
import { FiLock, FiMail, FiEye, FiEyeOff, } from 'react-icons/fi'
import { Link,  useNavigate, useLocation} from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'
 

function SignIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setshowPassword] = useState(false);

  const {signIn, error, loading} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
 

  function handleSubmit(e) {
      e.preventDefault();

    const success = signIn(email, password);

      if(success){
        setEmail("");
        setPassword("");
        setshowPassword(false);

        const redirectTo = location.state?.from?.pathname || "/";
        navigate(redirectTo, { replace: true });
      }

  }


  return (
    <div className='min-h-screen bg-linear-to-b from-coffee-cream  to-white flex items-center justify-center mb-4 px-4'>
<div className='w-full max-w-md'>
  <div className='text-center mb-8'>
          
    <h1 className='font-bold text-coffee-brown text-4xl'>Welcome Back ☕</h1>
         
    <p className='text-gray-600 mb-3'>Sign in to your account</p>
  </div>
  <div className='bg-white  border border-coffee-caramel rounded-lg p-8 shadow-lg'>
    <form onSubmit={handleSubmit} className='space-y-5'>

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
                  onClick={() => setshowPassword(!showPassword)}
                  className='absolute top-4 right-3 text-gray-500'>
                  
                    {showPassword ? <FiEyeOff /> :<FiEye />}
                  </button>
              </div>
            </div>

            <div className='flex items-center justify-between  '>
              <label className='flex items-center gap-2 text-coffee-brown font-semibold'>
                <input type="checkbox" className='accent-coffee-orange  cursor-pointer '/>
                Remember me 
              </label>
             <Link className='text-coffee-orange hover:text-coffee-brown font-medium'>
                Forgote password
             </Link>
            </div>
            {error && <p className='text-red-500 text-sm'>{error}</p>}
            <button 
            type='submit'
              disabled={loading}
            className='w-full bg-coffee-orange py-3 text-white font-bold rounded-lg hover:bg-coffee-brown transition'>
              {loading ? "Signing in..." : "Sign In"}
            </button>

    </form>

    <div className='mt-3 pt-3 border-t border-gray-400 text-center'>
      <p className='text-gray-500 font-semibold'>Don't have an account?

        <Link to="/signup" className='text-coffee-orange font-bold ml-2 hover:text-coffee-brown'>Sign Up</Link>
      </p>
    </div>
  </div>
</div>
     
    </div>
  )
}

export default SignIn;