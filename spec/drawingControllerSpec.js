"strict mode";

describe("DrawingController", function() {

  var drawing;
  var drawingController;

  beforeEach(function() {

    drawing = jasmine.createSpyObj('drawing', ['addCoordinates', 'returnLastCoordinates']);
    drawingController = new DrawingController(drawing);
  });

  it("adds coordinates to the drawing", function() {
    var dummyEvent = {
      clientX: 155,
      clientY: 45
    };
    drawing.returnLastCoordinates.and.returnValue([1,100])
    drawingController.addCoordinatesToDrawing(dummyEvent);
    expect(drawing.addCoordinates).toHaveBeenCalled();
  });

  it("listens for a click event", function() {
    var clickSpy = spyOn(document, "addEventListener")
    drawingController.listenForMouseDown();
    expect(clickSpy).toHaveBeenCalled();
  });

  it('listens for a tool size change', function() {
    var dummySize = document.createElement('button')
    dummySize.id = '50'
    document.getElementsByClassName = function() {
      return [dummySize];
    }

    var sizeSpy = spyOn(dummySize, "addEventListener")
    drawingController.listenForToolSizeChange();
    expect(sizeSpy).toHaveBeenCalled();
  })

  it('listens for a color change', function() {
    var dummyColor = document.createElement('button')
    dummyColor.id = '#ff0000'
    document.getElementsByClassName = function() {
      return [dummyColor];
    }

    var colorSpy = spyOn(dummyColor, "addEventListener")
    drawingController.listenForColorChange();
    expect(colorSpy).toHaveBeenCalled();
  })

  it("listens for a mousedown event", function() {
    var mouseDownSpy = spyOn(document, "addEventListener");
    drawingController.listenForMouseDown();
    expect(mouseDownSpy).toHaveBeenCalled();
  });

  it("listens for a mouseup event", function() {
    var mouseUpSpy = spyOn(document, "addEventListener");
    drawingController.listenForMouseUp();
    expect(mouseUpSpy).toHaveBeenCalled();
  });

  describe("reset", function() {
    it("resets the drawing to a new Drawing", function() {
      drawingController.resetDrawing();
      expect(drawingController.drawingView.drawing).not.toEqual(drawing);

    });
  });
});

// Should we be testing that addCoordinatesToDrawing is called when the click happens?
