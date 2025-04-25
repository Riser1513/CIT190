// Declaring all variables

// Canvas array
const gridList = [
    document.getElementById('a1'),document.getElementById('a2'),document.getElementById('a3'),
    document.getElementById('b1'),document.getElementById('b2'),document.getElementById('b3'),
    document.getElementById('c1'),document.getElementById('c2'),document.getElementById('c3')
]

// Context array
const contextList = [
    gridList[0].getContext('2d'),gridList[1].getContext('2d'),gridList[2].getContext('2d'),
    gridList[3].getContext('2d'),gridList[4].getContext('2d'),gridList[5].getContext('2d'),
    gridList[6].getContext('2d'),gridList[7].getContext('2d'),gridList[8].getContext('2d')
]

// Which are corners & which are sides
const corners = [0,2,6,8]
const sides = [1,3,5,7]

const neverMove = Math.floor(Math.random() * 8)

// None, Xs, and Os
const blank = document.getElementById('blank')
const os = document.getElementById('os')
const xs = document.getElementById('xs')

// X & O context
const oCont = os.getContext('2d')
const xCont = xs.getContext('2d')

// Draw O
oCont.lineWidth = 10
oCont.beginPath()
oCont.arc(150, 75, 60, 0, 2 * Math.PI)
oCont.stroke()

// Draw X
xCont.lineWidth = 10
xCont.moveTo(0,0)
xCont.lineTo(xs.width,xs.height)
xCont.stroke()
xCont.moveTo(xs.width,0)
xCont.lineTo(0,xs.height)
xCont.stroke()

// Random tile for Computer's 1st move
const firstTurn = Math.floor(Math.random() * 9)

let moves = []

let firstTurnB = true
let computerTurn = true
let gameInterval
let previousMove

let winner = ''
let line = ''

function computerTurnF() {
    // Calculating Computer Moves
    if (computerTurn) {
        if (firstTurnB) {
            contextList[firstTurn].lineWidth = 10
            contextList[firstTurn].moveTo(0,0)
            contextList[firstTurn].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
            contextList[firstTurn].stroke()
            contextList[firstTurn].moveTo(gridList[firstTurn].width,0)
            contextList[firstTurn].lineTo(0,gridList[firstTurn].height)
            contextList[firstTurn].stroke()
            moves.push(firstTurn)
            firstTurnB = false
            computerTurn = false
        }
        else {
            if (moves.includes(0) && moves.includes(2) && computerTurn) {
                if (gridList[0].toDataURL() == xs.toDataURL() && gridList[2].toDataURL() == xs.toDataURL() && gridList[1].toDataURL() != xs.toDataURL() && gridList[1].toDataURL()!= os.toDataURL()) {
                    contextList[1].lineWidth = 10
                    contextList[1].moveTo(0,0)
                    contextList[1].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                    contextList[1].stroke()
                    contextList[1].moveTo(gridList[firstTurn].width,0)
                    contextList[1].lineTo(0,gridList[firstTurn].height)
                    contextList[1].stroke()
                    moves.push(1)
                    computerTurn = false
                }
                else if (gridList[0].toDataURL() == os.toDataURL() && gridList[2].toDataURL() == os.toDataURL() && gridList[1].toDataURL() != xs.toDataURL() && gridList[1].toDataURL() != os.toDataURL()) {
                    contextList[1].lineWidth = 10
                    contextList[1].moveTo(0,0)
                    contextList[1].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                    contextList[1].stroke()
                    contextList[1].moveTo(gridList[firstTurn].width,0)
                    contextList[1].lineTo(0,gridList[firstTurn].height)
                    contextList[1].stroke()
                    moves.push(1)
                    computerTurn = false
                }
            }
            if (moves.includes(0) && moves.includes(1) && computerTurn) {
                if (gridList[0].toDataURL() == xs.toDataURL() && gridList[1].toDataURL() == xs.toDataURL() && gridList[2].toDataURL() != xs.toDataURL() && gridList[2].toDataURL()!= os.toDataURL()) {
                    contextList[2].lineWidth = 10
                    contextList[2].moveTo(0,0)
                    contextList[2].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                    contextList[2].stroke()
                    contextList[2].moveTo(gridList[firstTurn].width,0)
                    contextList[2].lineTo(0,gridList[firstTurn].height)
                    contextList[2].stroke()
                    moves.push(2)
                    computerTurn = false
                }
                else if (gridList[0].toDataURL() == os.toDataURL() && gridList[1].toDataURL() == os.toDataURL() && gridList[2].toDataURL() != xs.toDataURL() && gridList[2].toDataURL() != os.toDataURL()) {
                    contextList[2].lineWidth = 10
                    contextList[2].moveTo(0,0)
                    contextList[2].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                    contextList[2].stroke()
                    contextList[2].moveTo(gridList[firstTurn].width,0)
                    contextList[2].lineTo(0,gridList[firstTurn].height)
                    contextList[2].stroke()
                    moves.push(2)
                    computerTurn = false
                }
            }
            if (moves.includes(1) && moves.includes(2) && computerTurn) {
                if (gridList[1].toDataURL() == xs.toDataURL() && gridList[2].toDataURL() == xs.toDataURL() && gridList[0].toDataURL() != xs.toDataURL() && gridList[0].toDataURL()!= os.toDataURL()) {
                    contextList[0].lineWidth = 10
                    contextList[0].moveTo(0,0)
                    contextList[0].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                    contextList[0].stroke()
                    contextList[0].moveTo(gridList[firstTurn].width,0)
                    contextList[0].lineTo(0,gridList[firstTurn].height)
                    contextList[0].stroke()
                    moves.push(0)
                    computerTurn = false
                }
                else if (gridList[1].toDataURL() == os.toDataURL() && gridList[2].toDataURL() == os.toDataURL() && gridList[0].toDataURL() != xs.toDataURL() && gridList[0].toDataURL() != os.toDataURL()) {
                    contextList[0].lineWidth = 10
                    contextList[0].moveTo(0,0)
                    contextList[0].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                    contextList[0].stroke()
                    contextList[0].moveTo(gridList[firstTurn].width,0)
                    contextList[0].lineTo(0,gridList[firstTurn].height)
                    contextList[0].stroke()
                    moves.push(0)
                    computerTurn = false
                }
            }
            if (moves.includes(3) && moves.includes(4) && computerTurn) {
                if (gridList[3].toDataURL() == xs.toDataURL() && gridList[4].toDataURL() == xs.toDataURL() && gridList[5].toDataURL() != xs.toDataURL() && gridList[5].toDataURL()!= os.toDataURL()) {
                    contextList[5].lineWidth = 10
                    contextList[5].moveTo(0,0)
                    contextList[5].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                    contextList[5].stroke()
                    contextList[5].moveTo(gridList[firstTurn].width,0)
                    contextList[5].lineTo(0,gridList[firstTurn].height)
                    contextList[5].stroke()
                    moves.push(5)
                    computerTurn = false
                }
                else if (gridList[3].toDataURL() == os.toDataURL() && gridList[4].toDataURL() == os.toDataURL() && gridList[5].toDataURL() != xs.toDataURL() && gridList[5].toDataURL() != os.toDataURL()) {
                    contextList[5].lineWidth = 10
                    contextList[5].moveTo(0,0)
                    contextList[5].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                    contextList[5].stroke()
                    contextList[5].moveTo(gridList[firstTurn].width,0)
                    contextList[5].lineTo(0,gridList[firstTurn].height)
                    contextList[5].stroke()
                    moves.push(5)
                    computerTurn = false
                }
            }
            if (moves.includes(3) && moves.includes(5) && computerTurn) {
                if (gridList[3].toDataURL() == xs.toDataURL() && gridList[5].toDataURL() == xs.toDataURL() && gridList[4].toDataURL() != xs.toDataURL() && gridList[4].toDataURL()!= os.toDataURL()) {
                    contextList[4].lineWidth = 10
                    contextList[4].moveTo(0,0)
                    contextList[4].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                    contextList[4].stroke()
                    contextList[4].moveTo(gridList[firstTurn].width,0)
                    contextList[4].lineTo(0,gridList[firstTurn].height)
                    contextList[4].stroke()
                    moves.push(4)
                    computerTurn = false
                }
                else if (gridList[3].toDataURL() == os.toDataURL() && gridList[5].toDataURL() == os.toDataURL() && gridList[4].toDataURL() != xs.toDataURL() && gridList[4].toDataURL() != os.toDataURL()) {
                    contextList[4].lineWidth = 10
                    contextList[4].moveTo(0,0)
                    contextList[4].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                    contextList[4].stroke()
                    contextList[4].moveTo(gridList[firstTurn].width,0)
                    contextList[4].lineTo(0,gridList[firstTurn].height)
                    contextList[4].stroke()
                    moves.push(4)
                    computerTurn = false
                }
            }
            if (moves.includes(5) && moves.includes(4) && computerTurn) {
                if (gridList[5].toDataURL() == xs.toDataURL() && gridList[4].toDataURL() == xs.toDataURL() && gridList[3].toDataURL() != xs.toDataURL() && gridList[3].toDataURL()!= os.toDataURL()) {
                    contextList[3].lineWidth = 10
                    contextList[3].moveTo(0,0)
                    contextList[3].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                    contextList[3].stroke()
                    contextList[3].moveTo(gridList[firstTurn].width,0)
                    contextList[3].lineTo(0,gridList[firstTurn].height)
                    contextList[3].stroke()
                    moves.push(3)
                    computerTurn = false
                }
                else if (gridList[5].toDataURL() == os.toDataURL() && gridList[4].toDataURL() == os.toDataURL() && gridList[3].toDataURL() != xs.toDataURL() && gridList[3].toDataURL() != os.toDataURL()) {
                    contextList[3].lineWidth = 10
                    contextList[3].moveTo(0,0)
                    contextList[3].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                    contextList[3].stroke()
                    contextList[3].moveTo(gridList[firstTurn].width,0)
                    contextList[3].lineTo(0,gridList[firstTurn].height)
                    contextList[3].stroke()
                    moves.push(3)
                    computerTurn = false
                }
            }
            if (moves.includes(6) && moves.includes(7) && computerTurn) {
                if (gridList[6].toDataURL() == xs.toDataURL() && gridList[7].toDataURL() == xs.toDataURL() && gridList[8].toDataURL() != xs.toDataURL() && gridList[8].toDataURL() != os.toDataURL()) {
                    contextList[8].lineWidth = 10
                    contextList[8].moveTo(0,0)
                    contextList[8].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                    contextList[8].stroke()
                    contextList[8].moveTo(gridList[firstTurn].width,0)
                    contextList[8].lineTo(0,gridList[firstTurn].height)
                    contextList[8].stroke()
                    moves.push(8)
                    computerTurn = false
                }
                else if (gridList[6].toDataURL() == os.toDataURL() && gridList[7].toDataURL() == os.toDataURL() && gridList[8].toDataURL() != xs.toDataURL() && gridList[8].toDataURL() != os.toDataURL()) {
                    contextList[8].lineWidth = 10
                    contextList[8].moveTo(0,0)
                    contextList[8].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                    contextList[8].stroke()
                    contextList[8].moveTo(gridList[firstTurn].width,0)
                    contextList[8].lineTo(0,gridList[firstTurn].height)
                    contextList[8].stroke()
                    moves.push(8)
                    computerTurn = false
                }
            }
            if (moves.includes(6) && moves.includes(8) && computerTurn) {
                if (gridList[6].toDataURL() == xs.toDataURL() && gridList[8].toDataURL() == xs.toDataURL() && gridList[7].toDataURL() != xs.toDataURL() && gridList[7].toDataURL() != os.toDataURL()) {
                    contextList[7].lineWidth = 10
                    contextList[7].moveTo(0,0)
                    contextList[7].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                    contextList[7].stroke()
                    contextList[7].moveTo(gridList[firstTurn].width,0)
                    contextList[7].lineTo(0,gridList[firstTurn].height)
                    contextList[7].stroke()
                    moves.push(7)
                    computerTurn = false
                }
                else if (gridList[6].toDataURL() == os.toDataURL() && gridList[8].toDataURL() == os.toDataURL() && gridList[7].toDataURL() != xs.toDataURL() && gridList[7].toDataURL() != os.toDataURL()) {
                    contextList[7].lineWidth = 10
                    contextList[7].moveTo(0,0)
                    contextList[7].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                    contextList[7].stroke()
                    contextList[7].moveTo(gridList[firstTurn].width,0)
                    contextList[7].lineTo(0,gridList[firstTurn].height)
                    contextList[7].stroke()
                    moves.push(7)
                    computerTurn = false
                }
            }
            if (moves.includes(8) && moves.includes(7) && computerTurn) {
                if (gridList[8].toDataURL() == xs.toDataURL() && gridList[7].toDataURL() == xs.toDataURL() && gridList[6].toDataURL() != xs.toDataURL() && gridList[6].toDataURL() != os.toDataURL()) {
                    contextList[6].lineWidth = 10
                    contextList[6].moveTo(0,0)
                    contextList[6].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                    contextList[6].stroke()
                    contextList[6].moveTo(gridList[firstTurn].width,0)
                    contextList[6].lineTo(0,gridList[firstTurn].height)
                    contextList[6].stroke()
                    moves.push(6)
                    computerTurn = false
                }
                else if (gridList[8].toDataURL() == os.toDataURL() && gridList[7].toDataURL() == os.toDataURL() && gridList[6].toDataURL() != xs.toDataURL() && gridList[6].toDataURL() != os.toDataURL()) {
                    contextList[6].lineWidth = 10
                    contextList[6].moveTo(0,0)
                    contextList[6].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                    contextList[6].stroke()
                    contextList[6].moveTo(gridList[firstTurn].width,0)
                    contextList[6].lineTo(0,gridList[firstTurn].height)
                    contextList[6].stroke()
                    moves.push(6)
                    computerTurn = false
                }
            }
            if (moves.includes(0) && moves.includes(3) && computerTurn) {
                if (gridList[0].toDataURL() == xs.toDataURL() && gridList[3].toDataURL() == xs.toDataURL() && gridList[6].toDataURL() != xs.toDataURL() && gridList[6].toDataURL() != os.toDataURL()) {
                    contextList[6].lineWidth = 10
                    contextList[6].moveTo(0,0)
                    contextList[6].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                    contextList[6].stroke()
                    contextList[6].moveTo(gridList[firstTurn].width,0)
                    contextList[6].lineTo(0,gridList[firstTurn].height)
                    contextList[6].stroke()
                    moves.push(6)
                    computerTurn = false
                }
                else if (gridList[0].toDataURL() == os.toDataURL() && gridList[3].toDataURL() == os.toDataURL() && gridList[3].toDataURL() != xs.toDataURL() && gridList[3].toDataURL() != os.toDataURL() ) {
                    contextList[6].lineWidth = 10
                    contextList[6].moveTo(0,0)
                    contextList[6].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                    contextList[6].stroke()
                    contextList[6].moveTo(gridList[firstTurn].width,0)
                    contextList[6].lineTo(0,gridList[firstTurn].height)
                    contextList[6].stroke()
                    moves.push(6)
                    computerTurn = false
                }
            }
            if (moves.includes(0) && moves.includes(6) && computerTurn) {
                if (gridList[0].toDataURL() == xs.toDataURL() && gridList[6].toDataURL() == xs.toDataURL() && gridList[3].toDataURL() != xs.toDataURL() && gridList[3].toDataURL() != os.toDataURL()) {
                    contextList[3].lineWidth = 10
                    contextList[3].moveTo(0,0)
                    contextList[3].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                    contextList[3].stroke()
                    contextList[3].moveTo(gridList[firstTurn].width,0)
                    contextList[3].lineTo(0,gridList[firstTurn].height)
                    contextList[3].stroke()
                    moves.push(3)
                    computerTurn = false
                }
                else if (gridList[0].toDataURL() == os.toDataURL() && gridList[6].toDataURL() == os.toDataURL() && gridList[3].toDataURL() != xs.toDataURL() && gridList[3].toDataURL() != os.toDataURL()) {
                    contextList[3].lineWidth = 10
                    contextList[3].moveTo(0,0)
                    contextList[3].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                    contextList[3].stroke()
                    contextList[3].moveTo(gridList[firstTurn].width,0)
                    contextList[3].lineTo(0,gridList[firstTurn].height)
                    contextList[3].stroke()
                    moves.push(3)
                    computerTurn = false
                }
            }
            if (moves.includes(6) && moves.includes(3) && computerTurn) {
                if (gridList[6].toDataURL() == xs.toDataURL() && gridList[3].toDataURL() == xs.toDataURL() && gridList[0].toDataURL() != xs.toDataURL() && gridList[0].toDataURL() != os.toDataURL()) {
                    contextList[0].lineWidth = 10
                    contextList[0].moveTo(0,0)
                    contextList[0].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                    contextList[0].stroke()
                    contextList[0].moveTo(gridList[firstTurn].width,0)
                    contextList[0].lineTo(0,gridList[firstTurn].height)
                    contextList[0].stroke()
                    moves.push(0)
                    computerTurn = false
                }
                else if (gridList[6].toDataURL() == os.toDataURL() && gridList[3].toDataURL() == os.toDataURL() && gridList[0].toDataURL() != xs.toDataURL() && gridList[0].toDataURL() != os.toDataURL()) {
                    contextList[0].lineWidth = 10
                    contextList[0].moveTo(0,0)
                    contextList[0].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                    contextList[0].stroke()
                    contextList[0].moveTo(gridList[firstTurn].width,0)
                    contextList[0].lineTo(0,gridList[firstTurn].height)
                    contextList[0].stroke()
                    moves.push(0)
                    computerTurn = false
                }
            }
            if (moves.includes(1) && moves.includes(4) && computerTurn) {
                if (gridList[1].toDataURL() == xs.toDataURL() && gridList[4].toDataURL() == xs.toDataURL() && gridList[7].toDataURL() != xs.toDataURL() && gridList[7].toDataURL() != os.toDataURL()) {
                    contextList[7].lineWidth = 10
                    contextList[7].moveTo(0,0)
                    contextList[7].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                    contextList[7].stroke()
                    contextList[7].moveTo(gridList[firstTurn].width,0)
                    contextList[7].lineTo(0,gridList[firstTurn].height)
                    contextList[7].stroke()
                    moves.push(7)
                    computerTurn = false
                }
                else if (gridList[1].toDataURL() == os.toDataURL() && gridList[4].toDataURL() == os.toDataURL() && gridList[7].toDataURL() != xs.toDataURL() && gridList[7].toDataURL() != os.toDataURL()) {
                    contextList[7].lineWidth = 10
                    contextList[7].moveTo(0,0)
                    contextList[7].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                    contextList[7].stroke()
                    contextList[7].moveTo(gridList[firstTurn].width,0)
                    contextList[7].lineTo(0,gridList[firstTurn].height)
                    contextList[7].stroke()
                    moves.push(7)
                    computerTurn = false
                }
            }
            if (moves.includes(1) && moves.includes(7) && computerTurn) {                    if (gridList[1].toDataURL() == xs.toDataURL() && gridList[7].toDataURL() == xs.toDataURL() && gridList[4].toDataURL() != xs.toDataURL() && gridList[4].toDataURL() != os.toDataURL()) {
                    contextList[4].lineWidth = 10
                    contextList[4].moveTo(0,0)
                    contextList[4].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                    contextList[4].stroke()
                    contextList[4].moveTo(gridList[firstTurn].width,0)
                    contextList[4].lineTo(0,gridList[firstTurn].height)
                    contextList[4].stroke()
                    moves.push(4)
                    computerTurn = false                    }
                else if (gridList[1].toDataURL() == os.toDataURL() && gridList[7].toDataURL() == os.toDataURL() && gridList[4].toDataURL() != xs.toDataURL() && gridList[4].toDataURL() != os.toDataURL()) {
                    contextList[4].lineWidth = 10
                    contextList[4].moveTo(0,0)
                    contextList[4].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                    contextList[4].stroke()
                    contextList[4].moveTo(gridList[firstTurn].width,0)
                    contextList[4].lineTo(0,gridList[firstTurn].height)
                    contextList[4].stroke()
                    moves.push(4)
                    computerTurn = false                    }
            }
            if (moves.includes(7) && moves.includes(4) && computerTurn) {
                if (gridList[7].toDataURL() == xs.toDataURL() && gridList[4].toDataURL() == xs.toDataURL() && gridList[1].toDataURL() != xs.toDataURL() && gridList[1].toDataURL() != os.toDataURL()) {
                    contextList[1].lineWidth = 10
                    contextList[1].moveTo(0,0)
                    contextList[1].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                    contextList[1].stroke()
                    contextList[1].moveTo(gridList[firstTurn].width,0)
                    contextList[1].lineTo(0,gridList[firstTurn].height)
                    contextList[1].stroke()
                    moves.push(1)
                    computerTurn = false
                }
                else if (gridList[7].toDataURL() == os.toDataURL() && gridList[4].toDataURL() == os.toDataURL() && gridList[1].toDataURL() != xs.toDataURL() && gridList[1].toDataURL() != os.toDataURL()) {
                    contextList[1].lineWidth = 10
                    contextList[1].moveTo(0,0)
                    contextList[1].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                    contextList[1].stroke()
                    contextList[1].moveTo(gridList[firstTurn].width,0)
                    contextList[1].lineTo(0,gridList[firstTurn].height)
                    contextList[1].stroke()
                    moves.push(1)
                    computerTurn = false
                }
            }
            if (moves.includes(2) && moves.includes(5) && computerTurn) {
                if (gridList[2].toDataURL() == xs.toDataURL() && gridList[5].toDataURL() == xs.toDataURL() && gridList[8].toDataURL() != xs.toDataURL() && gridList[8].toDataURL() != os.toDataURL()) {
                    contextList[8].lineWidth = 10
                    contextList[8].moveTo(0,0)
                    contextList[8].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                    contextList[8].stroke()
                    contextList[8].moveTo(gridList[firstTurn].width,0)
                    contextList[8].lineTo(0,gridList[firstTurn].height)
                    contextList[8].stroke()
                    moves.push(8)
                    computerTurn = false
                }
                else if (gridList[2].toDataURL() == os.toDataURL() && gridList[5].toDataURL() == os.toDataURL() && gridList[8].toDataURL() != xs.toDataURL() && gridList[8].toDataURL() != os.toDataURL()) {
                    contextList[8].lineWidth = 10
                    contextList[8].moveTo(0,0)
                    contextList[8].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                    contextList[8].stroke()
                    contextList[8].moveTo(gridList[firstTurn].width,0)
                    contextList[8].lineTo(0,gridList[firstTurn].height)
                    contextList[8].stroke()
                    moves.push(8)
                    computerTurn = false
                }
            }
            if (moves.includes(2) && moves.includes(8) && computerTurn) {
                if (gridList[2].toDataURL() == xs.toDataURL() && gridList[8].toDataURL() == xs.toDataURL() && gridList[5].toDataURL() != xs.toDataURL() && gridList[5].toDataURL() != os.toDataURL()) {
                    contextList[5].lineWidth = 10
                    contextList[5].moveTo(0,0)
                    contextList[5].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                    contextList[5].stroke()
                    contextList[5].moveTo(gridList[firstTurn].width,0)
                    contextList[5].lineTo(0,gridList[firstTurn].height)
                    contextList[5].stroke()
                    moves.push(5)
                    computerTurn = false
                }
                else if (gridList[2].toDataURL() == os.toDataURL() && gridList[8].toDataURL() == os.toDataURL() && gridList[5].toDataURL() != xs.toDataURL() && gridList[5].toDataURL() != os.toDataURL()) {
                    contextList[5].lineWidth = 10
                    contextList[5].moveTo(0,0)
                    contextList[5].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                    contextList[5].stroke()
                    contextList[5].moveTo(gridList[firstTurn].width,0)
                    contextList[5].lineTo(0,gridList[firstTurn].height)
                    contextList[5].stroke()
                    moves.push(5)
                    computerTurn = false
                }
            }
            if (moves.includes(2) && moves.includes(5) && computerTurn) {
                if (gridList[8].toDataURL() == xs.toDataURL() && gridList[5].toDataURL() == xs.toDataURL() && gridList[2].toDataURL() != xs.toDataURL() && gridList[2].toDataURL() != os.toDataURL()) {
                    contextList[2].lineWidth = 10
                    contextList[2].moveTo(0,0)
                    contextList[2].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                    contextList[2].stroke()
                    contextList[2].moveTo(gridList[firstTurn].width,0)
                    contextList[2].lineTo(0,gridList[firstTurn].height)
                    contextList[2].stroke()
                    moves.push(2)
                    computerTurn = false
                }
                else if (gridList[8].toDataURL() == os.toDataURL() && gridList[5].toDataURL() == os.toDataURL() && gridList[2].toDataURL() != xs.toDataURL() && gridList[2].toDataURL() != os.toDataURL()) {
                    contextList[2].lineWidth = 10
                    contextList[2].moveTo(0,0)
                    contextList[2].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                    contextList[2].stroke()
                    contextList[2].moveTo(gridList[firstTurn].width,0)
                    contextList[2].lineTo(0,gridList[firstTurn].height)
                    contextList[2].stroke()
                    moves.push(2)
                    computerTurn = false
                }
            }
            if (moves.includes(4) && moves.includes(8) && computerTurn) {
                if (gridList[8].toDataURL() == xs.toDataURL() && gridList[4].toDataURL() == xs.toDataURL() && gridList[0].toDataURL() != xs.toDataURL() && gridList[0].toDataURL() != os.toDataURL()) {
                    contextList[0].lineWidth = 10
                    contextList[0].moveTo(0,0)
                    contextList[0].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                    contextList[0].stroke()
                    contextList[0].moveTo(gridList[firstTurn].width,0)
                    contextList[0].lineTo(0,gridList[firstTurn].height)
                    contextList[0].stroke()
                    moves.push(0)
                    computerTurn = false
                }
                else if (gridList[8].toDataURL() == os.toDataURL() && gridList[4].toDataURL() == os.toDataURL() && gridList[0].toDataURL() != xs.toDataURL() && gridList[0].toDataURL() != os.toDataURL()) {
                    contextList[0].lineWidth = 10
                    contextList[0].moveTo(0,0)
                    contextList[0].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                    contextList[0].stroke()
                    contextList[0].moveTo(gridList[firstTurn].width,0)
                    contextList[0].lineTo(0,gridList[firstTurn].height)
                    contextList[0].stroke()
                    moves.push(0)
                    computerTurn = false
                }
            }
            if (moves.includes(4) && moves.includes(0) && computerTurn) {
                if (gridList[0].toDataURL() == xs.toDataURL() && gridList[4].toDataURL() == xs.toDataURL() && gridList[8].toDataURL() != xs.toDataURL() && gridList[8].toDataURL()!= os.toDataURL()) {
                    contextList[8].lineWidth = 10
                    contextList[8].moveTo(0,0)
                    contextList[8].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                    contextList[8].stroke()
                    contextList[8].moveTo(gridList[firstTurn].width,0)
                    contextList[8].lineTo(0,gridList[firstTurn].height)
                    contextList[8].stroke()
                    moves.push(8)
                    computerTurn = false
                }
                else if (gridList[0].toDataURL() == os.toDataURL() && gridList[4].toDataURL() == os.toDataURL() && gridList[8].toDataURL() != xs.toDataURL() && gridList[8].toDataURL() != os.toDataURL()) {
                    contextList[8].lineWidth = 10
                    contextList[8].moveTo(0,0)
                    contextList[8].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                    contextList[8].stroke()
                    contextList[8].moveTo(gridList[firstTurn].width,0)
                    contextList[8].lineTo(0,gridList[firstTurn].height)
                    contextList[8].stroke()
                    moves.push(8)
                    computerTurn = false
                }
            }
            if (moves.includes(0) && moves.includes(8) && computerTurn) {
                if (gridList[8].toDataURL() == xs.toDataURL() && gridList[0].toDataURL() == xs.toDataURL() && gridList[4].toDataURL() != xs.toDataURL() && gridList[4].toDataURL()!= os.toDataURL()) {
                    contextList[4].lineWidth = 10
                    contextList[4].moveTo(0,0)
                    contextList[4].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                    contextList[4].stroke()
                    contextList[4].moveTo(gridList[firstTurn].width,0)
                    contextList[4].lineTo(0,gridList[firstTurn].height)
                    contextList[4].stroke()
                    moves.push(4)
                    computerTurn = false
                }
                else if (gridList[8].toDataURL() == os.toDataURL() && gridList[0].toDataURL() == os.toDataURL() && gridList[4].toDataURL() != xs.toDataURL() && gridList[4].toDataURL() != os.toDataURL()) {
                    contextList[4].lineWidth = 10
                    contextList[4].moveTo(0,0)
                    contextList[4].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                    contextList[4].stroke()
                    contextList[4].moveTo(gridList[firstTurn].width,0)
                    contextList[4].lineTo(0,gridList[firstTurn].height)
                    contextList[4].stroke()
                    moves.push(4)
                    computerTurn = false
                }
            }
            if (moves.includes(2) && moves.includes(4) && computerTurn) {
                if (gridList[2].toDataURL() == xs.toDataURL() && gridList[4].toDataURL() == xs.toDataURL() && gridList[6].toDataURL() != xs.toDataURL() && gridList[6].toDataURL()!= os.toDataURL()) {
                    contextList[6].lineWidth = 10
                    contextList[6].moveTo(0,0)
                    contextList[6].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                    contextList[6].stroke()
                    contextList[6].moveTo(gridList[firstTurn].width,0)
                    contextList[6].lineTo(0,gridList[firstTurn].height)
                    contextList[6].stroke()
                    moves.push(6)
                    computerTurn = false
                }
                else if (gridList[2].toDataURL() == os.toDataURL() && gridList[4].toDataURL() == os.toDataURL() && gridList[6].toDataURL() != xs.toDataURL() && gridList[6].toDataURL() != os.toDataURL()) {
                    contextList[6].lineWidth = 10
                    contextList[6].moveTo(0,0)
                    contextList[6].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                    contextList[6].stroke()
                    contextList[6].moveTo(gridList[firstTurn].width,0)
                    contextList[6].lineTo(0,gridList[firstTurn].height)
                    contextList[6].stroke()
                    moves.push(6)
                    computerTurn = false
                }
            }
            if (moves.includes(2) && moves.includes(6) && computerTurn) {
                if (gridList[2].toDataURL() == xs.toDataURL() && gridList[6].toDataURL() == xs.toDataURL() && gridList[4].toDataURL() != xs.toDataURL() && gridList[4].toDataURL()!= os.toDataURL()) {
                    contextList[4].lineWidth = 10
                    contextList[4].moveTo(0,0)
                    contextList[4].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                    contextList[4].stroke()
                    contextList[4].moveTo(gridList[firstTurn].width,0)
                    contextList[4].lineTo(0,gridList[firstTurn].height)
                    contextList[4].stroke()
                    moves.push(4)
                    computerTurn = false
                }
                else if (gridList[2].toDataURL() == os.toDataURL() && gridList[6].toDataURL() == os.toDataURL() && gridList[4].toDataURL() != xs.toDataURL() && gridList[4].toDataURL() != os.toDataURL()) {
                    contextList[4].lineWidth = 10
                    contextList[4].moveTo(0,0)
                    contextList[4].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                    contextList[4].stroke()
                    contextList[4].moveTo(gridList[firstTurn].width,0)
                    contextList[4].lineTo(0,gridList[firstTurn].height)
                    contextList[4].stroke()
                    moves.push(4)
                    computerTurn = false
                }
            }
            if (moves.includes(6) && moves.includes(4) && computerTurn) {
                if (gridList[6].toDataURL() == xs.toDataURL() && gridList[4].toDataURL() == xs.toDataURL() && gridList[2].toDataURL() != xs.toDataURL() && gridList[2].toDataURL()!= os.toDataURL()) {
                    contextList[2].lineWidth = 10
                    contextList[2].moveTo(0,0)
                    contextList[2].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                    contextList[2].stroke()
                    contextList[2].moveTo(gridList[firstTurn].width,0)
                    contextList[2].lineTo(0,gridList[firstTurn].height)
                    contextList[2].stroke()
                    moves.push(2)
                    computerTurn = false
                }
                else if (gridList[6].toDataURL() == os.toDataURL() && gridList[4].toDataURL() == os.toDataURL()  && gridList[2].toDataURL() != xs.toDataURL() && gridList[2].toDataURL() != os.toDataURL()) {
                    contextList[2].lineWidth = 10
                    contextList[2].moveTo(0,0)
                    contextList[2].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                    contextList[2].stroke()
                    contextList[2].moveTo(gridList[firstTurn].width,0)
                    contextList[2].lineTo(0,gridList[firstTurn].height)
                    contextList[2].stroke()
                    moves.push(2)
                    computerTurn = false
                }
            }
            if (computerTurn && winner == '') {
                for (let a = 0; a < gridList.length; a++) {
                    // Semi-random moves
                    if (gridList[a].toDataURL() == blank.toDataURL()) {
                        if (moves.length > 3 && !moves.includes(4) && computerTurn) {
                            contextList[4].lineWidth = 10
                            contextList[4].moveTo(0,0)
                            contextList[4].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                            contextList[4].stroke()
                            contextList[4].moveTo(gridList[firstTurn].width,0)
                            contextList[4].lineTo(0,gridList[firstTurn].height)
                            contextList[4].stroke()
                            moves.push(4)
                            computerTurn = false
                            break
                        }
                        else if (previousMove == 4 && a in corners && a != Math.floor(Math.random() * 8) && a != neverMove && a != Math.floor(Math.random() * 8) && computerTurn) {
                            contextList[a].lineWidth = 10
                            contextList[a].moveTo(0,0)
                            contextList[a].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                            contextList[a].stroke()
                            contextList[a].moveTo(gridList[firstTurn].width,0)
                            contextList[a].lineTo(0,gridList[firstTurn].height)
                            contextList[a].stroke()
                            moves.push(a)
                            computerTurn = false
                            break
                        }
                        else if (a != Math.floor(Math.random() * 8) && a != neverMove && previousMove != 4 && a != Math.floor(Math.random() * 8) && computerTurn) {
                            contextList[a].lineWidth = 10
                            contextList[a].moveTo(0,0)
                            contextList[a].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                            contextList[a].stroke()
                            contextList[a].moveTo(gridList[firstTurn].width,0)
                            contextList[a].lineTo(0,gridList[firstTurn].height)
                            contextList[a].stroke()
                            moves.push(a)
                            computerTurn = false
                            break
                        }
                        else if (moves.length > 3 && a != 1 && a != 2 && a != neverMove && a != Math.floor(Math.random() * 8) && a != Math.floor(Math.random() * 8) && computerTurn) {
                            contextList[a].lineWidth = 10
                            contextList[a].moveTo(0,0)
                            contextList[a].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                            contextList[a].stroke()
                            contextList[a].moveTo(gridList[firstTurn].width,0)
                            contextList[a].lineTo(0,gridList[firstTurn].height)
                            contextList[a].stroke()
                            moves.push(a)
                            computerTurn = false
                            break
                        }
                        else if (computerTurn) {
                            contextList[a].lineWidth = 10
                            contextList[a].moveTo(0,0)
                            contextList[a].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                            contextList[a].stroke()
                            contextList[a].moveTo(gridList[firstTurn].width,0)
                            contextList[a].lineTo(0,gridList[firstTurn].height)
                            contextList[a].stroke()
                            moves.push(a)
                            computerTurn = false
                            break
                        }
                    }
                }
            }
        }
    }
}

function playerTurn() {
    // Player turn
    if (!computerTurn) {
        for (let a = 0; a < gridList.length; a++) {
            gridList[a].addEventListener('click', function() {
                if (gridList[a].toDataURL() == blank.toDataURL() && !computerTurn) {
                    contextList[a].lineWidth = 10
                    contextList[a].beginPath()
                    contextList[a].arc(150, 75, 60, 0, 2 * Math.PI)
                    contextList[a].stroke()
                    moves.push(a)
                    computerTurn = true
                    previousMove = a
                }
            })
        }
    }
}

function game() {
    // Starting & running the game
    gameInterval = setInterval(() => {
        if (winner == '') {
            checkWin()
            if (!computerTurn && winner == '') {
                playerTurn()
            }
            else if (computerTurn && winner == '') {
                computerTurnF()
            }
        }
    }, 250)
}

function checkWin() {
    // Checks who wins

    if (moves.includes(0) && moves.includes(1) && moves.includes(2)) {
        if (gridList[1].toDataURL() == xs.toDataURL() && gridList[2].toDataURL() == xs.toDataURL() && gridList[0].toDataURL() == xs.toDataURL()) {
            console.log('comp 1 & 2')
            winner = 'Computer'
            line = 'top'

        }
        else if (gridList[1].toDataURL() == os.toDataURL() && gridList[2].toDataURL() == os.toDataURL() && gridList[0].toDataURL() == os.toDataURL()) {
            console.log('play 1 & 2')
            winner = 'Player'
            line = 'top'
        }
    }
    if (moves.includes(3) && moves.includes(4) && moves.includes(5) && winner == '') {
        if (gridList[3].toDataURL() == xs.toDataURL() && gridList[4].toDataURL() == xs.toDataURL() && gridList[5].toDataURL() == xs.toDataURL()) {
            console.log('comp 4 & 5')
            winner = 'Computer'
            line = 'middleH'
        }
        else if (gridList[3].toDataURL() == os.toDataURL() && gridList[4].toDataURL() == os.toDataURL() && gridList[5].toDataURL() == os.toDataURL()) {
            console.log('play 4 & 5')
            winner = 'Player'
            line = 'middleH'
        }
    }
    if (moves.includes(6) && moves.includes(7) && moves.includes(8) && winner == '') {
        if (gridList[6].toDataURL() == xs.toDataURL() && gridList[7].toDataURL() == xs.toDataURL() && gridList[8].toDataURL() == xs.toDataURL()) {
            console.log('comp 6 & 8')
            winner = 'Computer'
            line = 'bottom'
        }
        else if (gridList[6].toDataURL() == os.toDataURL() && gridList[7].toDataURL() == os.toDataURL() && gridList[8].toDataURL() == os.toDataURL()) {
            console.log('play 6 & 8')
            winner = 'Player'
            line = 'bottom'
        }
    }
    if (moves.includes(0) && moves.includes(3) && moves.includes(6) && winner == '') {
        if (gridList[0].toDataURL() == xs.toDataURL() && gridList[3].toDataURL() == xs.toDataURL() && gridList[6].toDataURL() == xs.toDataURL()) {
            console.log('comp 0 & 6')
            winner = 'Computer'
            line = 'left'
        }
        else if (gridList[0].toDataURL() == os.toDataURL() && gridList[3].toDataURL() == os.toDataURL() && gridList[6].toDataURL() == os.toDataURL()) {
            console.log('play 0 & 6')
            winner = 'Player'
            line = 'left'
        }
    }
    if (moves.includes(1) && moves.includes(4) && moves.includes(7) && winner == '') {
        if (gridList[1].toDataURL() == xs.toDataURL() && gridList[4].toDataURL() == xs.toDataURL() && gridList[7].toDataURL() == xs.toDataURL()) {
            console.log('comp 1 & 7')
            winner = 'Computer'
            line = 'middleV'
        }
        else if (gridList[1].toDataURL() == os.toDataURL() && gridList[4].toDataURL() == os.toDataURL() && gridList[7].toDataURL() == os.toDataURL()) {
            console.log('play 1 & 7')
            winner = 'Player'
            line = 'middleV'
        }
    }
    if (moves.includes(2) && moves.includes(5) && moves.includes(8) && winner == '') {
        if (gridList[2].toDataURL() == xs.toDataURL() && gridList[5].toDataURL() == xs.toDataURL() && gridList[8].toDataURL() == xs.toDataURL()) {
            console.log('comp 8 & 5')
            winner = 'Computer'
            line = 'right'
        }
        else if (gridList[2].toDataURL() == os.toDataURL() && gridList[5].toDataURL() == os.toDataURL() && gridList[8].toDataURL() == os.toDataURL()) {
            console.log('play 8 & 5')
            winner = 'Player'
            line = 'right'
        }
    }
    if (moves.includes(0) && moves.includes(4) && moves.includes(8) && winner == '') {
        if (gridList[8].toDataURL() == xs.toDataURL() && gridList[4].toDataURL() == xs.toDataURL() && gridList[0].toDataURL() == xs.toDataURL()) {
            console.log('comp 4 & 8')
            winner = 'Computer'
            line = 'diagonalLR'
        }
        else if (gridList[8].toDataURL() == os.toDataURL() && gridList[4].toDataURL() == os.toDataURL() && gridList[0].toDataURL() == os.toDataURL()) {
            console.log('play 4 & 8')
            winner = 'Player'
            line = 'diagonalLR'
        }
    }
    if (moves.includes(2) && moves.includes(4) && moves.includes(6) && winner == '') {
        if (gridList[2].toDataURL() == xs.toDataURL() && gridList[4].toDataURL() == xs.toDataURL() && gridList[6].toDataURL() == xs.toDataURL()) {
            console.log('comp 4 & 6')
            winner = 'Computer'
            line = 'diagonalRL'
        }
        else if (gridList[2].toDataURL() == os.toDataURL() && gridList[4].toDataURL() == os.toDataURL() && gridList[6].toDataURL() == os.toDataURL()) {
            console.log('play 4 & 6')
            winner = 'Player'
            line = 'diagonalRL'
        }
    }
    if (moves.length >= 9 && winner == '') {
        winner = 'Draw'
        drawLine()
    }
    if (line != '') {
        console.log(line)
        drawLine()
    }
}

function drawLine() {
    // Draws winning lines
    if (line == 'top') {
        console.log('t')
        contextList[0].lineWidth = 20
        contextList[0].moveTo(0, gridList[0].height/2)
        contextList[0].lineTo(gridList[0].width, gridList[0].height/2)
        contextList[0].stroke()
        contextList[1].lineWidth = 20
        contextList[1].moveTo(0, gridList[0].height/2)
        contextList[1].lineTo(gridList[0].width, gridList[0].height/2)
        contextList[1].stroke()
        contextList[2].lineWidth = 20
        contextList[2].moveTo(0, gridList[0].height/2)
        contextList[2].lineTo(gridList[0].width, gridList[0].height/2)
        contextList[2].stroke()
    }
    if (line == 'middleH') {
        console.log('h')
        contextList[3].lineWidth = 20
        contextList[3].moveTo(0, gridList[0].height/2)
        contextList[3].lineTo(gridList[0].width, gridList[0].height/2)
        contextList[3].stroke()
        contextList[4].lineWidth = 20
        contextList[4].moveTo(0, gridList[0].height/2)
        contextList[4].lineTo(gridList[0].width, gridList[0].height/2)
        contextList[4].stroke()
        contextList[5].lineWidth = 20
        contextList[5].moveTo(0, gridList[0].height/2)
        contextList[5].lineTo(gridList[0].width, gridList[0].height/2)
        contextList[5].stroke()
    }
    if (line == 'bottom') {
        console.log('b')
        contextList[6].lineWidth = 20
        contextList[6].moveTo(0, gridList[0].height/2)
        contextList[6].lineTo(gridList[0].width, gridList[0].height/2)
        contextList[6].stroke()
        contextList[7].lineWidth = 20
        contextList[7].moveTo(0, gridList[0].height/2)
        contextList[7].lineTo(gridList[0].width, gridList[0].height/2)
        contextList[7].stroke()
        contextList[8].lineWidth = 20
        contextList[8].moveTo(0, gridList[0].height/2)
        contextList[8].lineTo(gridList[0].width, gridList[0].height/2)
        contextList[8].stroke()
    }
    if (line == 'left') {
        console.log('l')
        contextList[0].lineWidth = 20
        contextList[0].moveTo(gridList[0].width/2, 0)
        contextList[0].lineTo(gridList[0].width/2, gridList[0].height)
        contextList[0].stroke()
        contextList[3].lineWidth = 20
        contextList[3].moveTo(gridList[0].width/2, 0)
        contextList[3].lineTo(gridList[0].width/2, gridList[0].height)
        contextList[3].stroke()
        contextList[6].lineWidth = 20
        contextList[6].moveTo(gridList[0].width/2, 0)
        contextList[6].lineTo(gridList[0].width/2, gridList[0].height)
        contextList[6].stroke()
    }
    if (line == 'middleV') {
        console.log('v')
        contextList[1].lineWidth = 20
        contextList[1].moveTo(gridList[0].width/2, 0)
        contextList[1].lineTo(gridList[0].width/2, gridList[0].height)
        contextList[1].stroke()
        contextList[4].lineWidth = 20
        contextList[4].moveTo(gridList[0].width/2, 0)
        contextList[4].lineTo(gridList[0].width/2, gridList[0].height)
        contextList[4].stroke()
        contextList[7].lineWidth = 20
        contextList[7].moveTo(gridList[0].width/2, 0)
        contextList[7].lineTo(gridList[0].width/2, gridList[0].height)
        contextList[7].stroke()
    }
    if (line == 'right') {
        console.log('r')
        contextList[2].lineWidth = 20
        contextList[2].moveTo(gridList[0].width/2, 0)
        contextList[2].lineTo(gridList[0].width/2, gridList[0].height)
        contextList[2].stroke()
        contextList[5].lineWidth = 20
        contextList[5].moveTo(gridList[0].width/2, 0)
        contextList[5].lineTo(gridList[0].width/2, gridList[0].height)
        contextList[5].stroke()
        contextList[8].lineWidth = 20
        contextList[8].moveTo(gridList[0].width/2, 0)
        contextList[8].lineTo(gridList[0].width/2, gridList[0].height)
        contextList[8].stroke()
    }
    if (line == 'diagonalLR') {
        console.log('lr')
        contextList[0].lineWidth = 20
        contextList[0].moveTo(0, 0)
        contextList[0].lineTo(gridList[0].width, gridList[0].height)
        contextList[0].stroke()
        contextList[4].lineWidth = 20
        contextList[4].moveTo(0, 0)
        contextList[4].lineTo(gridList[0].width, gridList[0].height)
        contextList[4].stroke()
        contextList[8].lineWidth = 20
        contextList[8].moveTo(0, 0)
        contextList[8].lineTo(gridList[0].width, gridList[0].height)
        contextList[8].stroke()
    }
    if (line == 'diagonalRL') {
        console.log('rl')
        contextList[2].lineWidth = 20
        contextList[2].moveTo(gridList[0].width, 0)
        contextList[2].lineTo(0, gridList[0].height)
        contextList[2].stroke()
        contextList[4].lineWidth = 20
        contextList[4].moveTo(gridList[0].width, 0)
        contextList[4].lineTo(0, gridList[0].height)
        contextList[4].stroke()
        contextList[6].lineWidth = 20
        contextList[6].moveTo(gridList[0].width, 0)
        contextList[6].lineTo(0, gridList[0].height)
        contextList[6].stroke()
    }

    // Sets winner text
    document.getElementById('winner').style.display = 'block'
    document.getElementById('winner').innerHTML = "The winner is: " + winner
}

// Game initiator
game()