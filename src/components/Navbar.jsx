import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = [
        "home",
        "services",
        "process",
        "projects",
        "about",
        "clients",
        "testimonials",
        "blog",
        "contact",
      ];

      const scrollPos = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Inicio", href: "#home", id: "home" },
    { label: "Servicios", href: "#services", id: "services" },
    { label: "Proceso", href: "#process", id: "process" },
    { label: "Proyectos", href: "#projects", id: "projects" },
    { label: "Nosotros", href: "#about", id: "about" },
    { label: "Clientes", href: "#clients", id: "clients" },
    { label: "Blog", href: "#blog", id: "blog" },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header id="header" className={scrolled ? "scrolled" : ""}>
      <div className="container">
        <nav>
          <a
            href="#home"
            className="logo"
            onClick={(e) => handleLinkClick(e, "#home")}
            aria-label="Edutech Ltda Home"
          >
            <img src="/images/edutechlogo-transparent.png" alt="Edutech Ltda" />
          </a>

          <ul className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={activeSection === item.id ? "active-link" : ""}
                  onClick={(e) => handleLinkClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="nav-cta"
                onClick={(e) => handleLinkClick(e, "#contact")}
              >
                <span>Hablemos</span>
                <ArrowUpRight size={16} />
              </a>
            </li>
          </ul>

          <button
            className="hamburger"
            id="hamburger"
            aria-label="Abrir menú"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>
    </header>
  );
};
