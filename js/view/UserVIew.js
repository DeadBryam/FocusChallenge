import UserController  from '../controller/UserController.js';
import PostController from '../controller/PostController.js';

const userController = new UserController();
const postController = new PostController();

userController.findAllUsers().then(r=>{
  console.log(r);
})

postController.findAllPost().then(r=>{
  console.log(r);
})

