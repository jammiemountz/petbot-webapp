class headerController {
  /** @ngInject */
  constructor($scope, $attrs, $window) {
    this.hideCta = $attrs.hideCta;
    this.scrollToTop = function () {
      $window.scrollTo(0, 0);
    };
  }
}

export const header = {
  template: require('./header.html'),
  controller: headerController,
  controllerAs: 'headerCtrl'
};
