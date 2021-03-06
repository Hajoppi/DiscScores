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
    component: () => import('/pages/Home/Index'),

    // If the user needs to be authenticated to view this page
    meta: {
      auth: true,
    },
  },

  // Account
  {
    path: '/account',
    name: 'account.index',
    component: () => import('/pages/Account/Index'),

    // If the user needs to be authenticated to view this page.
    meta: {
      auth: true,
    },
  },

  // Login
  {
    path: '/login',
    name: 'login.index',
    component: () => import('/pages/Login/Index'),

    // If the user needs to be a guest to view this page.
    meta: {
      guest: true,
    },
  },

  // Register
  {
    path: '/register',
    name: 'register.index',
    component: () => import('/pages/Register/Index.vue'),

    // If the user needs to be a guest to view this page.
    meta: {
      guest: true,
    },
  },

  // Course
  {
    path: '/course',
    name: 'course.index',
    component: () => import('/pages/Course/Index.vue'),

    meta: {
      auth: true,
    },
  },
  {
    path: '/course/new',
    name: 'course.newCourse',
    component: () => import('/pages/Course/CreateCourse.vue'),

    meta: {
      auth: true,
    },
  },

  // Game
  {
    path: '/game/start',
    name: 'game.start_game',
    component: () => import('/pages/Game/SelectCourse.vue'),

    meta: {
      auth: true,
    },
  },
  {
    path: '/game/game',
    name: 'game.game',
    component: () => import('/pages/Game/Game.vue'),

    meta: {
      auth: true,
    },
  },
  {
    path: '/game/scores',
    name: 'game.scores',
    component: () => import('/pages/Game/GameScores.vue'),

    meta: {
      auth: true,
    },
  },
  {
    path: '/game/past_games',
    name: 'game.past_games',
    component: () => import('/pages/Game/PastGames.vue'),
    meta: {
      auth: true,
    },
  },

  // Player
  {
    path: '/players',
    name: 'player.index',
    component: () => import('/pages/Player/Index.vue'),

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
