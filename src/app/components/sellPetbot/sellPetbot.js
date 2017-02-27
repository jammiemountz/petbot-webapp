class sellPetbotCtrl {
  /** @ngInject */
  constructor() {
    this.numbers = [0, 2, 4];
    this.image = true;
    this.switch = function (val) {
      this.image = val;
    };
  }
}

export const sellPetbot = {
  template: require('./sellPetbot.template.html'),
  controller: sellPetbotCtrl,
  controllerAs: 'sellPetbotCtrl'
};
