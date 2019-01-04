import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    data: {
      permission: 'view',
      resource: 'Dashboard'
      },
    link: '/pages/dashboard',
    home: true,
  },
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
    data: {
    permission: 'view',
    resource: 'Admin'
    },
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
      {
        title: 'Status',
        link: '/pages/status',
      },
      {
        title: 'Roles',
        link: '/pages/Role',
      },
      {
        title: 'RolePreference',
        link: '/pages/RolePreference',
      },
      {
        title: 'UserRole',
        link: '/pages/UserRole',
      },
    ],
  },
  {
    title: 'Support',
    icon: 'nb-lightbulb',
    data: {
      permission: 'view',
      resource: 'Support'
      },
    children: [
      {
        title: 'RegisterIssue',
        link: '/pages/RegisterIssue',
      },
      {
        title: 'ViewIssues',
        link: '/pages/ViewIssues',
      },

    ],
  },
];
