import styles from "./ScrollPages.module.css";

export default function ScrollPages({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
