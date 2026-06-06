'use client'
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL, 
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default function Home() {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    supabase.from('products').select('*').then(({ data }) => setProducts(data || []))
  }, [])
  
  function addToCart(product) {
    const current = JSON.parse(localStorage.getItem('oyeze_cart') || '[]')
    current.push(product)
    localStorage.setItem('oyeze_cart', JSON.stringify(current))
    alert(product.name + ' added to cart')
  }
  
  return (
    <div style={{padding: '20px'}}>
      <h1 style={{fontSize: '32px', marginBottom: '20px'}}>OYEZE</h1>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px'}}>
        {products.map(p => (
          <div key={p.id} style={{border: '1px solid #ddd', padding: '15px', borderRadius: '8px'}}>
            {p.image_url && <img src={p.image_url} alt={p.name} style={{width: '100%', borderRadius: '6px'}} />}
            <h3>{p.name}</h3>
            <p style={{color: '#666'}}>{p.category}</p>
            <p style={{fontSize: '20px', fontWeight: 'bold'}}>${p.price}</p>
            <button 
              onClick={() => addToCart(p)}
              style={{marginTop: '12px', width: '100%', padding: '10px', background: '#E6007E', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: '700', cursor: 'pointer'}}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
