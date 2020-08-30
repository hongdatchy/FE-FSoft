var titleInput = document.getElementById("title-input");
var textarea1 = document.getElementById("textarea1");
var textarea2 = document.getElementById("textarea2");

var submit = document.getElementById("submit");

function check(){
    return (titleInput.value.length >= 10 && titleInput.value.length <= 200
        && textarea1.value.length >= 30 && textarea1.value.length <= 150
        && textarea2.value.length >= 50 && textarea2.value.length <= 1000
        ) ? true : false;  
}
submit.onclick = function(){
    if(check()){
        window.location ="view-content.html";
    }else{
        alert("nhập lại");
        
    }
}

