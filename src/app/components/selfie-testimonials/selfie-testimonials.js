class selfieTestiesController {
  /** @ngInject */
  constructor() {
    this.scroll = function () {
      const prompt = document.createElement('div');
      prompt.className = 'prompt';
      prompt.textContent = 'scroll';
      document.getElementById("js-testimonial-arrow").appendChild(prompt);
    };
  }
}

export const selfieTestimonials = {
  template: require('./selfie-testimonials.template.html'),
  controller: selfieTestiesController,
  controllerAs: 'selfieTestiesController'

};
