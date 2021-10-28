import { useState } from 'react';

import { Container, Modal } from '../';

import styles from './Navbar.module.css';

import { BsFillPlayFill } from 'react-icons/bs';
import { AiFillBell } from 'react-icons/ai';
import { BiSearchAlt } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';

const NavBarModals = {
  playDemo: 'PLAY_DEMO',
};
export default function Navbar({ openSidebar }) {
  const [searchText, setSearchText] = useState('');
  const [activeModal, setActiveModal] = useState(null);

  function openPlayDemoModal() {
    setActiveModal(NavBarModals.playDemo);
  }

  function closeModal() {
    setActiveModal(null);
  }

  return (
    <div className={styles.header}>
      <Modal
        visible={activeModal === NavBarModals.playDemo}
        onClose={closeModal}
        isBackgroundColorNone
      >
        <iframe
          width="100%"
          height="505"
          src="https://www.youtube.com/embed/pNv5g_9EliQ?start=62"
          title="YouTube video player"
          style={{ borderRadius: 15 }}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Modal>
      <Container>
        <div className={styles.headerContent}>
          <div className={styles.content}>
            <div className={styles.hamburger} onClick={openSidebar}>
              <GiHamburgerMenu />
            </div>

            <div className={styles.content}>
              <input
                className={styles.searchInput}
                type="search"
                placeholder="Search"
                onChange={(e) => setSearchText(e.target.value)}
              />
              {!searchText && <BiSearchAlt className={styles.searchIcon} />}
            </div>

            <AiFillBell className={styles.bellIcon} />

            <button
              className={styles.buttonPlayDemo}
              onClick={openPlayDemoModal}
            >
              <span className={styles.buttonText}>Demo</span>
              <span className={styles.iconFillPlay}>
                <BsFillPlayFill />
              </span>
            </button>
          </div>
          <div className={styles.content}>
            <p>ENG</p>
            <div className={styles.avatarContent}>
              <p>Mr.Fedotov</p>
              <div className={styles.avatar}>
                <div className={styles.avatarIcon}>
                  <FiUsers className={styles.userIcon} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
