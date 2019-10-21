import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import About from "../../components/About";

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe("<About />", () => {
  it("checks if the title is 'About'", () => {
    const wrapper = shallow(<About />);
    expect(wrapper.find("h1").html()).toContain("About");
  });

  it("checks the number of <p> tags", () => {
    const wrapper = shallow(<About />);
    expect(wrapper.find("p").length).toEqual(8);
  });
});
