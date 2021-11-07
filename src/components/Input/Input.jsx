import { CSSTransition } from 'react-transition-group';

import Select from './Select';

import styles from './Input.module.css';
import fadeIn from '../../styles/animation/fadeIn.module.css';

export default function Input({
  type,
  placeholder,
  value,
  onChange,
  variant = 'input',
  padding = '20px 74px',
  error,
  ...inputProps
}) {
  const classesInput = [styles[variant]];

  if (error) {
    classesInput.push(styles.inputError);
  }

  return (
    <div className={styles.container}>
      <input
        className={classesInput.join(' ')}
        style={{ padding }}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...inputProps}
      />

      <CSSTransition
        in={!!error}
        unmountOnExit
        classNames={fadeIn}
        timeout={75}
      >
        <span className={styles.error}>{error}</span>
      </CSSTransition>
    </div>
  );
}

Input.Select = Select;
