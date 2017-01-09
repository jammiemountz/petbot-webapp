export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  // $locationProvider.html5Mode(true);
  // $locationProvider.hashPrefix('');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      component: 'app'
    })
    .state('crowdfunding', {
      url: '/crowdfunding',
      component: 'crowdfunding'
    })
    .state('press', {
      url: '/press',
      component: 'press'
    })
    .state('setup', {
      url: '/setup',
      component: 'setup'
    });
}
