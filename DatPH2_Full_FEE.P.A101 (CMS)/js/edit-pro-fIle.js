var firstname = document.getElementById("firstname");
var lastname = document.getElementById("lastname");
var phone = document.getElementById("phone");
var des = document.getElementById("des");
var submit = document.getElementById("submit");

function check(){
    return (firstname.value.length >= 3 && firstname.value.length <= 50
        && lastname.value.length >= 3 && lastname.value.length <= 30
        && phone.value.length >= 9 && phone.value.length <= 13
        && des.value.length >= 0 && des.value.length <=200
        ) ? true : false;  
}
submit.onclick = function(){
    if(check()){
        window.location ="";
    }else{
        alert("nhập lại")
    }
}

