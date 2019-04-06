const { isEmpty } = require("./index");
const { expect } = require("chai");

describe("isEmpty", () => {
  it("returns true for empty things", () => {
    function Foo() {}
    Foo.prototype.bar = "baz";

    const empties = [
      {},
      [],
      null,
      undefined,
      true,
      false,
      1,
      0,
      NaN,
      Infinity,
      new Map(),
      new Set(),
      "",
      { a: 1, length: 0 },
      new Foo()
    ];
    empties.forEach(thing => {
      expect(isEmpty(thing), `${thing} should be empty`).to.be.true;
    });
  });
  it("returns false for non-empty things", () => {
    const nonEmpties = [
      { a: 1 },
      [1],
      "not empty",
      new Set([1, 2]),
      new Map([[1, 2]])
    ];
    nonEmpties.forEach(thing => {
      expect(isEmpty(thing), `${thing} should not be empty`).to.be.false;
    });
  });
});
