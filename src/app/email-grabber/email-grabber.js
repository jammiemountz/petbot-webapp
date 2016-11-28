class emailGrabberController {
  /** @ngInject */
  constructor() {
    this.focus = false;
    this.placeholder = 'email';
  }
}

export const emailGrabber = {
  template: require('./email-grabber.html'),
  controller: emailGrabberController,
  controllerAs: 'emailGrabberCtrl'
};
