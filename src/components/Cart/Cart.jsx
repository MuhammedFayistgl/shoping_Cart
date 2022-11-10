import React from 'react'
import { useSelector } from 'react-redux'
import EmptyCart from '../Empty/EmptyCart'
import CartList from './CartList'

const Cart = () => {
  const CartItems = useSelector((itmes)=> itmes)
 
  return (
    <>
    {CartItems.cart.Cart_cont===0 ? <EmptyCart/> : <CartList/> }
    
    </>
  )
}

export default Cart
