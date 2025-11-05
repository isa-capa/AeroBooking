import { useState } from 'react'

export default function ItemCount({ stock = 0, initial = 1, onAdd }) {
  const [qty, setQty] = useState(initial)
  const inc = () => setQty((q) => (q < stock ? q + 1 : q))
  const dec = () => setQty((q) => (q > 1 ? q - 1 : q))

  return (
    <div className="d-flex align-items-center gap-2">
      <div className="input-group" style={{width: 180}}>
        <button className="btn btn-outline-secondary" type="button" onClick={dec}>−</button>
        <input className="form-control text-center" value={qty} readOnly />
        <button className="btn btn-outline-secondary" type="button" onClick={inc}>+</button>
      </div>
      <button className="btn btn-brand" disabled={!stock} onClick={() => onAdd?.(qty)}>
        Agregar
      </button>
    </div>
  )
}