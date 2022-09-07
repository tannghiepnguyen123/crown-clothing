import React from 'react'
import './cardDropdown.scss'
import Button from '../Button/Button'



const CardDropdown = () => {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'></div>
            <Button>Checkout</Button>
        </div>
    )
}

export default CardDropdown