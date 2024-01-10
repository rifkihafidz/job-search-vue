import { render, screen } from "@testing-library/vue";

import ActionButton from "@/components/Shared/ActionButton.vue";
import { expect } from "vitest";

describe("ActionButton", () => {
  it("Renders text", () => {
    render(ActionButton, {
      props: {
        text: "Click me",
        type: "primary",
      },
    });

    const button = screen.getByRole("button", {
      name: /click me/i,
    });

    expect(button).toBeInTheDocument();
  });

  it("Applies on of several styles to button", () => {
    render(ActionButton, {
      props: {
        text: "Click me",
        type: "primary",
      },
    });

    const button = screen.getByRole("button", {
      name: /click me/i,
    });

    expect(button).toHaveClass("primary");
  });
});
