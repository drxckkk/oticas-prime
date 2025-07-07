import './Products.css'

export default function Produtos() {
  return (
    <main className="produtos-page">
      <h1>Nossos Produtos</h1>

      <section className="produtos-grid">
        <div className="produto-card">
          <img src="/assets/oculos-grau.jpg" alt="Óculos de Grau" />
          <h3>Óculos de Grau</h3>
          <p>Armações modernas com lentes de alta precisão para o seu dia a dia.</p>
        </div>

        <div className="produto-card">
          <img src="/assets/oculos-sol1.jpg" alt="Óculos de Sol" />
          <h3>Óculos de Sol</h3>
          <p>Estilo e proteção com armações elegantes e lentes com proteção UV.</p>
        </div>

        <div className="produto-card">
          <img src="/assets/lentes-contato1.jpg" alt="Lentes de Contato" />
          <h3>Lentes de Contato</h3>
          <p>Conforto, praticidade e tecnologia para enxergar com liberdade.</p>
        </div>
      </section>
    </main>
  )
}