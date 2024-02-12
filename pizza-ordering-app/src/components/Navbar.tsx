import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import CartIcon from './CartIcon'
import Image from 'next/image'

function Navbar() {
    const user = false
  return (
    <div className='h-12 text-red-700 font-bold p-4 flex items-center justify-between border-b-2 border-b-red-700 uppercase md:h-24 lg:px-20 xl:px-40'>
        {/*LEFT LINKS*/}
        <div className='hidden md:flex gap-4 flex-1'>
            <Link href={''} className='border-b-2 border-transparent hover:border-red-700'>Home</Link>
            <Link href={'/menu'} className='border-b-2 border-transparent hover:border-red-700'>Menu</Link>
            <Link href={''} className='border-b-2 border-transparent hover:border-red-700'>Contact</Link>
        </div>
        {/*LOGO*/}
        <div className='text-4xl md:font-bold flex-1 md:text-center'>
            <Link href={''}>Massimo</Link>
        </div>
        {/*MOBILE MENU*/}
        <div className='md:hidden'>
            <Menu/>
        </div>
        {/*RIGHT LINKS*/}
        <div className='hidden md:flex gap-4 items-center justify-end'>
            <div className='md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-yellow-500 px-2 py-2 rounded-md'>
                <Image src='/phone.png' alt='' width={20} height={20}></Image>
                <span className='text-white'>+94 785 890 185</span>
            </div>
           {! user ? (<Link href={'/login'} className='border-b-2 border-transparent hover:border-red-700'>Login</Link>
  ) : (
            <Link href={'/orders'} className='border-b-2 border-transparent hover:border-red-700'>Orders</Link>
  )}
            <CartIcon/>
        </div>
    </div>
  )
}

export default Navbar