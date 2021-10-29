import { CSSTransition } from 'react-transition-group';
import { RiArrowUpSLine } from 'react-icons/ri';

import styles from './Dropdown.module.css';
import fadeIn from '../../styles/animation/fadeIn.module.css';

export default function Dropdown({ options, title, visible, onClose }) {
  return (
    <CSSTransition in={visible} unmountOnExit classNames={fadeIn} timeout={0}>
      <div>
        <div className={styles.dimmer} onClick={onClose} />
        <div className={styles.arrowUp}>
          <RiArrowUpSLine />
        </div>
        <div className={styles.dropdown} onClick={onClose}>
          {title}
          {options.map((option) => (
            <button
              key={option.key}
              type="button"
              className={styles.button}
              {...option}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </CSSTransition>
  );
}
