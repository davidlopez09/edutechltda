// Inicializar AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init();
    
    // Header scroll effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Testimonial slider
    const testimonialCards = document.getElementById('testimonialCards');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    
    // Set initial position
    testimonialCards.style.transform = `translateX(0%)`;
    
    // Handle dot clicks
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const slideIndex = parseInt(this.getAttribute('data-index'));
            goToSlide(slideIndex);
        });
    });
    
    function goToSlide(index) {
        currentSlide = index;
        testimonialCards.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Update active dot
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentSlide].classList.add('active');
    }
    
    // Auto slide
    setInterval(() => {
        currentSlide = (currentSlide + 1) % dots.length;
        goToSlide(currentSlide);
    }, 8000);
    
    
    
    // GSAP Animations
    gsap.fromTo('.hero-text h1', 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 1, delay: 0.5 }
    );
    
    gsap.fromTo('.hero-text p', 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 1, delay: 0.8 }
    );
    
    gsap.fromTo('.hero-btns', 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 1, delay: 1.1 }
    );
});
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar elementos
    const modal = document.getElementById('projectModal');
    const modalImg = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const closeBtn = document.querySelector('.close-modal');
    const viewButtons = document.querySelectorAll('.view-project');
    
    // Función para abrir el modal
    function openModal(img, title, description) {
        modalImg.src = img;
        modalTitle.textContent = title;
        modalDescription.textContent = description;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Evitar scroll en el body cuando el modal está abierto
    }
    
    // Función para cerrar el modal
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restaurar scroll
    }
    
    // Asignar eventos a los botones "Ver Proyecto"
    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const img = this.getAttribute('data-img');
            const title = this.getAttribute('data-title');
            const description = this.getAttribute('data-description');
            openModal(img, title, description);
        });
    });
    
    // Cerrar modal al hacer clic en el botón de cerrar
    closeBtn.addEventListener('click', closeModal);
    
    // Cerrar modal al hacer clic fuera del contenido
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Cerrar modal con la tecla ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
});
