import React from 'react'
import BannerCard from '../home/BannerCard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-200 flex items-center'>
      <div className='flex flex-col w-full md:flex-row justify-between items-center gap-2 py-40 '>
        {/* left side */}
        <div className='md:w-1/2 h-full space-y-8 '>
            
            <h2 className='text-5xl font-bold leading-snug text-black'>Buy and Sell Your Books <span className='text-blue-500'>for the Best Prices</span></h2>
            <p className='md:w-4/5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo necessitatibus optio saepe sequi consequatur quis vero.
                Ex, accusantium maxime sunt voluptas dicta voluptatem. Architecto, dolorum?
            </p>
            <div>
                <input type="search" name='search' placeholder='Search a book' className='py-2 px-2'  />
                <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
            </div>
        </div>

        {/* Right side */}
        <div className='md:w-1/2 h-full space-y-8 '>
            <BannerCard />
        </div>
      </div>
    </div>
  )
}

export default Banner
