// src/components/ItemListContainer.jsx
export default function ItemListContainer({ greeting = "¡Bienvenida!" }) {
  // === Datos de ejemplo (puedes cambiarlos cuando quieras) ===
    const destacados = [
    { route: "MEX → JFK", price: 6500, note: "Directo" },
    { route: "GDL → LAX", price: 4800, note: "1 escala" },
    { route: "QRO → PTY", price: 7200, note: "Directo" },
    ];

// Apartado de promos
    const promos = [
    {
        title: "Tamarindo, MX",
        imgLocal: "./promos/tamarindo.jpg",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Foem.com.mx%2Feloccidental%2Fturismo%2Funa-escapada-de-la-ciudad-visita-la-playa-tropical-tamarindo-en-jalisco-16045591&psig=AOvVaw1xZnNAoFfMUZ4ydiL8mP6d&ust=1760024945933000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCKCwgf_5lJADFQAAAAAdAAAAABAE",
        tag: "Playa",
        link: "#",
    },
    {
        title: "Costalegre, MX",
        imgLocal: "./promos/costalegre.jpg",
        img: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1600&auto=format&fit=crop",
        tag: "Escapada",
        link: "#",
    },
    {
        title: "Panamá",
        imgLocal: "./promos/panama.jpg",
        img: "https://images.unsplash.com/photo-1563974036969-6065f716d3c2?q=80&w=1600&auto=format&fit=crop",
        tag: "Urbano",
        link: "#",
    },
    {
        title: "Los Cabos",
        imgLocal: "./promos/cabos.jpeg",
        img: "https://images.unsplash.com/photo-1560841652-8007a4067a57?q=80&w=1600&auto=format&fit=crop",
        tag: "Premium",
        link: "#",
    },
    {
        title: "Toronto",
        imgLocal: "./promos/toronto.jpg",
        img: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=1600&auto=format&fit=crop",
        tag: "City Break",
        link: "#",
    },
    {
        title: "Querétaro",
        imgLocal: "./promos/queretaro.jpg",
        img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop",
        tag: "Cultural",
        link: "#",
    },
    ];

    return (
    <>
      {/* Hero con tu paleta */}
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
              {/* Placeholder de “search card” (futuro buscador) */}
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
              {/* fin placeholder */}
            </div>
            </div>
        </div>
        </section>

      {/* Resultados destacados */}
        <section className="py-5">
        <div className="container">
            <div className="d-flex align-items-center justify-content-between mb-3">
            <h2 className="h4 mb-0">Resultados destacados</h2>
            <span className="badge badge-brand"></span>
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

      {/* === NUEVA SECCIÓN: PROMOCIONES === */}
        <section className="py-5">
        <div className="container">
            <div className="d-flex align-items-center justify-content-between mb-3">
            <h2 className="h4 mb-0">Promociones</h2>
            <a href="#" className="btn btn-outline-brand btn-sm">Ver todas</a>
            </div>

            <div className="row g-3">
            {promos.map((p, idx) => (
                <div className="col-12 col-sm-6 col-lg-4" key={idx}>
                <a href={p.link} className="text-decoration-none">
                    <div className="card promo-card overflow-hidden h-100">

                    <img
                        src={p.imgLocal || p.img}
                        alt={`Promoción: ${p.title}`}
                        className="promo-img card-img"
                        loading="lazy"
                    />
                    <div className="promo-overlay d-flex flex-column justify-content-between">
                        <span className="badge promo-chip align-self-start">{p.tag}</span>
                        <h3 className="promo-title h5 m-0">{p.title}</h3>
                    </div>
                    </div>
                </a>
                </div>
            ))}
            </div>

        </div>
        </section>
    </>
    );
}
