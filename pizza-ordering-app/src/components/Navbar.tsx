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
            <Link href={''}>Home</Link>
            <Link href={'/menu'}>Menu</Link>
            <Link href={''}>Contact</Link>
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
            <div className='md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-red-700 px-2 py-2 rounded-md'>
                <Image src='/phone.png' alt='' width={20} height={20}></Image>
                <span className='text-white'>+94 785 890 185</span>
            </div>
           {! user ? (<Link href={'/login'}>Login</Link>
  ) : (
            <Link href={'/orders'}>Orders</Link>
  )}
            <CartIcon/>
        </div>
    </div>
  )
}

export default Navbar