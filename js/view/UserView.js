import UserController from '../controller/UserController.js';

class UserView {
  constructor() {
    this.userController = new UserController();
    this.json = [{ "userId": 1, "name": "Leanne Graham", "gender": "female", "post": ["sunt aut facere repellat provident occaecati excepturi optio reprehenderit", "qui est esse", "ea molestias quasi exercitationem repellat qui ipsa sit aut", "eum et est occaecati", "nesciunt quas odio", "dolorem eum magni eos aperiam quia", "magnam facilis autem", "dolorem dolore est ipsam", "nesciunt iure omnis dolorem tempora et accusantium", "optio molestias id quia eum"] }];
    this.color = true;
  }


  createCards() {
    let card = document.createElement('div');
    card.className = 'card';

    this.json.forEach(element => {
      card.innerHTML = `
        <div class="user">
          <img src="https://joeschmoe.io/api/v1/${(element.gender == 'female') ? 'jaqueline' : 'jacques'}" alt="Avatar">
          <b>${element.name}</b>
        </div>
        <div class="post">
          ${element.post.map(post => {
        if (this.color) {
          this.color = false;
          return '<h6 class="red">' + post + '</h6>'
        } else {
          this.color = true;
          return '<h6 class="black">' + post + '</h6>'
        }
      }).join('')}
        </div>`;


      document.querySelector('.container').appendChild(card);
    });
  }

}

const view = new UserView();
view.createCards();