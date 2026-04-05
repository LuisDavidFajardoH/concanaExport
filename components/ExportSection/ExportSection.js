import styles from './ExportSection.module.css';

const channels = [
  'Distribución nacional — cobertura en todo el territorio colombiano',
  'Saco industrial 25 kg — apto para tolvas de vending y líneas de producción',
  'Big Bag 500–1000 kg — para distribuidores y centrales de compra',
  'Marca blanca / Private Label — etiquetado y packaging a medida',
];

const certs = ['USDA\nORGANIC', 'ISO\n22000', 'FAIR\nTRADE', 'BRC\nGLOBAL'];

export default function ExportSection() {
  return (
    <section id="exportacion" className={styles.section}>
      <div className={styles.leftCol}>
        <p className={styles.tag}>DISTRIBUCIÓN NACIONAL &amp; EXPORTACIÓN</p>
        <h2 className={styles.headline}>
          De Santander<br />a todo el país y el mundo
        </h2>
        <p className={styles.body}>
          Distribuimos en todo Colombia y gestionamos exportación puerta a puerta
          con documentación aduanera completa. Desde Bucaramanga a cualquier almacén
          en 2–5 días (nacional) o 15–25 días (internacional).
        </p>
        <div className={styles.formatList}>
          {channels.map((f) => (
            <div key={f} className={styles.formatRow}>
              <div className={styles.dot} />
              <span className={styles.formatText}>{f}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.rightCol}>
        <p className={styles.certTitle}>CERTIFICACIONES</p>
        <div className={styles.certGrid}>
          {certs.map((c) => (
            <div key={c} className={styles.certCard}>
              <span className={styles.certName}>{c}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
