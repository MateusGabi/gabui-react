import Card from "./index";

let Component;
describe("Card", () => {
  beforeEach(() => {
    Component = Card;
  });

  it("should return a function", () => {
    expect(Component).toBeInstanceOf(Function);
  });
});
