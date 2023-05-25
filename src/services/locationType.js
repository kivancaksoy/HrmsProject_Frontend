import axios from "axios";
export default class LocationTypeService {
  getAll() {
    return axios.get("http://localhost:8080/api/locationTypes/getAll");
  }
}