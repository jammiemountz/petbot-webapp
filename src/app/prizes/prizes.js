class prizesController {
  /** @ngInject */
  constructor() {
    this.prizeTiers = [
      {name: 'teir 1', amount: '$10', desc: 'desc'},
      {name: 'teir 2', amount: '$20', desc: 'desc'},
      {name: 'teir 3', amount: '$50', desc: 'desc'},
      {name: 'teir 4', amount: '$100', desc: 'desc'},
      {name: 'teir 5', amount: '$200', desc: 'desc'}
    ];
  }
}

export const prizes = {
  template: require('./prizes.html'),
  controller: prizesController,
  controllerAs: 'prizesCtrl'
};
