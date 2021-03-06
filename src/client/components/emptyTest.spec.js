// Must have at least one test file in this directory or Mocha will throw an error.
import React from "react";
import { shallow } from "enzyme/build";
import App from "./App";

describe("App", () => {
  const app = shallow(<App />);

  it("renders correctly", () => {
    expect(app).toMatchSnapshot();
  });
});
