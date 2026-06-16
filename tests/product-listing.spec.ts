import { test, expect } from '../support/fixtures';
import testData from '../testdata/test-data.json';

test('User logs in and views the product listing page', { tag: ["@e2e","@regression","@P0","@login-and-view-product-list"] }, async ({ page, loginPage, inventoryPage }) => {
  await test.step('Open — Navigate to the login page', async () => {
    await page.goto('/');
  });

  await test.step('Fill — Enter username', async () => {
    await loginPage.fillUserName(testData.userLogsInAndViewsTheProductListingPage.enterUsername);
  });

  await test.step('Fill — Enter password', async () => {
    await loginPage.fillPassword(testData.userLogsInAndViewsTheProductListingPage.enterPassword);
  });

  await test.step('Click — Click the login button', async () => {
    await loginPage.clickLoginButton();
  });

  await test.step('Assert visible — Verify Inventory page is displayed', async () => {
    await inventoryPage.expectProductsVisible();
  });

  await test.step('Assert text — Verify Sauce Labs Backpack is listed', async () => {
    await inventoryPage.expectSauceLabsBackpackVisible();
    await inventoryPage.expectSauceLabsBackpackText('Sauce Labs Backpack');
  });
});

test('User adds a product to the cart and verifies cart count', { tag: ["@e2e","@regression","@P0","@add-to-cart-and-verify-cart-count"] }, async ({ page, loginPage, inventoryPage }) => {
  await test.step('Open — Navigate to the login page', async () => {
    await page.goto('/');
    await expect(page).not.toHaveTitle(/404|Error|Not Found/i);
  });
  await test.step('Fill — Enter username', async () => {
    await loginPage.fillUserName(testData.userAddsAProductToTheCartAndVerifiesCartCount.enterUsername);
  });
  await test.step('Fill — Enter password', async () => {
    await loginPage.fillPassword(testData.userAddsAProductToTheCartAndVerifiesCartCount.enterPassword);
  });
  await test.step('Click — Click the login button', async () => {
    await loginPage.clickLoginButton();
  });
  await test.step('Click — Click Add to Cart for Sauce Labs Backpack', async () => {
    await inventoryPage.clickAddToCartSauceLabsBackpack();
  });
  await test.step('Assert text — Verify cart icon shows 1 item', async () => {
    await inventoryPage.expectProductsVisible();
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
  });
  await test.step('Assert text — Verify Add to Cart button changed to Remove', async () => {
    await inventoryPage.expectRemoveSauceLabsBackpackVisible();
    await inventoryPage.expectRemoveSauceLabsBackpackText('Remove');
  });
});

test('User removes a product from the cart and verifies cart count', { tag: ["@e2e","@regression","@P0","@remove-from-cart-and-verify-cart-count"] }, async ({ page, loginPage, inventoryPage }) => {
  await test.step('Open — Navigate to the login page', async () => {
    await page.goto('/');
    await expect(page).not.toHaveTitle(/404|Error|Not Found/i);
  });
  await test.step('Fill — Enter username', async () => {
    await loginPage.fillUserName(testData.userRemovesAProductFromTheCartAndVerifiesCartCount.enterUsername);
  });
  await test.step('Fill — Enter password', async () => {
    await loginPage.fillPassword(testData.userRemovesAProductFromTheCartAndVerifiesCartCount.enterPassword);
  });
  await test.step('Click — Click the login button', async () => {
    await loginPage.clickLoginButton();
  });
  await test.step('Click — Click Add to Cart for Sauce Labs Backpack', async () => {
    await inventoryPage.clickAddToCartSauceLabsBackpack();
  });
  await test.step('Click — Click Remove for Sauce Labs Backpack', async () => {
    await inventoryPage.clickRemoveSauceLabsBackpack();
  });
  await test.step('Assert hidden — Verify cart icon is hidden (no items)', async () => {
    await inventoryPage.expectAddToCartSauceLabsBackpackVisible();
    await inventoryPage.expectAddToCartSauceLabsBackpackText('Add to cart');
    await inventoryPage.expectRemoveSauceLabsBackpackHidden();
    await expect(page.locator('.shopping_cart_badge')).toBeHidden();
  });
  await test.step('Assert text — Verify Remove button changed back to Add to Cart', async () => {
    await inventoryPage.expectAddToCartSauceLabsBackpackText('Add to cart');
  });
});
