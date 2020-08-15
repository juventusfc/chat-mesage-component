import React from "react";
import { shallow, mount } from "enzyme";
import { Box, Avatar, Typography } from "@material-ui/core";
import MessageBase from "../../../components/Message/MessageBase";

it("renders without crashing", () => {
  mount(<MessageBase />);
});

it("renders Avatar", () => {
  const wrapper = shallow(<MessageBase />);
  expect(wrapper.find(Avatar).length).toEqual(1);
});

it("renders name when not reverse", () => {
  const wrapper = shallow(<MessageBase name="fake-name" />);
  expect(wrapper.find(Typography).text()).toEqual("fake-name");
});

it("not renders name when reverse", () => {
  const wrapper = shallow(<MessageBase reverse={true} name="fake-name" />);
  expect(wrapper.find(Typography).length).toEqual(0);
});

it("renders children", () => {
  const children = <div id="child">This is children</div>;
  const wrapper = shallow(<MessageBase>{children}</MessageBase>);
  expect(wrapper.find("#child").text()).toEqual("This is children");
});
