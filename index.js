class Polygon {
  constructor(array){
    this.array = array
  }
  get countSides(){
    return this.array.length
  }
  get perimeter(){
    return this.array.reduce((a, b) => a + b, 0)
  }
}


class Triangle extends Polygon {

  get isValid(){
    if((this.array[0] + this.array[1]) > this.array[2] && (this.array[1] + this.array[2]) > this.array[0] && (this.array[2] + this.array[0]) > this.array[1]) {
      return true;
    } else {
      return false;
    }
  }
}

class Square extends Polygon {
  
  get area(){
    if (this.isValid === true){
      return this.array[0] * this.array[1]
    }
  }
  
  get isValid(){
    if(this.array[0] === this.array[2] && this.array[1] === this.array[3] && this.array[0] === this.array[1]){
      return true;
    } else {
      return false;
    }
  }

  
}