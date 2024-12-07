import React from 'react'
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import {AuthContext} from '../context/AuthProvider'
import gmail from '../assets/mail.png'
const Login = () => {

  const {loginWithGoogle} = useContext(AuthContext)
  const [error, setError] = useState("")

  const location = useLocation()
  const navigate = useNavigate()

  const { from } = location.state?.from.pathname || { pathname: '/' };

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    login(email, password).then((userCredentials)=>{
        //sign in
        const user = userCredentials.user;
        alert("login successful")
        navigate(from, {replace: true})
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message
        setError(errorMessage)
    })
  }

  // Login with Gmail Account
  const handleGmailLogin = () => {
    loginWithGoogle().then((result) => {
      const user = result.user
      alert("google login successful")
      navigate(from, {replace: true})
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message
      setError(errorMessage)
    })
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
      <div
        className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
      </div>
      <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <div className="max-w-md mx-auto">
          <div>
            <h1 className="text-2xl font-semibold">Loginp form</h1>
          </div>
          <form onSubmit={handleLogin} className="divide-y divide-gray-200">
            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <div className="relative">
                <input  id="email" name="email" type="text" className="peer  h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
              </div>
              <div className="relative">
                <input id="password" name="password" type="password" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
              </div>
              <p>If have an account, Please <Link to="/sign-up" className="text-blue-500 underline">Login</Link> here.</p>
              <div className="relative">
                <button className="bg-blue-500 text-white rounded-md px-2 py-1">Submit</button>
              </div>
            </div>
          </form>
          <hr />
          <div>

          </div>
          <div  className='flex w-full items-center flex-col mt-5 gap-3'>
          <button onClick={handleGmailLogin}><img src={gmail} alt="" className='text-sm w-7 h-7 inline-block rounded-full text-center' /> Login with Gmail</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login

