import React, { useState, useEffect, useRef } from 'react';
import styles from './Select.module.css';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import checkIcon from '../../../images/ic-check.svg';

export default function Select({ list, defaultTitle, value, onChange, error }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerDropdown = useRef();

  const handleClickOutside = (e) => {
    if (
      containerDropdown.current &&
      !containerDropdown.current.contains(e.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.content}>
      <div
        ref={containerDropdown}
        className={!isOpen ? styles.selectContent : styles.selectContentActive}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={error && styles.error}>
          {value === '' ? defaultTitle : value}
        </span>
        {isOpen ? (
          <RiArrowUpSLine fontSize="24" />
        ) : (
          <RiArrowDownSLine style={{ pointerEvents: 'none' }} fontSize="24" />
        )}
      </div>

      <ul
        className={isOpen ? styles.optionContentActive : styles.optionContent}
      >
        <div className={styles.overflow}>
          {list.map((item) => (
            <li
              key={item.id}
              className={isOpen ? styles.optionActive : styles.option}
              onClick={() => onChange(item.label)}
            >
              <span>{item.label}</span>
              {item.label === value && (
                <span className={styles.contentCheckIcon}>
                  <img
                    className={styles.checkIcon}
                    src={checkIcon}
                    alt="checkIcon"
                  />
                </span>
              )}
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
}
