import { current } from '@reduxjs/toolkit';
import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
  
  const { currentUser } = useSelector((state) => state.user);


  return (
    <div>
      <p>hey im {currentUser.user.username}</p>
    </div>
  )
}

export default Home
