import styles from './TestimonialsSection.module.css';

const testimonials = [
  {
    quote: '«Llevábamos años buscando una panela en polvo que fluyera bien en los dosificadores. Con Concana cero obstrucciones — y el origen santandereano le da un diferencial real frente a los azúcares industriales.»',
    name: 'Andrés M.',
    company: 'VendingColombia · Bogotá',
    dark: false,
  },
  {
    quote: '«La distribuimos en toda nuestra red de tiendas naturistas en el Eje Cafetero. El consumidor colombiano ya conoce la panela de Santander y la exige. Las ventas aumentaron 28% el primer trimestre.»',
    name: 'Claudia R.',
    company: 'Red NaturShop · Eje Cafetero',
    dark: true,
  },
  {
    quote: '«Pasó a ser el ingrediente principal de nuestra línea de bebidas calientes. La trazabilidad desde el trapiche y los certificados nos abren puertas en cadenas de retail que antes eran imposibles.»',
    name: 'Felipe O.',
    company: 'Café & Bienestar · Medellín',
    dark: false,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className={styles.section}>
      <div className={styles.header}>
        <p className={styles.tag}>CLIENTES EN COLOMBIA Y EL EXTERIOR</p>
        <h2 className={styles.headline}>
          Lo que dicen quienes<br />ya trabajan con nosotros
        </h2>
      </div>

      <div className={styles.grid}>
        {testimonials.map((t) => (
          <div key={t.name} className={`${styles.card} ${t.dark ? styles.cardDark : ''}`}>
            <p className={styles.quote}>{t.quote}</p>
            <div className={styles.divider} />
            <div className={styles.author}>
              <span className={styles.name}>{t.name}</span>
              <span className={styles.company}>{t.company}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
