import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../data/products'
import Loader from './Loader'
import ItemDetail from './ItemDetail'

export default function ItemDetailContainer() {
  const { id } = useParams()
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getProductById(id).then((data) => setItem(data)).finally(() => setLoading(false))
  }, [id])

  if (loading) return <Loader />
  if (!item) return <p className="text-danger">Producto no encontrado.</p>
  return <ItemDetail item={item} />
}