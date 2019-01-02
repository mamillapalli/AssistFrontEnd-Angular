import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  // {
  //   title: 'Dashboard',
  //   icon: 'nb-home',
  //   link: '/pages/dashboard',
  //   home: true,
  // },
  {
    title: 'FUNCTIONS',
    group: true,
  },
  // {
  //   title: 'Auth',
  //   icon: 'nb-locked',
  //   children: [
  //     {
  //       title: 'Login',
  //       link: '/auth/login',
  //     },
  //     {
  //       title: 'Register',
  //       link: '/auth/register',
  //     },
  //     {
  //       title: 'Request Password',
  //       link: '/auth/request-password',
  //     },
  //     {
  //       title: 'Reset Password',
  //       link: '/auth/reset-password',
  //     },
  //   ],
  // },
  {
    title: 'Admin',
    icon: 'nb-locked',
    children: [
      {
        title: 'Organization',
        link: '/pages/organization',
      },
      {
        title: 'Product',
        link: '/pages/product',
      },
      {
        title: 'Customer',
        link: '/pages/customer',
      },
      {
        title: 'User',
        link: '/pages/user',
      },
    ],
  },
];
