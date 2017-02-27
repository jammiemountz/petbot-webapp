class textComponentCtrl {
  /** @ngInject */
  constructor($scope, $attrs) {
    this.title = $attrs.title;
    this.description = $attrs.description;
    this.subdescription = $attrs.subdescription;
  }
}

export const textComponent = {
  template: require('./textComponent.template.html'),
  restrict: 'E',
  controller: textComponentCtrl,
  controllerAs: 'textComponentCtrl'
};
