let amt = 0
document.getElementById("amount").innerHTML = amt

function appendText() {
    var li = document.createElement("li")
    li.value = amt
    var item = $("#item").val()
    if (item != "") {
        amt += 1
        li.innerHTML = "<label><input type='checkbox'>" + item + "</label>"
        $("ul").append(li)
        $("#item").val("")
    }
    document.getElementById("amount").innerHTML = amt
}

function removeItem() {
    if (amt > 0) {
        document.querySelectorAll("li")[amt-1].remove()
        amt -= 1
    }
    document.getElementById("amount").innerHTML = amt
}