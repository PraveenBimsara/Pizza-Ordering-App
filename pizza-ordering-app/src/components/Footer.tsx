import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <div className='h-12  md:h-24 p-4 lg:px-20 xl:px-40 text-white flex items-center justify-between bg-red-700'>
      <Link href={'/'} className='font-bold text-xl'>MASSIMO</Link>
      <p>ALL RIGHTS RESERVED.</p>
    </div>
  )
}

export default Footer