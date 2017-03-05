class thanksCtrl {
  /** @ngInject */
  constructor($stateParams) {
    this.name = $stateParams.name;
    this.amount = $stateParams.amount;
    this.petbot = this.amount > 1 ? 'PetBots are' : 'Petbot is';
  }
}

export const ThanksPage = {
  template: require('./ThanksPage.template.html'),
  controller: thanksCtrl,
  controllerAs: 'thanksCtrl'
};
