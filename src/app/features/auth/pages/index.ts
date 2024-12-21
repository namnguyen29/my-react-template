import { lazy } from 'react';

export const Login = lazy(() => import('./Login/Login').then(({ Login }) => ({ default: Login })));
