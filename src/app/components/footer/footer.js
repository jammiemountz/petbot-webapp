class footerController {
  /** @ngInject */
  constructor($scope, $attrs, $window) {
    this.scrollToTop = function () {
      $window.scrollTo(0, 0);
    };
  }
}

export const footer = {
  template: require('./footer.html'),
  controller: footerController,
  controllerAs: 'footerCtrl'
};
