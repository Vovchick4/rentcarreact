import { Container, Button, Input } from '../../../components';

import styles from './Substrate.module.css';

import numberOne from '../../../images/1.svg';
import numberTwo from '../../../images/2.svg';
import numberThird from '../../../images/3.svg';
import numberFoth from '../../../images/4.svg';
import numberFivth from '../../../images/5.svg';
import numberSix from '../../../images/6.svg';

export default function Substrate({ children, onSubmit }) {
  return (
    <Container isMedia>
      <form className={styles.contentForm} onSubmit={onSubmit}>
        <div className={styles.containerFormInputs}>
          <img className={styles.numberOne} src={numberOne} alt="numberOne" />
          <img className={styles.numberTwo} src={numberTwo} alt="numberTwo" />
          <img
            className={styles.numberThird}
            src={numberThird}
            alt="numberThird"
          />
          <img
            className={styles.numberFoth}
            src={numberFoth}
            alt="numberFoth"
          />
          <img
            className={styles.numberFivth}
            src={numberFivth}
            alt="numberFivth"
          />
          <img className={styles.numberSix} src={numberSix} alt="numberSix" />
          {children}
        </div>
        <div className={styles.containerFormSubmit}>
          <div className={styles.stickyHeaderFormContent}>
            <p className={styles.totalPrice}>
              <span>Total </span>
              <span className={styles.priceText}>Price</span>
            </p>
            <p className={styles.price}>€ 85.00</p>
            <p className={styles.boostText}>
              Boost completes
              <span className={styles.boostSubTitle}> in 10 Day</span>
            </p>
            <div className={styles.contentButtonSubmit}>
              <Button type="submit" variant="light" fullWidth>
                Boost me
              </Button>
            </div>
            <div className={styles.contentDiscount}>
              <Input
                type="text"
                padding="10px 18px"
                placeholder="Enter Promo Code"
              />
              <p className={styles.labelDiscount}>Discount 0%</p>
            </div>
            <p className={styles.textInfo}>
              By choosing this service, you are guaranteed to get the desired
              rank on your server. We accept orders in all queues: Solo / Duo
              and Flex 5v5.
            </p>
            <p className={styles.textInfo}>
              We use VPN at the request of the client. If you want to purchase
              an account upgrade to the Challenger League, please contact
              ouroperator.
            </p>
          </div>
        </div>
      </form>
    </Container>
  );
}
