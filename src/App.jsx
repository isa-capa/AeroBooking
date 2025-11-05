// src/App.jsx
import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main className="container py-4">
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="¡Bienvenida!" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer greeting="Catálogo por categoría" />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/home" element={<Navigate to='/' replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer className="app-footer py-4 text-center">
        <small>&copy; {new Date().getFullYear()} AeroBooking</small>
      </footer>
    </BrowserRouter>
  )
}
