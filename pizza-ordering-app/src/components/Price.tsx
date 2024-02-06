import React from 'react'

type Props = {
    price:number;
    id:number;
    options?: {title:string; additionalPrice: number}[]
}

const Price = ({price,id,options}: Props)=> {
  return (
    <div>
        <h2>${price.toFixed(2)}</h2>
        {/*OPTIONS CONTAINER*/}
        <div className=''></div>
        {/*QUANTITY AND ADD BUTTON CONTAINER*/}
        <div className=''></div>
    </div>
  )
}

export default Price