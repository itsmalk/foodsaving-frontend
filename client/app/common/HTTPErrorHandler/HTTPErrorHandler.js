import HTTPErrorHandler from "./HTTPErrorHandler.service";

let HTTPErrorHandlerModule = angular.module("HTTPErrorHandler", [])

.service("HTTPErrorHandler", HTTPErrorHandler)
.config(($httpProvider) => {
  "ngInject";
  $httpProvider.interceptors.push("HTTPErrorHandler");
})

.name;

export default HTTPErrorHandlerModule;
