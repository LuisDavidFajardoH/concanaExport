import Image from 'next/image';
import styles from './VendingSection.module.css';

const specs = [
  { label: 'SOLUBILIDAD',          value: '100% — sin residuos en frío o caliente' },
  { label: 'DOSIFICACIÓN',         value: '±2% de varianza por dispensación' },
  { label: 'ESTABILIDAD TÉRMICA',  value: 'Estable hasta 60°C sin apelmazamiento' },
  { label: 'GRANULOMETRÍA',        value: '< 250 μm — flujo libre en dosificadores' },
];

export default function VendingSection() {
  return (
    <section id="specs" className={styles.section}>
      <div className={styles.imageCol}>
        <Image
          src="/images/hero.png"
          alt="Producción industrial de panela en polvo"
          fill
          sizes="(max-width: 1024px) 100vw, 600px"
          style={{ objectFit: 'cover' }}
          quality={85}
        />
      </div>

      <div className={styles.textCol}>
        <p className={styles.tag}>FORMULADO PARA VENDING</p>
        <h2 className={styles.headline}>
          Especificaciones técnicas<br />para operadores exigentes
        </h2>
        <div className={styles.table}>
          {specs.map((s, i) => (
            <div key={s.label} className={`${styles.row} ${i === specs.length - 1 ? styles.rowLast : ''}`}>
              <span className={styles.rowLabel}>{s.label}</span>
              <span className={styles.rowValue}>{s.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
