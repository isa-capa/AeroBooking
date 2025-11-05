import ItemCard from './ItemCard'

export default function ItemList({ items = [] }) {
  if (!items.length) return <p className="text-muted">No hay productos para mostrar.</p>
  return (
    <div className="row g-3">
      {items.map((it) => (
        <div className="col-12 col-sm-6 col-lg-4" key={it.id}>
          <ItemCard item={it} />
        </div>
      ))}
    </div>
  )
}