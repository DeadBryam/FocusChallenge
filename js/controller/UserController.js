import User from '../model/UserModel.js';
import PostConstroller from '../controller/PostController.js';
import AbstractController from '../controller/AbstractController.js';

class UserController extends AbstractController {
  constructor() {
    super();
    this.USER_URL = 'https://jsonplaceholder.typicode.com/users';
    this.GENDER_URL = 'https://api.genderize.io';
    this.postConstroller = new PostConstroller();
  }

  findAllUsers() {
    return this.fetchResource(this.USER_URL).then(res => {
      return Promise.all(res.map(map => {
        return this.findGenderByName(map.name.split(' ')[0])
          .then(gender => {
            return new User(map.id, map.name, gender, []);
          });
      }));
    });
  };

  findGenderByName(name) {
    return this.fetchResource(`${this.GENDER_URL}/?name=${name}&country_id=US`).then(res => {
      return res.gender;
    });
  };

  findAllUserPosts() {
    return this.postConstroller.findAllPost()
      .then(res => {
        return this.findAllUsers()
          .then(user => {
            return user
              .map(userData => {
                userData.post = res
                  .filter(element => element.userId == userData.userId)
                  .map(userData => {
                    return userData.title;
                  });
                return userData;
              });
          });
      });
  }


}

export default UserController;