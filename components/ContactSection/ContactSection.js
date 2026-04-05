'use client';
import { useState } from 'react';
import styles from './ContactSection.module.css';

export default function ContactSection() {
  const [form, setForm] = useState({ empresa: '', cargo: '', email: '', pais: '', volumen: '', mensaje: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contacto" className={styles.section}>
      <div className={styles.infoCol}>
        <p className={styles.tag}>CONTACTO B2B</p>
        <h2 className={styles.headline}>
          Solicite su<br />muestra gratuita
        </h2>
        <p className={styles.body}>
          Enviamos muestras de los 6 sabores sin cargo a operadores cualificados.
          Respuesta garantizada en 24 horas.
        </p>
        <div className={styles.infoList}>
          <div className={styles.infoRow}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.infoIcon}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <span>ventas@concanaexport.com</span>
          </div>
          <div className={styles.infoRow}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.infoIcon}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <span>+57 (1) 234 5678</span>
          </div>
          <div className={styles.infoRow}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.infoIcon}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>Bogotá, Colombia</span>
          </div>
        </div>
      </div>

      <div className={styles.formCol}>
        {submitted ? (
          <div className={styles.success}>
            <p className={styles.successTitle}>Solicitud recibida</p>
            <p className={styles.successBody}>Le contactaremos en menos de 24 horas con información sobre su muestra.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <p className={styles.formTitle}>Datos de su empresa</p>

            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label}>EMPRESA</label>
                <input name="empresa" value={form.empresa} onChange={handleChange} placeholder="Nombre de su empresa" className={styles.input} required />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>CARGO</label>
                <input name="cargo" value={form.cargo} onChange={handleChange} placeholder="Director de compras" className={styles.input} required />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label}>EMAIL CORPORATIVO</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="correo@empresa.com" className={styles.input} required />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>PAÍS DE DESTINO</label>
                <select name="pais" value={form.pais} onChange={handleChange} className={styles.input} required>
                  <option value="">Seleccionar país</option>
                  <option>España</option><option>Francia</option><option>Italia</option>
                  <option>Alemania</option><option>Portugal</option><option>México</option>
                  <option>Colombia</option><option>Argentina</option><option>Chile</option>
                  <option>Otro</option>
                </select>
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.label}>VOLUMEN ESTIMADO MENSUAL</label>
              <select name="volumen" value={form.volumen} onChange={handleChange} className={styles.input}>
                <option value="">Seleccionar rango</option>
                <option>Menos de 100 kg</option>
                <option>100–500 kg</option>
                <option>500 kg – 2 t</option>
                <option>Más de 2 t</option>
              </select>
            </div>

            <div className={styles.field}>
              <label className={styles.label}>MENSAJE ADICIONAL (OPCIONAL)</label>
              <textarea name="mensaje" value={form.mensaje} onChange={handleChange} placeholder="Cuéntenos sus necesidades específicas..." className={styles.textarea} rows={4} />
            </div>

            <button type="submit" className={styles.submit} disabled={loading}>
              {loading ? 'ENVIANDO...' : 'SOLICITAR MUESTRA GRATUITA'}
            </button>
            <p className={styles.note}>Respondemos en menos de 24 horas. Sin compromiso de compra.</p>
          </form>
        )}
      </div>
    </section>
  );
}
