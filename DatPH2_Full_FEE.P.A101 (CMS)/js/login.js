var email = document.getElementById("email");
var password = document.getElementById("password");
var submit = document.getElementById("submit");

function check(){
    return (email.value.length >= 5 && email.value.length <= 50
        && password.value.length >= 8 && password.value.length <= 50) ? true : false;  
}
submit.onclick = function(){
    if(check()){
        window.location ="edit-pro-fIle.html";
    }else{
        alert("nhập lại")
    }
}

