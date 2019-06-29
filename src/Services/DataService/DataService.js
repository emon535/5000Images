import APIService from "../APIService/APIService";

class DataService {
  constructor() {}

  getRequiredData() {
    return APIService.get(`https://jsonplaceholder.typicode.com/photos`).then(
      response => {
        return response.data;
      }
    );
  }
}

export default DataService;
