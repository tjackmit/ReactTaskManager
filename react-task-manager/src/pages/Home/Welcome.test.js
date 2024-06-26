import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Welcome from './Welcome';

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

test('renders welcome screen watermark', () => {

  act(() => {
    render(<Welcome />, container);
  });

  expect(container.textContent).toContain("WelcomeScreen");
});
