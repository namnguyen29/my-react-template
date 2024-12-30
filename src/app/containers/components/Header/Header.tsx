import { NavLink } from 'react-router-dom';

export const Header = () => {
  const navigations = [
    'defer',
    'todo',
    'ticket',
    'dashboard',
    '',
    'grid-home',
    'lunar',
    'scroll-snap'
  ];
  return (
    <>
      {navigations.map((nav, idx) => (
        <NavLink
          style={{ marginRight: '16px' }}
          key={`${nav}-${idx}`}
          to={nav}
          className={({ isActive }) => (isActive ? 'rounded-md bg-violet-400 p-2 text-white' : '')}
        >
          {nav === '' ? 'home' : nav}
        </NavLink>
      ))}
    </>
  );
};
