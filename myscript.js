var a, b, c, f;
a = 10;
b = 11;
c = a + b;
document.getElementById("greet").innerHTML = "HH";

function myFunction() {
    document.getElementById("demo").innerHTML = "段落被更改。";
    document.getElementById("cal").innerHTML = c;
}

function htoc() {
    var t = document.getElementById("temp");
    t.value = (t.value - 32) * 5 / 9;
}