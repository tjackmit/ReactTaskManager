import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import AboutUs from './AboutUs';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('renders about us screen header', () => {

  act(() => {
    render(<AboutUs />, container);
  });

  expect(container.textContent).toContain("AboutUsScreen");
});
