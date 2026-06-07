'use client'
import { useState } from 'react'
import { createClient } from '@/lib/supabase'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const supabase = createClient()

  const handleSignup = async (e) => {
    e.preventDefault()
    const { error } = await supabase.auth.signUp({ email, password })
    if (error) alert(error.message)
    else alert('Check your email to confirm signup')
  }

  return (
    <form onSubmit={handleSignup} className="p-8">
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="border p-2 block mb-2" />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="border p-2 block mb-2" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Sign Up</button>
    </form>
  )
}
