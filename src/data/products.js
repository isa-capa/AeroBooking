export const PRODUCTS = [
  { id: '1', title: 'Tamarindo, MX', price: 650, category: 'playa', stock: 10, description: 'Escapada tropical con vuelo redondo.', image: '/promos/tamarindo.jpg' },
  { id: '2', title: 'Costalegre, MX', price: 720, category: 'playa', stock: 12, description: 'Viaje a la costa sur de Jalisco.', image: '/promos/costalegre.jpg' },
  { id: '3', title: 'Panamá', price: 840, category: 'urbano', stock: 15, description: 'Vuelo a la vibrante ciudad de Panamá.', image: '/promos/panama.jpg' },
  { id: '4', title: 'Los Cabos', price: 980, category: 'premium', stock: 8, description: 'Escapada de lujo en Baja California Sur.', image: '/promos/cabos.jpeg' },
  { id: '5', title: 'Toronto', price: 1050, category: 'city break', stock: 9, description: 'Descubre el skyline de Toronto.', image: '/promos/toronto.jpg' },
  { id: '6', title: 'Querétaro', price: 450, category: 'cultural', stock: 20, description: 'Explora la ciudad colonial más encantadora.', image: '/promos/queretaro.jpg' },
]

// Simulación asíncrona
const delay = (ms = 700) => new Promise(res => setTimeout(res, ms))

export async function getProducts() {
  await delay()
  return PRODUCTS
}
export async function getProductsByCategory(category) {
  await delay()
  return PRODUCTS.filter(p => p.category === category)
}
export async function getProductById(id) {
  await delay()
  return PRODUCTS.find(p => p.id === id)
}