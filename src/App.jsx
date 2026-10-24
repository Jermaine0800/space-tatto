import { useState } from 'react';
import './App.css';

// 1. Sus 3 Estilos Principales
const estilosTatuaje = [
  {
    id: 'blackwork',
    titulo: 'BLACKWORK',
    icono: '✒️',
    descripcion: 'Diseños de alto impacto con tintas negras profundas, tramas, alto contraste y bloques sólidos de sombras.',
    precioEstimado: 'Desde $1,200 MXN',
  },
  {
    id: 'fine-line',
    titulo: 'FINE LINE',
    icono: '✨',
    descripcion: 'Líneas finas, detalles minuciosos y estética delicada. Ideal para piezas botánicas, micro-tatuajes y textos.',
    precioEstimado: 'Desde $800 MXN',
  },
  {
    id: 'color',
    titulo: 'TATUAJES A COLOR',
    icono: '🎨',
    descripcion: 'Paletas saturadas, degradados vivos y combinaciones dinámicas que destacan y dan vida al arte en la piel.',
    precioEstimado: 'Desde $1,500 MXN',
  },
];

// 2. Pasarela de Tatuajes (Nota: Se le quita '/public' a la ruta)
const galeriaTatuajes = [
  {
    id: 1,
    titulo: 'Pieza Blackwork Ornamental',
    categoria: 'Blackwork',
    precio: 'Est. $2,500 MXN',
    imagen: '/tatuajes/Tatuaje sr deya.jpeg',
  },
  {
    id: 2,
    titulo: 'Botánica Fine Line',
    categoria: 'Fine Line',
    precio: 'Est. $1,200 MXN',
    imagen: '/tatuajes/FineLine.jpeg',
  },
  {
    id: 3,
    titulo: 'Composición Full Color',
    categoria: 'Tatuajes a Color',
    precio: 'Est. $3,200 MXN',
    imagen: '/tatuajes/Tato goku.jpeg',
  },
  {
    id: 4,
    titulo: 'Sombra & Delineado Blackwork',
    categoria: 'Blackwork',
    precio: 'Est. $1,800 MXN',
    imagen: '/tatuajes/Tato monse.jpeg',
  },
];

function App() {
  const [modalImagen, setModalImagen] = useState(null);

  return (
    <div className="sitio-contenedor">
      {/* NAVEGACIÓN SUPERIOR */}
      <nav className="navbar">
        <div className="logo-contenedor">
          {/* LOGO DE SPACE TATTOO: Pon tu archivo de logo en public/ y cambia '/logo-space.png' por su nombre */}
          <img src="/public/tatuajes/Logo_tato_space-removebg-preview.png" alt="Space Tattoo Logo" className="logo-img" />
          <span>SPACE TATTOO</span>
        </div>
        <ul className="nav-links">
          <li><a href="#hero">INICIO</a></li>
          <li><a href="#estilos">ESTILOS</a></li>
          <li><a href="#pasarela">PASARELA</a></li>
          <li><a href="#contacto">CONTACTO</a></li>
        </ul>
      </nav>

      {/* CAPA 1: HERO CON VIDEO DE FONDO */}
      <header id="hero" className="hero-section">
        <video 
          className="video-fondo" 
          autoPlay 
          loop 
          muted 
          playsInline
          poster="https://images.unsplash.com/photo-1598371839696-5c5bb00bd472?q=80&w=1200"
        >
          <source src="/video-hero.mp4" type="video/mp4" />
        </video>

        <div className="overlay-video"></div>

        <div className="hero-content">
          <span className="hero-subtitle">TATTOO STUDIO & ARTIST</span>
          <h1 className="hero-title">REYNA TATTOO</h1>

          {/* APARTADO PARA EL LOGO ABAJO DEL TITULO */}
          <div className="hero-logo-contenedor">
            {/* Pon el archivo del logo en public/ y cambia '/logo-reyna.png' */}
            <img src="/public/tatuajes/LOGO-removebg-preview.png" alt="Reyna Tattoo Logo" className="hero-logo-img" />
          </div>

          <p className="hero-description">
            Especialista en Blackwork, Fine Line y Tatuajes a Color.
          </p>
          <a href="#pasarela" className="btn-primary">EXPLORAR PASARELA</a>
        </div>
      </header>

      {/* CAPA 2: SUS 3 ESTILOS */}
      <section id="estilos" className="seccion-estilos">
        <div className="contenedor-ancho">
          <h2 className="titulo-seccion-centrado">ESPECIALIDADES & ESTILOS</h2>
          <p className="subtitulo-seccion-centrado">Enfoque técnico y cotizaciones estimadas</p>
          
          <div className="grid-tres-capas">
            {estilosTatuaje.map((estilo) => (
              <div key={estilo.id} className="tarjeta-estilo">
                <div className="icono-estilo">{estilo.icono}</div>
                <h3>{estilo.titulo}</h3>
                <p className="desc-estilo">{estilo.descripcion}</p>
                <div className="badge-precio">{estilo.precioEstimado}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPA 3: PASARELA */}
      <section id="pasarela" className="seccion-pasarela">
        <div className="contenedor-ancho">
          <div className="encabezado-pasarela">
            <span>GALERÍA DE TRABAJOS</span>
            <h2>ART SHOWCASE</h2>
            <p>Piezas recientes y diseños realizados</p>
          </div>

          <div className="grid-pasarela">
            {galeriaTatuajes.map((item) => (
              <div 
                key={item.id} 
                className="tarjeta-pasarela"
                onClick={() => setModalImagen(item)}
              >
                <img src={item.imagen} alt={item.titulo} />
                <div className="overlay-pasarela">
                  <span className="categoria-tag">{item.categoria}</span>
                  <h3>{item.titulo}</h3>
                  <p className="precio-tag">{item.precio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL DE VISTA PREVIA */}
      {modalImagen && (
        <div className="modal-fondo" onClick={() => setModalImagen(null)}>
          <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
            <button className="btn-cerrar" onClick={() => setModalImagen(null)}>✕</button>
            <img src={modalImagen.imagen} alt={modalImagen.titulo} />
            <div className="modal-info">
              <h3>{modalImagen.titulo}</h3>
              <p>Estilo: {modalImagen.categoria}</p>
              <span className="precio-modal">{modalImagen.precio}</span>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer id="contacto" className="footer-sitio">
        <p>© 2026 SPACE TATTOO STUDIO • REYNA TATTOO — Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;