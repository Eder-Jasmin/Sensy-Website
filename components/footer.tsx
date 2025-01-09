"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Instagram, Facebook, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer style={{ backgroundColor: '#1c2127', color: 'white', padding: '4rem 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{ fontSize: '1.25rem' }}>
            Still have questions? <a href="/faq" style={{ textDecoration: 'underline' }}>Check our FAQ</a>
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', marginBottom: '4rem' }}>
          <div style={{ width: '3rem', height: '3rem', backgroundColor: '#333', borderRadius: '50%' }} />
          
          <form style={{ display: 'flex', gap: '0.5rem', maxWidth: '24rem', width: '100%' }}>
            <input 
              type="email" 
              placeholder="EMAIL ADDRESS"
              style={{ padding: '0.5rem', backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', width: '100%' }}
            />
            <button style={{ padding: '0.5rem 1rem', backgroundColor: 'white', color: 'black' }}>SUBMIT</button>
          </form>

          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" style={{ color: 'white' }}>Instagram</a>
            <a href="#" style={{ color: 'white' }}>Facebook</a>
            <a href="#" style={{ color: 'white' }}>Twitter</a>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', fontSize: '0.875rem' }}>
          <nav style={{ display: 'flex', gap: '2rem' }}>
            <a href="#" style={{ color: 'white' }}>TECH</a>
            <a href="#" style={{ color: 'white' }}>BUSINESS</a>
            <a href="#" style={{ color: 'white' }}>SUPPORT</a>
            <a href="#" style={{ color: 'white' }}>ABOUT US</a>
            <a href="#" style={{ color: 'white' }}>TERMS</a>
          </nav>
          
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <a href="tel:+1-833-SENSY" style={{ color: 'white' }}>+1-833-SENSY</a>
            <span>© SENSY LABS INC. 2024</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

