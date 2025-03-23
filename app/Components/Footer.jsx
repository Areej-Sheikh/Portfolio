import React from 'react'

const Footer = () => {
  return <footer className='bg-[#1f1f1f] text-white py-6  text-center '>
    <div className='container mx-auto px-6'>
        <p className='text-[#abd7be] text-sm'>
            &copy; {new Date().getFullYear()} All rights reserved.
        </p>
    </div>
  </footer>
}

export default Footer