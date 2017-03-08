class buttonController {
  /** @ngInject */
  constructor($scope, $attrs) {
    this.type = $attrs.type;
    this.content = $attrs.content;
    $scope.trackOrder = () => {
      console.log('track order');
      return fbq('track', 'InitiateCheckout'); // eslint-disable-line
    };
  }
}

export const button = {
  template: require('./button.template.html'),
  restrict: 'E',
  controller: buttonController,
  controllerAs: 'btnCtrl'
};
