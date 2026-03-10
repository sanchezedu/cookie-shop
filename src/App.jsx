import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const cookies = [
  { title: 'Classic Chocolate', desc: 'La receta original con chispas belge.', price: '$3.50', img: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400' },
  { title: 'Red Velvet', desc: 'Con chocolate blanco y vainilla.', price: '$4.00', img: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400' },
  { title: 'Peanut Butter', desc: 'Crema de maní artesanal.', price: '$3.75', img: 'https://images.unsplash.com/photo-1590080875897-6e82de783a3c?w=400' },
  { title: 'Oatmeal Raisin', desc: 'Avena con pasas y nueces.', price: '$3.25', img: 'https://images.unsplash.com/photo-1490567674924-0e9567e5e3a4?w=400' },
  { title: 'Double Fudge', desc: 'Doble chocolate puro.', price: '$4.25', img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400' },
  { title: 'Lemon White', desc: 'Limón fresco con chocolate blanco.', price: '$3.50', img: 'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=400' },
]

function App() {
  const heroRef = useRef(null)
  const cookiesRef = useRef(null)

  useEffect(() => {
    gsap.fromTo('.hero-content > *', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2, delay: 0.3 })
    gsap.fromTo('.hero-image img', { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 1, delay: 0.5 })
    gsap.fromTo('.cookie-card', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, scrollTrigger: { trigger: cookiesRef.current, start: 'top 80%' } })
  }, [])

  return (
    <div className="min-h-screen bg-[#1c1917]">
      <header className="fixed top-0 left-0 right-0 bg-[#1c1917]/95 backdrop-blur-sm z-50 py-4">
        <div className="max-w-7xl mx-auto px-5 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-white no-underline">🍪 Cookie<span className="bg-gradient-to-r from-[#f59e0b] to-[#ec4899] bg-clip-text text-transparent">Crush</span></a>
          <nav className="flex items-center gap-6">
            <a href="#sabores" className="text-white no-underline font-semibold hover:text-[#f59e0b] transition">Sabores</a>
            <a href="#pedidos" className="bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-[#1c1917] px-6 py-2 rounded-full font-bold no-underline hover:opacity-90 transition">Ordenar</a>
          </nav>
        </div>
      </header>

      <section ref={heroRef} className="min-h-screen flex items-center pt-20 bg-[radial-gradient(ellipse_at_30%_20%,rgba(245,158,11,0.2)_0%,transparent_50%),radial-gradient(ellipse_at_70%_80%,rgba(236,72,153,0.15)_0%,transparent_40%)]">
        <div className="max-w-7xl mx-auto px-5 flex items-center gap-12">
          <div className="hero-content flex-1">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">Galletas que<br /><span className="bg-gradient-to-r from-[#f59e0b] to-[#ec4899] bg-clip-text text-transparent">Enamoran</span></h1>
            <p className="text-lg text-gray-400 mb-8">Recetas exclusivas, ingredientes premium.</p>
            <a href="#pedidos" className="inline-block bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-[#1c1917] px-8 py-3 rounded-full font-bold no-underline hover:opacity-90 transition">Ordenar</a>
          </div>
          <div className="hero-image flex-1 hidden md:block">
            <img src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600" alt="Galletas" className="w-full max-w-lg rounded-2xl" loading="lazy" />
          </div>
        </div>
      </section>

      <section ref={cookiesRef} id="sabores" className="py-24 bg-[#1c1917]">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Nuestros Sabores</h2>
          <p className="text-gray-400 text-center mb-12">Elige tu favorita</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cookies.map((c, i) => (
              <div key={i} className="cookie-card bg-white/10 border border-white/10 rounded-2xl p-6 text-center hover:border-[#f59e0b]/50 transition">
                <img src={c.img} alt={c.title} className="w-full h-36 object-cover rounded-xl mb-4" loading="lazy" />
                <h3 className="text-lg font-semibold mb-2">{c.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{c.desc}</p>
                <div className="text-2xl font-bold text-[#f59e0b]">{c.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-[#f59e0b]/5 to-transparent">
        <div className="max-w-7xl mx-auto px-5 flex justify-center gap-10 flex-wrap">
          <div className="flex items-center gap-3"><div className="w-12 h-12 bg-gradient-to-r from-[#f59e0b] to-[#ec4899] rounded-full flex items-center justify-center"><i className="fas fa-leaf"></i></div><div><strong className="block">100% Natural</strong><p className="text-xs text-gray-400">Sin conservantes</p></div></div>
          <div className="flex items-center gap-3"><div className="w-12 h-12 bg-gradient-to-r from-[#f59e0b] to-[#ec4899] rounded-full flex items-center justify-center"><i className="fas fa-fire"></i></div><div><strong className="block">Horneadas Diario</strong><p className="text-xs text-gray-400">Frescas y crujientes</p></div></div>
          <div className="flex items-center gap-3"><div className="w-12 h-12 bg-gradient-to-r from-[#f59e0b] to-[#ec4899] rounded-full flex items-center justify-center"><i className="fas fa-truck"></i></div><div><strong className="block">Delivery Gratis</strong><p className="text-xs text-gray-400">En pedidos +$15</p></div></div>
        </div>
      </section>

      <section id="pedidos" className="py-20 bg-gradient-to-r from-[#7c2d12] to-[#78350f] text-center">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">¿Hambriento? 🍪</h2>
          <p className="text-gray-300 mb-8">Ordena ahora</p>
          <a href="#" className="inline-block bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-[#1c1917] px-8 py-4 rounded-full font-bold hover:opacity-90 transition">Ordenar Galletas</a>
        </div>
      </section>

      <footer className="bg-[#0c0a09] py-16">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div><a href="#" className="text-2xl font-bold text-white no-underline">🍪 Cookie<span className="bg-gradient-to-r from-[#f59e0b] to-[#ec4899] bg-clip-text text-transparent">Crush</span></a><p className="text-gray-500 text-sm mt-4">Las galletas más deliciosas.</p></div>
            <div><h4 className="font-semibold mb-4">Sabores</h4><ul className="space-y-2 text-gray-500 text-sm"><li>Chocolate</li><li>Red Velvet</li><li>Peanut Butter</li></ul></div>
            <div><h4 className="font-semibold mb-4">Empresa</h4><ul className="space-y-2 text-gray-500 text-sm"><li>Nosotros</li><li>Contacto</li></ul></div>
            <div><h4 className="font-semibold mb-4">Contacto</h4><ul className="space-y-2 text-gray-500 text-sm"><li><i className="fas fa-map-marker-alt mr-2"></i>Guayaquil</li><li><i className="fas fa-phone mr-2"></i>+593 99 999 9999</li></ul></div>
          </div>
          <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-600 text-sm">© 2026 Cookie Crush. Todos los derechos reservados.</div>
        </div>
      </footer>

      <div className="floating-cart"><i className="fas fa-shopping-cart"></i></div>
      <a href="https://wa.me/593999999999" target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
    </div>
  )
}
export default App
