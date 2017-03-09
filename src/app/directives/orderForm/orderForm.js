const amounts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const countries = [
  'Canada',
  'United States',
  'Mexico',
  'Puerto Rico',
  'United Arab Emirates',
  'Austria',
  'Italy',
  'Belgium',
  'Latvia',
  'Bulgaria',
  'Lithuania',
  'Croatia',
  'Luxembourg',
  'Cyprus',
  'Malta',
  'Czech Republic',
  'Netherlands',
  'Denmark',
  'Poland',
  'Estonia',
  'Portugal',
  'Finland',
  'Romania',
  'France',
  'Slovakia',
  'Germany',
  'Slovenia',
  'Greece',
  'Spain',
  'Hungary',
  'Sweden',
  'Ireland',
  'India',
  'United Kingdom',
  'China',
  'Cyprus',
  'Chile',
  'Indonesia',
  'Israel',
  'Japan',
  'Kuwait',
  'Kyrgyzstan',
  'Malaysia',
  'Philippines',
  'Qatar',
  'Singapore',
  'South Korea',
  'Taiwan',
  'Thailand',
  'Turkey',
  'United Arab Emirates',
  'Vietnam'
].sort();

class OrderForm {
  constructor() {
    this.template = require('./orderForm.template.html');
    this.controllerAs = 'orderFormCtrl';
    this.restrict = 'E';
    this.scope = {};
  }

  controller($scope, $state, $window, $http, $location) {
    $scope.amounts = amounts;
    $scope.countries = countries;
    $scope.howMany = 1;
    this.total = $scope.howMany * 199;
    $scope.stripe = $window.Stripe('pk_live_FDI4Yxyons8pf4aGHXW9l4Rn'); // eslint-disable-line
    $scope.status = {
      submitting: false,
      error: false,
      notComplete: false
    };
    $scope.data = {
      howMany: 1,
      shipping: null,
      total: null,
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      country: '',
      stripeToken: ''
    };
    $scope.submitForm = function () {
      $http.post("https://pay.petbot.com/pay", JSON.stringify({form: $scope.data})).then(successCallback, errorCallback);
    };
    function successCallback() {
      $scope.status.submitting = false;
      fbq('track', 'Purchase'); // eslint-disable-line
      $location.path(`/thanks/${$scope.data.howMany}/${$scope.data.firstName}`);
    }
    function errorCallback() {
      $scope.status.submitting = false;
      const displayError = document.getElementById('error-content');
      displayError.textContent = 'Error submitting information.';
      $scope.status.error = true;
    }
    $scope.calculateTotal = function () {
      $scope.data.shipping = $scope.data.howMany * 25;
      if ($scope.data.howMany > 1) {
        $scope.data.total = ((199 * $scope.data.howMany * 0.9) + $scope.data.shipping).toFixed(2);
        $scope.discount = true;
      } else { // eslint-disable-line
        $scope.data.total = (199 + $scope.data.shipping).toFixed(2);
        $scope.discount = false;
      }
    };
  }

  link(scope) {
    const elements = scope.stripe.elements();
    const card = elements.create('card');
    scope.calculateTotal();

    card.mount('#card-element');
    card.addEventListener('change', ({error}) => {
      const displayError = document.getElementById('card-errors');
      if (error) {
        scope.status.submitting = false;
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
          scope.status.submitting = false;
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

export default OrderForm;
