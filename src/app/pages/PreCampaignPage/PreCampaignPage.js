class PreCampaignPageController {
  /** @ngInject */
  constructor() {
    this.focus = false;
    this.placeholder = 'email';
  }
}

export const PreCampaignPage = {
  template: require('./PreCampaignPage.template.html'),
  controller: PreCampaignPageController,
  controllerAs: 'PreCampaignPageController'
};
