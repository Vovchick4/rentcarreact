import React, { useState, useEffect, useRef } from 'react';
import styles from './Select.module.css';

import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

export default function Select({ list, defaultTitle }) {
  const [defaultValue, setDefaultValue] = useState(defaultTitle);
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
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.content}>
      <div
        ref={containerDropdown}
        className={!isOpen ? styles.selectContent : styles.selectContentActive}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{defaultValue}</span>
        {isOpen ? (
          <RiArrowUpSLine fontSize="24" />
        ) : (
          <RiArrowDownSLine fontSize="24" />
        )}
      </div>
      <ul
        className={isOpen ? styles.optionContentActive : styles.optionContent}
      >
        {list.map((item) => (
          <li
            key={item.id}
            className={isOpen ? styles.optionActive : styles.option}
            onClick={() => setDefaultValue(item.label)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
