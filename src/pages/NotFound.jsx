import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container text-center py-5">
      <h1 className="display-4 fw-bold">404</h1>
      <p className="text-muted mb-4">La página que intentas visitar no existe.</p>
      <Link to="/" className="btn btn-primary">Volver al inicio</Link>
    </div>
  )
}
