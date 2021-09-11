import { shallow } from "enzyme";
import Footer from "./Footer";
import renderer from "react-test-renderer";

describe("Footer Component", () => {
  const wrapper = shallow(<Footer />);
  const rendered = wrapper.find("a");

  it("Should render with the .container class", () => {
    expect(rendered.hasClass("container")).toBe(true);
  });

  it("Should include a link to the repo", () => {
    expect(rendered.props()).toMatchObject({
      href: "https://github.com/GabrielDonas/bin2dec-typescript",
    });
  });

  it("Should include the Github icon", () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
