import styles from './Container.module.css';
//Container
export default function Container({ children, isMedia = false }) {
  return (
    <div className={isMedia ? styles.containerMedia : styles.container}>
      {children}
    </div>
  );
}
