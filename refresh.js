function refresh() {
    var x = document.getElementsByClassName("status");
    var temp = [];
    for(var i = 0;i < x.length; i++) {
	temp[i] = x[i].innerHTML;
        x[i].innerHTML = "Updating...";
    }
    setTimeout(function() {
        var x = document.getElementsByClassName("status");
        for(var i = 0; i < x.length; i++) {
            x[i].innerHTML = temp[i];
        }
    }, 3000);
    
}

function add() {
    var name = document.getElementById("name");
    var from = document.getElementById("from");
    var to = document.getElementById("to");
    var type;
    if (document.getElementById('home').checked) {
        type = "Home";
    } else if(document.getElementById('business').checked) {
        type = "Business";
    }

    var table = document.getElementById("table");
    var row = table.insertRow(1);

    var uniqueID = row.insertCell(0);
    uniqueID.style.fontWeight = "bold";
    uniqueID.innerHTML = generateUniqueID(8, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
    var date = row.insertCell((1));
    var newFrom = row.insertCell(2);
    var newTo = row.insertCell(3);
    var newWeight = row.insertCell(4);
    var newType = row.insertCell(5);
    var newStatus = row.insertCell(6);
    newFrom.innerHTML = from.value;
    newTo.innerHTML = to.value;
    newWeight.innerHTML = "TBD";
    newType.innerHTML = type;
    newStatus.classList.add("status");
    newStatus.innerHTML = "Processing";
    date.innerHTML = getDate();
    clear();
}

function getDate() {
    var today = new Date();
    var date = 11+"/"+today.getDate()+"/"+today.getFullYear();
        // today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    return date;
}

function generateUniqueID(length, chars) {
    var id = '';
    for (var i = length; i > 0; --i) id += chars[Math.floor(Math.random() * chars.length)];
    return id;
}

function clear() {
    var name = document.getElementById("name");
    var from = document.getElementById("from");
    var to = document.getElementById("to");
    name.value = "";
    from.value = "";
    to.value = "";
    if(document.getElementById("home").checked) {
        document.getElementById("home").checked = false;
    } else if(document.getElementById("business")) {
        document.getElementById("business").checked = false;
    }

}
