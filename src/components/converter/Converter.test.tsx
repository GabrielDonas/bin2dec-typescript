import { shallow } from "enzyme";

import Converter from "./Converter";

describe("The Converter component", () => {
  const wrapper = shallow(<Converter />);

  it("Should give a warning with the input is not a binary", () => {
    wrapper.find("input").simulate("change", { target: { value: "123" } });
    expect(wrapper.text()).toBe("Wrong Input, please enter either 0 or 1");
  });

  it("Should return a decimal number if the input is a binary", () => {
    wrapper
      .find("input")
      .simulate("change", { target: { value: "111110000111" } });
    expect(wrapper.text()).toBe("3975");
  });
});
