const amounts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const countries = [
  'Canada',
  'United States',
  'Mexico',
  'Puerto Rico',
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
      notComplete: false,
      gettingPrice: false
    };
    $scope.data = {
      howMany: 1,
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      referral: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      country: '',
      stripeToken: '',
      discount: null,
      petbot: null,
      petbot_after_discount: null, //eslint-disable-line
      petbot_unit_cost: null, //eslint-disable-line
      petbot_unit_cost_after_discount: null, //eslint-disable-line
      shipping: null,
      total: null
    };
    $scope.submitForm = function () {
      $http.post("https://pay.petbot.com/pay2", JSON.stringify({form: $scope.data})).then(paySuccessCallback, payErrorCallback);
    };
    function paySuccessCallback() {
      $scope.status.submitting = false;
      fbq('track', 'Purchase'); // eslint-disable-line
      $location.path(`/thanks/${$scope.data.howMany}/${$scope.data.firstName}`);
    }
    function payErrorCallback() {
      $scope.status.submitting = false;
      const displayError = document.getElementById('error-content');
      displayError.textContent = 'Error submitting information! :( Please send us an email.';
      $scope.status.error = true;
    }
    $scope.getTotal = function () {
      $scope.status.gettingPrice = true;
      $http.post("https://pay.petbot.com/getcost", JSON.stringify({form: $scope.data})).then(costSuccessCallback, costErrorCallback);
    };
    function costSuccessCallback(response) {
      $scope.status.gettingPrice = false;
      $scope.data.discount = response.data.discount ? response.data.discount.toFixed(2) : null;
      $scope.data.petbot = response.data.petbot ? response.data.petbot.toFixed(2) : null;
      $scope.data.petbot_after_discount = response.data.petbot_after_discount ? response.data.petbot_after_discount.toFixed(2) : null; //eslint-disable-line
      $scope.data.petbot_unit_cost = response.data.petbot_unit_cost ? response.data.petbot_unit_cost.toFixed(2) : null; //eslint-disable-line
      $scope.data.petbot_unit_cost_after_discount = response.data.petbot_unit_cost_after_discount ? response.data.petbot_unit_cost_after_discount.toFixed(2) : null; //eslint-disable-line
      $scope.data.shipping = response.data.shipping ? response.data.shipping.toFixed(2) : null;
      $scope.data.total = response.data.total ? response.data.total.toFixed(2) : null;
    }
    function costErrorCallback() {
      $scope.data.total = 'Error!';
    }
  }

  link(scope) {
    window.scrollTo(0, 0);
    const elements = scope.stripe.elements();
    const card = elements.create('card');
    scope.getTotal();

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
