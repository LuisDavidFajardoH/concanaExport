import styles from './TestimonialsSection.module.css';

const testimonials = [
  {
    quote: '«Llevábamos años con obstrucciones en los dosificadores. Con la panela de Concana desaparecieron. El 94% menos de incidencias técnicas en los primeros tres meses.»',
    name: 'Marco R.',
    company: 'VendingPro · Italia',
    dark: false,
  },
  {
    quote: '«El ticket medio subió un 22% en los tres primeros meses. Los usuarios prefieren pagar más por un producto que reconocen como natural. El packaging habla solo.»',
    name: 'Sophie M.',
    company: 'NaturVend · Francia',
    dark: true,
  },
  {
    quote: '«Pasó a ser el producto más vendido de toda nuestra red de Madrid en menos de un mes. Ahora los clientes lo piden por nombre.»',
    name: 'Carlos F.',
    company: 'MadridVending SL · España',
    dark: false,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className={styles.section}>
      <div className={styles.header}>
        <p className={styles.tag}>RESULTADOS VERIFICADOS</p>
        <h2 className={styles.headline}>
          Lo que dicen los operadores<br />que ya trabajan con nosotros
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
