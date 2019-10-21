import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Home from "../../components/Home";

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe("<Home />", () => {
  it("checks if the title is 'Welcome'", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find("h1").html()).toContain("Welcome");
  });

  it("checks if the youtube video exists", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find("iframe").html()).not.toBeNull();
  });
});
