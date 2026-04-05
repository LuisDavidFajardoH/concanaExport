import { Fragment } from 'react';
import Image from 'next/image';
import styles from './HeroSection.module.css';

const metrics = [
  { value: '6', label: 'SABORES' },
  { value: '25 kg', label: 'FORMATO ESTÁNDAR' },
  { value: '500 t', label: 'CAPACIDAD / MES' },
  { value: '20+', label: 'DESTINOS' },
  { value: '100%', label: 'NATURAL · SIN REFINAR' },
];

export default function HeroSection() {
  return (
    <>
      <section id="inicio" className={styles.hero}>
        <div className={styles.bgImage}>
          <Image
            src="/images/hero.png"
            alt="Cultivo de caña de azúcar en Santander, Colombia"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            quality={90}
          />
        </div>
        <div className={styles.overlay} />

        <div className={styles.content}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowPill}>SANTANDER · COLOMBIA</span>
            <span className={styles.eyebrowDot} />
            DISTRIBUCIÓN NACIONAL &amp; EXPORTACIÓN
          </p>
          <h1 className={styles.title}>
            Panela de Santander.<br />Para vending, industria<br />y distribución nacional.
          </h1>
          <p className={styles.subtitle}>
            Panela 100% natural en polvo, producida en Santander.
            Lista para operar en máquinas vending, líneas de producción y redes de distribución
            en todo el territorio colombiano y en más de 20 países.
          </p>
          <div className={styles.divider} />
          <div className={styles.actions}>
            <a href="#contacto" className={styles.ctaPrimary}>SOLICITAR MUESTRA GRATUITA</a>
            <a href="#sabores" className={styles.ctaSecondary}>VER GAMA COMPLETA</a>
          </div>
        </div>

        <div className={styles.sideLeft}>SANTANDER · COL</div>
        <div className={styles.sideRight}>DESDE 2012</div>
      </section>

      <div className={styles.metricsBar}>
        {metrics.map((m, i) => (
          <Fragment key={m.label}>
            <div className={styles.metric}>
              <span className={styles.metricValue}>{m.value}</span>
              <span className={styles.metricLabel}>{m.label}</span>
            </div>
            {i < metrics.length - 1 && <div className={styles.metricSep} />}
          </Fragment>
        ))}
      </div>
    </>
  );
}
