import { createElement } from 'react';
import { Loader } from '../';

import styles from './Button.module.css';

export default function Button({
  type = 'button',
  variant = 'default',
  fullWidth = false,
  contentCol = false,
  icon,
  children,
  onClick,
  loading,
  as = 'button',
  ...props
}) {
  const classes = [styles[variant]];

  if (fullWidth) {
    classes.push(styles.fullWidth);
  }

  return createElement(
    as,
    {
      className: classes.join(' '),
      type,
      onClick,
      ...props,
    },
    loading ? (
      <Loader />
    ) : (
      <>
        {icon && <span className={styles.icon}>{icon}</span>}
        <span className={!contentCol ? styles.content : styles.contentCol}>
          {children}
        </span>
      </>
    )
  );
}
