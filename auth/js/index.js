let menuUserCreate = document.querySelector(".form");
let inputsOfMenu = menuUserCreate.querySelectorAll(".info");
let btnCreateUser = menuUserCreate.querySelector("button");
let container = document.querySelector(".users");
let genders = document.querySelectorAll('input[name="gender"]');
let type_accounts = document.querySelectorAll('input[name="type_account"]');
let usersArr = [];

btnCreateUser.addEventListener("click", () => {
  
  if (!inputsOfMenu[0].value) {
    alert('Enter the name please!');
  } else if (!inputsOfMenu[1].value) {
    alert('Enter the email please!');
  } else if (!getGender()) {
    alert('Choose the gender please!');
  } else if (!getTypeAccount()) {
    alert('Choose the type of account please!');
  } else if (!inputsOfMenu[2].value) {
    alert('Enter the username please!');
  } else if (!inputsOfMenu[3].value) {
    alert('Enter the zipcode please!');
  } else if (!inputsOfMenu[4].value) {
    alert('Enter the telephone please!');
  } else {
    let user = new User(
      inputsOfMenu[0].value,
      inputsOfMenu[1].value,
      getGender(),
      getTypeAccount(),
      inputsOfMenu[2].value,
      inputsOfMenu[3].value,
      inputsOfMenu[4].value,
      container,
      deleteUser
    );
    console.log(user)
    usersArr.push(user);
  }
});

function getGender() {
  for (let i = 0; i < genders.length; i++) {
    if (genders[i].checked) {
      return genders[i].value;
    }
  }
}

function getTypeAccount() {
  for (let i = 0; i < type_accounts.length; i++) {
    if (type_accounts[i].checked) {
      return type_accounts[i].value;
    }
  }
}

function deleteUser(id) {
  for (let i = 0; i < usersArr.length; i++) {
    if (id === usersArr[i]?.id) {
      delete usersArr[i];
      return true;
    }
  }
}
