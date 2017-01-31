class teamController {
  /** @ngInject */
  constructor() {
    this.members = [
      {
        name: 'Zoran Grabovac',
        title: 'CEO',
        content: 'I made PetBot because I love pets and other things.',
        caricature: '/assets/team-zoran.svg'
      },
      {
        name: 'Misko Dzamba',
        title: 'CTO',
        content: 'I wanted a way to check in on my cats, Bubs and Daisy, while at work.',
        caricature: '/assets/team-misko.svg'
      },
      {
        name: 'Simon Sitwell',
        title: 'Developer',
        content: 'PetBot, to me, is an endless horror of Android bugs and pain.',
        caricature: '/assets/team-simon.svg'
      },
      {
        name: 'Erika Hoyle',
        title: 'Social Outreach',
        content: 'Connecting people to their pets is my passion. Plus I love my cat Cat.',
        caricature: '/assets/team-erika.svg'
      },
      {
        name: 'Jammie Mountz',
        title: 'Web Developer',
        content: 'I use the webcam to check on my pet, Misko.',
        caricature: '/assets/team-jammie.svg'
      }
    ];
  }
}

export const team = {
  template: require('./team.template.html'),
  controller: teamController,
  controllerAs: 'teamController'
};
