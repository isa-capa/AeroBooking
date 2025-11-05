import ItemCount from './ItemCount'

export default function ItemDetail({ item }) {
  return (
    <section className="container">
      <div className="row g-4 align-items-start">
        <div className="col-md-6">
          <img src={item.image} alt={item.title} className="img-fluid rounded" />
        </div>
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h1 className="h4 fw-bold">{item.title}</h1>
              <p className="text-muted">{item.description}</p>
              <p className="small text-secondary mb-1">Categoría: <span className="fw-semibold">{item.category}</span></p>
              <p className="display-6 fw-bold mb-3">${item.price}</p>
              <ItemCount stock={item.stock} initial={1} onAdd={(qty) => alert(`Agregadas ${qty} unidades (pendiente integración carrito)`)} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
