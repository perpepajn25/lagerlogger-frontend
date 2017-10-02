class App {
  constructor(){
    document.querySelector("#new-user-form").addEventListener("submit", this.createUser)
  }

  createUser(event) {
    event.preventDefault()
    let newUsername = document.querySelector("#new-user-body").value
    let userBody = {username: newUsername}
    const userCreateParams = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type':'application/json'
      },
      body: JSON.stringify(userBody)
    }
    fetch('http://localhost:3000/api/v1/users', userCreateParams)
    .then(resp => resp.json())
    .then(json => console.log(json))
  }
}
