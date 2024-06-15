import React from "react";
import { shallow } from "enzyme";
import Component from "./index";
import { exec } from "child_process";

describe("Legenda >", () => {
  it("deve renderizar com o tema default, recebendo as props required", () => {
    const wrapper = shallow(
      <Component franquia={70} consumo={5} dataRenova="14/03/2015" />
    );
    expect(
      wrapper
        .find("strong")
        .first()
        .text()
    ).toContain("3.5");
    expect(
      wrapper
        .find("strong")
        .at(1)
        .text()
    ).toContain("66.5");
    expect(
      wrapper
        .find("Muted")
        .children()
        .at(1)
        .text()
    ).toContain("14/03/2015");
    expect(wrapper.getElement()).toMatchSnapshot();
  });
});
