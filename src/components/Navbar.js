import React from 'react'
import { Link } from 'react-router-dom' 

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <Link className="navbar-brand" to="/">FoodParadise</Link>
        </div>
      </div>
    </div>
  </nav>
)

export default Navbar