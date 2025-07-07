import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <h1>Óticas Prime Vision X</h1>
      <nav>
        <Link to="/">Início</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/suporte">Suporte</Link>
      </nav>
    </header>
  )
}
