class sellPetbotCtrl {
  /** @ngInject */
  constructor() {
    this.days = showRemaining().toString().split('');
    // this.numbers = [0, this.days[0], this.days[1]];
    this.numbers = [0, 0, 0];
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

function showRemaining() {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const end = new Date('04/22/2017');
  const now = new Date();
  const distance = end - now;
  if (distance < 0) {
    return 1;
  }
  return Math.floor(distance / day);
}
