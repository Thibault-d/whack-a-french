# Whack-a-French

In this game you will have to put yourself in the shoes of a French person: me!
Some MOBS will appear on the screen, you have to quickly guess if you should SMASH IT or not.

If you SMASHED something French people don't like: you gain points! 
If you SMASH something we like in France, you lose points!

How to win: Reach 10.000 points before the end of the Chrono
How to lose: If your score hits - 1.000, or if time's up and you don't have 10.000 points

User will user his mouse to point at objects and decide to SMASH or not by clicking on them.




* * *

## MVP
### Technical stack

* HTML5
* Vanilla JavaScript
* CSS


### Game states
* __Start Screen__
  * Title
  * Play button
* __Game Screen__
  * Grid
* __Game Over Screen__
  * Play again button
  * Go to start screen button

### Game
* Create game grid
* Create Hammer
* Create Chrono
* Create random MOBS appearing
* When MOB is Smashed: gain or lose points

* * *

## BACK LOG
### Score
* Run counter and store score on game over
### High score
* Create High Score Screen
* Show latest score on Start Screen
* Add high score button to Start Screen
### Music
* Add background music to game
* Add music on and off button to Start screen.
### Levels
* Check score and increase pace of objects

* * *
## Data structure
__main.js__
````
Class Main with following methods:
- Score
- Timer
- Status
- Update
- Level

- Start
- Pause
- Reset

- Smash MOB
- Show MOBS randomly on the grid

````
__Objects.js__
````
Class MOB  with following methods:
- Appear
- Disappear

Each MOB must have the following properties:
- Score value (positive or negative)
- Image


````
## Links
Git Repo: https://github.com/Thibault-d/whack-a-french
Trello : https://trello.com/b/pCGkviAX/whack-a-french
Slides: https://docs.google.com/presentation/d/1irzjurzm-yNg6PpMWxrfCURNSr0QPlEt5rMlhRZXt7c/edit#slide=id.p


