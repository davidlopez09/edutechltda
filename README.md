# Edutech Ltda - Plataforma Web Oficial

Plataforma web empresarial desarrollada en **React + Vite** con arquitectura de componentes limpia, optimizada para rendimiento, SEO y conversión comercial.

## 🚀 Tecnologías

- **React 18** (Componentes funcionales, Hooks)
- **Vite 6** (Empaquetado ultrarrápido y Hot Module Replacement)
- **Lucide React** (Iconografía vectorial moderna)
- **EmailJS** (Recepción y procesamiento de formularios de contacto directo)
- **CSS Modular Moderno** (Diseño responsivo, animaciones fluidas, paleta corporativa y dark accents)

## 📁 Estructura del Proyecto

```text
edutechltda/
├── dist/                      # Compilado final listo para producción
├── public/                    # Assets estáticos (imágenes de clientes, proyectos, logo)
├── src/
│   ├── components/            # Componentes modulares
│   │   ├── CustomCursor.jsx   # Cursor interactivo de diseño
│   │   ├── Navbar.jsx         # Menú de navegación responsive con scroll suave
│   │   ├── Hero.jsx           # Banner principal con métricas dinámicas y partículas
│   │   ├── Services.jsx       # Catálogo de servicios con enlaces directos
│   │   ├── Process.jsx        # Metodología ágil de 4 pasos
│   │   ├── Projects.jsx       # Portafolio interactivo con modal de detalles
│   │   ├── About.jsx          # Misión, Visión y valores corporativos
│   │   ├── ClientsAndTestimonials.jsx # Carrusel continuo de marcas y opiniones
│   │   ├── Blog.jsx           # Artículos y recursos de interés
│   │   ├── Contact.jsx        # Formulario conectado con EmailJS y canales directos
│   │   ├── Footer.jsx         # Pie de página corporativo y botón 'Volver arriba'
│   │   └── WhatsAppButton.jsx # Botón flotante animado de WhatsApp Business
│   ├── data/
│   │   └── content.js         # Centralización de textos, clientes, servicios y proyectos
│   ├── styles/
│   │   └── main.css           # Sistema de diseño, tokens de color, variables y media queries
│   ├── App.jsx                # Componente principal integrador
│   └── main.jsx               # Punto de entrada de React
├── index.html                 # Plantilla HTML con metadata SEO y tipografías
├── vite.config.js             # Configuración de compilación Vite
└── package.json               # Dependencias y scripts
```

## 🛠️ Comandos Disponibles

### Modo Desarrollo
Inicia el servidor local de desarrollo con recarga instantánea:
```bash
npm run dev
```

### Compilar para Producción
Genera el paquete optimizado y minificado en la carpeta `/dist`:
```bash
npm run build
```

### Probar Compilado Localmente
Previsualiza el contenido compilado de `/dist`:
```bash
npm run preview
```