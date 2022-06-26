
// signup function


function signup(){
   
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var user = {
      email: email,
      password: password,
    };

    var JSON = JSON.stringify(user);
    localStorage.setItem(email,JSON)
    console.log('user added');


    // login function
function login(){    

    var password = document.getElementById('password').value;
    var result = document.getElementById('result');

    var user = localStorage.getItem(email);
    var data = JSON.parse(user);
    console.log(data);
    
    if (username == data.email && password == data.password){
        result.innerHTML = 'logged in';
    }

    else{
        result.innerHTML = "something wrong"
    }
}
}