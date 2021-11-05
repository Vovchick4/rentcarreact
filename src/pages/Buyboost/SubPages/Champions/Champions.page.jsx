import Substrate from '../../Substrate';
import { Input } from '../../../../components';

import styles from './Champions.module.css';

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

export default function ChampionsPage() {
  return (
    <Substrate>
      <p className={styles.textInfo}>
        <span className={styles.textActive}>Champion Mastery — </span>
        <span>
          We will play games until we are able to upgrade your champion mastery
          to your desired level (max. level 7).
        </span>
      </p>

      <div className={styles.formContent}>
        <div className={styles.inputContent}>
          <p className={styles.title}>
            <span>Your </span>
            <span className={styles.titleActiveText}>Champion</span>
          </p>

          <Input.Select list={listLeague} defaultTitle="Select Champion" />

          <p className={styles.titleTokens}>
            <span>Tokens </span>
            <span className={styles.titleActiveText}>Left</span>
          </p>

          <Input.Select list={listLeague} defaultTitle="Tokens remaining" />

          <p className={styles.titleGame}>
            <span>Game </span>
            <span className={styles.titleActiveText}>Name</span>
          </p>

          <Input
            variant="inputFill"
            padding="16px 20px"
            placeholder="Enter Name"
          />
        </div>
        <div className={styles.inputContent}>
          <p className={styles.titleGame}>
            <span>Your </span>
            <span className={styles.titleActiveText}>Mastery</span>
          </p>

          <Input.Select list={listLeague} defaultTitle="Select LVL" />
          <Input.Select list={listLeague} defaultTitle="Select LVL" />

          <p className={styles.titleGame}>
            <span>Your </span>
            <span className={styles.titleActiveText}>Server</span>
          </p>

          <Input.Select list={listLeague} defaultTitle="Select Server" />

          <p className={styles.titleGame}>
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
