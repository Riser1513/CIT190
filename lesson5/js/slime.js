var id
var posX = 0
var posY = 0
var elem = document.getElementById("slime")

document.getElementById("down").addEventListener("click",function() {
    var id = setInterval(frame, 5)
    posY = elem.y
    posX = elem.x;
    function frame() {
        document.getElementById("stop").addEventListener("click",function(){clearInterval(id)})
        if (posY >= 600) {
            clearInterval(id)
        }
        else {
            posY++
            elem.style.top = posY + 'px'
        }
    }
})
        
document.getElementById("up").addEventListener("click",function() {
    var id = setInterval(frame, 5)
    posY = elem.y
    posX = elem.x
    function frame() {
        document.getElementById("stop").addEventListener("click",function(){clearInterval(id)})
        if (posY <= 10) {
            clearInterval(id)
        }
        else {
            posY--
            elem.style.top = posY + 'px'
        }
    }
})
        
document.getElementById("right").addEventListener("click",function() {
    posY = elem.y
    posX = elem.x
    var id = setInterval(frame, 5)
    function frame() {
        document.getElementById("stop").addEventListener("click",function(){clearInterval(id)})
        if (posX >= 1200) {
            clearInterval(id)
        }
        else {
            posX++
            elem.style.left = posX + 'px'
        }
    }
})
        
document.getElementById("left").addEventListener("click",function() {
    posY = elem.y
    posX = elem.x
    var id = setInterval(frame, 5)
    function frame() {
        document.getElementById("stop").addEventListener("click",function(){clearInterval(id)})
        if (posX <= 10) {
            clearInterval(id)
        }
        else {
            posX--
            elem.style.left = posX + 'px'
        }
    }
})