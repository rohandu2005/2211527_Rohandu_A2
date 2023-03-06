function validate()
{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(username=="Test1" && password=="test123"){
    
        alert('Login Succesful')
        return false;
 
    }

    else{
        alert('Login Fail')
        location.replace("https://www.w3schools.com")
    }

}