import { useCallback, useMemo } from 'react';

import { Drawer, List, ListItem, Button, DefaultMantineColor } from '@mantine/core';
import { createSearchParams, useNavigate } from 'react-router-dom';

type SidebarOption = {
  label: string;
  redirect: () => void;
  color: DefaultMantineColor;
};

type Props = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

export const Sidebar = ({ isOpen, toggleSidebar }: Props) => {
  const navigate = useNavigate();

  const redirectToDashboard = useCallback(() => {
    toggleSidebar();
    navigate({
      pathname: 'dashboard',
      hash: 'this-is-my-hash',
      search: createSearchParams({
        foo: 'bar',
        demo: 'happy'
      }).toString()
    });
  }, [navigate, toggleSidebar]);

  const redirectTo = useCallback(
    (url: string) => {
      toggleSidebar();
      navigate(url);
    },
    [navigate, toggleSidebar]
  );

  const sidebarOptions = useMemo<SidebarOption[]>(
    () => [
      {
        label: 'Redirect To Defer',
        redirect: () => redirectTo('/defer'),
        color: 'green'
      },
      {
        label: 'Redirect - Todo page',
        redirect: () => redirectTo('/todo'),
        color: 'yellow'
      },
      {
        label: 'Redirect To Ticket',
        redirect: () => redirectTo('/ticket'),
        color: 'cyan'
      },
      {
        label: 'Redirect To Dashboard',
        redirect: redirectToDashboard,
        color: 'red'
      },
      {
        label: 'Redirect To Home',
        redirect: () => redirectTo('/'),
        color: 'violet'
      }
    ],
    [redirectTo, redirectToDashboard]
  );

  return (
    <Drawer opened={isOpen} onClose={toggleSidebar}>
      <List>
        {sidebarOptions.map((option, index) => (
          <ListItem key={`${index}-${option.label}`}>
            <Button type="button" color={option.color} onClick={option.redirect}>
              {option.label}
            </Button>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
