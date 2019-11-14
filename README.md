# Pacman Simulator

#### About this web app:

- The application is a code challenge for simulation of Pacman moving on a grid, of dimensions 5 units x 5 units.

#### Guidlines for the challenge are:
- There are no other obstructions on the grid.
- Pacman is free to roam around the surface of the grid, but must be prevented from moving off the grid. Any movement that would result in Pacman moving off the grid must be prevented, however further valid movement commands must still be allowed.
- Goal of the challenge is to create an application that can read in commands of the following form:

```
PLACE X,Y,F

MOVE

LEFT

RIGHT

REPORT
```

#### Further details about the challenge:
- **PLACE** command will put the Pacman on the grid in positon **X,Y** and facing **NORTH,SOUTH, EAST or WEST**.
- The **origin (0,0)** can be considered the **SOUTH WEST** most corner.
- The first valid command to Pacman is a PLACE command, after that, any sequence of commands may be issued, in any order, including another PLACE command. The application should discard all commands in the sequence until a valid PLACE command has been executed.
- **MOVE** will move Pacman one unit forward in the direction it is currently facing.
- **LEFT** and **RIGHT** will rotate Pacman 90 degrees in the specified direction without changing the position of Pacman.
- **REPORT** will announce the **X,Y and F** of Pacman. This can be in any form, but standard output is sufficient.
- Pacman that is not on the grid can choose the ignore the MOVE, LEFT, RIGHT and REPORT commands.
- Input can be from a file, or from standard input, as the developer chooses.
- The program produce can be in any language
- Program is not required to provide any graphical output showing the movement of Pacman.
- Proving code works via unit testing is highly encouraged
- Pacman must not move off the grid during movement. This also includes the initial placement of Pacman.
- Any move that would cause Pacman to fall must be ignored.

## How I approached this challenge
I needed to figure out which language I wanted to do the challenge in and I decided to do it in Javascript.  After I made that decision I went about creating my folder for repo and the necessary files. I also installed the necessary node modules for testing.

Then I spent some time thinking about what the Pacman board looked like especially since origin (0,0) can be considered the SOUTH WEST most corner.  I decided to just draw out the the board on paper and use some of the input and output examples to better understand this setup.

**For example I knew this command sequence**
```
PLACE 0,0,NORTH

MOVE

REPORT

Output: 0,1,NORTH
```

**would give me this Pacman board.  NOTE: Pacman is < symbol and 0 is empty space**
```

      east

s   0,<,0,0,0  n
o   0,0,0,0,0  o
u   0,0,0,0,0  r
t   0,0,0,0,0  t
h   0,0,0,0,0  h

      west
```

After I knew how the board looked and which way Pacman moved based on a MOVE, LEFT, and RIGHT command, I then went about deciding what user interface I would let users engage with to place Pacman on a board and move Pacman around.  Since Pacman is a classic game and I'm using Javascript I went with the classic **console.log()** on the web browser.

From there I start working on my code logic and data structures.  Because I'm a visual learner I decided to create a function that would show the Pacman board when it was called.  That function is **board()** and please see examples below of what **board()** does.

After this, I focused on how to tell which direction Pacman was facing and I created the below object to be a look-up key.

Then I started working on the other functions and tried doing testing along the way:
- report()
- place()
- move()
- left()
- right()

**Look-up key**
```
const directionOfPacMan = {
    NORTH: '<',
    EAST: '^',
    SOUTH: '>',
    WEST: 'v'
}
```

## How to use Pacman simulator

##plac() command
**place()** command will put the Pacman on the grid in positon **X,Y** and facing **NORTH,SOUTH, EAST or WEST**.
Please ensure you enter in a X & Y position as a number and facing option as either north, south, east, or west as a string.  If these three are not included the console will complain with an error message.

**Examples of how to place Pacman on the board**

```
place(0, 0, 'west') 
place(1, 2, 'north') 
place(0, 4, 'south')
```

##move() command
**move()** command will move Pacman one space if it is a valid move.  Pacman will not move if he is located on the edge of the board

**Example of how to move Pacman on the board**
```
    place(0,0,'north')
    move()

Should result in the following if report() function is called

    0, 1, NORTH

And the board will apper like this if board() function is called

    0,<,0,0,0
    0,0,0,0,0
    0,0,0,0,0
    0,0,0,0,0
    0,0,0,0,0

```
## left(), right(), & report() commands
**left()** command will rotate Pacman 90 degrees in the specified direction without changing the position of Pacman.

**right()** command will rotate Pacman 90 degrees in the specified direction without changing the position of Pacman.

**report()** will announce the X,Y and F of Pacman.

**Example of how left(), right(), and report() work**

```
Let's assume Pacman is already on the board in a valid space.
For example this was the oiriginal place call.

    place(0,0,'north')

If you type the following:

    left()
    report()

The output will be:

    0, 0, WEST

Then if you type:

    right()
    report()

The output will be:

    0, 0, NORTH

```

## board() command
**board()** command will show the Pacman board.

**Example of how board() works**

```
If Pacman was on this place:

    place(0,0,'north')

And board() was used the output should be:

    <,0,0,0,0
    0,0,0,0,0
    0,0,0,0,0
    0,0,0,0,0
    0,0,0,0,0

If Pacman was on this place:

    place(2,2,'north')

And board() was used the output should be:

    0,0,0,0,0
    0,0,0,0,0
    0,0,<,0,0
    0,0,0,0,0
    0,0,0,0,0

```

## Technologies used
- Javascript
- Jest

**For testing and running Jest**
These are the commands to install and run jest.  Done at the folder level.
- npm init -y
- npm i jest --save-dev

In **package.json** change the script test wording of scripts section
from
```
“scripts”: {
 “test”: “echo \“Error: no test specified\” && exit 1"
},
```

To
```
"test": "jest --watchAll"
```

In terminal type **npm test**
