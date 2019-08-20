import React from 'react';
import { Link } from 'react-router-dom'
import './Header.styles.css';


function Header() {
  return (
    <header className="Header">
      <h1>To Do List</h1>
      <Link className="Link" to="/">Home</Link>|
      <Link className="Link" to="/about">About</Link>
    </header>
  )
}


export default Header;