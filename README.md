# Canvas

An online drawing tool built as a 4 person team project over 3.5 days.

## Technologies used
- Javascript, CSS, HTML
- Tested with Jasmine

## How to use
- Clone the repo
- Open index.html in Chrome to try it out
- Open SpecRunner.html in Chrome to run the tests
- View the demo here: ![Canvas Demo](https://github.com/FloraHarvey/canvas/img/canvas_demo.mp4)

[canvas_screenshot](http://i65.tinypic.com/21ke0qp.png)

## User Stories

```
As a User
So I can have something to draw on
I want to see a blank canvas
```
```
As a User
So I can have the best experience
I want to pick my own drawing tool
```
```
As a User
So I can be creative
I want to be able to use my mouse to draw
```
```
As a User
So my drawing can be special
I want to be able to choose colours from a palette
```
```
As a User
So I can fix my mistakes
I want to be able to erase/undo elements from my drawing
```
```
As a User
So I can show off my masterpiece
I want to be able to share via social media
```
```
As a User
So I can show off my masterpiece
I want to be able to save my drawing
```
```
As a User
So I can make many masterpieces
I want to clear the canvas
```

## Approach
- After creating user stories, we discussed the architecture of the programme. We decided on an MVC structure, where the model should hold save all details about the drawing, the controller would listen for mouse events and the view would display the drawing on the canvas.
- We set a goal for our MVP: for the user to be able to draw a dot on the the screen, where the X and Y coordinates of the dot would be saved to the model. We achieved this early on day 2.
- We used the HTML5 <canvas> element to contain the drawing, and a Javascript Context object to create the drawing, with event listeners that listen to the users mouse.
- After reaching MVP, we worked on allowing the user to draw lines, by tracking mouse movement while clicking and dragging, as well as providing different brush sizes and colours to choose from.
- When it came to the undo feature, our model proved very useful - we were able to undo by popping off the last coordinates saved in the Drawing model, and redrawing everything up to there on the page. By using intervals to continuously pop off the last coordinates, the user can click and hold the undo button to undo as much or as little of their drawing as they like.

## Struggles
- Testing the programme was tricky. We relied on unit tests for the model, and for the event listeners used by the controller, however, we struggled to test the view as this would have involved checking that brush strokes were displayed at the correct position on the page. We decided that our unit tests would be sufficient
- Coming up with the initial structure for the programme was also tough, as we weren't sure which part should be responsible for drawing/tracking mouse etc, or whether a model would be necessary. We therefore diagrammed extensively in order to understand and design the programme.
