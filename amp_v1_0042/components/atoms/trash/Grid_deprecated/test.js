import React from "react";
import { shallow } from "enzyme";
import Component from "./index";

describe("Grid >", () => {
  it("deve renderizar com o tema default", () => {
    const wrapper = shallow(<Component />);
    expect(wrapper.dive().getElement()).toMatchSnapshot();
  });
  it("deve renderizar com um container de 1023px", () => {
    const wrapper = shallow(<Component container="1023px" />);
    expect(wrapper.dive().getElement()).toMatchSnapshot();
  });
  it("deve aceitar um tema", () => {
    const wrapper = shallow(
      <Component
        theme={{
          flex: `
    position: relative;
    display: flex !important;
    `
        }}
      />
    );
    expect(wrapper.dive().getElement()).toMatchSnapshot();
  });
});
