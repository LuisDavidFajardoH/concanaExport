import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.logo}>CONCANA EXPORT</span>
          <span className={styles.tagline}>Panela en polvo desde Colombia</span>
          <span className={styles.copy}>© {year} Concana Export SAS · Bogotá, Colombia</span>
        </div>

        <div className={styles.cols}>
          <div className={styles.col}>
            <p className={styles.colTitle}>EMPRESA</p>
            <a href="#origen" className={styles.link}>Sobre nosotros</a>
            <a href="#exportacion" className={styles.link}>Certificaciones</a>
            <a href="#" className={styles.link}>Sostenibilidad</a>
          </div>
          <div className={styles.col}>
            <p className={styles.colTitle}>PRODUCTOS</p>
            <a href="#sabores" className={styles.link}>Gama de sabores</a>
            <a href="#specs" className={styles.link}>Especificaciones técnicas</a>
            <a href="#exportacion" className={styles.link}>Formatos de exportación</a>
          </div>
          <div className={styles.col}>
            <p className={styles.colTitle}>CONTACTO</p>
            <a href="mailto:ventas@concanaexport.com" className={styles.link}>ventas@concanaexport.com</a>
            <a href="tel:+5712345678" className={styles.link}>+57 (1) 234 5678</a>
            <a href="https://linkedin.com/company/concana-export" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
