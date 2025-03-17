const gridList = [
    document.getElementById('a1'),document.getElementById('a2'),document.getElementById('a3'),
    document.getElementById('b1'),document.getElementById('b2'),document.getElementById('b3'),
    document.getElementById('c1'),document.getElementById('c2'),document.getElementById('c3')
]

const contextList = [
    gridList[0].getContext('2d'),gridList[1].getContext('2d'),gridList[2].getContext('2d'),
    gridList[3].getContext('2d'),gridList[4].getContext('2d'),gridList[5].getContext('2d'),
    gridList[6].getContext('2d'),gridList[7].getContext('2d'),gridList[8].getContext('2d')
]

const corners = [0,2,6,8]
const sides = [1,3,5,7]

const neverMove = Math.floor(Math.random() * 8)

const blank = document.getElementById('blank')
const os = document.getElementById('os')
const xs = document.getElementById('xs')

const oCont = os.getContext('2d')
const xCont = xs.getContext('2d')

oCont.lineWidth = 10
oCont.beginPath()
oCont.arc(150, 75, 60, 0, 2 * Math.PI)
oCont.stroke()

xCont.lineWidth = 10
xCont.moveTo(0,0)
xCont.lineTo(xs.width,xs.height)
xCont.stroke()
xCont.moveTo(xs.width,0)
xCont.lineTo(0,xs.height)
xCont.stroke()

const firstTurn = Math.floor(Math.random() * 9)

let moves = []

let firstTurnB = true
let computerTurn = true
let gameInterval
let previousMove

let winner = ''

function computerTurnF() {
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
            for (let i = 0; i < moves.length; i++) {
                if (moves[i] == previousMove) {
                    continue
                }
                else if (moves.length < 3) {
                    continue
                }
                else if (0 in moves && 2 in moves) {
                    if (gridList[0].toDataURL() == xs.toDataURL() && gridList[2].toDataURL() == xs.toDataURL()) {
                        contextList[1].lineWidth = 10
                        contextList[1].moveTo(0,0)
                        contextList[1].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                        contextList[1].stroke()
                        contextList[1].moveTo(gridList[firstTurn].width,0)
                        contextList[1].lineTo(0,gridList[firstTurn].height)
                        contextList[1].stroke()
                        moves.push(1)
                        computerTurn = false
                        break
                    }
                    else if (gridList[0].toDataURL() == os.toDataURL() && gridList[2].toDataURL() == os.toDataURL()) {
                        contextList[1].lineWidth = 10
                        contextList[1].moveTo(0,0)
                        contextList[1].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                        contextList[1].stroke()
                        contextList[1].moveTo(gridList[firstTurn].width,0)
                        contextList[1].lineTo(0,gridList[firstTurn].height)
                        contextList[1].stroke()
                        moves.push(1)
                        computerTurn = false
                        break
                    }
                }
                else if (3 in moves && 4 in moves) {
                    if (gridList[3].toDataURL() == xs.toDataURL() && gridList[4].toDataURL() == xs.toDataURL()) {
                        contextList[5].lineWidth = 10
                        contextList[5].moveTo(0,0)
                        contextList[5].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                        contextList[5].stroke()
                        contextList[5].moveTo(gridList[firstTurn].width,0)
                        contextList[5].lineTo(0,gridList[firstTurn].height)
                        contextList[5].stroke()
                        moves.push(5)
                        computerTurn = false
                        break
                    }
                    else if (gridList[3].toDataURL() == os.toDataURL() && gridList[4].toDataURL() == os.toDataURL()) {
                        contextList[5].lineWidth = 10
                        contextList[5].moveTo(0,0)
                        contextList[5].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                        contextList[5].stroke()
                        contextList[5].moveTo(gridList[firstTurn].width,0)
                        contextList[5].lineTo(0,gridList[firstTurn].height)
                        contextList[5].stroke()
                        moves.push(5)
                        computerTurn = false
                        break
                    }
                }
                else if (6 in moves && 7 in moves) {
                    if (gridList[6].toDataURL() == xs.toDataURL() && gridList[7].toDataURL() == xs.toDataURL()) {
                        contextList[8].lineWidth = 10
                        contextList[8].moveTo(0,0)
                        contextList[8].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                        contextList[8].stroke()
                        contextList[8].moveTo(gridList[firstTurn].width,0)
                        contextList[8].lineTo(0,gridList[firstTurn].height)
                        contextList[8].stroke()
                        moves.push(8)
                        computerTurn = false
                        break
                    }
                    else if (gridList[6].toDataURL() == os.toDataURL() && gridList[7].toDataURL() == os.toDataURL()) {
                        contextList[8].lineWidth = 10
                        contextList[8].moveTo(0,0)
                        contextList[8].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                        contextList[8].stroke()
                        contextList[8].moveTo(gridList[firstTurn].width,0)
                        contextList[8].lineTo(0,gridList[firstTurn].height)
                        contextList[8].stroke()
                        moves.push(8)
                        computerTurn = false
                        break
                    }
                }
                else if (0 in moves && 3 in moves) {
                    if (gridList[0].toDataURL() == xs.toDataURL() && gridList[3].toDataURL() == xs.toDataURL()) {
                        contextList[6].lineWidth = 10
                        contextList[6].moveTo(0,0)
                        contextList[6].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                        contextList[6].stroke()
                        contextList[6].moveTo(gridList[firstTurn].width,0)
                        contextList[6].lineTo(0,gridList[firstTurn].height)
                        contextList[6].stroke()
                        moves.push(6)
                        computerTurn = false
                        break
                    }
                    else if (gridList[0].toDataURL() == os.toDataURL() && gridList[3].toDataURL() == os.toDataURL()) {
                        contextList[6].lineWidth = 10
                        contextList[6].moveTo(0,0)
                        contextList[6].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                        contextList[6].stroke()
                        contextList[6].moveTo(gridList[firstTurn].width,0)
                        contextList[6].lineTo(0,gridList[firstTurn].height)
                        contextList[6].stroke()
                        moves.push(6)
                        computerTurn = false
                        break
                    }
                }
                else if (1 in moves && 4 in moves) {
                    if (gridList[1].toDataURL() == xs.toDataURL() && gridList[4].toDataURL() == xs.toDataURL()) {
                        contextList[7].lineWidth = 10
                        contextList[7].moveTo(0,0)
                        contextList[7].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                        contextList[7].stroke()
                        contextList[7].moveTo(gridList[firstTurn].width,0)
                        contextList[7].lineTo(0,gridList[firstTurn].height)
                        contextList[7].stroke()
                        moves.push(7)
                        computerTurn = false
                        break
                    }
                    else if (gridList[1].toDataURL() == os.toDataURL() && gridList[4].toDataURL() == os.toDataURL()) {
                        contextList[7].lineWidth = 10
                        contextList[7].moveTo(0,0)
                        contextList[7].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                        contextList[7].stroke()
                        contextList[7].moveTo(gridList[firstTurn].width,0)
                        contextList[7].lineTo(0,gridList[firstTurn].height)
                        contextList[7].stroke()
                        moves.push(7)
                        computerTurn = false
                        break
                    }
                }
                else if (2 in moves && 5 in moves) {
                    if (gridList[2].toDataURL() == xs.toDataURL() && gridList[5].toDataURL() == xs.toDataURL()) {
                        contextList[8].lineWidth = 10
                        contextList[8].moveTo(0,0)
                        contextList[8].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                        contextList[8].stroke()
                        contextList[8].moveTo(gridList[firstTurn].width,0)
                        contextList[8].lineTo(0,gridList[firstTurn].height)
                        contextList[8].stroke()
                        moves.push(8)
                        computerTurn = false
                        break
                    }
                    else if (gridList[2].toDataURL() == os.toDataURL() && gridList[5].toDataURL() == os.toDataURL()) {
                        contextList[8].lineWidth = 10
                        contextList[8].moveTo(0,0)
                        contextList[8].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                        contextList[8].stroke()
                        contextList[8].moveTo(gridList[firstTurn].width,0)
                        contextList[8].lineTo(0,gridList[firstTurn].height)
                        contextList[8].stroke()
                        moves.push(8)
                        computerTurn = false
                        break
                    }
                }
                else if (4 in moves && 8 in moves) {
                    if (gridList[8].toDataURL() == xs.toDataURL() && gridList[4].toDataURL() == xs.toDataURL()) {
                        contextList[0].lineWidth = 10
                        contextList[0].moveTo(0,0)
                        contextList[0].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                        contextList[0].stroke()
                        contextList[0].moveTo(gridList[firstTurn].width,0)
                        contextList[0].lineTo(0,gridList[firstTurn].height)
                        contextList[0].stroke()
                        moves.push(0)
                        computerTurn = false
                        break
                    }
                    else if (gridList[8].toDataURL() == os.toDataURL() && gridList[4].toDataURL() == os.toDataURL()) {
                        contextList[0].lineWidth = 10
                        contextList[0].moveTo(0,0)
                        contextList[0].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                        contextList[0].stroke()
                        contextList[0].moveTo(gridList[firstTurn].width,0)
                        contextList[0].lineTo(0,gridList[firstTurn].height)
                        contextList[0].stroke()
                        moves.push(0)
                        computerTurn = false
                        break
                    }
                }
                else if (2 in moves && 4 in moves) {
                    if (gridList[2].toDataURL() == xs.toDataURL() && gridList[4].toDataURL() == xs.toDataURL()) {
                        contextList[6].lineWidth = 10
                        contextList[6].moveTo(0,0)
                        contextList[6].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                        contextList[6].stroke()
                        contextList[6].moveTo(gridList[firstTurn].width,0)
                        contextList[6].lineTo(0,gridList[firstTurn].height)
                        contextList[6].stroke()
                        moves.push(6)
                        computerTurn = false
                        break
                    }
                    else if (gridList[2].toDataURL() == os.toDataURL() && gridList[4].toDataURL() == os.toDataURL()) {
                        contextList[6].lineWidth = 10
                        contextList[6].moveTo(0,0)
                        contextList[6].lineTo(gridList[firstTurn].width,gridList[firstTurn].height)
                        contextList[6].stroke()
                        contextList[6].moveTo(gridList[firstTurn].width,0)
                        contextList[6].lineTo(0,gridList[firstTurn].height)
                        contextList[6].stroke()
                        moves.push(6)
                        computerTurn = false
                        break
                    }
                }
                else {
                    continue
                }
            }
            if (computerTurn) {
                for (let a = 0; a < gridList.length; a++) {
                    if (gridList[a].toDataURL() == blank.toDataURL()) {
                        if (previousMove == 4 && a in corners && a != Math.floor(Math.random() * 8) && a != neverMove && a != Math.floor(Math.random() * 8)) {
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
                        else if (a != Math.floor(Math.random() * 8) && a != neverMove && previousMove != 4 && a != Math.floor(Math.random() * 8)) {
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
                        else if (moves.length > 3 && a != 1 && a != 2 && a != neverMove && a != Math.floor(Math.random() * 8) && a != Math.floor(Math.random() * 8)) {
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
                        else {
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
    if (!computerTurn) {
        for (let a = 0; a < gridList.length; a++) {
            if (gridList[a].toDataURL() == blank.toDataURL()) {
                gridList[a].addEventListener('click', function() {
                    contextList[a].lineWidth = 10
                    contextList[a].beginPath()
                    contextList[a].arc(150, 75, 60, 0, 2 * Math.PI)
                    contextList[a].stroke()
                    moves.push(a)
                    computerTurn = true
                    previousMove = a
                })
            }
        }
    }
}

function game() {
    gameInterval = setInterval(() => {
        if (winner == '') {
            computerTurnF()
            playerTurn()
            checkWin()
        }
    }, 250)
}

function resetGame() {
    let i = 0
    for (i < gridList.length; i++;) {
        contextList[i].clearRect(0, 0, gridList[i].width, gridList[i].height)
    }
}

function checkWin() {
    for (let i = 0; i < moves.length; i++) {
        if (moves[i] == previousMove) {
            continue
        }
        else if (moves.length < 3) {
            continue
        }
        else if (0 in moves && 1 in moves && 2 in moves) {
            if (gridList[1].toDataURL() == xs.toDataURL() && gridList[2].toDataURL() == xs.toDataURL() && gridList[0].toDataURL() == xs.toDataURL()) {
                winner = 'Computer'
                break
            }
            else if (gridList[1].toDataURL() == os.toDataURL() && gridList[2].toDataURL() == os.toDataURL() && gridList[0].toDataURL() == os.toDataURL()) {
                winner = 'Player'
                break
            }
        }
        else if (3 in moves && 4 in moves && 5 in moves) {
            if (gridList[3].toDataURL() == xs.toDataURL() && gridList[4].toDataURL() == xs.toDataURL() && gridList[5].toDataURL() == xs.toDataURL()) {
                winner = 'Computer'
                break
            }
            else if (gridList[3].toDataURL() == os.toDataURL() && gridList[4].toDataURL() == os.toDataURL() && gridList[5].toDataURL() == os.toDataURL()) {
                winner = 'Player'
                break
            }
        }
        else if (6 in moves && 7 in moves && 8 in moves) {
            if (gridList[6].toDataURL() == xs.toDataURL() && gridList[7].toDataURL() == xs.toDataURL() && gridList[8].toDataURL() == xs.toDataURL()) {
                winner = 'Computer'
                break
            }
            else if (gridList[6].toDataURL() == os.toDataURL() && gridList[7].toDataURL() == os.toDataURL() && gridList[8].toDataURL() == os.toDataURL()) {
                winner = 'Player'
                break
            }
        }
        else if (0 in moves && 3 in moves && 6 in moves) {
            if (gridList[0].toDataURL() == xs.toDataURL() && gridList[3].toDataURL() == xs.toDataURL() && gridList[6].toDataURL() == xs.toDataURL()) {
                winner = 'Computer'
                break
            }
            else if (gridList[0].toDataURL() == os.toDataURL() && gridList[3].toDataURL() == os.toDataURL() && gridList[6].toDataURL() == os.toDataURL()) {
                winner = 'Player'
                break
            }
        }
        else if (1 in moves && 4 in moves && 7 in moves) {
            if (gridList[1].toDataURL() == xs.toDataURL() && gridList[4].toDataURL() == xs.toDataURL() && gridList[7].toDataURL() == xs.toDataURL()) {
                winner = 'Computer'
                break
            }
            else if (gridList[1].toDataURL() == os.toDataURL() && gridList[4].toDataURL() == os.toDataURL() && gridList[7].toDataURL() == os.toDataURL()) {
                winner = 'Player'
                break
            }
        }
        else if (2 in moves && 5 in moves && 8 in moves) {
            if (gridList[2].toDataURL() == xs.toDataURL() && gridList[5].toDataURL() == xs.toDataURL() && gridList[8].toDataURL() == xs.toDataURL()) {
                winner = 'Computer'
                break
            }
            else if (gridList[2].toDataURL() == os.toDataURL() && gridList[5].toDataURL() == os.toDataURL() && gridList[8].toDataURL() == os.toDataURL()) {
                winner = 'Player'
                break
            }
        }
        else if (0 in moves && 4 in moves && 8 in moves) {
            if (gridList[8].toDataURL() == xs.toDataURL() && gridList[4].toDataURL() == xs.toDataURL() && gridList[0].toDataURL() == xs.toDataURL()) {
                winner = 'Computer'
                break
            }
            else if (gridList[8].toDataURL() == os.toDataURL() && gridList[4].toDataURL() == os.toDataURL() && gridList[0].toDataURL() == os.toDataURL()) {
                winner = 'Player'
                break
            }
        }
        else if (2 in moves && 4 in moves && 6 in moves) {
            if (gridList[2].toDataURL() == xs.toDataURL() && gridList[4].toDataURL() == xs.toDataURL() && gridList[6].toDataURL() == xs.toDataURL()) {
                winner = 'Computer'
                break
            }
            else if (gridList[2].toDataURL() == os.toDataURL() && gridList[4].toDataURL() == os.toDataURL() && gridList[6].toDataURL() == os.toDataURL()) {
                winner = 'Player'
                break
            }
        }
        else {
            continue
        }
    }
}

game()