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
    .state('preordernow', {
      url: '/preorder-now',
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
    .state('team', {
      url: '/team',
      component: 'teamPage'
    })
    .state('about', {
      url: '/about',
      component: 'teamPage'
    })
    .state('order', {
      url: '/order',
      component: 'orderFormPage'
    })
    .state('thanks', {
      url: '/thanks',
      component: 'thanksPage'
    })
    .state('setup', {
      url: '/setup',
      component: 'setupPage'
    });
}
