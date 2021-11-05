import Substrate from '../../Substrate';
import { Input } from '../../../../components';
import { GiPaperArrow } from 'react-icons/gi';

import styles from './League.module.css';

import headImg from '../../../../images/bronze_1.png';
import bronze_1 from '../../../../images/bronze_1 2.png';

const listLeague = [
  {
    id: 1,
    label: 'Example',
  },
  {
    id: 2,
    label: 'Choose',
  },
  {
    id: 3,
    label: 'Chies',
  },
  {
    id: 4,
    label: 'Lopata',
  },
];

export default function LeaguePage() {
  return (
    <Substrate>
      <p className={styles.textInfo}>
        <span className={styles.textActive}>League Boosting — </span>
        <span>
          The booster will log in and play on your account until reaching your
          desired division.
        </span>
      </p>
      <div className={styles.formSelect}>
        <div className={styles.pictureContent}>
          <img className={styles.headImg} src={headImg} alt="headImg" />
          <p className={styles.title}>
            <span>Your Current </span>
            <span className={styles.titleActiveText}>League</span>
          </p>

          <Input.Select list={listLeague} defaultTitle="Select League" />

          <Input.Select list={listLeague} defaultTitle="Select Division" />

          <Input.Select list={listLeague} defaultTitle="Select LP" />

          <p className={styles.titleServer}>
            <span>Your </span>
            <span className={styles.titleActiveText}>Server</span>
          </p>

          <Input.Select list={listLeague} defaultTitle="Select Server" />

          <p className={styles.titleServer}>
            <span>Game </span>
            <span className={styles.titleActiveText}>Name</span>
          </p>

          <Input
            variant="inputFill"
            padding="16px 20px"
            placeholder="Enter Name"
          />
        </div>

        <GiPaperArrow className={styles.arrowRight} />

        <div className={styles.pictureContent}>
          <img className={styles.headImg} src={bronze_1} alt="bronze_1" />
          <p className={styles.title}>
            <span>Your Desire </span>
            <span className={styles.titleActiveText}>League</span>
          </p>

          <Input.Select list={listLeague} defaultTitle="Select League" />

          <Input.Select list={listLeague} defaultTitle="Select Division" />

          <p className={styles.titleType}>
            <span>Type of </span>
            <span className={styles.titleActiveText}>Queue</span>
          </p>

          <Input.Select list={listLeague} defaultTitle="Select Queue" />

          <p className={styles.titleServer}>
            <span>Account </span>
            <span className={styles.titleActiveText}>Password</span>
          </p>

          <Input
            variant="inputFill"
            padding="16px 20px"
            placeholder="Enter Password"
          />
        </div>
      </div>
    </Substrate>
  );
}
