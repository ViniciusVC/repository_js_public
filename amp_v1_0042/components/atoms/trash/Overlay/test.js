import React from "react";
import { shallow } from "enzyme";
import Component from "./index";

describe("Overlay >", () => {
  it("deve renderizar com o tema default", () => {
    const wrapper = shallow(<Component />);
    expect(wrapper.dive().getElement()).toMatchSnapshot();
  });
  it("deve renderizar com o rba do tema (1,1,1,1.2)", () => {
    const wrapper = shallow(<Component theme={{ rgba: "rgba(1,1,1,1.2)" }} />);
    expect(wrapper.dive().getElement()).toMatchSnapshot();
  });
});
