import Post from '../model/PostModel.js';
import AbstractController from './AbstractController.js';

class PostController extends AbstractController{
  constructor(){
    super();
    this.POST_URL = 'https://jsonplaceholder.typicode.com/posts';
  }

  findAllPost(){
    return this.fetchResource(this.POST_URL).then(res => {
      return res.map(map => {
        return new Post(map.id,map.title,map.userId);
      });
    });
  }

}

export default PostController;