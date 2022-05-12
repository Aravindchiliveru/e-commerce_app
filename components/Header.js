import React from 'react'
import Image from 'next/image'
import logo from '../images/logo.png'
import { ShoppingCartIcon, UserIcon, SearchIcon,HeartIcon} from '@heroicons/react/outline'

function Header() {
  return (
        <header className='top-0 sticky my-0 z-50 grid grid-cols-5 bg-white p-5 md:px-10 shadow-md'>

        <div className='relative flex items-center h-10 cursor-pointer my-auto'>
          <Image src={logo} layout='fill' objectFit='contain' objectPosition='left'/>
        </div>



        <div className='font-sans flex items-center md: border-2 rounded-full p-2 md:shadow-sm'>
          <input type="text" placeholder='Search products' className=' font-sans flex-grow outline-none bg-transparent text-sm text-center '/>
          <SearchIcon className='hidden md:inline-flex h-8 hover:bg-black hover:text-white cursor-pointer p-2 rounded-full' />
        </div>


        <div className='flex items-center justify-end cursor-pointer' >
          <ShoppingCartIcon className=' h-7 hover:opacity-50'  />
        </div>

        <div className='flex items-center justify-end cursor-pointer '>
          <HeartIcon className='h-7 hover:opacity-50' />
        </div>

        <div className='flex items-center justify-end cursor-pointer'>
          <UserIcon className='h-7 hover:opacity-50' />
        </div>



        </header>
  )
}

export default Header
