import { expect } from "chai";
import { MathLib } from "../app/math";

describe("My math library", () => {
  it("should be able to add things correctly", () => {
    expect(MathLib.add(3, 4)).to.equal(7);
  });
});
