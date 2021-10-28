import { Container, ScrollPages } from '../../components';

import styles from './Home.module.css';

import wallper from '../../images/wallper.jpg';

export default function HomePage() {
  return (
    <>
      <div className={styles.home_content}>
        <div className={styles.wallperContent}>
          <img className={styles.wallper} src={wallper} alt="wallper" />
        </div>
        <ScrollPages>
          <Container>
            <div className={styles.content}>
              <p className={styles.heroTitle}>Elo Boost</p>
              <p className={styles.gameText}>
                <span className={styles.leagueTextColor}>League of </span>
                <span className={styles.legendTextColor}>Legends</span>
              </p>
            </div>
          </Container>
        </ScrollPages>
      </div>
    </>
  );
}
