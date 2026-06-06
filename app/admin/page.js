'use client'
import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default function Admin() {
  const [form, setForm] = useState({name:'', price:'', category:'', image_url:''})

  async function upload(e) {
    e.preventDefault()
    const { error } = await supabase.from('products').insert([form])
    if(error) alert('Error: ' + error.message)
    else { alert('Product uploaded!'); setForm({name:'', price:'', category:'', image_url:''}) }
  }

  return (
    <div style={{padding: '20px', maxWidth: '500px'}}>
      <h1>Upload Product</h1>
      <form onSubmit={upload}>
        <input placeholder="Product name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} style={{width:'100%', padding:'10px', marginBottom:'10px'}} required />
        <input placeholder="Price" type="number" value={form.price} onChange={e=>setForm({...form, price:e.target.value})} style={{width:'100%', padding:'10px', marginBottom:'10px'}} required />
        <input placeholder="Category" value={form.category} onChange={e=>setForm({...form, category:e.target.value})} style={{width:'100%', padding:'10px', marginBottom:'10px'}} />
        <input placeholder="Image URL" value={form.image_url} onChange={e=>setForm({...form, image_url:e.target.value})} style={{width:'100%', padding:'10px', marginBottom:'10px'}} />
        <button type="submit" style={{width:'100%', padding:'12px', background:'#E6007E', color:'#fff', border:'none', borderRadius:'6px', fontWeight:'700'}}>Upload Product</button>
      </form>
    </div>
  )
}
