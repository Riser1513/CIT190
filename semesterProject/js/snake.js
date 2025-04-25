// Declaring all variables
const board = document.getElementById('game_board')
const instructionTxt = document.getElementById('instructionTxt')
const gridSize = 20

let snake = [{x:10, y: 10}]
let food = generateFood()
let direction = 'right'
let gameInterval
let gameSpeedDelay = 250
let gameStarted = false

function startGame() {
    // Starting the game
    gameStarted = true
    console.log('start')
    instructionTxt.style.display = 'none';
    gameInterval = setInterval(() => {
        move()
        checkCollision()
        draw()
    }, gameSpeedDelay)
}

function draw() {
    // Drawing snake & food
    board.innerHTML = ''
    drawSnake()
    drawFood()
}

function drawSnake() {
    // Drawing snake
    snake.forEach((segment) => {
        const snakeElement = createGameElement('div','snake')
        if (snake[0] == segment) {
            snakeElement.style.backgroundColor = 'lime'
        }
        snakeElement.style.width = '100%'
        snakeElement.style.height = '100%'
        setPosition(snakeElement, segment)
        board.appendChild(snakeElement)
    })
}

function createGameElement(tag, className) {
    // Making game elements, such as snake parts or the food
    const element = document.createElement(tag)
    element.className = className
    return element
}

function setPosition(element, position) {
    // Setting positions of elements
    element.style.gridColumn = position.x
    element.style.gridRow = position.y
}

function drawFood() {
    // Drawing food
    if (gameStarted) {
        const foodElement = createGameElement('div', 'food')
        setPosition(foodElement, food)
        board.appendChild(foodElement)
    }
}

function generateFood() {
    // Making the food
    let x = Math.floor(Math.random() * gridSize) + 1
    let y = Math.floor(Math.random() * gridSize) + 1
    snake.forEach((segment) => {
        while (segment.x == x) {
            x = Math.floor(Math.random() * gridSize) + 1
        }
        while (segment.y == y) {
            y = Math.floor(Math.random() * gridSize) + 1
        }
    })
    snake.forEach((segment) => {
        while (segment.x == x) {
            x = Math.floor(Math.random() * gridSize) + 1
        }
        while (segment.y == y) {
            y = Math.floor(Math.random() * gridSize) + 1
        }
    })
    return {x, y}
}

function move() {
    // Moving the snake
    const head = {...snake[0]}

    switch (direction) {
        case 'right':
            head.x++
            break
        case 'left':
            head.x--
            break
        case 'up':
            head.y--
            break
        case 'down':
            head.y++
            break
    }

    snake.unshift(head)

    if (head.x == food.x && head.y == food.y) {
        // Eating the food
        food = generateFood()
        increaseSpeed()
        clearInterval(gameInterval)
        gameInterval = setInterval(() => {
            move()
            checkCollision()
            draw()
        }, gameSpeedDelay)
    }
    else {
        snake.pop()
    }
}

function handleKeyPress(event) {
    // Making key presses do stuff
    if ((!gameStarted && event.code === 'Space') ||
        (!gameStarted && event.key  === ' '))
    {
        startGame()
    } else {
        switch (event.key) {
            case 'ArrowUp':
                if (direction == 'down') {
                    break;
                }
                else {
                    direction = 'up'
                    break
                }
            case 'ArrowDown':
                if (direction == 'up') {
                    break;
                }
                else {
                    direction = 'down'
                    break
                }
            case 'ArrowLeft':
                if (direction == 'right') {
                    break;
                }
                else {
                    direction = 'left'
                    break
                }
            case 'ArrowRight':
                if (direction == 'left') {
                    break;
                }
                else {
                    direction = 'right'
                    break
                }
            
        }
    }
}

function increaseSpeed() {
    // Gradually increses the speed of the game
    if (gameSpeedDelay > 150) {
        gameSpeedDelay -= 5
    } else if (gameSpeedDelay > 100) {
        gameSpeedDelay -= 3
    } else if (gameSpeedDelay > 50) {
        gameSpeedDelay -= 2
    } else if (gameSpeedDelay > 25) {
        gameSpeedDelay -= 1
    }
}

function checkCollision() {
    // Checking collision for the snake
    const head = snake[0]
    if (head.x < 1 || head.x > gridSize || head.y < 1 || head.y > gridSize) {
        resetGame()
    }

    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            resetGame()
        }
    }
}

function resetGame() {
    // Resets the game
    stopGame()
    snake = [{x: 10, y: 10}]
    direction = 'right'
    gameSpeedDelay = 200
    food = generateFood()
}

function stopGame() {
    // Stops the game
    clearInterval(gameInterval)
    gameStarted = false
    instructionTxt.style.display = 'block'
}

// Checking for key presses
document.addEventListener('keydown', handleKeyPress)