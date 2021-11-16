import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BsHouseFill } from 'react-icons/bs';
import { RiUser6Line } from 'react-icons/ri';
import { FaMoneyCheckAlt } from 'react-icons/fa';
import { MdModelTraining } from 'react-icons/md';
import { BsCartCheckFill } from 'react-icons/bs';

import styles from './Sidebar.module.css';
import urls from '../../config/urls';
import logo from '../../images/logo.svg';

const links = [
  {
    label: 'Home',
    icon: <BsHouseFill />,
    to: urls.home,
    exact: true,
  },
  {
    label: 'Profile',
    icon: <RiUser6Line />,
    to: urls.profile,
    exact: true,
  },
  {
    label: 'Buy Boost',
    icon: <FaMoneyCheckAlt />,
    to: urls.buyBoost + '/league',
    exact: false,
  },
  {
    label: 'Coaching',
    icon: <MdModelTraining />,
    to: urls.coaching,
    exact: true,
  },
  {
    label: 'Account Trading',
    icon: <BsCartCheckFill />,
    to: urls.accountTrading,
    exact: true,
  },
];
//function Sidebar
export default function Sidebar({ open, onClose }) {
  const classesSideBar = [styles.aside];
  const classesDimmer = [styles.dimmer];
  if (open) {
    classesSideBar.push(styles.active);
    classesDimmer.push(styles.active);

    document.body.classList.add('overflow');
  } else {
    document.body.classList.remove('overflow');
  }

  const { t } = useTranslation();

  const location = useLocation();
  const currUrl = location.pathname;

  return (
    <div>
      <div className={classesDimmer.join(' ')} onClick={onClose}></div>
      <aside className={classesSideBar.join(' ')}>
        <div>
          <div className={styles.logo}>
            <img className={styles.logoSVG} src={logo} alt="logo elo boost" />
          </div>

          <nav className={styles.NavLink}>
            {links.map(({ label, icon, ...link }, index) =>
              index !== 2 ? (
                <NavLink
                  key={link.to}
                  {...link}
                  className={styles.link}
                  activeClassName={styles.linkActive}
                  onClick={onClose}
                >
                  <span className={styles.linkIcons}>{icon}</span>
                  <span className={styles.linkLabels}>{t(label)}</span>
                </NavLink>
              ) : (
                <NavLink
                  key={link.to}
                  {...link}
                  className={
                    currUrl.search('buyboost') === -1
                      ? styles.link
                      : styles.linkActive
                  }
                  onClick={onClose}
                >
                  <span className={styles.linkIcons}>{icon}</span>
                  <span className={styles.linkLabels}>{t(label)}</span>
                </NavLink>
              )
            )}
          </nav>
        </div>
        <div>
          <div>
            <img className={styles.logoSVG} src={logo} alt="logo elo boost" />
          </div>
        </div>
      </aside>
    </div>
  );
}
