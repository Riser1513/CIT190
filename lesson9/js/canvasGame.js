var myGamePiece
var myObstacles = []

var myScore

var minHeight = 20
var maxHeight = 200

var minGap = 75
var maxGap = 200

var obstacleSpeed = 5
var obstacleDelay = 100
var obstacleIncrement = 1.1

function startGame() {
    myGamePiece = new rect("blue", 0, 0, 50, 50)
    myScore = new rect("black", 900, 40, "30px", "Consolas")
    myGameArea.start();
}
  
var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        document.getElementById("start").style.display = "none"
        document.getElementById("start").style.marginLeft = "48%"
        document.getElementById("controls").style.display = "block"
        this.canvas.width = 950;
        this.canvas.height = 500;
        this.context = this.canvas.getContext("2d");
        this.keys = []
        myObstacles = []
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0
        this.interval = setInterval(updateGameArea, 20)
        window.addEventListener('keydown', function (e) {
            myGameArea.keys[e.code] = true
        })
        window.addEventListener('keyup', function (e) {
            myGameArea.keys[e.code] = false;
        })
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    },
    stop : function() {
        document.getElementById("start").style.display = "block"
        document.getElementById("controls").style.display = "none"
        clearInterval(this.interval)
    }
}

function everyInterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {return true}
    return false
}

function rect(color, x, y, width, height, type = "") {
    this.type = type
    this.width = width
    this.height = height
    this.x = x
    this.y = y
    this.speedX = 0
    this.speedY = 0
    this.update = function() {
        ctx = myGameArea.context
        if (this.type == "text") {
            ctx.font = this.width + " " + this.height
            ctx.fillStyle = color
            ctx.fillText(this.text, this.x, this.y)
        } else {
            ctx.fillStyle = color
            ctx.fillRect(this.x, this.y, this.width, this.height)
        }
    }
    this.newPos = function() {
        this.x += this.speedX
        this.y += this.speedY
        if (this.y < 0) {
            this.y = 0
        }
        if (this.y + this.height > myGameArea.canvas.height) {
            this.y = myGameArea.canvas.height - this.height
        }
        if (this.x < 0) {
            this.x = 0
        }
        if (this.x + this.width > myGameArea.canvas.width) {
            this.x = myGameArea.canvas.width - this.width
        }
    }
    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) ||
        (mytop > otherbottom) ||
        (myright < otherleft) ||
        (myleft > otherright)) {
          crash = false;
        }
        return crash;
      }
}

function updateGameArea() {
    var x, y
    for (i = 0; i < myObstacles.length; i++) {
        if (myGamePiece.crashWith(myObstacles[i])) {
            myGameArea.stop()
            return
        }
    }
    myGameArea.clear()
    myGameArea.frameNo++
    if (myGameArea.frameNo % 500 == 0) {
        obstacleSpeed *= obstacleIncrement
        obstacleDelay /= obstacleIncrement
        obstacleDelay = Math.floor(obstacleDelay)
        obstacleSpeed = Math.floor(obstacleSpeed)
    }
    if (myGameArea.frameNo == 1 || everyInterval(obstacleDelay)) {
        x = myGameArea.canvas.width
        
        height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight)
        gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap)

        myObstacles.push(new rect("purple", x, height + gap, 20, x - height - gap))
        myObstacles.push(new rect("pink", x, 0, 20, height))
    }
    for (i = 0; i < myObstacles.length; i++) {
        myObstacles[i].x += -obstacleSpeed
        myObstacles[i].update()
    }
    myScore.text = "SCORE: " + myGameArea.frameNo
    myScore.update()
    myGamePiece.speedX = 0
    myGamePiece.speedY = 0
    if (myGameArea.keys && myGameArea.keys['ArrowUp']) {myGamePiece.speedY = -5}
    if (myGameArea.keys && myGameArea.keys['ArrowDown']) {myGamePiece.speedY = 5}
    if (myGameArea.keys && myGameArea.keys['ArrowLeft']) {myGamePiece.speedX = -5}
    if (myGameArea.keys && myGameArea.keys['ArrowRight']) {myGamePiece.speedX = 5}
    myGamePiece.newPos()
    myGamePiece.update()
}