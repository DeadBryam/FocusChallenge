import User from '../model/UserModel.js';
import PostConstroller from '../controller/PostController.js';

class UserController {
  constructor() {
    this.USER_URL = 'https://jsonplaceholder.typicode.com/users';
    this.GENDER_URL = 'https://api.genderize.io';
    this.postConstroller = new PostConstroller();
  }

  findAllUsers() {
    return fetch(this.USER_URL)
      .then(response => {
        return response.json()
          .then(data => {
            return data.map(map => {
              return new User(map.id,map.name,'female',[{post:'papa'},{post:'papa'}]);
            });
          });
      })
      .catch(err => {
        return err;
      });
  };

  getGender(name) {
    return fetch(`${this.GENDER_URL}/?name=${name}&country_id=US`)
      .then(response => {
        return response.json()
          .then(data => {
            return data.gender;
          });
      })
      .catch(err => {
        return err;
      });
  };


}

export default UserController;