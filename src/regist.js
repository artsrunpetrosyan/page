const lastName = document.getElementById("lastName");
const userName = document.getElementById("userName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    fetch(
        "https://it-blog-posts.herokuapp.com/api/people",
        {
            method: "POST",
            body: JSON.stringify({
                lastName: `${lastName.value}`,
                userName: `${userName.value}`,
                email: `${email.value}`,
                password: `${password.value}`,
            }),
            headers: { "Content-Type": "application/json" }
        }
    )
     .then(res => res.json())
    .then(data => {
        window.open("login.html")
        return data;
    })
    .then(
        window.open('log-in.html','_self')
    )
        .catch(function (err) {
            console.log("Error: ", err)
        });

})

