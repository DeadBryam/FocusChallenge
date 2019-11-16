import Post from '../model/PostModel.js';

class PostController{
  constructor(){
    this.POST_URL = 'https://jsonplaceholder.typicode.com/posts';
  }

  findAllPost(){
    return fetch(this.POST_URL)
      .then(response => {
        return response.json()
          .then(data => {
            return data.map(map => {
              return new Post(map.id,map.title,map.userId);
            });
          });
      })
      .catch(err => {
        return err;
      });
  }
}

export default PostController;