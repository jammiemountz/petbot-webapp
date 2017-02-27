class TryItOut {
  constructor() {
    this.template = require('./tryItOut.template.html');
    this.restrict = 'AE';
    this.scope = {};
  }

  controller($scope, $state) {
    $scope.state = $state;
    /* eslint-disable */
    $scope.stuff = function () {
      const videoplayer = document.getElementById("js-try-it-out");  //get your videoplayer
      videoplayer.loop=false;
      videoplayer.currentTime = 0; //not sure if player seeks to seconds or milliseconds
      videoplayer.play();

      //call function to stop player after given intervall
      const stopVideoAfter = 2000;  //* 1000, because Timer is in ms
      setInterval(function(){
        //  videoplayer.pause();
        videoplayer.currentTime = 0;
      }, stopVideoAfter);
    };
    /* eslint-enable */
  }

  // link(scope, element, attrs) {
  link(scope) {
    console.log('state', scope.state);
    scope.stuff();
  }
}

export default TryItOut;
