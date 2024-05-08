import { lazy } from 'react';

export const Todo = lazy(() => import('./Todo/Todo').then(({ Todo }) => ({ default: Todo })));
export const Ticket = lazy(() =>
  import('./Ticket/Ticket').then(({ Ticket }) => ({ default: Ticket }))
);
