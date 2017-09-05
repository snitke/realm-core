(function () {
  'use strict';
  
  function AppService(User, LoopBackAuth, $q) {

    const TWO_WEEKS = 1209600;

    return {
      login: Login,
      logout: Logout
    };

    function Login(username, password) {
      let self = this;

      return User.login({
        username: username,
        password: password,
        ttl: TWO_WEEKS
      }).$promise;
    }

    function Logout() {
      let self = this;
      debugger;
      console.log("accessToken", LoopBackAuth.accessTokenId);
      return User.logout(LoopBackAuth.accessTokenId).$promise;
    }
  }
  AppService.$inject = ["User", "LoopBackAuth", "$q"];
    
  angular.module('app').service('AppService', AppService);
})();