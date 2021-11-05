import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Button } from '../..';

import styles from './SliderTabs.module.css';
import urls from '../../../config/urls';

export default function SliderTabs({ list }) {
  const [current, setCurrent] = useState(0);

  function prevNext() {
    if (window.innerWidth <= 500 && window.innerWidth >= 0) {
      if (current <= -680) {
        return;
      }
    } else if (window.innerWidth <= 800 && window.innerWidth > 500) {
      if (current <= -560) {
        return;
      }
    } else if (window.innerWidth <= 1000 && window.innerWidth > 800) {
      if (current <= -480) {
        return;
      }
    } else if (window.innerWidth <= 1200 && window.innerWidth > 1000) {
      if (current <= -520) {
        return;
      }
    } else if (window.innerWidth <= 1400 && window.innerWidth > 1200) {
      if (current <= -400) {
        return;
      }
    } else if (window.innerWidth <= 1800 && window.innerWidth > 1400) {
      if (current <= -320) {
        return;
      }
    } else {
      if (current <= -120) {
        return;
      }
    }
    setCurrent((prev) => prev - 40);
  }

  function prevBack() {
    if (current === 0) {
      return;
    }
    setCurrent((prev) => prev + 40);
  }

  console.log(current);
  console.log(window.innerWidth);

  return (
    <ul className={styles.link}>
      <div className={styles.content}>
        {current !== 0 && (
          <MdOutlineKeyboardArrowLeft
            className={styles.arrowLeft}
            onClick={prevBack}
          />
        )}
      </div>
      <div className={styles.content}>
        {window.innerWidth !== 2200 && (
          <MdOutlineKeyboardArrowRight
            className={styles.arrowRight}
            onClick={prevNext}
          />
        )}
      </div>

      {list.map(({ id, label, title, to, component, ...linkProps }) => (
        <Button
          variant="description_tab"
          key={id}
          as={NavLink}
          to={urls.buyBoost + to}
          style={{ transform: `translateX(${current}%)` }}
          {...linkProps}
          activeClassName={styles.description_tabActive}
          contentCol
        >
          <span className={styles.title}>{label}</span>
          <span className={styles.subTitle}>{title}</span>
        </Button>
      ))}
      <li
        className={styles.slider}
        style={{ transform: `translateX(${current}%)` }}
      ></li>
    </ul>
  );
}
