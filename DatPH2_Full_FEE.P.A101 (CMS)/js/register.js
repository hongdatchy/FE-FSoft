var username = document.getElementById("username");
var password = document.getElementById("password");
var email = document.getElementById("email");
var rePassword = document.getElementById("re-password");

function check(){
    return (email.value.length >= 3 && email.value.length <= 30
        && password.value.length >= 5
        && password.value.length >= 8 && password.value.length <= 30
        && password.value.length >= 8 && password.value.length <= 30
        ) ? true : false;  
}
submit.onclick = function(){
    if(check()){
        window.location ="edit-pro-fIle.html";
    }else{
        alert("nhập lại")
    }
}

