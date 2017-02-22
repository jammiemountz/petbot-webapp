import angular from 'angular';
import 'angular-ui-router';
import ngAnimate from 'angular-animate';

import routesConfig from './routes';

import {header} from './app/components/header/header';
import {footer} from './app/components/footer/footer';
import {socialMedia} from './app/components/socialMedia/socialMedia.js';
import {newsCarosel} from './app/components/news-carosel/news-carosel.js';
import {BigVideo} from './app/components/BigVideo/BigVideo.js';
import {EmailForm} from './app/components/EmailForm/EmailForm.js';
import {features} from './app/components/features/features.js';
import {button} from './app/components/button/button.js';
import {heroImage} from './app/components/heroImage/heroImage.js';
import {sellPetbot} from './app/components/sellPetbot/sellPetbot.js';
import {testimonials} from './app/components/testimonials/testimonials.js';
import {selfieTestimonials} from './app/components/selfie-testimonials/selfie-testimonials.js';
import {team} from './app/components/team/team.js';
import {specs} from './app/components/specs/specs.js';

import {PressKitPage} from './app/pages/PressKitPage/PressKitPage';
import {TeamPage} from './app/pages/TeamPage/TeamPage';
import {SetupPage} from './app/pages/SetupPage/SetupPage';
import {PreCampaignPage} from './app/pages/PreCampaignPage/PreCampaignPage';
import {CrowdfundingPage} from './app/pages/CrowdfundingPage/CrowdfundingPage';

import './index.scss';

angular
  .module('PetBot', ['ui.router', ngAnimate])
  .config(routesConfig)
  .component('header', header)
  .component('footer', footer)
  .component('features', features)
  .component('pButton', button)
  .component('preCampaignPage', PreCampaignPage)
  .component('teamPage', TeamPage)
  .component('socialMedia', socialMedia)
  .component('pressKitPage', PressKitPage)
  .component('sellPetbot', sellPetbot)
  .component('heroImage', heroImage)
  .component('setupPage', SetupPage)
  .component('testimonials', testimonials)
  .component('selfieTestimonials', selfieTestimonials)
  .component('specs', specs)
  .component('team', team)
  .component('crowdfundingPage', CrowdfundingPage)
  .component('newsCarosel', newsCarosel)
  .component('emailForm', EmailForm)
  .component('bigVideo', BigVideo);
