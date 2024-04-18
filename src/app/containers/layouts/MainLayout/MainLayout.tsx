import { Outlet } from "react-router-dom";

import { Footer, Header } from "@app-containers/components";
import { Container } from "@mantine/core";

export const MainLayout = () => {
  return (
    <>
      <Container fluid component="header">
        <Header />
      </Container>

      <Container fluid component="main">
        <Outlet />
      </Container>

      <Container fluid component="footer">
        <Footer />
      </Container>
    </>
  );
};
