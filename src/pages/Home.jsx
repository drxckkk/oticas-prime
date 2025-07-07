import { useNavigate } from 'react-router-dom'
import './Home.css'

export default function Home() {
  const navigate = useNavigate()
  return (
    <main className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Clareza & Estilo em Cada Olhar</h1>
          <p>Descubra nossa seleção premium de óculos de grau, lentes de contato e óculos de sol.</p>
          <button className="btn-primary" onClick={() => navigate('/produtos')}>Descubra</button>
        </div>
        <div className="hero-image" />
      </section>

      <section className="features-section">
        <h2>Por que escolher a Prime Vision Experience?</h2>
        <div className="features-grid">
          <div className="feature-item">
            <div className="icon quality-icon" />
            <h3>Qualidade Premium</h3>
            <p>Lentes de última geração para máxima nitidez.</p>
          </div>
          <div className="feature-item">
            <div className="icon style-icon" />
            <h3>Design Exclusivo</h3>
            <p>Modelos modernos que realçam sua personalidade.</p>
          </div>
          <div className="feature-item">
            <div className="icon support-icon" />
            <h3>Suporte Especializado</h3>
            <p>Equipe pronta para orientar na escolha ideal.</p>
          </div>
        </div>
      </section>

      <section className="highlight-products">
        <h2>Destaques</h2>
        <div className="products-grid">
          {/* Card de produto, repetir conforme dados */}
          <div className="product-card" onClick={() => navigate('/produtos')}>
            <img src="/assets/oculos-grau.jpg" alt="Óculos de Grau" />
            <h4>Óculos de Grau</h4>
            <p>Modelos versáteis para o dia a dia.</p>
          </div>
          <div className="product-card" onClick={() => navigate('/produtos')}>
            <img src="/assets/lentes-contato.jpg" alt="Lentes de Contato" />
            <h4>Lentes de Contato</h4>
            <p>Conforto e tecnologia para seus olhos.</p>
          </div>
          <div className="product-card" onClick={() => navigate('/produtos')}>
            <img src="/assets/oculos-sol.jpg" alt="Óculos de Sol" />
            <h4>Óculos de Sol</h4>
            <p>Proteção UV com estilo marcante.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Pronto para renovar sua visão?</h2>
        <button className="btn-secondary" onClick={() => navigate('/contato')}>Agende sua Consulta</button>
      </section>
    </main>
  )
}