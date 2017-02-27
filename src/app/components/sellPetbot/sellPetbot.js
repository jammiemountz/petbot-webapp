class sellPetbotCtrl {
  /** @ngInject */
  constructor() {
    this.numbers = [0, 2, 4];
  }
}

export const sellPetbot = {
  template: require('./sellPetbot.template.html'),
  controller: sellPetbotCtrl,
  controllerAs: 'sellPetbotCtrl'
};
