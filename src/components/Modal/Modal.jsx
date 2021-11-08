import { CSSTransition } from 'react-transition-group';

import styles from './Modal.module.css';
import fadeIn from '../../styles/animation/fadeIn.module.css';
//Properties
export default function Modal({
  visible,
  children,
  className,
  onClose,
  isBackgroundColorNone
}) {
  function handleDimmerClick(e) {
    if (e.target !== e.currentTarget) {
      return;
    }

    onClose();
  }

  return (
    <CSSTransition in={visible} unmountOnExit classNames={fadeIn} timeout={75}>
      <div className={styles.dimmer} onMouseDown={handleDimmerClick}>
        <div
          className={`${styles.modal} ${className}`}
          style={isBackgroundColorNone && { backgroundColor: 'transparent' }}
        >
          {children}
        </div>
      </div>
    </CSSTransition>
  );
}
