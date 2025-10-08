// src/App.jsx
import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";

export default function App() {
  return (
    <>
      <NavBar />
      <main>
        {/* Prop obligatoria: mensaje hacia ItemListContainer */}
        <ItemListContainer greeting="¡Encuentra tu próximo vuelo con AeroBooking!" />
      </main>
      <footer className="app-footer py-4 mt-5">
        <div className="container text-center">
          <small>© {new Date().getFullYear()} AeroBooking </small>
        </div>
      </footer>
    </>
  );
}
