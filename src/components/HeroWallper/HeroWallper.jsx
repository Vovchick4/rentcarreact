import styles from './HeroWallper.module.css';

export default function HeroWallper({ wallper }) {
  return (
    <div
      className={styles.heroWallper}
      style={{ backgroundImage: `url(${wallper})` }}
    ></div>
  );
}
