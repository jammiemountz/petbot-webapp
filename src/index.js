import angular from 'angular';
import 'angular-ui-router';

import routesConfig from './routes';

import {header} from './app/components/header/header';
import {footer} from './app/components/footer/footer';
import {socialMedia} from './app/components/socialMedia/socialMedia.js';
import {newsCarosel} from './app/components/news-carosel/news-carosel.js';
import {BigVideo} from './app/components/BigVideo/BigVideo.js';
import {EmailForm} from './app/components/EmailForm/EmailForm.js';
import {features} from './app/components/features/features.js';
import {button} from './app/components/button/button.js';
import {sellPetbot} from './app/components/sellPetbot/sellPetbot.js';

import {PressKitPage} from './app/pages/PressKitPage/PressKitPage';
import {SetupPage} from './app/pages/SetupPage/SetupPage';
import {PreCampaignPage} from './app/pages/PreCampaignPage/PreCampaignPage';
import {CrowdfundingPage} from './app/pages/CrowdfundingPage/CrowdfundingPage';

import './index.scss';

angular
  .module('PetBot', ['ui.router'])
  .config(routesConfig)
  .component('header', header)
  .component('footer', footer)
  .component('features', features)
  .component('pButton', button)
  .component('preCampaignPage', PreCampaignPage)
  .component('socialMedia', socialMedia)
  .component('pressKitPage', PressKitPage)
  .component('sellPetbot', sellPetbot)
  .component('setupPage', SetupPage)
  .component('crowdfundingPage', CrowdfundingPage)
  .component('newsCarosel', newsCarosel)
  .component('emailForm', EmailForm)
  .component('bigVideo', BigVideo);
