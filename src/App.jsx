import { useState, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Scroll animations hook
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeUp')
        }
      })
    },
    { threshold: 0.1 }
  )
  document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el))
  return () => observer.disconnect()
}, [])

// Data
const cookies = [
  {
    id: 1,
    name: "Choc Chip Supreme",
    description: "Trozos de chocolate Belgian",
    price: "$4.50",
    ingredients: "Chocolate 70%, Mantequilla artesanal",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500&q=80"
  },
  {
    id: 2,
    name: "Red Velvet Dream",
    description: "Con frosting de queso crema",
    price: "$5.00",
    ingredients: "Cacao holandés, Queso crema",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&q=80"
  },
  {
    id: 3,
    name: "Oatmeal Bliss",
    description: "Con nueces y pasas",
    price: "$3.75",
    ingredients: "Avena orgánica, Nueces pecans",
    image: "https://images.unsplash.com/photo-1490567674924-0e9567e5e3a4?w=500&q=80"
  },
  {
    id: 4,
    name: "Matcha White",
    description: "Matcha japonés y white chocolate",
    price: "$5.25",
    ingredients: "Matcha ceremonial, Chocolate blanco",
    image: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=500&q=80"
  },
  {
    id: 5,
    name: "Salted Caramel",
    description: "Drizzle de caramelo y sal marina",
    price: "$4.75",
    ingredients: "Caramelo artesanal, Sal Maldon",
    image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=500&q=80"
  }
]

const boxSizes = [
  {
    id: 1,
    size: "4 unidades",
    price: "$18",
    description: "Perfecto para probar",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&q=80"
  },
  {
    id: 2,
    size: "6 unidades",
    price: "$25",
    description: "Para compartir",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&q=80"
  },
  {
    id: 3,
    size: "12 unidades",
    price: "$45",
    description: "La fiesta completa",
    image: "https://images.unsplash.com/photo-1490567674924-0e9567e5e3a4?w=400&q=80"
  }
]

const testimonials = [
  {
    id: 1,
    text: "Las mejores cookies que he probado en mi vida.黄金",
    author: "María García",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
  },
  {
    id: 2,
    text: "Mi hijo no quiere otra cosa para merendar!",
    author: "Carlos Mendoza",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
  },
  {
    id: 3,
    text: "El regalo perfecto. Llegaron frescas y deliciosas",
    author: "Ana López",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80"
  },
  {
    id: 4,
    text: "No puedo parar de comerlas. Son adictivas!",
    author: "Pedro Ruiz",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80"
  },
  {
    id: 5,
    text: "Calidad premium en cada mordida",
    author: "Sofia Hernández",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80"
  }
]

const ingredients = [
  { name: "Chocolate Belgian", image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=300&q=80" },
  { name: "Mantequilla francesa", image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=300&q=80" },
  { name: "Vainilla de Madagascar", image: "https://images.unsplash.com/photo-1622627660251-caf2e1f8c6c9?w=300&q=80" },
  { name: "Avena orgánica", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&q=80" }
]

function App() {
  const [cartCount, setCartCount] = useState(0)
  const [activeBox, setActiveBox] = useState(0)

  const addToCart = () => {
    setCartCount(prev => prev + 1)
  }

  return (
    <div className="bg-amber-50 text-amber-900 min-h-screen">
      {/* Floating Cart Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button 
          onClick={addToCart}
          className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center gap-2 animate-bounce-gentle hover-shine"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="bg-white text-amber-600 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
            {cartCount}
          </span>
        </button>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-amber-50/90 backdrop-blur-md py-4">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="text-3xl font-display font-bold text-amber-600">
            COOKIE<span className="text-amber-800">CRUSH</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#bestsellers" className="text-amber-700 hover:text-amber-500 transition-colors font-semibold">Bestsellers</a>
            <a href="#calidad" className="text-amber-700 hover:text-amber-500 transition-colors font-semibold">Calidad</a>
            <a href="#cajas" className="text-amber-700 hover:text-amber-500 transition-colors font-semibold">Cajas</a>
            <button onClick={addToCart} className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-full font-bold transition-all hover:scale-105 hover-shine">
              Pedir Ahora
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=1920&q=80"
            alt="Cookies"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-amber-900/60 via-amber-800/40 to-amber-900/70"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <h1 className="font-display text-7xl md:text-9xl font-bold text-white mb-4 animate-shimmer">
            COOKIE CRUSH
          </h1>
          <p className="text-2xl md:text-3xl text-amber-100 mb-8 max-w-2xl">
            Galletas gourmet que te enamoran desde la primera mordida
          </p>
          <button 
            onClick={addToCart}
            className="bg-amber-500 hover:bg-amber-400 text-white text-xl font-bold px-12 py-5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-amber-400/50 animate-bounce-gentle hover-shine"
          >
            ¡Pedir Ahora!
          </button>
        </div>

        {/* Decorative cookies */}
        <div className="absolute bottom-20 left-10 animate-float hidden lg:block">
          <div className="w-20 h-20 bg-amber-600 rounded-full opacity-80"></div>
        </div>
        <div className="absolute top-32 right-20 animate-float hidden lg:block" style={{ animationDelay: '1s' }}>
          <div className="w-16 h-16 bg-amber-700 rounded-full opacity-60"></div>
        </div>
      </section>

      {/* Bestsellers Carousel */}
      <section id="bestsellers" className="py-32 bg-gradient-to-b from-amber-50 to-amber-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-amber-600 tracking-[0.3em] text-sm font-bold mb-4">NUESTROS BESTSELLERS</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-amber-800">Las favoritas de todos</h2>
          </div>

          <div className="flex gap-6 overflow-x-auto hide-scrollbar pb-8 justify-center flex-wrap">
            {cookies.map((cookie) => (
              <div 
                key={cookie.id}
                className="flex-shrink-0 w-[280px] group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={cookie.image} 
                    alt={cookie.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-3"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-sm font-semibold">{cookie.ingredients}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold text-amber-800 mb-1">{cookie.name}</h3>
                  <p className="text-amber-600 text-sm mb-3">{cookie.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-amber-600">{cookie.price}</span>
                    <button 
                      onClick={addToCart}
                      className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-full font-bold text-sm transition-all hover:scale-105 hover-shine"
                    >
                      Añadir
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients Parallax */}
      <section id="calidad" className="py-32 bg-amber-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-amber-400 tracking-[0.3em] text-sm font-bold mb-4">CALIDAD PREMIUM</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">Solo lo mejor</h2>
            <p className="text-amber-200 text-xl max-w-2xl mx-auto">
              Cada ingrediente seleccionado cuidadosamente para crear la galleta perfecta
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ingredients.map((ing, i) => (
              <div 
                key={i}
                className={`relative group overflow-hidden rounded-2xl animate-float`}
                style={{ animationDelay: `${i * 0.5}s` }}
              >
                <img 
                  src={ing.image} 
                  alt={ing.name}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-2xl font-bold">{ing.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gift Boxes Bento */}
      <section id="cajas" className="py-32 bg-gradient-to-b from-amber-100 to-amber-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-amber-600 tracking-[0.3em] text-sm font-bold mb-4">REGALOS PERFECTOS</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-amber-800">Arma tu caja</h2>
            <p className="text-amber-600 text-xl mt-4">El regalo más dulce que puedes dar</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {boxSizes.map((box, index) => (
              <div 
                key={box.id}
                onMouseEnter={() => setActiveBox(index)}
                className={`relative overflow-hidden rounded-3xl transition-all duration-500 cursor-pointer ${activeBox === index ? 'ring-4 ring-amber-500 scale-105' : 'hover:scale-102'}`}
              >
                <img 
                  src={box.image} 
                  alt={box.size}
                  className="w-full h-[400px] object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900 via-amber-900/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6">
                    <h3 className="font-display text-3xl font-bold text-white mb-2">{box.size}</h3>
                    <p className="text-amber-200 mb-4">{box.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-amber-400">{box.price}</span>
                      <button 
                        onClick={addToCart}
                        className="bg-white text-amber-800 px-6 py-3 rounded-full font-bold hover:bg-amber-400 hover:text-white transition-all"
                      >
                        Elegir
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Marquee */}
      <section className="py-20 bg-amber-800 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...testimonials, ...testimonials].map((testimonial, i) => (
            <div key={i} className="flex items-center gap-6 px-8">
              <img 
                src={testimonial.image} 
                alt={testimonial.author}
                className="w-16 h-16 rounded-full object-cover border-4 border-amber-400"
              />
              <div>
                <p className="text-white text-xl font-bold italic">"{testimonial.text}"</p>
                <p className="text-amber-300">— {testimonial.author}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-amber-950 text-amber-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="font-display text-4xl font-bold text-amber-400 mb-4">COOKIE CRUSH</h3>
              <p className="text-amber-200">Galletas gourmet hechas con amor y los mejores ingredientes</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Síguenos</h4>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-amber-800 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                </a>
                <a href="#" className="w-12 h-12 bg-amber-800 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Suscríbete</h4>
              <p className="text-amber-200 mb-4">Obtén 10% de descuento en tu primera orden</p>
              <form onSubmit={(e) => { e.preventDefault(); alert('¡Gracias! Código: COOKIE10') }} className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Tu email"
                  className="flex-1 bg-amber-800 border border-amber-700 rounded-full px-4 py-3 text-white placeholder:text-amber-400 focus:border-amber-400 outline-none"
                />
                <button type="submit" className="bg-amber-500 hover:bg-amber-400 text-white px-6 py-3 rounded-full font-bold transition-colors">
                  Go!
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-amber-800 pt-8 text-center text-amber-400">
            <p>© 2026 Cookie Crush. Hecho con 💛 y mantequilla</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
