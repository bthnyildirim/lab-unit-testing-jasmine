// UNCOMMENT THE CODE BELOW TO START

/*

describe("Iteration 3", () => {
    describe("Function - calculateArea", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("", () => {});

    })    
})

*/

describe("Iteration 3 | Calculate Area", () => {
  describe("Function calculateArea", () => {
    it("should be defined", () => {
      expect(calculateArea).toBeDefined();
    });

    it("should take two arguments", () => {
      expect(calculateArea.length).toBe(2);
    });

    it("should return a number representing the area of a rectangle", () => {
      expect(calculateArea(10, 2)).toEqual(20);
      expect(calculateArea(6, 3)).toEqual(18);
      expect(calculateArea(10, 5)).toEqual(50);
    });
  });

  it("should return undefined if any of the arguments is not provided", () => {
    expect(calculateArea(1)).toEqual(undefined);
    expect(calculateArea()).toEqual(undefined);
    expect(calculateArea(undefined, 1)).toEqual(undefined);
  });
});
