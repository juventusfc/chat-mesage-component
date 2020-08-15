import React from "react";
import { shallow, mount } from "enzyme";
import mandzukicImg from "../../..//imgs/mandzukic.jpg";
import MessageMedia from "../../../components/Message/MessageMedia";

it("renders without crashing", () => {
  mount(<MessageMedia />);
});

it("renders children", () => {
  const children = <img src={mandzukicImg}></img>;
  const wrapper = shallow(<MessageMedia>{children}</MessageMedia>);
  expect(wrapper.find("img").length).toEqual(1);
});
