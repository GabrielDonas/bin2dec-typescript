import { shallow } from "enzyme";

import Converter from "./Converter";

describe("The Converter component", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<Converter />);
  });

  it("Should receive only numbers", () => {
    wrapper.instance().handleChange("foo");
    expect(wrapper.state()).toEqual("foo");
  });
});

//configure an Adapter, look at the Terminal
