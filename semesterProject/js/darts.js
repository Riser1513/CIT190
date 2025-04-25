// Declaring all variables
$score = $('#score')
$board = $('.board')

darts = [$('#dart1'), $('#dart2'), $('#dart3'), $('#dart4'), $('#dart5')]

currentDart = 0

dartsShot = 0

degrees = 0

x = 0
y = 0

dartX = 0
dartY = 0

score = 0

$board.mousemove(function(e) {
    // Getting mouse positions
    x = e.pageX - $board.offset().left
    y = e.pageY - $board.offset().top
})

function nextDart() {
    // Updating the dart being thrown next
    if (darts[currentDart].offset().left < 1000) {
        currentDart += 1
        dartsShot += 1
        if (currentDart < 5) {
            darts[currentDart].css({'display' : 'inline-block'})
        }
    }
}

$board.click(function(e) {
    // Throwing the dart
    if (dartsShot < 5) {
        dartX = x + 450
        dartY = y + 340
        darts[currentDart].css({'left': dartX})
        darts[currentDart].css({'top': dartY})
        dartX -= $board.offset().left
        dartY -= $board.offset().top
        updateScore()
        nextDart()
    }
})

function updateScore() {
    // Calculating and updating the score
    scoreX = 250 - Math.floor(Math.abs(250 - dartX))
    scoreY = 250 - Math.floor(Math.abs(250 - (dartY+darts[currentDart].height()/2)))
    score += Math.abs(scoreX) + Math.abs(scoreY)
    console.log(dartX, dartY)
    console.log(scoreX, scoreY);
    $score.text('Score: ' + score)
}