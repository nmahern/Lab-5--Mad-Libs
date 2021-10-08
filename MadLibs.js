function createMessage() {
    upper(document.getElementById("candy"));
    upper(document.getElementById("holiday"));
    upper(document.getElementById("season"));
    upper(document.getElementById("location"));
    upper(document.getElementById("color"));

    const candy1 = document.getElementById("candy1");
    const holiday2 = document.getElementById("holiday2");
    const season3 = document.getElementById("season3");
    const location4 = document.getElementById("location4");
    const color5 = document.getElementById("color5");
 
 
    candy1.innerHTML = document.getElementById("candy").value; 
    holiday2.innerHTML = document.getElementById("holiday").value; 
    season3.innerHTML = document.getElementById("season").value;
    location4.innerHTML = document.getElementById("location").value;
    color5.innerHTML = document.getElementById("color").value;
}

function upper(el) {
    var str = el.value;
    el.value = str.toUpperCase();
 }


