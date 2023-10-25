const calculator = require("./calculator");

describe("addition", () => {
    it("should be 60", () => {
        const value = calculator.plus(10, 50);
        expect(value).toBe(60);
    });
    it("should be -40", () => {
        const value = calculator.plus(10, -50);
        expect(value).toBe(-40);
    });
});

describe("minus", () => {
    it("should be -40", () => {
        const value = calculator.minus(10, 50);
        expect(value).toBe(-40);
    });
    it("should be 60", () => {
        const value = calculator.minus(10, -50);
        expect(value).toBe(60);
    });
});

describe("multiply", () => {
    it("should be 500", () => {
        const value = calculator.multiply(10, 50);
        expect(value).toBe(500);
    });
    it("should be -500", () => {
        const value = calculator.multiply(10, -50);
        expect(value).toBe(-500);
    });
});
describe("divide", () => {
    it("should be 0.2", () => {
        const value = calculator.divide(10, 50);
        expect(value).toBe(0.2);
    });
    it("should be negative 40", () => {
        let num2 = 0;
        const value = calculator.divide(10, num2);
        expect(num2).not.toBe(0);
        expect(value).toBe(1);
    });
});
