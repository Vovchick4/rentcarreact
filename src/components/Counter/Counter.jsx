import styles from './Counter.module.css';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

export default function Counter({ count, setCount }) {
  function countIncrement() {
    setCount((prev) => prev + 1);
  }

  function countDecrement() {
    setCount((prev) => prev - 1);
  }

  return (
    <div className={styles.counterContent}>
      <button
        type="button"
        className={styles.arrowContent}
        onClick={countIncrement}
        disabled={count === 8}
      >
        <AiOutlinePlus />
      </button>
      <p className={styles.count}>
        <span>{count}</span>
      </p>
      <button
        type="button"
        className={styles.arrowContent}
        onClick={countDecrement}
        disabled={count === 0}
      >
        <AiOutlineMinus />
      </button>
    </div>
  );
}
