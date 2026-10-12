import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { companyInfo } from "../data/content";
import { WhatsAppIcon } from "./WhatsAppButton";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Desarrollo Web",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: false, message: "" });

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: `${formData.message} (Servicio solicitado: ${formData.service} | Teléfono: ${formData.phone})`,
        time: new Date().toLocaleString(),
      };

      await emailjs.send(
        companyInfo.emailJs.serviceId,
        companyInfo.emailJs.templateId,
        templateParams,
        companyInfo.emailJs.publicKey
      );

      setStatus({
        submitting: false,
        success: true,
        error: false,
        message: "¡Mensaje recibido con éxito! En breve un asesor se pondrá en contacto contigo.",
      });

      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "Desarrollo Web",
        message: "",
      });

      setTimeout(() => {
        setStatus((prev) => ({ ...prev, success: false }));
      }, 7000);
    } catch (err) {
      console.error("EmailJS Error:", err);
      setStatus({
        submitting: false,
        success: false,
        error: true,
        message:
          "Hubo un inconveniente al enviar el correo. Por favor contáctanos directamente a nuestro WhatsApp para atención inmediata.",
      });
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-title">
          <span className="section-label">Comunícate con Nosotros</span>
          <h2>
            Inicia Tu <span>Transformación Digital</span>
          </h2>
          <p>
            Cuéntanos la visión de tu proyecto o solicitud técnica. Diseñaremos
            una propuesta a tu medida con plazos y cotización detallada.
          </p>
        </div>

        <div className="contact-wrapper">
          {/* Info Card */}
          <div className="contact-left">
            <div className="contact-left-inner">
              <h3>Hablemos de Tu Proyecto</h3>
              <p>
                Estamos listos para transformar los objetivos de tu empresa en una
                solución tecnológica escalable, robusta y con diseño prémium.
              </p>

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <Mail size={20} />
                </div>
                <div className="contact-detail-text">
                  <h4>Correo Electrónico</h4>
                  <p>
                    <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
                  </p>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <Phone size={20} />
                </div>
                <div className="contact-detail-text">
                  <h4>Líneas Telefónicas</h4>
                  <p>
                    {companyInfo.phones.map((phone, idx) => (
                      <span key={idx}>
                        <a href={`tel:${phone.replace(/\s+/g, "")}`}>{phone}</a>
                        {idx < companyInfo.phones.length - 1 ? " / " : ""}
                      </span>
                    ))}
                  </p>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <Clock size={20} />
                </div>
                <div className="contact-detail-text">
                  <h4>Horario de Atención</h4>
                  <p>
                    {companyInfo.schedule.weekdays}
                    <br />
                    {companyInfo.schedule.saturdays}
                  </p>
                </div>
              </div>

              <div className="contact-social-box">
                <h4>Canal de Asesoría Directa</h4>
                <a
                  href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(
                    companyInfo.whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-direct-btn"
                >
                  <WhatsAppIcon size={18} />
                  <span>Chat Directo por WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="contact-right">
            <h3>Envíanos un Mensaje</h3>
            <p className="contact-form-subtitle">
              Completa el formulario y te responderemos en menos de 24 horas.
            </p>

            <form onSubmit={handleSubmit} id="contactForm">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Nombre Completo *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ej. Juan Pérez"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Teléfono / WhatsApp *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Ej. +57 310 000 0000"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Correo Corporativo *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ejemplo@empresa.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Servicio de Interés</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="Desarrollo Web">Desarrollo Web & Portales</option>
                    <option value="Tiendas Online">Tiendas Online / E-Commerce</option>
                    <option value="Aplicaciones Móviles">Aplicaciones Móviles</option>
                    <option value="Software a Medida">Software a Medida</option>
                    <option value="Inteligencia Artificial">Inteligencia Artificial</option>
                    <option value="Mantenimiento y Soporte">Mantenimiento & Soporte</option>
                    <option value="Consultoría General">Consultoría General</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Cuéntanos sobre tu necesidad *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe brevemente qué buscas construir o mejorar..."
                  required
                />
              </div>

              {status.success && (
                <div className="form-feedback success">
                  <CheckCircle size={20} />
                  <span>{status.message}</span>
                </div>
              )}

              {status.error && (
                <div className="form-feedback error">
                  <AlertCircle size={20} />
                  <span>{status.message}</span>
                </div>
              )}

              <button
                type="submit"
                className="btn-submit"
                disabled={status.submitting}
              >
                {status.submitting ? (
                  <>
                    <Loader2 size={18} className="spin" />
                    <span>Enviando información...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Enviar Mensaje</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
