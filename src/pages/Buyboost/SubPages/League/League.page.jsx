import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import Substrate from '../../Substrate';
import { Input } from '../../../../components';
import { GiPaperArrow } from 'react-icons/gi';

import styles from './League.module.css';
import {
  league,
  division,
  server,
  lp,
  queue,
} from '../../../../data/BuyBoostDataSelects';
import headImg from '../../../../images/bronze_1.png';
import bronze_1 from '../../../../images/bronze_1 2.png';

const validationSchema = Yup.object().shape({
  league: Yup.string().required('League is required'),
  division: Yup.string().required('Division is required'),
  desireLeague: Yup.string()
    .notOneOf([Yup.ref('league'), null], 'League must not match')
    .required('Your Desire League is required'),
  desireDivision: Yup.string()
    .notOneOf([Yup.ref('division'), null], 'Division must not match')
    .required('Your Desire Division is required'),
  lp: Yup.string(),
  server: Yup.string().required('Server is required'),
  queue: Yup.string().required('Queue is required'),
  name: Yup.string().required('Name is required'),
  password: Yup.string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export default function LeaguePage() {
  const formik = useFormik({
    initialValues: {
      league: '',
      division: '',
      desireLeague: '',
      desireDivision: '',
      lp: '',
      server: '',
      queue: '',
      name: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      toast('Your Buy Boost!');
    },
  });

  function handleChangeLeague(value) {
    formik.setFieldValue('league', value);
  }

  function handleChangeDivision(value) {
    formik.setFieldValue('division', value);
  }

  function handleChangeLp(value) {
    formik.setFieldValue('lp', value);
  }

  function handleChangeServer(value) {
    formik.setFieldValue('server', value);
  }

  function handleChangeQueue(value) {
    formik.setFieldValue('queue', value);
  }

  function handleChangeDesireLeague(value) {
    formik.setFieldValue('desireLeague', value);
  }

  function handleChangeDesireDivison(value) {
    formik.setFieldValue('desireDivision', value);
  }

  return (
    <Substrate onSubmit={formik.handleSubmit}>
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
          {/* ADD select */}
          <Input.Select
            list={league}
            defaultTitle="Select League"
            value={formik.values.league}
            onChange={handleChangeLeague}
            error={formik.touched.league && formik.errors.league}
          />

          <Input.Select
            list={division}
            defaultTitle="Select Division"
            value={formik.values.division}
            onChange={handleChangeDivision}
            error={formik.touched.division && formik.errors.division}
          />

          <Input.Select
            list={lp}
            defaultTitle="Select LP"
            value={formik.values.lp}
            onChange={handleChangeLp}
          />

          <p className={styles.titleServer}>
            <span>Your </span>
            <span className={styles.titleActiveText}>Server</span>
          </p>

          <Input.Select
            list={server}
            defaultTitle="Select Server"
            value={formik.values.server}
            onChange={handleChangeServer}
            error={formik.touched.server && formik.errors.server}
          />

          <p className={styles.titleServer}>
            <span>Game </span>
            <span className={styles.titleActiveText}>Name</span>
          </p>

          <Input
            type="text"
            name="name"
            variant="inputFill"
            padding="16px 20px"
            placeholder="Enter Name"
            autoComplete="username"
            value={formik.values.name}
            error={formik.touched.name && formik.errors.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>

        <GiPaperArrow className={styles.arrowRight} />

        <div className={styles.pictureContent}>
          <img className={styles.headImg} src={bronze_1} alt="bronze_1" />
          <p className={styles.title}>
            <span>Your Desire </span>
            <span className={styles.titleActiveText}>League</span>
          </p>

          <Input.Select
            list={league}
            defaultTitle="Select League"
            value={formik.values.desireLeague}
            onChange={handleChangeDesireLeague}
            error={formik.touched.desireLeague && formik.errors.desireLeague}
          />

          <Input.Select
            list={division}
            defaultTitle="Select Division"
            value={formik.values.desireDivision}
            onChange={handleChangeDesireDivison}
            error={
              formik.touched.desireDivision && formik.errors.desireDivision
            }
          />

          <p className={styles.titleType}>
            <span>Type of </span>
            <span className={styles.titleActiveText}>Queue</span>
          </p>

          <Input.Select
            list={queue}
            defaultTitle="Select Queue"
            value={formik.values.queue}
            onChange={handleChangeQueue}
            error={formik.touched.queue && formik.errors.queue}
          />

          <p className={styles.titleServer}>
            <span>Account </span>
            <span className={styles.titleActiveText}>Password</span>
          </p>

          <Input
            type="password"
            name="password"
            variant="inputFill"
            padding="16px 20px"
            placeholder="Enter Password"
            autoComplete="password"
            value={formik.values.password}
            error={formik.touched.password && formik.errors.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
      </div>
    </Substrate>
  );
}
