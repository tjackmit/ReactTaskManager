import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import ScheduleCalendar from "./ScheduleCalendar";

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

test('renders ScheduleCalendar screen header', () => {

  act(() => {
    render(<ScheduleCalendar />, container);
  });

  expect(container.textContent).toContain("ScheduleCalendarScreen");
});
