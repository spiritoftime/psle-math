import { test, expect } from "@playwright/test";

test("login", async ({ page }) => {
  await page.goto("http://localhost:3000/login");
  await page.getByRole("button", { name: "Login With Google" }).click();
});
