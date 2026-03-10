import { useState, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Cookie Crush - Updated 2026-03-09
// Data - Cookie Crush
const cookies = [
  {
    id: 1,
    name: "Classic Chocolate",
    description: "La receta original con chispas belge",
    price: "$3.50",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400"
  },
  {
    id: 2,
    name: "Red Velvet",
    description: "Con chocolate blanco y vainilla",
    price: "$4.00",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400"
  },
  {
    id: 3,
    name: "Peanut Butter",
    description: "Crema de maní artesanal",
    price: "$3.75",
    image: "https://images.unsplash.com/photo-1590080875897-6e82de783a3c?w=400"
  },
  {
    id: 4,
    name: "Oatmeal Raisin",
    description: "Avena con pasas y nueces",
    price: "$3.25",
    image: "https://images.unsplash.com/photo-1490567674924-0e9567e5e3a4?w=400"
  },
  {
    id: 5,
    name: "Double Fudge",
    description: "Doble chocolate puro",
    price: "$4.25",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400"
  },
  {
    id: 6,
    name: "Lemon White",
    description: "Limón fresco con chocolate blanco",
    price: "$3.50",
    image: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=400"
  }
]

const features = [
  { icon: "fas fa-leaf", title: "100% Natural", desc: "Sin conservantes" },
  { icon: "fas fa-fire", title: "Horneadas Diario", desc: "Frescas y crujientes" },
  { icon: "fas fa-truck", title: "Delivery Gratis", desc: "En pedidos +$15" }
]

function App() {
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    gsap.from('.hero-content > *', {
      duration: 0.8,
      y: 40,
      opacity: 0,
      stagger: 0.15,
      ease: 'back.out(1.7)'
    })
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div style={{ background: '#1c1917', minHeight: '100vh', color: '#fff', fontFamily: 'Nunito, sans-serif' }}>
      {/* Floating Cart */}
      <div style={{
        position: 'fixed', bottom: '30px', right: '30px', width: '60px', height: '60px',
        background: 'linear-gradient(135deg, #ec4899, #be185d)', borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px',
        color: 'white', boxShadow: '0 10px 40px rgba(236,72,153,0.5)', zIndex: 1000,
        cursor: 'pointer', animation: 'bounce 2s infinite'
      }}>
        <i className="fas fa-shopping-cart"></i>
      </div>

      {/* Header */}
      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, padding: '15px 0', background: 'rgba(28,25,23,0.95)', backdropFilter: 'blur(20px)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="#" style={{ fontSize: '26px', fontWeight: 700, color: '#fff', textDecoration: 'none' }}>
            🍪 Cookie<span style={{ background: 'linear-gradient(135deg, #f59e0b, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Crush</span>
          </a>
          <nav style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
            <a href="#sabores" style={{ color: '#fff', textDecoration: 'none', fontWeight: 600 }}>Sabores</a>
            <a href="#pedidos" style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)', color: '#1c1917', padding: '10px 22px', borderRadius: '50px', textDecoration: 'none', fontWeight: 700 }}>Ordenar</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '100px 0', background: 'radial-gradient(ellipse at 30% 20%, rgba(245,158,11,0.2) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(236,72,153,0.15) 0%, transparent 40%), #1c1917' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 30px', display: 'flex', alignItems: 'center', width: '100%' }}>
          <div style={{ maxWidth: '500px' }}>
            <div className="fade-up" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'rgba(245,158,11,0.2)', border: '1px solid rgba(245,158,11,0.3)', padding: '8px 16px', borderRadius: '50px', color: '#fbbf24', fontSize: '13px', fontWeight: 700, marginBottom: '18px' }}>
              ✨ 100% Artesanales
            </div>
            <h1 className="fade-up" style={{ fontSize: 'clamp(38px, 7vw, 65px)', lineHeight: 1.15, marginBottom: '18px', fontFamily: 'Fredoka, sans-serif', fontWeight: 600 }}>
              Galletas que<br/>
              <span style={{ background: 'linear-gradient(135deg, #f59e0b, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Enamoran</span>
            </h1>
            <p className="fade-up" style={{ fontSize: '17px', color: '#a8a29e', marginBottom: '30px' }}>Recetas exclusivas, ingredientes premium.</p>
            <div className="fade-up" style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <a href="#pedidos" style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)', color: '#1c1917', padding: '14px 32px', borderRadius: '50px', textDecoration: 'none', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                <i className="fas fa-shopping-cart"></i> Ordenar
              </a>
              <a href="#sabores" style={{ border: '2px solid rgba(255,255,255,0.3)', color: '#fff', padding: '14px 32px', borderRadius: '50px', textDecoration: 'none', fontWeight: 700 }}>Sabores</a>
            </div>
          </div>
          <div style={{ position: 'absolute', right: '5%', width: '45%', maxWidth: '450px' }} className="fade-up">
            <img src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600" alt="Galletas" style={{ width: '100%', borderRadius: '20px', boxShadow: '0 30px 60px rgba(0,0,0,0.4)' }} />
          </div>
        </div>
      </section>

      {/* Sabores */}
      <section id="sabores" style={{ padding: '100px 0' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 30px' }}>
          <h2 className="fade-up" style={{ fontSize: 'clamp(30px, 5vw, 45px)', marginBottom: '12px', fontFamily: 'Fredoka, sans-serif', fontWeight: 600 }}>Nuestros Sabores</h2>
          <p className="fade-up" style={{ color: '#a8a29e', fontSize: '16px', marginBottom: '40px' }}>Elige tu favorita</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '25px' }}>
            {cookies.map((cookie, i) => (
              <div key={cookie.id} className="fade-up" style={{ 
                background: 'linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))', 
                border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', padding: '25px', textAlign: 'center',
                transition: 'all 0.4s', animationDelay: `${i * 0.1}s`
              }}>
                <img src={cookie.image} alt={cookie.name} style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '14px', marginBottom: '15px' }} />
                <h3 style={{ fontSize: '18px', marginBottom: '8px', fontFamily: 'Fredoka, sans-serif', fontWeight: 600 }}>{cookie.name}</h3>
                <p style={{ color: '#a8a29e', fontSize: '13px', marginBottom: '12px' }}>{cookie.description}</p>
                <div style={{ fontSize: '24px', fontWeight: 800, color: '#f59e0b' }}>{cookie.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '100px 0', background: 'linear-gradient(180deg,rgba(245,158,11,0.05),transparent)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 30px' }}>
          <div className="fade-up" style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
            {features.map((f, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '50px', height: '50px', background: 'linear-gradient(135deg, #f59e0b, #ec4899)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>
                  <i className={f.icon}></i>
                </div>
                <div>
                  <strong style={{ display: 'block' }}>{f.title}</strong>
                  <p style={{ fontSize: '13px', color: '#a8a29e' }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="pedidos" style={{ background: 'linear-gradient(135deg, #7c2d12, #78350f)', padding: '80px 0', textAlign: 'center' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 30px' }}>
          <h2 className="fade-up" style={{ fontSize: '42px', marginBottom: '15px', fontFamily: 'Fredoka, sans-serif', fontWeight: 600 }}>¿Hambriento? 🍪</h2>
          <p className="fade-up" style={{ fontSize: '17px', opacity: 0.9, marginBottom: '30px' }}>Ordena ahora</p>
          <a href="#" className="fade-up" style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)', color: '#1c1917', padding: '14px 32px', borderRadius: '50px', textDecoration: 'none', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
            <i className="fas fa-shopping-cart"></i> Ordenar Galletas
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#0c0a09', padding: '60px 0 25px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 30px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: '35px' }}>
            <div>
              <a href="#" style={{ fontSize: '26px', fontWeight: 700, color: '#fff', textDecoration: 'none', fontFamily: 'Fredoka, sans-serif' }}>
                🍪 Cookie<span style={{ background: 'linear-gradient(135deg, #f59e0b, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Crush</span>
              </a>
              <p style={{ color: '#a8a29e', margin: '15px 0', fontSize: '14px' }}>Las galletas más deliciosas de Guayaquil.</p>
              <div style={{ display: 'flex', gap: '10px' }}>
                <a href="#" style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><i className="fab fa-instagram"></i></a>
                <a href="#" style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><i className="fab fa-facebook-f"></i></a>
                <a href="#" style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><i className="fab fa-whatsapp"></i></a>
              </div>
            </div>
            <div>
              <h4 style={{ fontSize: '16px', marginBottom: '18px' }}>Sabores</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: '#a8a29e', textDecoration: 'none', fontSize: '14px' }}>Chocolate</a></li>
                <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: '#a8a29e', textDecoration: 'none', fontSize: '14px' }}>Red Velvet</a></li>
                marginBottom: '10px' }} <li style={{><a href="#" style={{ color: '#a8a29e', textDecoration: 'none', fontSize: '14px' }}>Peanut Butter</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontSize: '16px', marginBottom: '18px' }}>Empresa</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: '#a8a29e', textDecoration: 'none', fontSize: '14px' }}>Nosotros</a></li>
                <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: '#a8a29e', textDecoration: 'none', fontSize: '14px' }}>Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontSize: '16px', marginBottom: '18px' }}>Contacto</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '10px', color: '#a8a29e', fontSize: '14px' }}><i className="fas fa-map-marker-alt"></i> Guayaquil</li>
                <li style={{ marginBottom: '10px', color: '#a8a29e', fontSize: '14px' }}><i className="fas fa-phone"></i> +593 99 999 9999</li>
              </ul>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '20px', textAlign: 'center', color: '#a8a29e', fontSize: '13px', marginTop: '35px' }}>© 2026 Cookie Crush. Todos los derechos reservados.</div>
        </div>
      </footer>

      <style>{`
        .fade-up { opacity: 0; transform: translateY(30px); transition: all 0.6s ease; }
        .fade-up.visible { opacity: 1; transform: translateY(0); }
        @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @media (max-width: 992px) { .hero-image { display: none; } }
      `}</style>
    </div>
  )
}

export default App
