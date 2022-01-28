class TMDBService {

  accessKey: string;
  baseUrl: string;
  
  constructor() {
    this.accessKey = "?api_key=ff701bbe69e6eb8260529e58737a2533"
    this.baseUrl = "https://api.themoviedb.org/3"
  }

  get({method, url, onSuccess}) {
    let xhr = new XMLHttpRequest();
    xhr.open(`${method}`, `${this.baseUrl}${url}${this.accessKey}`);
    xhr.send();
    xhr.addEventListener("load", () => {
      const data = JSON.parse(xhr.responseText);
      // options.onSuccess(data.results.map(res=>res.release_date))
      onSuccess(data)
      // onSuccess(data.results.map(res=>res.poster_path))

    })
  }

  set (options) {

  }


}
export default TMDBService