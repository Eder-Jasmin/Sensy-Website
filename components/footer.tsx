"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer style={{ backgroundColor: 'rgb(94, 145, 59)', color: 'white', padding: '1rem 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <p style={{ marginBottom: '20px', fontSize: '1.2rem', }}>Still have questions?</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <a href="https://calendly.com/ej3497-mci4me/sensy-info-meeting" target="_blank" rel="noopener noreferrer">
              <button style={{
                padding: '0.8rem',
                backgroundColor: '#B0ACAC',
                color: 'white',
                border: 'none',
                borderRadius: '4px'
              }}>Book Info Meeting</button>
            </a>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', fontSize: '0.875rem' }}>
          <nav style={{ display: 'flex', gap: '2rem' }}>
            <a href="#" style={{ color: 'white' }}>LANDING PAGE</a>
            <a href="#technology-section" style={{ color: 'white' }}>TECHNOLOGY</a>
            <a href="#research-section" style={{ color: 'white' }}>RESEARCH</a>
            <a href="#about-section" style={{ color: 'white' }}>ABOUT US</a>
          </nav>
          
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <span>© SENSY LABS INC. 2024</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

