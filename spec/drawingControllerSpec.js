"strict mode";

describe("DrawingController", function() {

  var drawing;
  var originalDocument = document.getElementById;

  beforeEach(function() {
    drawing = jasmine.createSpyObj('drawing', ['addCoordinates'])
    drawingController = new DrawingController(drawing);
    spyOn(drawingController, 'drawingView').and.returnValue(true);
  });

  afterEach(function() {
    document.getElementById = originalDocument;
  });

  it("adds coordinates to the drawing", function() {
    var dummyEvent = {
      clientX: 155,
      clientY: 45
    };
    drawingController.addCoordinatesToDrawing(dummyEvent);
    expect(drawing.addCoordinates).toHaveBeenCalled()
  });

  it("listens for a click event", function() {
    var dummyCanvas = document.createElement("canvas");
    document.getElementById = function() {
      return dummyCanvas;
    }

    var clickSpy = spyOn(document, "addEventListener")
    drawingController.listenForMouseDown();
    expect(clickSpy).toHaveBeenCalled();
  });

  it('listens for a color change', function() {
    var dummyColorMenu = document.createElement('select')
    document.getElementById = function() {
      return dummyColorMenu;
    }

    var colorSpy = spyOn(dummyColorMenu, "addEventListener")
    drawingController.listenForColorChange();
    expect(colorSpy).toHaveBeenCalled();

  })
});

// Should we be testing that addCoordinatesToDrawing is called when the click happens?

// var event = new MouseEvent('click', {
//   'clientX': 144,
//   'clientY': 240
// });

// click = jasmine.createSpy('click')
