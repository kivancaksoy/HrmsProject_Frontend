import axios from "axios";
export default class CompanyService {
  getAll() {
    return axios.get("http://localhost:8080/api/companies/getAll");
  }
}
