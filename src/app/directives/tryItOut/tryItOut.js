class TryItOut {
  constructor() {
    this.template = require('./tryItOut.template.html');
    this.restrict = 'AE';
    this.scope = {};
  }

  controller($scope, $state, $timeout, $interval) {
    $scope.state = $state;
    $scope.clicked = false;
    $scope.disabled = false;
    const videoplayer = document.getElementById("js-try-it-out");
    let loop; // eslint-disable
    /* eslint-disable */
    $scope.loopFirstTwoSec = function () {
      videoplayer.loop=false;
      videoplayer.currentTime = 0;
      videoplayer.play();

      //call function to stop player after given intervall
      const stopVideoAfter = 1000;  //* 1000, because Timer is in ms
      loop = $interval(function(){
        //  videoplayer.pause();
        videoplayer.currentTime = 0;
      }, stopVideoAfter);
    };
    /* eslint-enable */

    $scope.treatThem = function () {
      if (!$scope.disabled) {
        $scope.disabled = true;
        $scope.clicked = true;
        $interval.cancel(loop);
        videoplayer.currentTime = 1;
        videoplayer.play();
        $timeout(function () { // eslint-disable-line
          $scope.clicked = false;
          $scope.disabled = false;
          $scope.loopFirstTwoSec();
        }, 7000);
      }
    };
  }

  // link(scope, element, attrs) {
  link(scope) {
    scope.loopFirstTwoSec();
  }
}

export default TryItOut;
