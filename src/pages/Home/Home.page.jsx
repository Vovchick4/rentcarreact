import { Container } from '../../components';

import styles from './Home.module.css';

import wallper from '../../images/wallper.jpg';

export default function HomePage() {
  return (
    <>
      <div className={styles.home_content}>
        <div className={styles.wallperContent}>
          <img className={styles.wallper} src={wallper} alt="wallper" />
        </div>
        <Container>
          <div className={styles.content}>
            <p>HOME PAGE</p>
          </div>
          <div className={styles.content}>
            <p>HOME PAGE</p>
          </div>
          <div className={styles.content}>
            <p>HOME PAGE</p>
          </div>
        </Container>
      </div>
      <div>asd</div>
      <div>asd</div>
      <div>asd</div>
      <div>asd</div>
    </>
  );
}
