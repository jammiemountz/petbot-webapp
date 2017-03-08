class testimonialsController {
  /** @ngInject */
  constructor($interval, $timeout) {
    this.index = 0;
    this.paused = false;
    this.pausedtimeout = null;
    this.rotation = $interval(updateTestimonial.bind(this, null), 5000);

    function updateTestimonial(index) {
      this.paused = true;
      this.pausedtimeout = $timeout(unpause.bind(this), 500);
      if (index) {
        this.index = index;
      } else if (this.index === this.testimonials.length - 1) {
        this.index = 0;
      } else {
        this.index += 1;
      }
    }

    function unpause() {
      this.paused = false;
    }

    this.clicked = function (index) {
      $interval.cancel(this.rotation);
      $timeout.cancel(this.pausedtimeout);
      updateTestimonial.call(this, index);
    };
    this.testimonials = [
      {
        name: 'Atos',
        from: 'Toronto',
        selfie: 'selfie-1.mov'
      },
      {
        name: 'Daisy',
        from: 'CA',
        selfie: 'selfie-2.mov'
      },
      {
        name: 'CEO-dog',
        from: 'Canada',
        selfie: 'selfie-3.mov'
      },
      {
        name: 'Misho',
        from: 'Sweden',
        selfie: 'selfie-4.mp4'
      },
      {
        name: 'Derf',
        from: 'Port Credit',
        selfie: 'selfie-5.mp4'
      }
    ];
    // this.testimonials = [
    //   {
    //     name: 'Tracey',
    //     from: 'NY',
    //     text: 'I love my petbot so much, I wanna take it behind the middle school and get it pregnant.'
    //   }
    // ]
  }
}

export const testimonials = {
  template: require('./testimonials.template.html'),
  controller: testimonialsController,
  controllerAs: 'testimonialsController'
};
