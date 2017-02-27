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
        content: 'If my cats nap all day while I’m at work, they keep me up at night! I like to send them treats to keep them awake and happy when I’m not there.',
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
        content: 'Connecting people to their pets is my passion. Plus I love my cat!',
        caricature: '/assets/team-erika.svg'
      },
      {
        name: 'Jammie Mountz',
        title: 'Web Developer',
        content: 'Our family dog Ollie lives at my parent’s house. My sisters and I miss him and still send him treats from where ever we are!',
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
