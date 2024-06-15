import React from "react";
import { shallow } from "enzyme";
import Component from "./index";

describe("Legend >", () => {
  it("deve renderizar com o tema default", () => {
    const wrapper = shallow(<Component />);
    expect(wrapper.dive().getElement()).toMatchSnapshot();
  });
  it("deve renderizar com a cor primaria", () => {
    const wrapper = shallow(<Component primary={true} />);
    expect(wrapper.dive().getElement()).toMatchSnapshot();
  });
  it("deve renderizar com a cor gradiente", () => {
    const wrapper = shallow(<Component gradient={true} />);
    expect(wrapper.dive().getElement()).toMatchSnapshot();
  });
});
