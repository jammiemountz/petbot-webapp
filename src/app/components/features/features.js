class featuresController {
  /** @ngInject */
  constructor() {
    this.features = [
      {
        image: '/assets/icon-bark-recognition.svg',
        text: 'Pet recognition'
      },
      {
        image: '/assets/icon-refill.svg',
        text: 'Refillable'
      },
      {
        image: '/assets/icon-versitile-treats.svg',
        text: 'Customized treats'
      },
      {
        image: '/assets/icon-durability.svg',
        text: 'Wall mountable'
      },
      {
        image: '/assets/icon-positive-reinforce.svg',
        text: 'Healthy reinforcement'
      },
      {
        image: '/assets/icon-spontaneous.svg',
        text: 'Smartphone notifications'
      }
    ];
  }
}

export const features = {
  template: require('./features.template.html'),
  controller: featuresController,
  controllerAs: 'featuresController'
};
