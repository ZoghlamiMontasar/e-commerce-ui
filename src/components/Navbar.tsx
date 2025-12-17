import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchBar from './SearchBar'
import { Bell, Home, ShoppingBagIcon, ShoppingCart } from 'lucide-react'
import ShoppingCartIcon from './ShoppingCarticon'

const Navbar = () => {
  return (
    <nav className='w-full flex items-center justify-between border-b pb-4 border-gray-200'>
        {/* LEFT*/}
        <Link href="/" className='flex items-center'>
          <Image 
             src="/logo.png"
             alt="TrendLama"
             width={36}
             height={36}
             className='w-6 h-6 md:w-9 md:h-9'
          />
          <p className='hidden md:block text-md font-mediem tracking-wider'> TRENDLAMA.</p>
        </Link>

        {/* RIGHT*/ }

           <div className="flex items-center gap-6"> 
            <SearchBar/>
            <Link href="/">
            <Home className='w-4 h-4 text-gray-6OO' />
            </Link>
            <Bell className='w-4 h-4 text-gray-6OO' />
            <ShoppingCartIcon/>
            <Link href="/login"> Sign in</Link>
           </div>
    </nav>
  )
}

export default Navbar