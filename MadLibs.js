
    "There was this family that lived on" + candyEl.value + "street" + ".";
    "They always host" + holidayEl.value + "in" + seasonEl.value + ".";
    "Their favorite game was" + locationEl.value + ".";
    "Their favorite snack to eat is" + colorEl.value + "donuts" + "."; 
    
    submitbutton.addEventListener('click' , Submit);

function upper(el) {
    var str = el.value;
    el.value = str.toUpperCase();
    }

    upper(document.getElementById("candy"));
    upper(document.getElementById("holiday"));
    upper(document.getElementById("season"));
    upper(document.getElementById("location"));
    upper(document.getElementById("color"));
