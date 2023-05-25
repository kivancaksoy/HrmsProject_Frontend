import axios from "axios";
export default class JobAdvertisementService {
  getAll() {
    return axios.get(
      "http://localhost:8080/api/jobAdvertisements/getAllActiveAndConfirmedJobAdvertisements"
    );
  }

  add(values) {
    return axios.post(
      "http://localhost:8080/api/jobAdvertisements/add",
      values
    );
  }
}
