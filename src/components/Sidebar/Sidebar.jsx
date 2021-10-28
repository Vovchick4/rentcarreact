import { NavLink } from 'react-router-dom';
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
    to: urls.buyBoost,
    exact: true,
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

export default function Sidebar({ open, onClose }) {
  const classesSideBar = [styles.aside];
  const classesDimmer = [styles.dimmer];
  if (open) {
    classesSideBar.push(styles.active);
    classesDimmer.push(styles.active);
  }

  return (
    <div>
      <div className={classesDimmer.join(' ')} onClick={onClose}></div>
      <aside className={classesSideBar.join(' ')}>
        <div>
          <div className={styles.logo}>
            <img className={styles.logoSVG} src={logo} alt="logo elo boost" />
          </div>

          <nav className={styles.NavLink}>
            {links.map(({ label, icon, ...link }) => (
              <NavLink
                key={link.to}
                {...link}
                className={styles.link}
                activeClassName={styles.linkActive}
                onClick={onClose}
              >
                <span className={styles.linkIcons}>{icon}</span>
                <span className={styles.linkLabels}>{label}</span>
              </NavLink>
            ))}
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
