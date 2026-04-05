import Image from 'next/image';
import styles from './PowerSection.module.css';

const badges = ['SIN BLANQUEAR', 'SIN SULFATOS', 'APTO VEGANO', 'NO GMO'];

export default function PowerSection() {
  return (
    <section id="origen" className={styles.section}>
      <div className={styles.textCol}>
        <p className={styles.tag}>ORIGEN · SANTANDER, COLOMBIA</p>
        <div className={styles.tagLine} />
        <h2 className={styles.headline}>
          Panela de Santander.<br />Del trapiche<br />a todo el país.
        </h2>
        <p className={styles.body}>
          Santander es la cuna de la panela colombiana. Producida en trapiches familiares
          de la región, nuestra panela en polvo conserva todos sus minerales, su aroma
          característico y un índice glucémico más bajo que el azúcar convencional.
        </p>
        <p className={styles.body}>
          Llegamos a operadores de vending, distribuidores, industria alimentaria y
          puntos de venta en todo el territorio nacional — y a más de 20 países en
          formatos de exportación desde 25 kg.
        </p>
        <div className={styles.badges}>
          {badges.map((b) => (
            <span key={b} className={styles.badge}>{b}</span>
          ))}
        </div>
      </div>

      <div className={styles.imageCol}>
        <Image
          src="/images/sugarcane.png"
          alt="Cosecha de caña de azúcar en Santander, Colombia"
          fill
          sizes="(max-width: 1024px) 100vw, 600px"
          style={{ objectFit: 'cover' }}
          quality={85}
        />
      </div>
    </section>
  );
}
