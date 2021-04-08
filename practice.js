function Check() {
    let input = document.getElementById("input").value;
    if (input == "ECMAScript"){
        document.getElementById("Result").innerHTML = "Right";
    }else {
        document.getElementById("Result").innerHTML = "Did not known ? ECMAScript! ";
    }
}