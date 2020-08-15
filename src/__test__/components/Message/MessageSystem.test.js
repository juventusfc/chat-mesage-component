import React from "react";
import { shallow } from "enzyme";
import MessageSystem from "../../../components/Message/MessageSystem";

it("renders without crashing", () => {
  shallow(<MessageSystem />);
});

it("renders message", () => {
  const message = "This is message";
  const wrapper = shallow(<MessageSystem message={message} />);
  expect(wrapper.contains(message)).toEqual(true);
});

it("renders children", () => {
  const children = "This is children";
  const wrapper = shallow(<MessageSystem children={children} />);
  expect(wrapper.contains(children)).toEqual(true);
});
