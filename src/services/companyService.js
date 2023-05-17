import axios from "axios";
export default class CompanyService {
  getCompanies() {
    return axios.get("http://localhost:8080/api/companies/getAll");
  }
}
