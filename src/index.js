document.addEventListener("DOMContentLoaded", ()=>{
  let app = new App()
})


// fetch('http://localhost:3000/api/v1/users')
//   .then(response => response.json())
//   .then(json => render(json))
//
// userContainer= document.querySelector("#users-container")
// let userForm= document.querySelector("#new-user-form")
// userForm.addEventListener("submit", createUser)
//
// function createUser(event) {
//   event.preventDefault()
//   let newUsername = document.querySelector("#new-user-body").value
//   let userBody = {username: newUsername}
//   const userCreateParams = {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type':'application/json'
//     },
//     body: JSON.stringify(userBody)
//   }
//   fetch('http://localhost:3000/api/v1/users', userCreateParams)
//   .then(resp => resp.json())
//   .then(json => console.log(json))
// }
//
// function render(json){
//   json.forEach(user => {
//   let newDiv = document.createElement("div")
//   newDiv.innerText = user.username
//   userContainer.appendChild(newDiv)
// })
// }
