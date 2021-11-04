import { useRef } from 'react';
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
  let inputRef = useRef();
  const classesInput = [styles[variant]];

  const handleFocusInputCurr = () => {
    setTimeout(() => inputRef.current.focus(), 300);
  };

  if (error) {
    classesInput.push(styles.inputError);
    handleFocusInputCurr();
  }

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
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
