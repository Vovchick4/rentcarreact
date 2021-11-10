import { useState } from 'react';
import Substrate from '../../Substrate';
import { Input, Counter } from '../../../../components';

import styles from './Normal.module.css';
import { server, queue, service } from '../../../../data/BuyBoostDataSelects';
import bronze_1_1 from '../../../../images/bronze_1 1.png';

export default function NormalPage() {
  const [count, setCount] = useState(0);

  return (
    <Substrate>
      <p className={styles.textInfo}>
        <span className={styles.textActive}>Normal Matches — </span>
        <span>
          Either the booster plays solo on your account or he plays with you to
          achieve as many normal matches.
        </span>
      </p>

      <div className={styles.contentBronze}>
        <p className={styles.title}>
          <span>Any Ranked </span>
          <span className={styles.titleActiveText}>Position</span>
        </p>

        <img
          className={styles.bronze_1_1Svg}
          src={bronze_1_1}
          alt="bronze_1_1"
        />
      </div>

      <div className={styles.formContent}>
        <div className={styles.inputContent}>
          <p className={styles.title}>
            <span>Your </span>
            <span className={styles.titleActiveText}>Server</span>
          </p>

          <Input.Select list={server} defaultTitle="Select Server" />

          <p className={styles.title}>
            <span>Type of </span>
            <span className={styles.titleActiveText}>Service</span>
          </p>

          <Input.Select list={service} defaultTitle="Select Service" />

          <p className={styles.title}>
            <span>Enter </span>
            <span className={styles.titleActiveText}>Name</span>
          </p>

          <Input
            type="text"
            variant="inputFill"
            padding="16px 20px"
            placeholder="Enter Name"
          />
        </div>

        <div className={styles.inputContent}>
          <p className={styles.title}>
            <span>Type of </span>
            <span className={styles.titleActiveText}>Queue</span>
          </p>

          <Input.Select list={queue} defaultTitle="Select Queue" />

          <p className={styles.title}>
            <span>Number of </span>
            <span className={styles.titleActiveText}>Games</span>
          </p>

          <Counter count={count} setCount={setCount} />

          <p className={styles.title}>
            <span>Account </span>
            <span className={styles.titleActiveText}>Password</span>
          </p>

          <Input
            type="password"
            variant="inputFill"
            padding="16px 20px"
            placeholder="Enter Password"
          />
        </div>
      </div>
    </Substrate>
  );
}
