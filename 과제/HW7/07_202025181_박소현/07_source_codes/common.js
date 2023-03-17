function getLogin() {

    var id = document.getElementById("id").value;
    var password = document.getElementById("password").value;

    var id_and_password = {"kim":123,"lee":456,"park":789};
    
    
    if(id_and_password.hasOwnProperty(id)){
        if(password == Object(id_and_password[id])){
            alert("Hello! 202025181 박소현!");
            location.href = "welcome.html";
        }
        else{
            alert("wrong password!");
        }
    }
    else{
        alert("check your id again!");
    }
}
