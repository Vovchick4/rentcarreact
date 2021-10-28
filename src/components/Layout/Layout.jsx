import { Suspense, useState } from 'react';

import { Navbar, Sidebar } from '../';

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
      <Navbar openSidebar={openSidebar} />
      <Sidebar open={sidebarVisible} onClose={closeSidebar} />

      <Suspense fallback={<p>Loading....</p>}>{children}</Suspense>
    </>
  );
}
