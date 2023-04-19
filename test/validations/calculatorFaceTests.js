import CalculatorFage from "../pages/calculatorFace.js";
import { expect } from "chai";
const c = new CalculatorFage();

class CalculatorFaceTests {
  constructor() {}

  validateAdditions(scenario) {
    it(`should slick ${scenario.startAmount} number key`, async () => {
      await (await c.numberKey(scenario.startAmount)).click();
    });
    it("should click the plus sign key", async () => {
      await (await c.plusSignKey).click();
    });
    it(`should slick ${scenario.additionAmount} number key`, async () => {
      await (await c.numberKey(scenario.additionAmount)).click();
    });
    it("should click the equal sign key", async () => {
      await (await c.equalSignKey).click();
    });
    it(`should validate the result is equal to expected amount of ${scenario.expectedResult}`, async () => {
      const result = (await (await c.calculationResult).getText()).split(" ");
      expect(result[2]).to.equal(scenario.expectedResult.toString());
    });
  }
}

export default new CalculatorFaceTests();
