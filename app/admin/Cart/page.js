'use client'
import { useState, useEffect } from 'react'

export default function Cart() {
  const [cart, setCart] = useState([])
  
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('oyeze_cart') || '[]'))
  }, [])
  
  const total = cart.reduce((sum, item) => sum + Number(item.price), 0)
  
  function checkout() {
    alert('Checkout coming next - we’ll add Stripe now')
  }
  
  return (
    <div style={{padding: '20px'}}>
      <h1>Your Cart</h1>
      {cart.length === 0 ? <p>Cart is empty</p> : (
        <>
          {cart.map((item, i) => (
            <div key={i} style={{border: '1px solid #ddd', padding: '10px', marginBottom: '10px', borderRadius: '6px'}}>
              <h3>{item.name}</h3>
              <p>${item.price}</p>
            </div>
          ))}
          <h2>Total: ${total}</h2>
          <button onClick={checkout} style={{width:'100%', padding:'12px', background:'#E6007E', color:'#fff', border:'none', borderRadius:'6px', fontWeight:'700'}}>
            Checkout
          </button>
        </>
      )}
    </div>
  )
}
