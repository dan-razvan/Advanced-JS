

class TMDBService {

  constructor() {
    this.accessKey = "?api_key=ff701bbe69e6eb8260529e58737a2533"
    this.baseUrl = "https://api.themoviedb.org/3"
  }

  get(options) {
    let xhr = new XMLHttpRequest();
    xhr.open(`${options.method}`, `${this.baseUrl}${options.url}${this.accessKey}`);
    xhr.send();
    xhr.addEventListener("load", () => {
      const data = xhr.responseText;
      options.onSuccess(data)
    })
  }


}
export default TMDBService