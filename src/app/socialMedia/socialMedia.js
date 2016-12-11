class socialMediaController {
  /** @ngInject */
  constructor() {
    this.socialmedias = [
      {
        name: 'facebook',
        url: 'https://www.facebook.com/mypetbot',
        include: 'assets/facebook.svg'
      },
      {
        name: 'twitter',
        url: 'https://twitter.com/ThePetBot',
        include: 'assets/twitter.svg'
      },
      {
        name: 'pinterest',
        url: 'https://www.pinterest.com/thepetbot/',
        include: 'assets/pinterest.svg'
      },
      {
        name: 'youtube',
        url: 'https://www.youtube.com/user/mouse9911',
        include: 'assets/youtube.svg'
      }
    ];
  }
}

export const socialMedia = {
  template: require('./socialMedia.html'),
  controller: socialMediaController,
  controllerAs: 'socialMediaCtrl'
};
