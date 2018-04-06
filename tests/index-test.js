const expect = require("expect");
const console = require("src").default;

describe("console", () => {
  describe("Module", () => {
    it("Returns an `Object`", () => {
      expect(console).toBeAn(Object);
    });
  });
});
