"strict mode";

(function(exports) {

function DrawingController(drawing) {
  this.drawing = drawing;
  this.drawingView = new DrawingView(drawing);
}

DrawingController.prototype.addCoordinatesToDrawing = function(e) {
  this.drawing.addCoordinates(e.clientX, e.clientY);
  this.addToCanvas(e.clientX, e.clientY);
};

DrawingController.prototype.listenClick = function() {
  document.addEventListener('click', this.addCoordinatesToDrawing.bind(this));
};

DrawingController.prototype.listenForMouseDown = function() {
  var controller = this;
  document.addEventListener('mousedown', function(e) {
    controller.addCoordinatesToDrawing(e);
    controller.drawingView.isDrawing = true;
    [x, y] = [e.offsetX, e.offsetY];
  });
};

DrawingController.prototype.listenForMouseUp = function () {
  var controller = this;
  document.addEventListener('mouseup', function(e) {
    controller.addCoordinatesToDrawing(e);
    controller.drawingView.isDrawing = false;
  });
};

DrawingController.prototype.listenForMouseMove= function () {
  var controller = this;
  document.addEventListener('mousemove', function(e) {
    controller.addCoordinatesToDrawing(e);
    controller.drawingView.plotCoords();
  });
};

DrawingController.prototype.addToCanvas = function(x, y) {
  this.drawingView.plotCoords(x, y);
};

  exports.DrawingController = DrawingController;
})(this);
