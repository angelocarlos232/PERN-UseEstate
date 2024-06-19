import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice'

function SignIn() {
  const [formData, setFormData] = useState({})
  const {loading, error} = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

   
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      dispatch(signInStart())
      const res = await fetch('http://localhost:3000/api/user/signin', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
          credentials: 'include',
      });
      
      const data = await res.json();
      
     

      dispatch(signInSuccess(data))
      navigate('/');
      toast.success('Successfully logged in');
      
  } catch (error) {
      dispatch(signInFailure(error.message));
  }
};
    
  return (
    <>
    <div className="min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-md">
    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
      Sign in to your account 
    </h2>
    <p className="mt-2 text-center text-sm text-gray-600 max-w">
      Or &nbsp;
      <Link to='/signup' className="font-medium text-default-red hover:text-default-hover-red">
        create an account
      </Link>
    </p>
  </div>

  <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">



      
      <form className="space-y-6" onSubmit={handleSubmit}> 
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <div className="mt-1">
            <input
              id="email"
              name="email"
              onChange={handleChange}
              type="email"
              autoComplete="email"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-default-red focus:border-default-red focus:z-10 sm:text-sm"
              placeholder="Enter your email address"
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="mt-1">
            <input
              id="password"
              name="password"
              onChange={handleChange}
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-default-red focus:border-default-red focus:z-10 sm:text-sm"
              placeholder="Enter your password"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember_me"
              name="remember_me"
              type="checkbox"
              className="h-4 w-4 text-default-red focus:ring-default-hover-red border-gray-300 rounded"
            />
            <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
              Remember me
            </label>
          </div>

          <div className="text-sm">
              Forgot your password?
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-default-red hover:bg-default-hover-red focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-default-red"
          >
            Sign in
          </button>
        </div>
      </form>
      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-gray-100 text-gray-500">
              Or continue with
            </span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3">
          <div>
              <img className="h-5 w-5" src="https://www.svgrepo.com/show/512120/facebook-176.svg" alt="" />
          </div>
          <div>
           
              <img className="h-5 w-5" src="https://www.svgrepo.com/show/513008/twitter-154.svg" alt="" />
            
          </div>
          <div>
            
              <img className="h-6 w-6" src="https://www.svgrepo.com/show/506498/google.svg" alt="" />

          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default SignIn
