import React from "react";
import { shallow } from "enzyme";
import Component from "./index";

describe("Button >", () => {
  it("deve renderizar um elemento <Button/> com tema default", () => {
    const wrapper = shallow(<Component />);
    expect(wrapper.dive().getElement()).toMatchSnapshot();
  });

  it("deve renderizar um elemento <a/> com href = /oi", () => {
    const wrapper = shallow(<Component href={"/oi"} />);
    expect(wrapper.dive().getElement()).toMatchSnapshot();
  });

  it("deve renderizar um elemento <Button/> com aparência de link", () => {
    const wrapper = shallow(<Component link />);
    expect(wrapper.dive().getElement()).toMatchSnapshot();
  });

  it("deve renderizar um elemento <Button/> com as cores invertidas", () => {
    const wrapper = shallow(<Component invert />);
    expect(wrapper.dive().getElement()).toMatchSnapshot();
  });

  it("deve renderizar um elemento <Button/> com a cor primária vermelha", () => {
    const wrapper = shallow(<Component theme={{ primary: "red" }} />);
    expect(wrapper.dive().getElement()).toMatchSnapshot();
  });
});
