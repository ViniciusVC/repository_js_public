import React from "react";
import { shallow } from "enzyme";
import Component from "./index";

describe("Line >", () => {
  it("deve renderizar com tema default", () => {
    const wrapper = shallow(<Component />);
    expect(wrapper.dive().getElement()).toMatchSnapshot();
  });

  it("deve renderizar com uma borda de 2px", () => {
    const wrapper = shallow(<Component theme={{ border: "2px solid" }} />);
    expect(wrapper.dive().getElement()).toMatchSnapshot();
  });
});
