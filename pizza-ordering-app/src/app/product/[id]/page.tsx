import React from 'react'
import Image from 'next/image'
import { singleProduct } from '@/data'
import Price from '@/components/Price'

const SingleProductPage = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-700 md:flex-row'>
      {/*IMAGE CONTAINER*/}
      {singleProduct.img && (
      <div className='relative'>
        <Image src={singleProduct.img} alt='' fill className='object-contain'></Image>
      </div>
      )}
      {/*TEXT CONTAINER*/}
      <div className=''>
        <h1>{singleProduct.title}</h1>
        <p>{singleProduct.desc}</p>
        <Price price={singleProduct.price} options={singleProduct.options} id={0}/>
      </div>
    </div>
  )
}

export default SingleProductPage