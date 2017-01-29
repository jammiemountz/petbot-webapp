class buttonController {
  /** @ngInject */
  constructor($scope, $attrs) {
    this.type = $attrs.type;
    this.content = $attrs.content;
  }
}

export const button = {
  template: require('./button.template.html'),
  restrict: 'E',
  controller: buttonController,
  controllerAs: 'btnCtrl'
};
