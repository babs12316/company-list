
import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16.3";

Enzyme.configure({ adapter: new Adapter() });

import { expect } from "chai";
import { shallow } from "enzyme";

import CompanyDetail from "./components/CompanyDetail";

const match = {
  params: {
    id: 1
  }
};

describe("<CompanyDetail />", () => {
  it("renders submit button", () => {
    const wrapper = shallow(<CompanyDetail match={match} />);
    expect(wrapper.find("Button")).to.have.lengthOf(1);
  });
  it("renders input for budget", () => {
    const wrapper = shallow(<CompanyDetail match={match} />);
    expect(wrapper.find("input")).to.have.lengthOf(1);
  });

  it("renders budget value", () => {
    const wrapper = shallow(<CompanyDetail match={match} />);
    expect(wrapper.exists("input")).to.equal(true);
  });
  it("renders modal", () => {
    const wrapper = shallow(<CompanyDetail match={match} />);
    expect(wrapper.exists("#modal")).to.equal(true);
  });
  it("renders title for budget input", () => {
    const wrapper = shallow(<CompanyDetail match={match} />);
    expect(wrapper.exists("h6")).to.equal(true);
  });
});
