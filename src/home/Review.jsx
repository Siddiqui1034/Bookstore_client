import React from 'react'
import MyCard from '../components/Card'

const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>
      <div className='flex flex-col md:flex-row justify-between'>
      <MyCard />
      <MyCard />
      <MyCard />     
      </div>
      

    </div>
  )
}

export default Review
