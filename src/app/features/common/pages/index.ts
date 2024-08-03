import { lazy } from 'react';

export const Home = lazy(() => import('./Home/Home').then(({ Home }) => ({ default: Home })));
export const Dashboard = lazy(() =>
  import('./Dashboard/Dashboard').then(({ Dashboard }) => ({ default: Dashboard }))
);
export const Defer = lazy(() => import('./Defer/Defer').then(({ Defer }) => ({ default: Defer })));
export const MyGridHome = lazy(() =>
  import('./MyGridHome/MyGridHome').then(({ MyGridHome }) => ({ default: MyGridHome }))
);
