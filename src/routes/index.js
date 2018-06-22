/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */

export default [
  // Home
  {
    path: '/home',
    name: 'home.index',
    component: () => import('@/pages/Home/Index'),

    // If the user needs to be authenticated to view this page
    meta: {
      auth: true,
    },
  },

  // Account
  {
    path: '/account',
    name: 'account.index',
    component: () => import('@/pages/Account/Index'),

    // If the user needs to be authenticated to view this page.
    meta: {
      auth: true,
    },
  },

  // Login
  {
    path: '/login',
    name: 'login.index',
    component: () => import('@/pages/Login/Index'),

    // If the user needs to be a guest to view this page.
    meta: {
      guest: true,
    },
  },

  // Register
  {
    path: '/register',
    name: 'register.index',
    component: () => import('@/pages/Register/Index.vue'),

    // If the user needs to be a guest to view this page.
    meta: {
      guest: true,
    },
  },

  // Track
  {
    path: '/track',
    name: 'track.index',
    component: () => import('@/pages/Track/Index.vue'),

    meta: {
      auth: true,
    },
  },
  {
    path: '/track/new',
    name: 'track.new_track',
    component: () => import('@/pages/Track/CreateTrack.vue'),

    meta: {
      auth: true,
    },
  },
  {
    path: '/game/start',
    name: 'game.start_game',
    component: () => import('@/pages/Game/SelectTrack.vue'),

    meta: {
      auth: true,
    },
  },

  {
    path: '/game/game',
    name: 'game.game',
    component: () => import('@/pages/Game/Game.vue'),

    meta: {
      auth: true,
    },
  },

  // Player
  {
    path: '/players',
    name: 'player.index',
    component: () => import('@/pages/Player/Index.vue'),

    meta: {
      auth: true,
    },
  },

  {
    path: '/',
    redirect: '/home',
  },

  {
    path: '/*',
    redirect: '/home',
  },
];
