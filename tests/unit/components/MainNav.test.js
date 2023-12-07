import { render, screen } from "@testing-library/vue";

import MainNav from "@/components/MainNav.vue";
import { it } from "vitest";

describe("MainNav", () => {
  it("displays company name", () => {
    render(MainNav);
    const companyName = screen.getByText("Job Portals");
    expect(companyName).toBeInTheDocument();
  });

  it("displays menu items for navigation", () => {
    render(MainNav);
    const navigationMenuItems = screen.getAllByRole("listitem");
    const navigationmenuTexts = navigationMenuItems.map((item) => item.textContent);
    expect(navigationmenuTexts).toEqual([
      "Teams",
      "Locations",
      "Life at Job Portals",
      "How we hire",
      "Students",
      "Jobs",
    ]);
  });
});
