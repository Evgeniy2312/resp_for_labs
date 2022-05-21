function getUserInterface(
  name,
  email,
  gender,
  type_account,
  username,
  zipcode
) 
{
  return `
        <div class="information"><p>Name: ${name}</p></div>
        <div class="information"><p>Email: ${email}</p></div>
        <div class="information"><p>Gender: ${gender}</p></div>
        <div class="information"><p>Type of account: ${type_account}</p></div>
        <div class="information"><p>Username: ${username}</p></div>
        <div class="information"><p>Zipcode: ${zipcode}</p></div>
        <button>Delete</button>
        `;
}
