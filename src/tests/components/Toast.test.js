import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Toast from "../../components/Toast";

Enzyme.configure({
  adapter: new EnzymeAdapter()
});

describe("<Toast />", () => {
  it("checks states when component mounts", () => {
    const wrapper = mount(<Toast />);
    expect(wrapper.state().r).toBe(255);
    expect(wrapper.state().g).toBe(255);
    expect(wrapper.state().b).toBe(255);
    expect(wrapper.state().numOfPlayers).toBe(0);
  });
});
