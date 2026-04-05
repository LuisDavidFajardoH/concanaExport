import Image from 'next/image';
import styles from './FlavorsSection.module.css';

const products = [
  {
    num: '01',
    name: 'Panela\nOriginal Gold',
    desc: 'Dulzura pura · Notas de caramelo y melaza',
    overlay: 'rgba(45, 41, 38, 0.45)',
  },
  {
    num: '02',
    name: 'Limón\nCitrus Fresh',
    desc: 'Cítrico fresco · Frío y caliente',
    overlay: 'rgba(30, 40, 20, 0.55)',
  },
  {
    num: '03',
    name: 'Naranja\nVitality',
    desc: 'Naranja cálida · Energía tropical',
    overlay: 'rgba(60, 30, 10, 0.55)',
  },
  {
    num: '04',
    name: 'Jengibre\nZen',
    desc: 'Raíz de jengibre · Calor reconfortante',
    overlay: 'rgba(30, 25, 15, 0.60)',
  },
  {
    num: '05',
    name: 'Canela\nSpiced',
    desc: 'Canela de Ceilán · Perfil aromático',
    overlay: 'rgba(50, 25, 10, 0.60)',
  },
  {
    num: '06',
    name: 'Frutos\nRojos',
    desc: 'Mezcla de bayas · Premium antioxidante',
    overlay: 'rgba(35, 10, 20, 0.62)',
  },
];

export default function FlavorsSection() {
  return (
    <section id="sabores" className={styles.section}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <p className={styles.tag}>GAMA COMPLETA</p>
          <h2 className={styles.headline}>
            Seis perfiles de sabor<br />para cada operador
          </h2>
        </div>
        <a href="#contacto" className={styles.catalogLink}>DESCARGAR CATÁLOGO</a>
      </div>

      <div className={styles.grid}>
        {products.map((p) => (
          <div key={p.num} className={styles.card}>
            <div className={styles.cardImg}>
              <Image
                src="/images/flavors.png"
                alt={p.name.replace('\n', ' ')}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 17vw"
                style={{ objectFit: 'cover' }}
              />
              <div className={styles.cardOverlay} style={{ background: p.overlay }} />
            </div>
            <div className={styles.cardInner}>
              <span className={styles.cardNum}>{p.num}</span>
              <h3 className={styles.cardName}>{p.name}</h3>
              <p className={styles.cardDesc}>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
