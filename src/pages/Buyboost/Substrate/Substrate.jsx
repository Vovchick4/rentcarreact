import { Button, Container } from '../../../components';
import styles from './Substrate.module.css';

export default function Substrate({ children }) {
  return (
    <Container isMedia>
      <form className={styles.contentForm}>
        <div className={styles.containerFormInputs}>{children}</div>
        <div className={styles.containerFormSubmit}>
          <p className={styles.totalPrice}>
            <span>Total </span>
            <span className={styles.priceText}>Price</span>
          </p>
          <p className={styles.price}>€ 85.00</p>
          <p className={styles.boostText}>
            Boost completes
            <span className={styles.boostSubTitle}> in 10 Day</span>
          </p>
          <Button>Boost me</Button>
          <p className={styles.textInfo}>
            By choosing this service, you are guaranteed to get the desired rank
            on your server. We accept orders in all queues: Solo / Duo and Flex
            5v5.
          </p>
          <p className={styles.textInfo}>
            We use VPN at the request of the client. If you want to purchase an
            account upgrade to the Challenger League, please contact
            ouroperator.
          </p>
        </div>
      </form>
    </Container>
  );
}
