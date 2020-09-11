const lastName = document.getElementById("lastName");
const userName = document.getElementById("userName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const btn = document.getElementById("btn");



btn.addEventListener("click", () => {
    const user = {
            "lastname": `${lastName.value}`,
            "username": `${userName.value}`,
            "password": `${password.value}`,
            "email":    `${email.value}`,
          }
   
    fetch( "https://it-blog-posts.herokuapp.com/api/people",
    {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {
      
        if(response.status === 200 ) {
           
             console.log(response);
        }           
       
        
    })
    
.then(data => {
    window.open("log-in.html",'_self')
    console.log(data)
    return data;
})
    
   
})


