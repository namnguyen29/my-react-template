import { useState } from "react";

import { Outlet } from "react-router-dom";
import { Button, Container } from "@mantine/core";

import { Footer, Header, Sidebar } from "@app-containers/components";

export const MainLayout = () => {
  const [isDrawerClose, setIsDrawerClose] = useState(false);

  const toggleDrawer = () => setIsDrawerClose(!isDrawerClose);

  return (
    <>
      <Container fluid component="header">
        <Button onClick={toggleDrawer}>Open Drawer</Button>
        <Header />
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
