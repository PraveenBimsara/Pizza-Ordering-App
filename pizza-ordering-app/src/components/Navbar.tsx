import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import CartIcon from './CartIcon'
import Image from 'next/image'

function Navbar() {
    const user = false
  return (
    <div className='h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase'>
        {/*LEFT LINKS*/}
        <div className='hidden md:flex gap-4'>
            <Link href={''}>Home</Link>
            <Link href={'/menu'}>Menu</Link>
            <Link href={''}>Contact</Link>
        </div>
        {/*LOGO*/}
        <div className='text-xl'>
            <Link href={''}>Massimo</Link>
        </div>
        {/*MOBILE MENU*/}
        <div className='md:hidden'>
            <Menu/>
        </div>
        {/*RIGHT LINKS*/}
        <div className='hidden md:flex gap-4 items-center'>
            <div className='flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md'>
                <Image src='/phone.png' alt='' width={20} height={20}></Image>
                <span>+94 785 890 185</span>
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