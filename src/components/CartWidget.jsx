// src/components/CartWidget.jsx
export default function CartWidget({ count = 0 }) {
    return (
    <button className="cart-btn btn btn-sm" title="Carrito">
        <span aria-hidden="true">🛒</span>
        <span className="cart-count">{count}</span>
        <span className="visually-hidden">Artículos en el carrito</span>
    </button>
    );
}

