class teamController {
  /** @ngInject */
  constructor() {
    this.members = [
      {
        name: 'Zoran Grabovac',
        title: 'CEO',
        content: 'I love making people happy, whether that\'s with Pet Selfies or awful jokes. How about this? Knock knock - your doorbell is broken!',
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
        content: 'Like me, pets can get kind of hungry. This way they\'re not like "Hey! I\'m getting kind of hungry. Need a little something between meals. Kind of peckish here."',
        caricature: '/assets/team-simon.svg'
      },
      {
        name: 'Erika Hoyle',
        title: 'Social Outreach',
        content: 'Connecting people to their pets is my passion. Plus I love checking in on my cats Belle and Coquette while I\'m away!',
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
