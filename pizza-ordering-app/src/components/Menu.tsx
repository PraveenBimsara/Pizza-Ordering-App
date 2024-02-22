"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CartIcon from './CartIcon'

const links = [
    {id:1, title:'Home', url:"/"},
    {id:2, title:'Menu', url:"/"},
    {id:3, title:'Working Hours', url:"/"},
    {id:4, title:'Contact', url:"/"},
]

function Menu() {
    const [open,setOpen] = useState(false)
    const user = false
  return (
    <div>
        {! open ? (
        <Image src="/open.png" alt="" width={20} height={20} onClick={()=>setOpen(true)} className='cursor-pointer'></Image>
        ) : (
        <Image src="/close.png" alt="" width={20} height={20} onClick={()=>setOpen(false)} className='cursor-pointer'></Image>
        )}
        {open &&(
        <div className='bg-red-700 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10'>
            {links.map(item=>(
                <Link href={item.url} key={item.id} onClick={()=>setOpen(false)}>
                    {item.title}</Link>
            ))}
            {! user ?(
            <Link href={'/login' } onClick={()=>setOpen(false)} className='hover:text-yellow-500'>Login</Link> 
            ) : (
            <Link href={'/orders'} onClick={()=>setOpen(false)} className='hover:text-yellow-500'>Orders</Link>
            )}
            <Link href={'/cart'} onClick={()=>setOpen(false)} className='hover:text-yellow-500'>
                <CartIcon/>
            </Link>
        </div>
        )}
    </div>
  )
}

export default Menu