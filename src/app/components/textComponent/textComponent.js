class textComponentCtrl {
  /** @ngInject */
  constructor($scope, $attrs, $sce) {
    this.title = $attrs.title;
    this.description = $attrs.description;
    this.subdescription = $sce.trustAsHtml($attrs.subdescription);
  }
}

export const textComponent = {
  template: require('./textComponent.template.html'),
  restrict: 'E',
  controller: textComponentCtrl,
  controllerAs: 'textComponentCtrl'
};
