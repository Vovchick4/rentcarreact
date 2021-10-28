import { useState } from "react";

import { Container } from "../";

import styles from "./Navbar.module.css";

import { BsFillPlayFill } from "react-icons/bs";
import { AiFillBell } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar({ openSidebar }) {
  const [searchText, setSearchText] = useState("");

  return (
    <div className={styles.header}>
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

            <button className={styles.buttonPlayDemo}>
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
