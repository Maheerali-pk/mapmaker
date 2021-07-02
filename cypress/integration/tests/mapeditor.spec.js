const cy = require("cypress");

describe("is 2 equal to 2", () => {
   it("Some test", () => {
      cy.electronVisitUrl("localhost://3000");
      expect(2).toBe(2);
   });
});
