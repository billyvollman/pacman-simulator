const directionOfPacMan = {
    NORTH: '<',
    EAST: '^',
    SOUTH: '>',
    WEST: 'v'
}

const createboard = () => {
    var board = [] 
        for (let x = 0; x < 5; x++) {
            board[x] = [0, 0, 0, 0, 0];
        }
    return board
}

const pacManBoard = createboard()

const board = () => {
    return pacManBoard.join('\n ')
}

const place = (row, column, input) => {
    let rowStr = row.toString()
    let colStr = column.toString()
    
    if (Number(input)) {
        return "Invalid input! \nPlease use directional cordinates for third input. \nFor example use either 'north', 'east', 'south', or 'west'. \nSo something like: \nplace(0, 0, 'west') \nplace(1, 2, 'north') \nplace(0, 4, 'south') \netc."
    } 

    let direction = input.toUpperCase()

    if (direction !== 'NORTH' && direction !== 'EAST' && direction !== 'SOUTH' && direction !== 'WEST' ) {
        return "Invalid input! \nPlease use directional cordinates for third input. \nFor example use either 'north', 'east', 'south', or 'west'. \nSo something like: \nplace(0, 0, 'west') \nplace(1, 2, 'north') \nplace(0, 4, 'south') \netc."
    }

    if (row < 0 || row > 4 || column < 0 || column > 4) {
        return 'Invalid input! \nPlease use numbers from 0 - 4 for row and column sections.'
    }

    if (rowStr.includes('.') || colStr.includes('.') ) {
       return 'Invalid input! \nDecimals are not allowed. \nPlease use whole numbers from 0 - 4 for row and column sections.'
    }
    
    pacManBoard.map(arr => {
        arr.map( spot => {
            if (spot !== 0 ) {
                let pacMan = spot
                let r = pacManBoard.indexOf(arr)
                let col = arr.indexOf(pacMan)
                pacManBoard[r][col] = 0
            }
        })
    })
    pacManBoard[row][column] = directionOfPacMan[direction]
}

const move = () => {
    let count = 0
    pacManBoard.map(arr => {
        arr.map( spot => {
            if (spot !== 0 ) {
                
                let pacMan = spot
                let r = pacManBoard.indexOf(arr)
                let col = arr.indexOf(pacMan)

                
                if (pacMan === '<' && count === 0 && col < 4) {
                    pacManBoard[r][col] = 0
                    pacManBoard[r][col + 1] = '<'
                } 
                
                
                if (pacMan === '>' && count === 0 && col > 0) {
                    pacManBoard[r][col] = 0
                    pacManBoard[r][col - 1] = '>'
                } 
                
                if (pacMan === 'v' && count === 0 && r > 0) {
                    pacManBoard[r][col] = 0
                    pacManBoard[r - 1][col] = 'v'
                } 
                
                
                if (pacMan === '^' && count === 0 && r < 4) {
                    pacManBoard[r][col] = 0
                    pacManBoard[r + 1][col] = '^'
                }
                
                count++   
            }
        })
    })
}

function report() {
    const directionOfPacManArr = Object.entries(directionOfPacMan)
    var arr = pacManBoard.map(arr => {
        var test = arr.map( spot => {
            if (spot !== 0 ) {
                let pacMan = spot
                let row = pacManBoard.indexOf(arr)
                let column = arr.indexOf(pacMan)
                var pacManDirection = directionOfPacManArr.filter(arr => arr.includes(pacMan))
                return `${row}, ${column}, ${pacManDirection[0][0]}`
            }
        })
        var test2 = test.filter( item => item !== undefined) 
        return test2[0]
    })
    var location = arr.filter( str => str !== undefined).join()
    if (location === '') {
        return
    } 
    return location
}  

const left = () => {
    let count = 0
    pacManBoard.map(arr => {
        arr.map( spot => {
            if (spot !== 0 ) {
                
                let pacMan = spot
                let r = pacManBoard.indexOf(arr)
                let col = arr.indexOf(pacMan)

                
                if (pacMan === '<' && count === 0) {
                    pacManBoard[r][col] = 'v'
                } 
                
                
                if (pacMan === 'v' && count === 0) {
                    pacManBoard[r][col] = '>'
                } 
                
                if (pacMan === '>' && count === 0) {
                    pacManBoard[r][col] = '^'
                } 
                
                if (pacMan === '^' && count === 0) {
                    pacManBoard[r][col] = '<'
                }
                
                count++
            }
        })
    })
}

const right = () => {
    let count = 0
    pacManBoard.map(arr => {
        arr.map( spot => {
            if (spot !== 0 ) {
                
                let pacMan = spot
                let r = pacManBoard.indexOf(arr)
                let col = arr.indexOf(pacMan)

                
                if (pacMan === '<' && count === 0) {
                    pacManBoard[r][col] = '^'
                } 
                
                
                if (pacMan === '^' && count === 0) {
                    pacManBoard[r][col] = '>'
                } 
                
                if (pacMan === '>' && count === 0) {
                    pacManBoard[r][col] = 'v'
                } 
                
                if (pacMan === 'v' && count === 0) {
                    pacManBoard[r][col] = '<'
                }
                
                count++
            }
        })
    })
}
