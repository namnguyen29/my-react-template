import { useEffect, useRef, useState } from "react";

import { createSearchParams, useNavigate } from "react-router-dom";
import { Button, Container } from "@mantine/core";

import { MyForm } from "@app-features/common/components";
import { useDemoContext } from "@app-shared/hooks";
import styles from "./Home.module.scss";

export const Home = () => {
  const navigate = useNavigate();
  const { theme, toggleAppTheme } = useDemoContext();
  const [count, setCount] = useState(0);
  const refCount = useRef(count);

  const increase = () => setCount((c) => c + 1);

  const decrease = () => setCount((c) => c - 1);

  const redirectToDashboard = (): void => {
    navigate({
      pathname: "dashboard",
      hash: "this-is-my-hash",
      search: createSearchParams({
        foo: "bar",
      }).toString(),
    });
  };

  useEffect(() => {
    refCount.current = count;
  }, [count]);

  console.log("cache count::", {
    count,
    cacheCount: refCount.current,
  });

  return (
    <Container fluid component="article" className="home-container">
      <Container component="section" className={styles["border-bottom"]}>
        <h1>state: {count}</h1>
        <h1>ref count: {refCount.current}</h1>
        <Button onClick={increase} className={styles["mr-1"]}>
          +
        </Button>
        <Button onClick={decrease}>-</Button>
      </Container>

      <Container component="section" className={styles["border-bottom"]}>
        <p>Change theme using Context: {theme}</p>
        <Button
          onClick={() => (theme === "light" ? toggleAppTheme("dark") : toggleAppTheme("light"))}
        >
          Toggle Theme
        </Button>
      </Container>

      <Container component="section" className={styles["border-bottom"]}>
        <MyForm />
      </Container>

      <Container component="section" className={styles["border-bottom"]}>
        <h3>Redirect</h3>
        <Button
          variant="filled"
          color="red"
          className={styles["mr-1"]}
          onClick={redirectToDashboard}
        >
          Redirect To Dashboard
        </Button>
        <Button type="button" color="green" onClick={() => navigate("/defer")}>
          Redirect To Test Defer
        </Button>
      </Container>
    </Container>
  );
};
