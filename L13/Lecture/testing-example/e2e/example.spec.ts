import { expect, test } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.getByTestId("counter-button").click();
  await expect(page.getByTestId("counter-button")).toContainText("Count is 1");
  await page.getByRole("spinbutton", { name: "Step:" }).click();
  await page.getByRole("spinbutton", { name: "Step:" }).fill("100");
  await page.getByTestId("counter-button").click();
  await expect(page.getByTestId("counter-button")).toContainText(
    "Count is 101"
  );
});
