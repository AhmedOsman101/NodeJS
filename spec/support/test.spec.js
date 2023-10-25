const calculator = require("./calculator");

describe("addition", () => {
    it("should be positive 60", () => {
        const value = calculator.plus(10, 50);
        expect(value).toBe(60)
    });
    it("should be negative 60", () => {
        const value = calculator.plus(10, -50);
        expect(value).toBe(-40)
    });
});
