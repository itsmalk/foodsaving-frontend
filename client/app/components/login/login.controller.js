class LoginController {
  constructor(Authentication, $state, $scope, ezfb) {
    "ngInject";
    Object.assign(this, {
      Authentication,
      $state,
      $scope,
      ezfb,
      email: "",
      password: "",
      error: { wrong: false }
    });

    this.ezfb.getLoginStatus().then((res) => {
      this.loginStatus = res;
    });
    this.ezfb.Event.subscribe("auth.statusChange", (statusRes) => {
      this.loginStatus = statusRes;
    });
    this.updateMe();
  }

  login() {
    this.error.wrong = false;
    this.Authentication.login(this.email, this.password)
    .then(() => {
      this.$state.go("home");
    })
    .catch(() => {
      this.password = "";
      this.error.wrong = true;
    });
  }

  loginFacebook() {
    this.ezfb.login(null, { scope: "email" }).then((data) => { console.log(data); });
    this.ezfb.getLoginStatus().then((res) => {
      this.loginStatus = res;
      this.updateMe();
    });
  }

  updateMe () {
    this.ezfb.getLoginStatus()
    .then(() => {
      return this.ezfb.api("/me");
    })
    .then((me) => {
      this.me = me;
    });
  }
}

export default LoginController;
