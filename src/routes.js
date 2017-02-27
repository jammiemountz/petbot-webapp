export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('PetBot', {
      url: '/',
      component: 'preCampaignPage'
    })
    .state('crowdfunding', {
      url: '/crowdfunding',
      component: 'crowdfundingPage'
    })
    .state('press', {
      url: '/press',
      component: 'pressKitPage'
    })
    .state('help', {
      url: '/help',
      component: 'setupPage'
    })
    .state('setup', {
      url: '/setup',
      component: 'setupPage'
    });
}
