import angular from 'angular';
import 'angular-ui-router';
import progressbar from 'angular-ui-bootstrap/src/progressbar';

import routesConfig from './routes';

import {main} from './app/main/main';
import {header} from './app/header/header';
import {footer} from './app/footer/footer';
import {progressBar} from './app/progressBar/progressBar';
import {prizes} from './app/prizes/prizes';
import {mainInfo} from './app/main-info/main-info';
import {press} from './app/press/press';
import {setup} from './app/setup/setup';
import {socialMedia} from './app/socialMedia/socialMedia.js';

import {crowdfunding} from './app/crowdfunding/crowdfunding';
import {emailGrabber} from './app/email-grabber/email-grabber';

import './index.scss';

angular
  .module('app', ['ui.router', progressbar])
  .config(routesConfig)
  .component('app', main)
  .component('header', header)
  .component('progressBar', progressBar)
  .component('footer', footer)
  .component('emailGrabber', emailGrabber)
  .component('prizes', prizes)
  .component('mainInfo', mainInfo)
  .component('socialMedia', socialMedia)
  .component('press', press)
  .component('setup', setup)
  .component('crowdfunding', crowdfunding);
