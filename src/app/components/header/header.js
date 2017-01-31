class headerController {
  /** @ngInject */
  constructor($scope, $attrs) {
    this.hideCta = $attrs.hideCta;
  }
}

export const header = {
  template: require('./header.html'),
  controller: headerController,
  controllerAs: 'headerCtrl'
};
