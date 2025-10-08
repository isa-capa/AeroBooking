// NavBar.jsx
// src/components/NavBar.jsx
import CartWidget from "./CartWidget.jsx";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white sticky-top">
      <div className="container">
        {/* BRAND + SLOT DE LOGO */}
        <a className="navbar-brand" href="#">
          {/* Opción B: Cuando tengas tu logo, descomenta e indica la ruta */
              <img src="/public/logo.png" alt="AeroBooking" className="brand-logo-img" />
          }
          <span>AeroBooking</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Abrir navegación"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link" href="#">Inicio</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Vuelos</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Ofertas</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Ayuda</a></li>
          </ul>

          {/* Carrito a la derecha */}
          <div className="ms-lg-3">
            <CartWidget count={2} />
          </div>
        </div>
      </div>
    </nav>
  );
}
