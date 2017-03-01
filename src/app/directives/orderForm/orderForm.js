class OrderForm {
  constructor() {
    this.template = require('./orderForm.template.html');
    this.controllerAs = 'orderFormCtrl';
    this.restrict = 'E';
    this.scope = {};
  }

  controller($scope, $state, $window, $http, $location) {
    $scope.howMany = 1;
    this.total = $scope.howMany * 199;
    $scope.stripe = $window.Stripe('pk_test_3PiQi8On0wcJEqtzK6tKHMp2'); // eslint-disable-line
    $scope.status = {
      submitting: false,
      error: false,
      notComplete: false
    };
    $scope.data = {
      howMany: 1,
      firstName: '',
      lastName: '',
      email: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      country: '',
      stripeToken: ''
    };
    $scope.submitForm = function () {
      if (validateData($scope.data)) {
        $http.post("https://pay.petbot.com/pay", JSON.stringify({form: $scope.data})).then(successCallback, errorCallback);
      } else {
        const displayError = document.getElementById('error-content');
        displayError.textContent = 'Please fill out all fields.';
        $scope.status.submitting = false;
      }
    };
    function successCallback() {
      $scope.status.submitting = false;
      $location.path('/thanks');
    }
    function errorCallback() {
      $scope.status.submitting = false;
      const displayError = document.getElementById('error-content');
      displayError.textContent = 'Error submitting information.';
      $scope.status.error = true;
    }
  }

  link(scope) {
    const elements = scope.stripe.elements();
    const card = elements.create('card');

    card.mount('#card-element');
    card.addEventListener('change', ({error}) => {
      const displayError = document.getElementById('card-errors');
      if (error) {
        displayError.textContent = error.message;
      } else {
        displayError.textContent = '';
      }
    });

    // const form = document.getElementById('payment-form');
    scope.submitOrderForm = () => {
      scope.status.submitting = true;
      scope.stripe.createToken(card).then(result => {
        if (result.error) {
          const errorElement = document.getElementById('card-errors');
          errorElement.textContent = result.error.message;
        } else {
          scope.data.stripeToken = result.token.id;
          scope.submitForm();
        }
      });
    };
  }

}
function validateData(data) {
  return Object.keys(data).every(key => {
    return data[key] !== '';
  });
}

export default OrderForm;
