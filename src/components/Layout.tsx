// src/components/Layout.tsx
import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ maxWidth: 820, margin: '0 auto', padding: 24 }}>
      {children}
      <footer style={{ marginTop: 48, opacity: 0.7 }}>
        © {new Date().getFullYear()} Your Name
      </footer>
    </div>
  )
}
