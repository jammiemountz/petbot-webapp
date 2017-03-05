class linkController {
  /** @ngInject */
  constructor($scope, $attrs) {
    this.type = $attrs.type;
  }
}

export const infoLink = {
  template: require('./infoLink.template.html'),
  restrict: 'E',
  controller: linkController,
  controllerAs: 'linkCtrl'
};
