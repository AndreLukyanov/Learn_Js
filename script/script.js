var quest = prompt("Сколько Вам лет?", "");
var hello = document.getElementById("hello");
var bye = document.getElementById("bye");

if( quest >= 18 ) {
    function askSay() {
        hello.classList.add("active");
    }
    function closeSay() {
        hello.classList.remove("active");
    }
    setTimeout(closeSay, 3000);
}
else {
    function askSay() {
        bye.classList.add("active");
    }
    function closeSay() {
        bye.classList.remove("active");
    }
    setTimeout(closeSay, 3000);
}

askSay();
