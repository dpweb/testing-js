var m = require("../somemodule.js");

describe("somemodule", function () {
  it("should return true", function () {
    	var product = m.somegoodfunc();
    	expect(product).toBe(true);
  });
  it("should return true", function () {
    	var product = m.somebadfunc();
    	expect(product).toBe(true);
  });
});