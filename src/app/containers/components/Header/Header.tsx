import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

export const Header = () => {
  const navigations = ['defer', 'todo', 'ticket', 'dashboard', '', 'grid-home', 'lunar'];
  return (
    <div>
      {navigations.map((nav, idx) => (
        <NavLink
          style={{ marginRight: '16px' }}
          key={`${nav}-${idx}`}
          to={nav}
          className={({ isActive }) => (isActive ? styles.active : '')}
        >
          {nav === '' ? 'home' : nav}
        </NavLink>
      ))}
    </div>
  );
};
