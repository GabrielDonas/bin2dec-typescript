import { shallow } from "enzyme";

import Converter from "./Converter";

describe("The Converter component", () => {
  const wrapper = shallow(<Converter />);

  it("Should receive only numbers", () => {
    expect(
      wrapper.find("input").simulate("change", { target: { value: "123" } })
    ).toBe("123");
  });
});

//configure an Adapter, look at the Terminal
