import { useEffect } from 'react';
import axios from 'axios';
import { HeroWallper, Container, ScrollPages } from '../../components';

import styles from './Home.module.css';

import wallper from '../../images/wallper.jpg';

export default function HomePage() {
  useEffect(() => {
    axios({
      url: '/news',
      method: 'GET',
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <>
      <div className={styles.home_content}>
        <HeroWallper wallper={wallper} />
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
