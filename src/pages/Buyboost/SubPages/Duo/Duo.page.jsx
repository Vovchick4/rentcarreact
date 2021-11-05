import { useState } from 'react';
import Substrate from '../../Substrate';
import { Input, FormRow, Button } from '../../../../components';

import styles from './Duo.module.css';

import { GiPaperArrow } from 'react-icons/gi';
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

const buttonCheckboxes = {
  regular: 'Regular',
  premium: 'Premium',
};

export default function DuoPage() {
  const [checked, setChecked] = useState(null);

  return (
    <Substrate>
      <p className={styles.textInfo}>
        <span className={styles.textActive}>Duo Boosting — </span>
        <span>
          You will play on your own account and our booster will play with you
          until you achieve your desired division.
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
            <span>Type of </span>
            <span className={styles.titleActiveText}>Queue</span>
          </p>

          <FormRow>
            <Button
              type="button"
              variant="inputStyle"
              visible={checked === buttonCheckboxes.regular}
              onClick={() => setChecked(buttonCheckboxes.regular)}
            >
              Regular
            </Button>
            <Button
              type="button"
              variant="inputStyle"
              visible={checked === buttonCheckboxes.premium}
              onClick={() => setChecked(buttonCheckboxes.premium)}
            >
              Premium
            </Button>
          </FormRow>
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
            <span>Game </span>
            <span className={styles.titleActiveText}>Name</span>
          </p>

          <Input
            variant="inputFill"
            padding="16px 20px"
            placeholder="Enter Name"
          />
        </div>
      </div>
    </Substrate>
  );
}
