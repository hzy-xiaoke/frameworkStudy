let username = document.querySelector("#username")
let password = document.querySelector("#password")
let login = document.querySelector("#login")
let loginPost = document.querySelector("#loginPost")

login.onclick = () => {
  fetch(`http://localhost:3000/login?username=${username.value}&password=${password.value}`)
    .then(res => res.json())
    .then(res => {
      console.log(res)
      if (res.ok === 1) {
        location.href = "/home"
      }
    })
}

loginPost.onclick = () => {
  fetch("http://localhost:3000/login", {
    method: "POST",
    // body: JSON.stringify({
    //   username: username.value,
    //   password: password.value
    // }),
    // headers: {
    //   "Content-Type": "application/json"
    // }
    body: `username=${username.value}&password=${password.value}`,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    }
  }).then(res => res.json()).then(res => {
    console.log(res)
    if (res.ok === 1) {
      location.href = "/home"
    }
  })
}