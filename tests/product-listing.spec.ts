import { test, expect } from '../support/fixtures';
import testData from '../testdata/test-data.json';

test('User logs in and views product listing with all product details', { tag: ["@e2e","@regression","@P0","@login-view-products"] }, async ({ page, loginPage, inventoryPage }) => {
  await test.step('Open — Navigate to login page', async () => {
    await page.goto('/');
  });
  await test.step('Fill — Enter username', async () => {
    await loginPage.fillUsername(testData.userLogsInAndViewsProductListingWithAllProductDetails.enterUsername);
  });
  await test.step('Fill — Enter password', async () => {
    await loginPage.fillPassword(testData.userLogsInAndViewsProductListingWithAllProductDetails.enterPassword);
  });
  await test.step('Click — Click Login button', async () => {
    await loginPage.clickLogin();
  });
  await test.step('Assert visible — Verify Inventory page is displayed', async () => {
    await inventoryPage.expectInventoryItemNameVisible();
  });
  await test.step('Assert visible — Verify product name is visible', async () => {
    await inventoryPage.expectInventoryItemNameVisible();
  });
  await test.step('Assert visible — Verify product price is visible', async () => {
    await inventoryPage.expectInventoryItemPriceVisible();
  });
  await test.step('Assert visible — Verify product description is visible', async () => {
    await inventoryPage.expectInventoryItemDescVisible();
  });
  await test.step('Assert visible — Verify product image is visible', async () => {
    await inventoryPage.expectItem0ImgVisible();
  });
});

test('User adds and removes a product from the cart, verifying cart count updates', { tag: ["@e2e","@regression","@P0","@add-to-cart-and-remove"] }, async ({ page, loginPage, inventoryPage }) => {
  await test.step('Open — Navigate to login page', async () => {
    await page.goto('/');
  });
  await test.step('Fill — Enter username', async () => {
    await loginPage.fillUsername(testData.userAddsAndRemovesAProductFromTheCartVerifyingCartCountUpdates.enterUsername);
  });
  await test.step('Fill — Enter password', async () => {
    await loginPage.fillPassword(testData.userAddsAndRemovesAProductFromTheCartVerifyingCartCountUpdates.enterPassword);
  });
  await test.step('Click — Click Login button', async () => {
    await loginPage.clickLogin();
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

test('User sorts products and verifies sorting order', { tag: ["@e2e","@regression","@P2","@sort-products-and-verify-order"] }, async ({ page, loginPage, inventoryPage }) => {
  await test.step('Open — Navigate to login page', async () => {
    await page.goto('/');
  });
  await test.step('Fill — Enter username', async () => {
    await loginPage.fillUsername(testData.userSortsProductsAndVerifiesSortingOrder.enterUsername);
  });
  await test.step('Fill — Enter password', async () => {
    await loginPage.fillPassword(testData.userSortsProductsAndVerifiesSortingOrder.enterPassword);
  });
  await test.step('Click — Click Login button', async () => {
    await loginPage.clickLogin();
  });
  await test.step("Select — Select sort option 'Price (low to high)'", async () => {
    await inventoryPage.selectProductSort(testData.userSortsProductsAndVerifiesSortingOrder.selectSortOptionPriceLowToHigh);
  });
  await test.step('Assert text — Verify first product is lowest price', async () => {
    await inventoryPage.expectInventoryItemPriceText('$7.99');
  });
});

test('User navigates to product detail page and verifies product information', { tag: ["@e2e","@regression","@P0","@navigate-to-product-detail"] }, async ({ page, loginPage, inventoryPage, inventoryItemPage }) => {
  await test.step('Open — Navigate to login page', async () => {
    await page.goto('/');
  });
  await test.step('Fill — Enter username', async () => {
    await loginPage.fillUsername(testData.userNavigatesToProductDetailPageAndVerifiesProductInformation.enterUsername);
  });
  await test.step('Fill — Enter password', async () => {
    await loginPage.fillPassword(testData.userNavigatesToProductDetailPageAndVerifiesProductInformation.enterPassword);
  });
  await test.step('Click — Click Login button', async () => {
    await loginPage.clickLogin();
  });
  await test.step('Click — Click Sauce Labs Backpack product name', async () => {
    await inventoryPage.clickInventoryItemNameSauceLabsBackpack();
  });
  await test.step('Assert visible — Verify product detail page is displayed', async () => {
    await inventoryItemPage.expectInventoryItemDescVisible();
  });
  await test.step('Assert text — Verify product name on detail page', async () => {
    await inventoryItemPage.expectInventoryItemNameText('Sauce Labs Backpack');
  });
  await test.step('Assert visible — Verify product description is visible', async () => {
    await inventoryItemPage.expectInventoryItemDescVisible();
  });
  await test.step('Assert visible — Verify product image is visible', async () => {
    await inventoryItemPage.expectInventoryItemImgVisible();
  });
});

test('User navigates from product detail page back to product listing', { tag: ["@e2e","@regression","@P1","@navigate-back-to-listing"] }, async ({ page, loginPage, inventoryPage, inventoryItemPage }) => {
  await test.step('Open — Navigate to login page', async () => {
    await page.goto('/');
  });
  await test.step('Fill — Enter username', async () => {
    await loginPage.fillUsername(testData.userNavigatesFromProductDetailPageBackToProductListing.enterUsername);
  });
  await test.step('Fill — Enter password', async () => {
    await loginPage.fillPassword(testData.userNavigatesFromProductDetailPageBackToProductListing.enterPassword);
  });
  await test.step('Click — Click Login button', async () => {
    await loginPage.clickLogin();
  });
  await test.step('Click — Click Sauce Labs Backpack product name', async () => {
    await inventoryPage.clickInventoryItemNameSauceLabsBackpack();
  });
  await test.step('Click — Click Back to Products button', async () => {
    await inventoryItemPage.clickBackToProducts();
  });
  await test.step('Assert visible — Verify Inventory page is displayed', async () => {
    await inventoryPage.expectInventoryItemNameVisible();
  });
});

test('User logs in and views the product listing page', { tag: ["@e2e","@regression","@P0","@login-and-view-product-list"] }, async ({ page, loginPage, inventoryPage }) => {
  await test.step('Open — Navigate to the login page', async () => {
    await page.goto('/');
  });
  await test.step('Fill — Enter username', async () => {
    await loginPage.fillUsername(testData.userLogsInAndViewsTheProductListingPage.enterUsername);
  });
  await test.step('Fill — Enter password', async () => {
    await loginPage.fillPassword(testData.userLogsInAndViewsTheProductListingPage.enterPassword);
  });
  await test.step('Click — Click Login button', async () => {
    await loginPage.clickLogin();
  });
  await test.step('Assert visible — Verify Inventory page is displayed', async () => {
    await inventoryPage.expectInventoryItemNameVisible();
  });
  await test.step('Assert count greater than — Verify at least one product is listed', async () => {
    await inventoryPage.expectInventoryItemNameCount(1);
  });
});

test('User adds a product to cart and verifies cart count', { tag: ["@e2e","@regression","@P0","@add-to-cart-and-verify-cart-count"] }, async ({ page, loginPage, inventoryPage }) => {
  await test.step('Open — Navigate to the login page', async () => {
    await page.goto('/');
  });
  await test.step('Fill — Enter username', async () => {
    await loginPage.fillUsername(testData.userAddsAProductToCartAndVerifiesCartCount.enterUsername);
  });
  await test.step('Fill — Enter password', async () => {
    await loginPage.fillPassword(testData.userAddsAProductToCartAndVerifiesCartCount.enterPassword);
  });
  await test.step('Click — Click Login button', async () => {
    await loginPage.clickLogin();
  });
  await test.step('Click — Click Add to Cart for Sauce Labs Backpack', async () => {
    await inventoryPage.clickAddToCartSauceLabsBackpack();
  });
  await test.step('Assert text — Verify cart icon shows 1 item', async () => {
    await inventoryPage.expectShoppingCartText('1');
  });
  await test.step('Assert visible — Verify Remove button is visible for Sauce Labs Backpack', async () => {
    await inventoryPage.expectRemoveSauceLabsBackpackVisible();
  });
});

test('User removes a product from cart and verifies cart count', { tag: ["@e2e","@regression","@P0","@remove-from-cart-and-verify-cart-count"] }, async ({ page, loginPage, inventoryPage }) => {
  await test.step('Open — Navigate to the login page', async () => {
    await page.goto('/');
  });
  await test.step('Fill — Enter username', async () => {
    await loginPage.fillUsername(testData.userRemovesAProductFromCartAndVerifiesCartCount.enterUsername);
  });
  await test.step('Fill — Enter password', async () => {
    await loginPage.fillPassword(testData.userRemovesAProductFromCartAndVerifiesCartCount.enterPassword);
  });
  await test.step('Click — Click Login button', async () => {
    await loginPage.clickLogin();
  });
  await test.step('Click — Click Add to Cart for Sauce Labs Backpack', async () => {
    await inventoryPage.clickAddToCartSauceLabsBackpack();
  });
  await test.step('Click — Click Remove for Sauce Labs Backpack', async () => {
    await inventoryPage.clickRemoveSauceLabsBackpack();
  });
  await test.step('Assert hidden — Verify cart icon is hidden (no items)', async () => {
    await inventoryPage.expectShoppingCartHidden();
  });
  await test.step('Assert visible — Verify Add to Cart button is visible again for Sauce Labs Backpack', async () => {
    await inventoryPage.expectAddToCartSauceLabsBackpackVisible();
  });
});

test('User navigates to product detail page and back to product listing', { tag: ["@e2e","@regression","@P1","@navigate-to-product-detail-and-back"] }, async ({ page, loginPage, inventoryPage, inventoryItemPage }) => {
  await test.step('Open — Navigate to the login page', async () => {
    await page.goto('/');
  });
  await test.step('Fill — Enter username', async () => {
    await loginPage.fillUsername(testData.userNavigatesToProductDetailPageAndBackToProductListing.enterUsername);
  });
  await test.step('Fill — Enter password', async () => {
    await loginPage.fillPassword(testData.userNavigatesToProductDetailPageAndBackToProductListing.enterPassword);
  });
  await test.step('Click — Click Login button', async () => {
    await loginPage.clickLogin();
  });
  await test.step('Click — Click on Sauce Labs Backpack product title', async () => {
    await inventoryPage.clickInventoryItemNameSauceLabsBackpack();
  });
  await test.step('Assert visible — Verify product detail page is displayed', async () => {
    await inventoryItemPage.expectInventoryItemDescVisible();
  });
  await test.step('Assert text — Verify product detail title is Sauce Labs Backpack', async () => {
    await inventoryItemPage.expectInventoryItemNameText('Sauce Labs Backpack');
  });
  await test.step('Click — Click Back to Products button', async () => {
    await inventoryItemPage.clickBackToProducts();
  });
  await test.step('Assert visible — Verify Inventory page is displayed again', async () => {
    await inventoryPage.expectInventoryItemNameVisible();
  });
});

test('User sorts products and verifies sorting order', { tag: ["@e2e","@regression","@P2","@sort-products-and-verify-order"] }, async ({ page, loginPage, inventoryPage }) => {
  await test.step('Open — Navigate to the login page', async () => {
    await page.goto('/');
  });
  await test.step('Fill — Enter username', async () => {
    await loginPage.fillUsername(testData.userSortsProductsAndVerifiesSortingOrder.enterUsername);
  });
  await test.step('Fill — Enter password', async () => {
    await loginPage.fillPassword(testData.userSortsProductsAndVerifiesSortingOrder.enterPassword);
  });
  await test.step('Click — Click Login button', async () => {
    await loginPage.clickLogin();
  });
  await test.step("Select — Select 'Price (low to high)' from sort dropdown", async () => {
    await inventoryPage.selectProductSort(testData.userSortsProductsAndVerifiesSortingOrder.selectPriceLowToHighFromSortDropdown);
  });
  await test.step('Assert text — Verify first product is lowest price', async () => {
    await inventoryPage.expectInventoryItemPriceText('$7.99');
  });
});
