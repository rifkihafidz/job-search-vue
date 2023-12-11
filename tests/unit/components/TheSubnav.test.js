import { render, screen } from "@testing-library/vue";

import TheSubnav from "@/components/TheSubnav.vue";
import { expect } from "vitest";

describe("TheSubnav", () => {
  describe("When user is on jobs page", () => {
    it("Displays job count", () => {
      render(TheSubnav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
        data() {
          return {
            onJobResultsPage: true,
          };
        },
      });

      const jobCount = screen.getByText("1975");

      expect(jobCount).toBeInTheDocument();
    });
  });

  describe("When user is not on jobs page", () => {
    it("Doesn't display job count", () => {
      render(TheSubnav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
        data() {
          return {
            onJobResultsPage: false,
          };
        },
      });

      const jobCount = screen.queryByText("1975");

      expect(jobCount).not.toBeInTheDocument();
    });
  });
});
