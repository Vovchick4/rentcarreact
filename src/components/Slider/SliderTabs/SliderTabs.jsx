import { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Button } from '../..';

import styles from './SliderTabs.module.css';
import urls from '../../../config/urls';
import { Visible } from '../../../utils/ViewPortElement';

export default function SliderTabs({ list }) {
  const [current, setCurrent] = useState(0);

  const buttonsRef = useRef(null);

  function prevNext() {
    if (buttonsRef.current) {
      if (Visible(buttonsRef.current)) {
        return;
      }
    }

    setCurrent((prev) => prev - 120);
  }

  function prevBack() {
    if (current === 0) {
      return;
    }
    setCurrent((prev) => prev + 120);
  }

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
        <MdOutlineKeyboardArrowRight
          className={styles.arrowRight}
          onClick={prevNext}
        />
      </div>

      {list.map(({ id, label, title, to, component, ...linkProps }, index) => (
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
          <span ref={index === 7 ? buttonsRef : null} className={styles.title}>
            {label}
          </span>
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
