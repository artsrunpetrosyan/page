const email = document.getElementById("email");
const password = document.getElementById("password"); 
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    fetch(
        "https://it-blog-posts.herokuapp.com/api/people/login",
        {
            method: "POST",
            body: JSON.stringify({
                email: `${email.value}`,
                password: `${password.value}`,
            }),
            headers: { "Content-Type": "application/json" }
        }
    )
    .then(res =>  {
        if(res.ok) {
            window.open('workspace.html','_self'),
          window.close("log-in.html");
        }  })     
        .catch(function (err) {
            console.log("Error: ", err)
        });

})

$("#password") && $("#email") && $("lastName").keypress(function(event) { 
    if (event.keyCode === 13) { 
        $("#btn").click(); 
    } 
}); 



