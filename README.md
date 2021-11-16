# Memory Card
This project is part of [The Odin Project's](www.theodinproject.com) Javascript React JS curriculum. In this I create a Street Fighter Character based memory game using react js.

## How it works

1. User will click on a character image.
2. A point is awarded when the user clicks on an image that hasn't been previously clicked.
3. After each click the images are re-rendered in random positions.
4. If the user clicked on an image that has been previously clicked, current score will be reset to 0 and best score will hold the value of current score prior to reset if current score is greater than best score.

## Components
1. Modal: Render modal with instructions
2. ScoreBoard: Render score.
3. Images: Render character images and handle event listener when a character is clicked.

[Live preview](https://gt0221.github.io/memory_card/)