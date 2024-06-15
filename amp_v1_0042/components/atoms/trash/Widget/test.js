import React from "react";
import { shallow } from "enzyme";
import Component from "./index";

describe("Widget >", () => {
  it("deve renderizar com o tema default", () => {
    const wrapper = shallow(<Component />);
    expect(wrapper.dive().getElement()).toMatchSnapshot();
  });
  it("deve renderizar com um elemento filho", () => {
    const wrapper = shallow(<Component> Test </Component>);
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
