import React from 'react'
import Image from 'next/image'
import logo from '../images/logo.webp'
import { ShoppingCartIcon, UserIcon, SearchIcon,HeartIcon} from '@heroicons/react/solid'

function Header() {
  return (
        <header className='top-0 sticky my-0 z-50 grid grid-cols-5 bg-white p-5 md:px-10 shadow-md'>

        <div className='relative flex items-center h-10 cursor-pointer my-auto'>
          <Image src={logo} layout='fill' objectFit='contain' objectPosition='left'/>
        </div>



        <div className='flex items-center md: border-2 rounded-full p-2 md:shadow-sm'>
          <input type="text" placeholder='SEARCH SOMETHING' className='flex-grow outline-none bg-transparent text-sm '/>
          <SearchIcon className='hidden md:inline-flex h-6 bg-slate-500 cursor-pointer p-2 text-white rounded-full' />
        </div>


        <div className='flex items-center justify-end cursor-pointer' >
          <ShoppingCartIcon className='h-5 '  />
        </div>

        <div className='flex items-center justify-end cursor-pointer'>
          <HeartIcon className='h-5' />
        </div>

        <div className='flex items-center justify-end cursor-pointer'>
          <UserIcon className='h-5' />
        </div>



        </header>
  )
}

export default Header
