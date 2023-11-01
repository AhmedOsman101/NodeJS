const calculator = require("./calculator");

describe("calculator", () => {
    it("addition => 60", () => {
        const value = calculator.plus(10, 50);
        expect(value).toBe(60);
    });

    it("minus => -40", () => {
        const value = calculator.minus(10, 50);
        expect(value).toBe(-40);
    });
    it("minus => 60", () => {
        const value = calculator.minus(10, -50);
        expect(value).toBe(60);
    });

    it("multiply => 500", () => {
        const value = calculator.multiply(10, 50);
        expect(value).toBe(500);
    });

    it("divide => 0.2", () => {
        const value = calculator.divide(10, 50);
        expect(value).toBe(0.2);
    });
    // it("first case: divide on zero", () => {
    //     let num2 = 0;
    //     const value = calculator.divide(10, num2);
    //     expect(num2).not.toBe(0);
    //     expect(value).toBe(1);
    // });
    it("second case: divide on zero", () => {
        let num2 = 0;
        const value = calculator.divide(10, 0);
        expect(value).toBe("Error - Invalid Divider");
    });
});
