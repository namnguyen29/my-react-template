import { lazy } from 'react';

export const Home = lazy(async () => ({
  default: (await import('./Home/Home')).Home
}));

export const Dashboard = lazy(async () => ({
  default: (await import('./Dashboard/Dashboard')).Dashboard
}));

export const Defer = lazy(async () => ({
  default: (await import('./Defer/Defer')).Defer
}));

export const MyGridHome = lazy(async () => ({
  default: (await import('./MyGridHome/MyGridHome')).MyGridHome
}));

export const Lunar = lazy(async () => ({
  default: (await import('./Lunar/Lunar')).Lunar
}));
