// @vitest-environment jsdom

import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";
import { setupCounter } from "./counter";

describe("Counter component tests", () => {
  beforeEach(() => {
    document.body.innerHTML = ""; // Clear the document body before each test

    const container = document.createElement("div");

    document.body.appendChild(container); // Create a container for the counter component

    setupCounter(container); // Setup the counter component
  });

  it("correctly adds 1", async () => {
    const user = userEvent.setup();

    const button = screen.getByRole("button");

    await user.click(button); // Simulate a click on the button
    expect(button.textContent).toBe("Count is 1"); // Check if the button text updates correctly
  });

  it("correctly adds 10", async () => {
    const user = userEvent.setup();

    const input = screen.getByLabelText("Step:");
    const button = screen.getByTestId("counter-button");

    await user.clear(input); // Clear the input field
    await user.type(input, "10"); // Simulate typing '10' into the input
    await user.click(button); // Simulate a click on the button

    expect(button.textContent).toBe("Count is 10"); // Check if the button text updates correctly
  });
});
