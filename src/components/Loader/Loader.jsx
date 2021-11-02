import styles from './Loader.module.css';

export default function Loader() {
  return (
    <div className={styles.ldSRing}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
