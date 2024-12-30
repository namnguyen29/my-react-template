import { Button, Container } from '@mantine/core';

import {
  ChildTracker,
  ColorfulSection,
  MouseTracker,
  MyForm
} from '@app-features/common/components';
import { useDemoContext } from '@app-shared/hooks';

export const Home = () => {
  const { theme, toggleAppTheme } = useDemoContext();

  return (
    <Container fluid component="article">
      <ColorfulSection />

      <Container component="section" className="border-2 border-blue-400">
        <p>Change theme using Context: {theme}</p>
        <Button
          onClick={() => (theme === 'light' ? toggleAppTheme('dark') : toggleAppTheme('light'))}
        >
          Toggle Theme
        </Button>
      </Container>

      <Container component="section">
        <MouseTracker zone={<div className="block">Zone</div>}>
          {({ x, y }) => <ChildTracker x={x + 1} y={y + 1} />}
        </MouseTracker>
        <MyForm />
      </Container>
    </Container>
  );
};
