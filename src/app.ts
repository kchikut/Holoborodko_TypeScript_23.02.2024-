abstract class Shape {
    constructor(readonly color: string, readonly name: string) {}
    abstract calculateArea(): number;
    print(): void {
        console.log(`Area of ${this.name} is ${this.calculateArea()}`);
    }
}
class Circle extends Shape {
    constructor(color: string, readonly radius: number) {
        super(color, 'Circle');
    }
    calculateArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
class Rectangle extends Shape {
    constructor(color: string, readonly width: number, readonly height: number, name: string) {
        super(color, name);
    }
    calculateArea(): number {
        return this.width * this.height;
    }
}
class Square extends Rectangle {
    constructor(color: string, sideLength: number) {
        super(color, sideLength, sideLength, 'Square');
    }
}
class Triangle extends Shape {
    constructor(color: string, readonly base: number, readonly height: number) {
        super(color, 'Triangle');
    }
    calculateArea(): number {
        return 0.5 * this.base * this.height;
    }
}
