import Controller from "../controller";

const mockedData = { 1: "a", 2: "b" };
const label = "test";
const wrapper = {};

const mockModel = {
  getData: jest.fn(() => Promise.resolve(mockedData))
};

const mockView = {
  render: jest.fn()
};

describe("Controller", () => {
  const ctrlr = new Controller(mockModel, mockView, label);
  ctrlr.render(wrapper);

  it("should call model getData on render", () => {
    expect(mockModel.getData).toBeCalled();
  });

  describe("then", () => {
    it("should call view render with data", () => {
      expect(mockView.render).toBeCalledWith({ ...mockedData, label, wrapper });
    });
  });
});
