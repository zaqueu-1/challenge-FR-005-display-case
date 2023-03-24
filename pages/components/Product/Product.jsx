import React, { useState } from 'react'

function Product({id, product, image, discount, price, qtd}) {
    const [finalPrice, setFinalPrice] = useState(null)

    const calcDiscount = () => {
        if (discount > 0) {
            const newPrice = price - discount
            return (
                <span><span className='old-price'>R${price}</span> R${newPrice}</span>
                )
        } else if (discount === 0 && qtd>0) {
            return (`R$${price}`)
        } else if (qtd === 0) {
            return (
                <span className='sold-out'>Esgotado</span>
            )
        }
    }

  return (
    <div key={id} className='product-card'>
        <img src={image} className='product-image' />
        <div className='product-info'>
            <div className='product-title'>{product}</div>
            <div className='product-price'>{calcDiscount()}</div>
            </div>
    </div>
  )
}

export default Product
