import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src="/assets/logo.png" alt="Logo" className="logo-img" />
      </Link>
      <nav className="nav">
        <Link to="/produtos">Produtos</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/suporte">Suporte</Link>
      </nav>
      <div className="spacer" /> {}
    </header>
  )
}
