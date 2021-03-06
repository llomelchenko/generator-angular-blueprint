'use strict';

/**
 * @ngdoc Controller
 *
 * @name <%= appName %>.controller:MainCtrl
 *
 * @description
 * Controller for <%= appName %>
 */
(function() {

  angular
    .module('<%= appName %>')
    .controller('MainCtrl', MainCtrl);

  function MainCtrl(isActive) {
    var vm = this;

    vm.user = { username: 'USER'};

    vm.isActive = isActive;
  }

}());
