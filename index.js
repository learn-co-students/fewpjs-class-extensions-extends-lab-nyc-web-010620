// Your code here
class Polygon{
    constructor(sides){
        this.sides = sides
        this.count = this.sides.length
    }

    get countSides(){
        return this.count
    }

    get perimeter(){
        if(!(Array.isArray(this.sides))) return
        return this.sides.reduce((sum, base) => sum + base, 0)
    }
}

class Triangle extends Polygon{
    get isValid() {
        if(!Array.isArray(this.sides) || this.count !== 3) return
        return ((this.sides[0] + this.sides[1] > this.sides[2]) && (this.sides[1] + this.sides[2] > this.sides[0]) && (this.sides[2] + this.sides[1] > this.sides[1]))
    }
}

class Square extends Polygon{
    get isValid(){
        if(!Array.isArray(this.sides) || this.count !== 4) return
        if(this.sides[0] == this.sides[1] && this.sides[2] == this.sides[3] && this.sides[2] == this.sides[1]) return true
        return false
    }

    get area(){
        if(!Array.isArray(this.sides) || this.count !== 4) return
        return this.sides[0] ** 2
    }
}