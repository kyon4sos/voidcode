import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://localhost:8080/api/",
});

httpClient.defaults.headers.common["Authorization"] = "AUTH_TOKEN";

export { httpClient };
