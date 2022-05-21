class User {
  constructor(
    name,
    email,
    gender,
    type_account,
    username,
    zipcode,
    telephone,
    container,
    callback
  ) {
    index++;
    this.id = name + index;
    this.name = name;
    this.email = email;
    this.gender = gender;
    this.type_account = type_account;
    this.username = username;
    this.zipcode = zipcode;
    this.telephone =telephone;
    this.callback = callback;  
    this.interface = getUserInterface(
      this.name,
      this.email,
      this.gender,
      this.type_account,
      this.username,
      this.zipcode
    );
    this.render(container);
    this.button = document.getElementById(this.id).querySelector("button");
    this.button.addEventListener('click', this.delete.bind(this));
  
  }


  delete() {
    if (this.callback(this.id)) {
      container.removeChild(this.elem)
      alert('Delete')
    }
  }

  render(container) {
    this.elem = document.createElement("div");
    this.elem.id = this.id;
    this.elem.innerHTML = this.interface;
    container.appendChild(this.elem);
 }
}

let index = 0;
