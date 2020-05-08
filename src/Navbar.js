import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import './Navbar.css'

class Navbar extends Component {
  render() {

    const dogLinks = this.props.dogs.map(dog => (
      <li className='nav-item'>
        <NavLink to={`/dogs/${dog.name}`} className='nav-link'>
          {dog.name}
        </NavLink>

      </li>
    ))

    return (
      <nav className='navbar navbar-expand-lg navbar-card bg-dark'>
        <a className='navbar-brand' href='#'>
          Dog app
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul classNAme='navbar-nav'>
            <li className='nav-item'>
              <Link to='/dogs' className='nav-link'>Home</Link>
            </li>
            {dogLinks}
          </ul>
        </div>
      </nav>
    )
  }
}
export default Navbar;
