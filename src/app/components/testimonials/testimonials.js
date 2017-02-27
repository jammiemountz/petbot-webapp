class testimonialsController {
  /** @ngInject */
  constructor($interval, $timeout) {
    this.index = 0;
    this.paused = false;
    this.pausedtimeout = null;
    this.rotation = $interval(updateTestimonial.bind(this), 5000);

    function updateTestimonial(index) {
      this.paused = true;
      this.pausedtimeout = $timeout(unpause.bind(this), 1000);
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
        name: 'Tracey',
        from: 'NY',
        text: 'I love my petbot so much, I wanna take it behind the middle school and get it pregnant.'
      },
      {
        name: 'Stacey',
        from: 'NJ',
        text: 'PetBot is literally the best thing in my life. I love my cats and can now see them all the time.'
      },
      {
        name: 'Jammie',
        from: 'CA',
        text: 'One time I logged on and saw Miskos bare ass, which was concerning since I know hes given our password out to like a million people.'
      },
      {
        name: 'Misko',
        from: 'Canada',
        text: 'I dont even care if people see my ass, or my girlfriends ass, I need to give the password out to everyone I know including like my parents and my girlfriends sisters. Whee Im misko.'
      },
      {
        name: 'Zoran',
        from: 'Mars',
        text: 'I like petbot so much I CEO\'d it'
      },
      {
        name: 'Roger',
        from: 'China',
        text: 'I literally made petbot with my bare hands, it passed all the stress tests'
      }
    ];
  }
}

export const testimonials = {
  template: require('./testimonials.template.html'),
  controller: testimonialsController,
  controllerAs: 'testimonialsController'
};
