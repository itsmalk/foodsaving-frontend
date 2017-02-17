class HTTPErrorHandlerService {
  constructor($injector, $translate, $q) {
    "ngInject";
    Object.assign(this, {
      $q,
      $injector,
      $translate
    });
  }

  responseError(rejection) {
    let $mdToast = this.$injector.get("$mdToast");
    if (rejection.status === -1) {
      this.$translate("GLOBAL.CONNECTION_INTERRUPTED").then((message) => {
        $mdToast.showSimple(message);
      });
    } else if (rejection.status >= 500) {
      this.$translate("GLOBAL.SERVER_ERROR").then((message) => {
        $mdToast.showSimple(message);
      });
    }
    return this.$q.reject(rejection);
  }
}

export default HTTPErrorHandlerService;
