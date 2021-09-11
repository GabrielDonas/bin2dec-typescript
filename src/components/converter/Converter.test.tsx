import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import Converter from "./Converter";

describe("The Converter component", () => {
  const wrapper = shallow(<Converter />);
  const tree = renderer.create(<Converter />).toJSON();

  it("Should render correctly", () => {
    expect(tree).toMatchSnapshot();
  });

  describe("Incorrect Input, non binary", () => {
    beforeAll(() => {
      wrapper.find("input").simulate("change", { target: { value: "123" } });
    });

    it("Should show a warning if the input is not a binary", () => {
      expect(wrapper.text()).toBe("Wrong input, please enter either 0 or 1");
    });

    it("Should render the component with the .wrongInput class if input is not binary", () => {
      expect(wrapper.find("div.wrongInput").hasClass("wrongInput")).toBe(true);
    });
  });

  describe("Correct Input, binary", () => {
    beforeAll(() => {
      wrapper
        .find("input")
        .simulate("change", { target: { value: "111110000111" } });
    });

    it("Should return a decimal number if the input is a binary", () => {
      expect(wrapper.text()).toBe("3975");
    });

    it("Should render the component with the .result class if input is binary", () => {
      expect(wrapper.find("div.result").hasClass("result")).toBe(true);
    });
  });
});
