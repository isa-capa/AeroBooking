// NavBar.jsx
// src/components/NavBar.jsx
import { NavLink, Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <span className="brand-logo" /> AeroBooking
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className={({isActive}) => 'nav-link' + (isActive ? ' active' : '')} to="/">Catálogo</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive}) => 'nav-link' + (isActive ? ' active' : '')} to="/category/playa">Playa</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive}) => 'nav-link' + (isActive ? ' active' : '')} to="/category/ciudad">Ciudad</NavLink>
            </li>
          </ul>
          <div className="d-flex">
            <button className="cart-btn btn btn-sm">
              <i className="bi bi-cart3"></i>
              <span>Carrito</span>
              <span className="cart-count">0</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}