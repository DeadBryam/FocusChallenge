class AbstractController {
  constructor() {
  }

  fetchResource(url) {
    return fetch(url)
      .then(response => {
        return response.json()
          .then(data => {
            return data;
          });
      })
      .catch(err => {
        return err;
      });
  };
}

export default AbstractController;