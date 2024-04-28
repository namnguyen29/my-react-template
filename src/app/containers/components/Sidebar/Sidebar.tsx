import { Drawer, List, ListItem, Button } from "@mantine/core";
import { createSearchParams, useNavigate } from "react-router-dom";

type SidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

export const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  const navigate = useNavigate();

  const redirectToDashboard = (): void => {
    toggleSidebar();
    navigate({
      pathname: "dashboard",
      hash: "this-is-my-hash",
      search: createSearchParams({
        foo: "bar",
      }).toString(),
    });
  };

  const redirectTo = (url: string): void => {
    toggleSidebar();
    navigate(url);
  };

  return (
    <Drawer opened={isOpen} onClose={toggleSidebar}>
      <List>
        <ListItem>
          <Button type="button" color="green" onClick={() => redirectTo("/defer")}>
            Redirect To Test Defer
          </Button>
        </ListItem>
        <ListItem>
          <Button type="button" color="yellow" onClick={() => redirectTo("/todo")}>
            Redirect - Todo page
          </Button>
        </ListItem>
        <ListItem>
          <Button type="button" color="cyan" onClick={() => redirectTo("/completed-todo")}>
            Redirect - Completed Todo page
          </Button>
        </ListItem>
        <ListItem>
          <Button variant="filled" color="red" onClick={redirectToDashboard}>
            Redirect To Dashboard
          </Button>
        </ListItem>
        <ListItem>
          <Button variant="filled" onClick={() => redirectTo("/")}>
            Go Home
          </Button>
        </ListItem>
      </List>
    </Drawer>
  );
};
