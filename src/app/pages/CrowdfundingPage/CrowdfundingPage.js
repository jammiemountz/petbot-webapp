class CrowdfundingPageController {
  /** @ngInject */
  constructor() {
    this.focus = false;
    this.placeholder = 'email';
  }
}

export const CrowdfundingPage = {
  template: require('./CrowdfundingPage.template.html'),
  controller: CrowdfundingPageController,
  controllerAs: 'crowdfundingCtrl'
};
