import { Suspense, useState } from 'react';

import { Navbar, Sidebar, Loader } from '../';

// import styles from "./Layout.module.css";

export default function Layout({ children }) {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  function openSidebar() {
    setSidebarVisible(true);
  }

  function closeSidebar() {
    setSidebarVisible(false);
  }

  return (
    <>
      <Sidebar open={sidebarVisible} onClose={closeSidebar} />
      <Navbar openSidebar={openSidebar} />

      <Suspense fallback={<Loader />}>{children}</Suspense>
    </>
  );
}
