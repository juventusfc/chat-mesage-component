import React from "react";
import { shallow } from "enzyme";
import MessageText from "../../../components/Message/MessageText";

it("renders without crashing", () => {
  shallow(<MessageText />);
});

it("renders children", () => {
  const children = "This is children";
  const wrapper = shallow(<MessageText>{children}</MessageText>);
  expect(wrapper.contains(children)).toEqual(true);
});
