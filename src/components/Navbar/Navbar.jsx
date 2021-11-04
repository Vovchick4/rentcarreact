import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Container, Modal, Dropdown } from '../';

import styles from './Navbar.module.css';

import { BsFillPlayFill } from 'react-icons/bs';
import { AiFillBell } from 'react-icons/ai';
import { BiSearchAlt } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';

const theme = {
  none: 'transparent',
  bgOverLay: 'rgba(0, 0, 0, 0.43)',
};

const NavBarModals = {
  playDemo: 'PLAY_DEMO',
};
export default function Navbar({ openSidebar }) {
  const [backgroundColorNavbar, setBackgroundColorNavbar] = useState(
    theme.none
  );
  const [searchText, setSearchText] = useState('');
  const [activeModal, setActiveModal] = useState(null);
  const [langDropdown, setLangDropdown] = useState(false);

  const { i18n } = useTranslation();

  const handleWindowScroll = () => {
    if (window.scrollY >= 83) {
      setBackgroundColorNavbar(theme.bgOverLay);
    } else {
      setBackgroundColorNavbar(theme.none);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleWindowScroll);

    return () => {
      window.removeEventListener('scroll', handleWindowScroll);
    };
  }, []);

  function openPlayDemoModal() {
    setActiveModal(NavBarModals.playDemo);
  }

  function closeModal() {
    setActiveModal(null);
  }

  function openLangDropdown() {
    setLangDropdown(true);
  }

  function closeLangDropdown() {
    setLangDropdown(false);
  }

  return (
    <React.Fragment>
      <div
        className={
          backgroundColorNavbar === theme.bgOverLay
            ? styles.bgOverLayActive
            : styles.bgOverLay
        }
      />
      <div
        className={styles.header}
        style={{
          backgroundColor: backgroundColorNavbar,
        }}
      >
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
              <div className={styles.dropdownContent}>
                <p className={styles.langButton} onClick={openLangDropdown}>
                  {i18n.language}
                </p>
                <Dropdown
                  visible={langDropdown}
                  onClose={closeLangDropdown}
                  title={
                    <h1 className={styles.dropdownTitle}>
                      Lang<span className={styles.dropdownSubTilte}>uage</span>
                    </h1>
                  }
                  options={[
                    {
                      key: 1,
                      label: 'EN',
                      onClick: () => {
                        i18n.changeLanguage('en');
                        localStorage.setItem('language', 'en');
                      },
                    },
                    {
                      key: 2,
                      label: 'UA',
                      onClick: () => {
                        i18n.changeLanguage('ua');
                        localStorage.setItem('language', 'ua');
                      },
                    },
                  ]}
                />
              </div>

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
    </React.Fragment>
  );
}
