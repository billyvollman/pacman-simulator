const { createboard, board, place, move, report, left, right } = require('./pacman-test.js')

describe('Testing creation of board', () => {
    
    test('creating blank board', () => {
        expect(createboard()).toEqual(  [
                                    [0, 0, 0, 0, 0],
                                    [0, 0, 0, 0, 0],
                                    [0, 0, 0, 0, 0],
                                    [0, 0, 0, 0, 0],
                                    [0, 0, 0, 0, 0]
                                    ])
   })
   
   test('board returns in nice format', () => {
       expect(board()).toEqual(`0,0,0,0,0\n 0,0,0,0,0\n 0,0,0,0,0\n 0,0,0,0,0\n 0,0,0,0,0`)
    })
    
    describe('discard move command until valid place command is executed', () => {
        move()
        test('report returns nothing', () => {
            expect(report()).toEqual()
        })
    })
    
    describe('discard left command until valid place command is executed', () => {
        left()
        test('report returns nothing', () => {
            expect(report()).toEqual()
        })
    })
    
    describe('discard right command until valid place command is executed', () => {
        right()
        test('report returns nothing', () => {
            expect(report()).toEqual()
        })
    })
    
    describe('invalid place command still means other commands are discarded', () => {
        place(0, 5, 'NORTH')
        describe('discard move command until valid place command is executed', () => {
            move()
            test('report returns nothing', () => {
                expect(report()).toEqual()
            })
        })
        
        describe('discard right command until valid place command is executed', () => {
            right()
            test('report returns nothing', () => {
                expect(report()).toEqual()
            })
        })
    })
})

describe('Test placing pacman on board', () => {

    describe("can't place pacman off the grid", () => {
        place(0, 5, 'NORTH')
        test('report returns nothing', () => {
            expect(report()).toEqual()
        })
    })

    describe("still can't place pacman off the grid", () => {
        place(-1, 5, 'NORTH')
        test('report returns nothing', () => {
            expect(report()).toEqual()
        })
    })

    describe('place pacman on board at 0, 0, facing north', () => {
        test('place pacman north', () => {
            expect(place(0, 0, 'NORTH')).toEqual()
        })
        
        test('report returns 0, 0, North', () => {
            expect(report()).toEqual("0, 0, NORTH")
        })
    })
    
    describe('place pacman on board at 0, 1, facing north', () => {
        test('place pacman north', () => {
            expect(place(0, 1, 'NORTH')).toEqual()
        })
        
        test('report returns 0, 1, North', () => {
            expect(report()).toEqual("0, 1, NORTH")
        })
    })

    describe('place pacman on board at 0, 1, facing south', () => {
        test('place pacman south', () => {
            expect(place(0, 1, 'SOUTH')).toEqual()
        })
        
        test('report returns 0, 1, South', () => {
            expect(report()).toEqual("0, 1, SOUTH")
        })
    })
    
    test('board should equal previous board layout', () => {
        expect(board()).toEqual(`0,>,0,0,0\n 0,0,0,0,0\n 0,0,0,0,0\n 0,0,0,0,0\n 0,0,0,0,0`)
    })

    describe("can't place pacman off the grid again", () => {
        test('try place pacman off grid', () => {
            expect(place(5, 0, 'NORTH')).toEqual('Invalid input! \nPlease use numbers from 0 - 4 for row and column sections.')
        })
        
        test('report returns 0, 1, South', () => {
            expect(report()).toEqual("0, 1, SOUTH")
        })
    })

    describe("can't place pacman off the grid one more time", () => {
        test('try place pacman off grid', () => {
            expect(place(-1, 10, 'NORTH')).toEqual('Invalid input! \nPlease use numbers from 0 - 4 for row and column sections.')
        })
        
        test('report returns 0, 1, South', () => {
            expect(report()).toEqual("0, 1, SOUTH")
        })
    })
    
    test('report should equal previous report', () => {
        expect(report()).toEqual("0, 1, SOUTH")
    })

})

describe('Test moving pacman forward aka North and report', () => {
  test('place pacman on board at 0, 0, facing north', () => {
    expect(place(0, 0, 'NORTH')).toEqual()
  })

  test('move pacman forward one space', () => {
    expect(move()).toEqual()
  })

  test('report output should be 0, 1, NORTH', () => {
    expect(report()).toEqual(`0, 1, NORTH`)
  })

  test('move pacman forward one space', () => {
    expect(move()).toEqual()
  })

  test('report output should be 0, 2, NORTH', () => {
    expect(report()).toEqual(`0, 2, NORTH`)
  })

  test('move pacman forward one space', () => {
    expect(move()).toEqual()
  })

  test('report output should be 0, 3, NORTH', () => {
    expect(report()).toEqual(`0, 3, NORTH`)
  })

  test('move pacman forward one space', () => {
    expect(move()).toEqual()
  })

  test('report output should be 0, 4, NORTH', () => {
    expect(report()).toEqual(`0, 4, NORTH`)
  })

  test('move pacman forward one space at edge and pacman should not move', () => {
    expect(move()).toEqual()
  })

  test('report output should be 0, 4, NORTH', () => {
    expect(report()).toEqual(`0, 4, NORTH`)
  })
})

describe('Testing moving pacman backwards aka South and report', () => {
    test('place pacman on board at 0, 2, facing south', () => {
        expect(place(0, 2, 'SOUTH')).toEqual()
    })

    test('report output should be 0, 2, South', () => {
        expect(report()).toEqual(`0, 2, SOUTH`)
    })

    test('move pacman back one space', () => {
        expect(move()).toEqual()
    })

    test('report output should be 0, 1, South', () => {
        expect(report()).toEqual(`0, 1, SOUTH`)
    })

    test('move pacman back one space', () => {
        expect(move()).toEqual()
    })

    test('report output should be 0, 0, South', () => {
        expect(report()).toEqual(`0, 0, SOUTH`)
    })

    test('move pacman back one space at edge and pacman should not move', () => {
        expect(move()).toEqual()
    })

    test('report output should be 0, 0, South', () => {
        expect(report()).toEqual(`0, 0, SOUTH`)
    })
})

describe('Testing moving pacman up aka West and report', () => {
    test('place pacman on board at 1, 0, facing West', () => {
        expect(place(1, 0, 'WEST')).toEqual()
    })

    test('report output should be 1, 0, West', () => {
        expect(report()).toEqual(`1, 0, WEST`)
    })

    test('move pacman up one space', () => {
        expect(move()).toEqual()
    })

    test('report output should be 0, 0, West', () => {
        expect(report()).toEqual(`0, 0, WEST`)
    })

    test('move pacman up one space at edge and pacman should not move', () => {
        expect(move()).toEqual()
    })

    test('report output should be 0, 0, West', () => {
        expect(report()).toEqual(`0, 0, WEST`)
    })
})

describe('Testing moving pacman down aka East and report', () => {
    test('place pacman on board at 3, 0, facing East', () => {
        expect(place(3, 0, 'EAST')).toEqual()
    })

    test('report output should be 3, 0, East', () => {
        expect(report()).toEqual(`3, 0, EAST`)
    })

    test('move pacman up one space', () => {
        expect(move()).toEqual()
    })

    test('report output should be 4, 0, East', () => {
        expect(report()).toEqual(`4, 0, EAST`)
    })

    test('move pacman down one space at edge and pacman should not move', () => {
        expect(move()).toEqual()
    })

    test('report output should be 4, 0, East', () => {
        expect(report()).toEqual(`4, 0, EAST`)
    })
})

describe('Testing rotating pacman and report', () => {
    test('place pacman on board at 0, 0, facing north', () => {
        expect(place(0, 0, 'NORTH')).toEqual()
    })

    test('report output should be 0, 0, NORTH', () => {
        expect(report()).toEqual(`0, 0, NORTH`)
    })

    test('rotate pacman right', () => {
        expect(right()).toEqual()
    })

    test('report output should be 0, 0, EAST', () => {
        expect(report()).toEqual(`0, 0, EAST`)
    })

    test('rotate pacman right again', () => {
        expect(right()).toEqual()
    })

    test('report output should be 0, 0, SOUTH', () => {
        expect(report()).toEqual(`0, 0, SOUTH`)
    })

    test('rotate pacman left', () => {
        expect(left()).toEqual()
    })

    test('report output should be 0, 0, EAST', () => {
        expect(report()).toEqual(`0, 0, EAST`)
    })

    test('rotate pacman left again', () => {
        expect(left()).toEqual()
    })

    test('report output should be 0, 0, NORTH', () => {
        expect(report()).toEqual(`0, 0, NORTH`)
    })

})

describe('Testing for input errors for place()', () => {
    test('place only accepts North, South, East, or West', () => {
        expect(place(1,1, 'nort' )).toEqual("Invalid input! \nPlease use directional cordinates for third input. \nFor example use either 'north', 'east', 'south', or 'west'. \nSo something like: \nplace(0, 0, 'west') \nplace(1, 2, 'north') \nplace(0, 4, 'south') \netc.")
    })

    test('place only accepts North, South, East, or West', () => {
        expect(place(1,1, 'test' )).toEqual("Invalid input! \nPlease use directional cordinates for third input. \nFor example use either 'north', 'east', 'south', or 'west'. \nSo something like: \nplace(0, 0, 'west') \nplace(1, 2, 'north') \nplace(0, 4, 'south') \netc.")
    })

    test('place only accepts North, South, East, or West', () => {
        expect(place(1,1, -1 )).toEqual("Invalid input! \nPlease use directional cordinates for third input. \nFor example use either 'north', 'east', 'south', or 'west'. \nSo something like: \nplace(0, 0, 'west') \nplace(1, 2, 'north') \nplace(0, 4, 'south') \netc.")
    })

    test('row number can not be less than 0', () => {
        expect(place(-1,1,'north' )).toEqual('Invalid input! \nPlease use numbers from 0 - 4 for row and column sections.')
    })

    test('row number can not be greater than 4', () => {
        expect(place(5,1,'north' )).toEqual('Invalid input! \nPlease use numbers from 0 - 4 for row and column sections.')
    })

    test('column number can not be less than 0', () => {
        expect(place(3,-1,'north' )).toEqual('Invalid input! \nPlease use numbers from 0 - 4 for row and column sections.')
    })

    test('column number can not be greater than 4', () => {
        expect(place(0,5,'north' )).toEqual('Invalid input! \nPlease use numbers from 0 - 4 for row and column sections.')
    })

    test('column must be whole numbers', () => {
        expect(place(0,1.9,'north' )).toEqual('Invalid input! \nDecimals are not allowed. \nPlease use whole numbers from 0 - 4 for row and column sections.')
    })

    test('row must be whole numbers', () => {
        expect(place(1.9,0,'north' )).toEqual('Invalid input! \nDecimals are not allowed. \nPlease use whole numbers from 0 - 4 for row and column sections.')
    })
})