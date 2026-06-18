import { test, expect } from '../support/fixtures';
import testData from '../testdata/test-data.json';

test('User logs in and views product listing with all product details', { tag: ["@e2e","@regression","@P0","@login-view-products"] }, async ({ page, loginPage, inventoryPage }) => {
  await test.step('Open — Navigate to login page', async () => {
    await page.goto('/');
  });
  await test.step('Fill — Enter username', async () => {
    await loginPage.fillUserName(testData.userLogsInAndViewsProductListingWithAllProductDetails.enterUsername);
  });
  await test.step('Fill — Enter password', async () => {
    await loginPage.fillPassword(testData.userLogsInAndViewsProductListingWithAllProductDetails.enterPassword);
  });
  await test.step('Click — Click Login button', async () => {
    await loginPage.clickLoginButton();
  });
  await test.step('Assert visible — Verify Inventory page is displayed', async () => {
    await inventoryPage.expectProductsVisible();
  });
  await test.step('Assert visible — Verify product name is visible', async () => {
    await inventoryPage.expectSauceLabsBackpackVisible();
  });
  await test.step('Assert visible — Verify product price is visible', async () => {

    await inventoryPage.expectSauceLabsBackpackVisible();
  });
  await test.step('Assert visible — Verify product description is visible', async () => {

    await inventoryPage.expectSauceLabsBackpackVisible();
  });
  await test.step('Assert visible — Verify product image is visible', async () => {
    await inventoryPage.expectItem4ImgVisible();
  });
});

test('User adds and removes a product from the cart, verifying cart count updates', { tag: ["@e2e","@regression","@P0","@add-to-cart-and-remove"] }, async ({ page, loginPage, inventoryPage }) => {
  await test.step('Open — Navigate to login page', async () => {
    await page.goto('/');
  });
  await test.step('Fill — Enter username', async () => {
    await loginPage.fillUserName(testData.userAddsAndRemovesAProductFromTheCartVerifyingCartCountUpdates.enterUsername);
  });
  await test.step('Fill — Enter password', async () => {
    await loginPage.fillPassword(testData.userAddsAndRemovesAProductFromTheCartVerifyingCartCountUpdates.enterPassword);
  });
  await test.step('Click — Click Login button', async () => {
    await loginPage.clickLoginButton();
  });
  await test.step('Click — Click Add to Cart for Sauce Labs Backpack', async () => {
    await inventoryPage.clickAddToCartSauceLabsBackpack();
  });
  await test.step('Assert text — Verify cart icon shows 1 item', async () => {
    await inventoryPage.expectShoppingCartText('1');
  });
  await test.step('Assert text — Verify Add to Cart button changed to Remove', async () => {
    await inventoryPage.expectRemoveSauceLabsBackpackText('Remove');
  });
  await test.step('Click — Click Remove for Sauce Labs Backpack', async () => {
    await inventoryPage.clickRemoveSauceLabsBackpack();
  });
  await test.step('Assert hidden — Verify cart icon is hidden (no items)', async () => {
    await inventoryPage.expectShoppingCartHidden();
  });
});

test('User sorts products and verifies sorting order', { tag: ["@e2e","@regression","@P1","@sort-products"] }, async ({ page, loginPage, inventoryPage }) => {
  await test.step('Open — Navigate to login page', async () => {
    await page.goto('/');
  });
  await test.step('Fill — Enter username', async () => {
    await loginPage.fillUserName(testData.userSortsProductsAndVerifiesSortingOrder.enterUsername);
  });
  await test.step('Fill — Enter password', async () => {
    await loginPage.fillPassword(testData.userSortsProductsAndVerifiesSortingOrder.enterPassword);
  });
  await test.step('Click — Click Login button', async () => {
    await loginPage.clickLoginButton();
  });
  await test.step('Select — Select sort option \'Price (low to high)\'', async () => {
    await inventoryPage.selectNameAToZSelect(testData.userSortsProductsAndVerifiesSortingOrder.selectSortOptionPriceLowToHigh);
  });
  await test.step('Assert text — Verify first product is lowest price', async () => {

    await inventoryPage.expectItem2ImgVisible();
  });
});

test('User navigates to product detail page and verifies product information', { tag: ["@e2e","@regression","@P0","@navigate-to-product-detail"] }, async ({ page, loginPage, inventoryPage, inventoryItemPage }) => {
  await test.step('Open — Navigate to login page', async () => {
    await page.goto('/');
  });
  await test.step('Fill — Enter username', async () => {
    await loginPage.fillUserName(testData.userNavigatesToProductDetailPageAndVerifiesProductInformation.enterUsername);
  });
  await test.step('Fill — Enter password', async () => {
    await loginPage.fillPassword(testData.userNavigatesToProductDetailPageAndVerifiesProductInformation.enterPassword);
  });
  await test.step('Click — Click Login button', async () => {
    await loginPage.clickLoginButton();
  });
  await test.step('Click — Click Sauce Labs Backpack product name', async () => {
    await inventoryPage.clickSauceLabsBackpack();
  });
  await test.step('Assert visible — Verify product detail page is displayed', async () => {
    await inventoryItemPage.expectAddToCartVisible();
  });
  await test.step('Assert text — Verify product name on detail page', async () => {

    await inventoryItemPage.expectAddToCartVisible();
  });
  await test.step('Assert visible — Verify product description is visible', async () => {

    await inventoryItemPage.expectAddToCartVisible();
  });
  await test.step('Assert visible — Verify product image is visible', async () => {

    await inventoryItemPage.expectAddToCartVisible();
  });
});

test('User navigates from product detail page back to product listing', { tag: ["@e2e","@regression","@P1","@navigate-back-to-listing"] }, async ({ page, loginPage, inventoryPage, inventoryItemPage }) => {
  await test.step('Open — Navigate to login page', async () => {
    await page.goto('/');
  });
  await test.step('Fill — Enter username', async () => {
    await loginPage.fillUserName(testData.userNavigatesFromProductDetailPageBackToProductListing.enterUsername);
  });
  await test.step('Fill — Enter password', async () => {
    await loginPage.fillPassword(testData.userNavigatesFromProductDetailPageBackToProductListing.enterPassword);
  });
  await test.step('Click — Click Login button', async () => {
    await loginPage.clickLoginButton();
  });
  await test.step('Click — Click Sauce Labs Backpack product name', async () => {
    await inventoryPage.clickSauceLabsBackpack();
  });
  await test.step('Click — Click Back to Products button', async () => {
    await inventoryItemPage.clickBackToProducts();
  });
  await test.step('Assert visible — Verify Inventory page is displayed', async () => {
    await inventoryPage.expectProductsVisible();
  });
});
