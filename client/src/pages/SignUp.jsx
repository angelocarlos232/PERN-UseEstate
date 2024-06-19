import React from 'react';
import { useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import toast from 'react-hot-toast';




function Signup() {
  const [formData, setFormData] = useState({})
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

   
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      setLoading(true);
    const res = await fetch('http://localhost:3000/api/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (data.success === false){
      setError(data.message);
      setLoading(false);
      return;
    }
    setLoading(false)
    setError(null)
    navigate('/signin')
    toast.success("User Created Successfully")
    } catch (error) {
      setLoading(false)
      toast.error()
      setError(error.message)
    }


    

    
  }

  
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold ">
          Sign up for an account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600 max-w">
          Or &nbsp;
          <Link to="/signin" className="fonthandleChange-medium text-default-red hover:text-red-500">
              sign in to your account
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">



          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <div className="mt-1">
                <input
                  id="username"
                  name="username"
                  onChange = {handleChange}
                  type="text"
                  autoComplete="username"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-default-red focus:border-default-red focus:z-10 sm:text-sm"
                  placeholder="Enter your username"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  onChange = {handleChange}
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
                  onChange = {handleChange}
                  type="password"
                  autoComplete="new-password"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-default-red focus:border-default-red focus:z-10 sm:text-sm"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div>
              <label htmlFor="repeat_password" className="block text-sm font-medium text-gray-700">
                Repeat Password
              </label>
              <div className="mt-1">
                <input
                  id="repeat_password"
                  name="repeat_password"
                  onChange = {handleChange}
                  type="password"
                  autoComplete="new-password"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-default-red focus:border-default-red focus:z-10 sm:text-sm"
                  placeholder="Repeat your password"
                />
              </div>
            </div>

            <div>
              <button
                disabled={loading}
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-default-red hover:bg-default-hover-red focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-default-red"
              >
                {loading ? 'Loading...' : 'Sign Up'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
