import { httpClient } from "./http";

export default class BaseHttp {
  constructor() {
    this.http = httpClient;
  }
}
