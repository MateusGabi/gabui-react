import Image from "./index";

let Component;
describe("Image", () => {
  beforeEach(() => {
    Component = Image;
  });

  it("should return a function", () => {
    expect(Component).toBeInstanceOf(Function);
  });
});
