import { useState } from 'react';

import { Outlet } from 'react-router-dom';
import { Button, Container } from '@mantine/core';

import { Footer, Header, Sidebar } from '@app-containers/components';

export const MainLayout = () => {
  const [isDrawerClose, setIsDrawerClose] = useState(false);

  const toggleDrawer = () => setIsDrawerClose(!isDrawerClose);

  return (
    <>
      <Container fluid component="header" className="flex items-center px-2 py-4">
        <Header />
        <Button onClick={toggleDrawer}>Open Drawer</Button>
      </Container>

      <Container fluid component="main">
        <Sidebar isOpen={isDrawerClose} toggleSidebar={toggleDrawer} />
        <Outlet />
      </Container>

      <Container fluid component="footer">
        <Footer />
      </Container>
    </>
  );
};
