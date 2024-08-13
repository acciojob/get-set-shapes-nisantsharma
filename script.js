// Rectangle class definition
class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  // Getter for width
  get width() {
    return this._width;
  }

  // Getter for height
  get height() {
    return this._height;
  }

  // Method to calculate and return the area of the rectangle
  getArea() {
    return this.width * this.height;
  }
}

// Square class definition, extending Rectangle
class Square extends Rectangle {
  constructor(side) {
    // Call the parent class constructor with both width and height equal to side
    super(side, side);
  }

  // Method to calculate and return the perimeter of the square
  getPerimeter() {
    return 4 * this.width;
  }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
