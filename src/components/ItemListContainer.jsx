import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getProducts, getProductsByCategory } from '../data/products'
import Loader from './Loader'
import ItemList from './ItemList'

export default function ItemListContainer({ greeting = '¡Bienvenida!' }) {
  const { categoryId } = useParams()
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  const destacados = [
    { route: 'MEX → JFK', price: 6500, note: 'Directo' },
    { route: 'GDL → LAX', price: 4800, note: '1 escala' },
    { route: 'QRO → PTY', price: 7200, note: 'Directo' },
  ]

  useEffect(() => {
    setLoading(true)
    const fetcher = categoryId ? getProductsByCategory(categoryId) : getProducts()
    fetcher.then((data) => setItems(data)).finally(() => setLoading(false))
  }, [categoryId])

  return (
    <>
      {/* Hero */}
      <section className="hero py-5">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <h1 className="display-6 fw-bold mb-2">{greeting}</h1>
              <p className="lead mb-0">
                Compara vuelos al instante. Filtra por origen, destino, fechas, aerolínea y precio.
              </p>
              <div className="mt-4 d-flex gap-2">
                <a href="#" className="btn btn-brand btn-lg">Buscar vuelos</a>
                <a href="#" className="btn btn-outline-brand btn-lg">Ver ofertas</a>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="card p-3 shadow-sm">
                <div className="row g-2">
                  <div className="col-12 col-md-6">
                    <label className="form-label">Origen</label>
                    <input type="text" className="form-control" placeholder="MEX" />
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="form-label">Destino</label>
                    <input type="text" className="form-control" placeholder="JFK" />
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="form-label">Salida</label>
                    <input type="date" className="form-control" />
                  </div>
                  <div className="col-12 col-md-6">
                    <label className="form-label">Regreso</label>
                    <input type="date" className="form-control" />
                  </div>
                  <div className="col-12">
                    <button className="btn btn-brand w-100">Buscar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados destacados */}
      <section className="py-5">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <h2 className="h4 mb-0">Resultados destacados</h2>
          </div>
          <div className="row g-3">
            {destacados.map((f, idx) => (
              <div className="col-12 col-sm-6 col-lg-4" key={idx}>
                <div className="card flight h-100">
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{f.route}</h5>
                    <p className="card-text text-muted mb-4">
                      Desde <strong>${f.price.toLocaleString()} MXN</strong> — {f.note}
                    </p>
                    <div className="mt-auto d-flex gap-2">
                      <a href="#" className="btn btn-brand">Ver detalles</a>
                      <button className="btn btn-outline-brand">Agregar</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Promociones */}
<section className="py-5">
  <div className="container">
    <div className="d-flex align-items-center justify-content-between mb-3">
      <h2 className="h4 mb-0">Promociones</h2>
    </div>

    <div className="row g-3">
      {(items && items.length > 0) ? (
        items.map((p) => (
          <div className="col-12 col-sm-6 col-lg-4" key={p.id}>
            <Link to={`/item/${p.id}`} className="text-decoration-none">
              <div className="card promo-card overflow-hidden h-100">
                <img
                  src={p.image}
                  alt={`Promoción: ${p.title}`}
                  className="promo-img card-img"
                  loading="lazy"
                />
                <div className="promo-overlay d-flex flex-column justify-content-between">
                  <span className="badge promo-chip align-self-start">{p.category}</span>
                  <h3 className="promo-title h5 m-0">{p.title}</h3>
                </div>
              </div>
            </Link>
          </div>
        ))
      ) : (
        <div className="col-12 text-center text-muted py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
          <p className="mt-3 mb-0">Cargando promociones...</p>
        </div>
      )}
    </div>
  </div>
</section>

      {/* Catálogo */}
      <section className="py-5">
        <div className="container">
          <h2 className="h4 mb-3">
            {categoryId ? `Catálogo – Categoría: ${categoryId}` : 'Catálogo completo'}
          </h2>
          {loading ? <Loader /> : <ItemList items={items} />}
        </div>
      </section>
    </>
  )
}
