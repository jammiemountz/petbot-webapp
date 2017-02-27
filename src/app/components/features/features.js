class featuresController {
  /** @ngInject */
  constructor() {
    this.features = [
      {
        image: '/assets/icon-spontaneous.svg',
        text: 'See your pets with live video'
      },
      {
        image: '/assets/icon-bark-recognition.svg',
        text: 'You can play your own voice for your pet'
      },
      {
        image: '/assets/icon-versitile-treats.svg',
        text: 'PetBot will send you video Pet Selfies'
      },
      {
        image: '/assets/icon-refill.svg',
        text: 'You can refill PetBot easily'
      },
      {
        image: '/assets/icon-durability.svg',
        text: 'Easily mount PetBot on the wall to keep it out of reach'
      },
      {
        image: '/assets/icon-positive-reinforce.svg',
        text: 'PetBot uses healthy positive reinforcement - ideal to help train your pet'
      }
    ];
  }
}

export const features = {
  template: require('./features.template.html'),
  controller: featuresController,
  controllerAs: 'featuresController'
};
