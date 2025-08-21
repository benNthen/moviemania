import React from 'react'
import '../styles.css'

export default function Header() {
  return (
    <div className="header">
      <img className="logo" src="logo.png" alt="moviemania" />
      <h2 className="app-subtitle">
        It's time for fun! Find your next choice here.
      </h2>
    </div>
  )
}
