"strict mode";

(function(exports) {

  function DrawingView(drawing) {
    this.drawing = drawing;
    this.canvas = document.getElementById('draw');
    this.context = this.canvas.getContext('2d');
    this.colors = '#000';
    this.isDrawing = false;
  }

  DrawingView.prototype.setColor = function(colorId) {
    this.colors = colorId;
  }

  DrawingView.prototype.plotCoords = function(x, y) {
    if (!this.isDrawing) return; // break out if false

      this.context.strokeStyle = this.colors;
      this.context.lineJoin = 'round';
      this.context.lineCap = 'round';
      this.context.lineWidth = 10;
      this.context.beginPath();
      this.context.moveTo(this.lastX, this.lastY); //start from
      this.context.lineTo(x, y); //go to
      this.context.stroke();
      [this.lastX, this.lastY] = [x, y];
//       this.context.fillStyle = this.colors;

  };

  DrawingView.prototype.clearCanvas = function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
  };

  exports.DrawingView = DrawingView;
})(this);