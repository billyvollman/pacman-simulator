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

#### How I approached this challenge
I needed to figure out which language I wanted to do the challenge in and I decided to do it in Javascript.  After I made that decision I went about creating my folder for repo and the necessary files. I also installed the necessary node modules for testing.

Then I spent some time thinking about what the Pacman board looked like especially since origin (0,0) can be considered the SOUTH WEST most corner.  I decided to just draw out the the board on paper and use some of the example input and output examples to better understand this setup.

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
