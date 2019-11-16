import { FC } from 'react';
import Home from '../components/home/Home';

export interface AppRoute {
  component: FC;
  path: string;
  exact?: boolean;
}
export default [
  {
    component: Home,
    path: '/home',
    exact: true
  },
  {
    component: Home,
    path: '/test',
    exact: true
  }
] as AppRoute[];
