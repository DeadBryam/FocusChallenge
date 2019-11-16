import UserController  from '../controller/UserController.js';
import PostController from '../controller/PostController.js';

const userController = new UserController();
const postController = new PostController();

userController.setPostsToUser().then(r=>{
  console.log(r);
});

