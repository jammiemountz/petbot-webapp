class featuresController {
  /** @ngInject */
  constructor() {
    this.features = [
      {
        title: 'Calm them.',
        image: '/assets/icon-bark-recognition.svg',
        text: 'Customize greetings and record your voice.'
      },
      {
        title: 'Treat them.',
        image: '/assets/icon-positive-reinforce.svg',
        text: 'Give your pets treats remotely.'
      },
      {
        title: 'Love them.',
        image: '/assets/icon-spontaneous.svg',
        text: 'Take pet selfies and videos.'
      }
      // {
      //   image: '/assets/icon-versitile-treats.svg',
      //   text: 'PetBot will send you video Pet Selfies'
      // },
      // {
      //   image: '/assets/icon-refill.svg',
      //   text: 'You can refill PetBot easily'
      // },
      // {
      //   image: '/assets/icon-durability.svg',
      //   text: 'Easily mount PetBot on the wall to keep it out of reach'
      // },
    ];
  }
}

export const features = {
  template: require('./features.template.html'),
  controller: featuresController,
  controllerAs: 'featuresController'
};
