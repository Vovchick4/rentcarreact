import { NavLink } from 'react-router-dom';
import { ScrollPages, Container, Button } from '../../components';

import styles from './Buyboost.module.css';
import urls from '../../config/urls';

const links = [
  {
    id: 1,
    label: 'League',
    title: 'Boosting',
    to: urls.league,
    exact: false,
  },
  {
    id: 2,
    label: 'Duo',
    title: 'Boosting',
    to: urls.duo,
    exact: false,
  },
  {
    id: 3,
    label: 'Normal',
    title: 'Matches',
    to: urls.normal,
    exact: false,
  },
  {
    id: 4,
    label: 'Champion',
    title: 'Mastery',
    to: urls.champion,
    exact: false,
  },
  {
    id: 5,
    label: 'Win',
    title: 'Boosting',
    to: urls.win,
    exact: false,
  },
  {
    id: 6,
    label: 'Placement',
    title: 'Matches',
    to: urls.placement,
    exact: false,
  },
  {
    id: 7,
    label: 'Gift',
    title: 'Box',
    to: urls.gift,
    exact: false,
  },
  {
    id: 8,
    label: 'Boosting',
    title: 'Packages',
    to: urls.boosting,
    exact: false,
  },
];

export default function Buyboost() {
  return (
    <div className={styles.link_content}>
      <ScrollPages>
        <Container>
          <div className={styles.link}>
            {links.map(({ id, label, title, to, ...linkProps }) => (
              <Button
                key={id}
                as={NavLink}
                to={urls.buyBoost + to}
                {...linkProps}
                activeClassName={styles.activeLink}
                contentCol
              >
                <span className={styles.title}>{label}</span>
                <span className={styles.subTitle}>{title}</span>
              </Button>
            ))}
          </div>
        </Container>
      </ScrollPages>
    </div>
  );
}
