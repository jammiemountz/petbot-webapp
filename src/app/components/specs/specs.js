class specsCtrl {
  /** @ngInject */
  constructor() {
    this.numbers = [0, 2, 4];
  }
}

export const specs = {
  template: require('./specs.template.html'),
  controller: specsCtrl,
  controllerAs: 'specsCtrl'
};
