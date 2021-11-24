import BaseHttp from "./base";

class Application extends BaseHttp {
  constructor() {
    super();
  }
  getApplication(params) {
    const url = "/app";
    this.http.get(url, params);
  }
}

export default new Application();
