import React from 'react'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container">
        © {new Date().getFullYear()} Gabriel Pomini — Todos os direitos reservados.
      </div>
    </footer>
  )
}
