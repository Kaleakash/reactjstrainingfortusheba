document.write("Outside function code")
function info() {
    document.write("Inside function code")
}

info();

function display() {
    document.write("Welcome to JavaScript");
}

function checkUser() {
    var name = document.getElementById("user").value;
    alert("Welcome "+name);
}