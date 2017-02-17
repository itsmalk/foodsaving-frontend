import HTTPErrorHandlerModule from "./HTTPErrorHandler";

const { module } = angular.mock;

describe("HTTPErrorHandler", () => {
  let $log, HTTPErrorHandler;
  beforeEach(() => {
    module(HTTPErrorHandlerModule);
    inject(($injector) => {
      $log = $injector.get("$log");
      $log.reset();
      HTTPErrorHandler = $injector.get("HTTPErrorHandler");
    });
  });
  afterEach(() => {
    $log.assertEmpty();
  });

  it("exists", () => {
    expect(HTTPErrorHandler).to.exist;
  });

});
