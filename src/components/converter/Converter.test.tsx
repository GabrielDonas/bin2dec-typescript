import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import Converter from "./Converter";

describe("The Converter component", () => {
  const wrapper = shallow(<Converter />);
  const tree = renderer.create(<Converter />).toJSON();

  it("Should render correctly", () => {
    expect(tree).toMatchSnapshot();
  });

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
