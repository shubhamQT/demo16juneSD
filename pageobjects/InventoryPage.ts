import {
  checkWhenVisible,
  clearWhenVisible,
  clickOpensNewPage,
  clickWhenVisible,
  closePage,
  doubleClickWhenVisible,
  expectChecked,
  expectContainsText,
  expectCount,
  expectCountGreaterThan,
  expectDisabled,
  expectEnabled,
  expectFocused,
  expectHidden,
  expectSelected,
  expectText,
  expectUnchecked,
  expectValue,
  expectVisible,
  fill,
  fillWhenVisible,
  getTextWhenVisible,
  goBack,
  hoverWhenVisible,
  longPressWhenVisible,
  navigateTo,
  scrollIntoView,
  scrollIntoViewWhenVisible,
  selectOptionWhenVisible,
  takeScreenshot,
  typeTextWhenVisible,
  uncheckWhenVisible,
  waitForHidden,
  waitForNewPage,
  waitForVisible,
  waitMs,
  webLocator,
} from "../support/web-actions";

export class InventoryPage {
  private static readonly L = {
    openMenu: { strategy: 'role' as const, value: 'Open Menu', role: 'button', actionKind: 'button' as const },
    shoppingCart: { strategy: 'css' as const, value: '[data-test="shopping-cart-link"]', actionKind: 'link' as const },
    title: { strategy: 'css' as const, value: '[data-test="title"]', actionKind: 'text' as const },
    activeOption: { strategy: 'css' as const, value: '[data-test="active-option"]', actionKind: 'text' as const },
    productSort: { strategy: 'css' as const, value: '[data-test="product-sort-container"]', actionKind: 'combobox' as const },
    item4Img: { strategy: 'css' as const, value: '[data-test="item-4-img-link"]', actionKind: 'link' as const },
    item4Title: { strategy: 'role' as const, value: 'Sauce Labs Backpack', role: 'link', actionKind: 'link' as const },
    inventoryItemNameSauceLabsBackpack: { strategy: 'css' as const, value: '[data-test="inventory-item-name"]', scope: '[data-test="inventory-container"]', scopeText: 'Sauce Labs Backpack', actionKind: 'text' as const },
    inventoryItemDescSauceLabsBackpack: { strategy: 'css' as const, value: '[data-test="inventory-item-desc"]', scope: '[data-test="inventory-container"]', scopeText: 'Sauce Labs Backpack', actionKind: 'text' as const },
    inventoryItemPriceSauceLabsBackpack: { strategy: 'css' as const, value: '[data-test="inventory-item-price"]', scope: '[data-test="inventory-container"]', scopeText: 'Sauce Labs Backpack', actionKind: 'text' as const },
    addToCartSauceLabsBackpack: { strategy: 'role' as const, value: 'Add to cart', role: 'button', actionKind: 'button' as const },
    item0Img: { strategy: 'css' as const, value: '[data-test="item-0-img-link"]', actionKind: 'link' as const },
    item0Title: { strategy: 'role' as const, value: 'Sauce Labs Bike Light', role: 'link', actionKind: 'link' as const },
    inventoryItemName: { strategy: 'css' as const, value: '[data-test="inventory-item-name"]', scope: '[data-test="inventory-container"]', scopeText: 'Sauce Labs Backpack', actionKind: 'text' as const },
    inventoryItemDesc: { strategy: 'css' as const, value: '[data-test="inventory-item-desc"]', scope: '[data-test="inventory-container"]', scopeText: 'Sauce Labs Backpack', actionKind: 'text' as const },
    inventoryItemPrice: { strategy: 'css' as const, value: '[data-test="inventory-item-price"]', scope: '[data-test="inventory-container"]', scopeText: 'Sauce Labs Backpack', actionKind: 'text' as const },
    addToCartSauceLabsBikeLight: { strategy: 'role' as const, value: 'Add to cart', role: 'button', actionKind: 'button' as const },
    item1Img: { strategy: 'css' as const, value: '[data-test="item-1-img-link"]', actionKind: 'link' as const },
    item1Title: { strategy: 'role' as const, value: 'Sauce Labs Bolt T-Shirt', role: 'link', actionKind: 'link' as const },
    inventoryItemNameSauceLabsBoltTShirt: { strategy: 'css' as const, value: '[data-test="inventory-item-name"]', scope: '[data-test="inventory-container"]', scopeText: 'Sauce Labs Backpack', actionKind: 'text' as const },
    inventoryItemDescGetYourTestingSuperheroOn: { strategy: 'css' as const, value: '[data-test="inventory-item-desc"]', scope: '[data-test="inventory-container"]', scopeText: 'Sauce Labs Backpack', actionKind: 'text' as const },
    inventoryItemPrice2: { strategy: 'css' as const, value: '[data-test="inventory-item-price"]', scope: '[data-test="inventory-container"]', scopeText: 'Sauce Labs Backpack', actionKind: 'text' as const },
    addToCartSauceLabsBoltTShirt: { strategy: 'role' as const, value: 'Add to cart', role: 'button', actionKind: 'button' as const },
    item5Img: { strategy: 'css' as const, value: '[data-test="item-5-img-link"]', actionKind: 'link' as const },
    item5Title: { strategy: 'role' as const, value: 'Sauce Labs Fleece Jacket', role: 'link', actionKind: 'link' as const },
    inventoryItemNameSauceLabsFleeceJacket: { strategy: 'css' as const, value: '[data-test="inventory-item-name"]', scope: '[data-test="inventory-container"]', scopeText: 'Sauce Labs Backpack', actionKind: 'text' as const },
    inventoryItemDescItSNotEveryDayThatYouCo: { strategy: 'css' as const, value: '[data-test="inventory-item-desc"]', scope: '[data-test="inventory-container"]', scopeText: 'Sauce Labs Backpack', actionKind: 'text' as const },
    inventoryItemPrice3: { strategy: 'css' as const, value: '[data-test="inventory-item-price"]', scope: '[data-test="inventory-container"]', scopeText: 'Sauce Labs Backpack', actionKind: 'text' as const },
    addToCartSauceLabsFleeceJacket: { strategy: 'role' as const, value: 'Add to cart', role: 'button', actionKind: 'button' as const },
    item2Img: { strategy: 'css' as const, value: '[data-test="item-2-img-link"]', actionKind: 'link' as const },
    item2Title: { strategy: 'role' as const, value: 'Sauce Labs Onesie', role: 'link', actionKind: 'link' as const },
    inventoryItemNameSauceLabsOnesie: { strategy: 'css' as const, value: '[data-test="inventory-item-name"]', scope: '[data-test="inventory-container"]', scopeText: 'Sauce Labs Backpack', actionKind: 'text' as const },
    inventoryItemDescRibSnapInfantOnesieForThe: { strategy: 'css' as const, value: '[data-test="inventory-item-desc"]', scope: '[data-test="inventory-container"]', scopeText: 'Sauce Labs Backpack', actionKind: 'text' as const },
    inventoryItemPrice4: { strategy: 'css' as const, value: '[data-test="inventory-item-price"]', scope: '[data-test="inventory-container"]', scopeText: 'Sauce Labs Backpack', actionKind: 'text' as const },
    addToCartSauceLabsOnesie: { strategy: 'role' as const, value: 'Add to cart', role: 'button', actionKind: 'button' as const },
    item3Img: { strategy: 'css' as const, value: '[data-test="item-3-img-link"]', actionKind: 'link' as const },
    item3Title: { strategy: 'role' as const, value: 'Test.allTheThings() T-Shirt (Red)', role: 'link', actionKind: 'link' as const },
    inventoryItemNameTestAllTheThingsTShirtR: { strategy: 'css' as const, value: '[data-test="inventory-item-name"]', scope: '[data-test="inventory-container"]', scopeText: 'Sauce Labs Backpack', actionKind: 'text' as const },
    inventoryItemDescThisClassicSauceLabsTShir: { strategy: 'css' as const, value: '[data-test="inventory-item-desc"]', scope: '[data-test="inventory-container"]', scopeText: 'Sauce Labs Backpack', actionKind: 'text' as const },
    inventoryItemPrice5: { strategy: 'css' as const, value: '[data-test="inventory-item-price"]', scope: '[data-test="inventory-container"]', scopeText: 'Sauce Labs Backpack', actionKind: 'text' as const },
    addToCartTestAllthethingsTShirtRed: { strategy: 'role' as const, value: 'Add to cart', role: 'button', actionKind: 'button' as const },
    socialTwitter: { strategy: 'role' as const, value: 'Twitter', role: 'link', actionKind: 'link' as const },
    socialFacebook: { strategy: 'role' as const, value: 'Facebook', role: 'link', actionKind: 'link' as const },
    socialLinkedin: { strategy: 'role' as const, value: 'LinkedIn', role: 'link', actionKind: 'link' as const },
    footerCopy: { strategy: 'css' as const, value: '[data-test="footer-copy"]', actionKind: 'text' as const },
    removeSauceLabsBackpack: { strategy: 'role' as const, value: 'Remove', role: 'button', actionKind: 'button' as const },
    removeSauceLabsBikeLight: { strategy: 'role' as const, value: 'Remove', role: 'button', actionKind: 'button' as const },
    removeSauceLabsBoltTShirt: { strategy: 'role' as const, value: 'Remove', role: 'button', actionKind: 'button' as const },
    removeSauceLabsFleeceJacket: { strategy: 'role' as const, value: 'Remove', role: 'button', actionKind: 'button' as const },
    removeSauceLabsOnesie: { strategy: 'role' as const, value: 'Remove', role: 'button', actionKind: 'button' as const },
    removeTestAllthethingsTShirtRed: { strategy: 'role' as const, value: 'Remove', role: 'button', actionKind: 'button' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickOpenMenu(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.openMenu));
  }

  async doubleClickOpenMenu(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.openMenu));
  }

  async expectOpenMenuVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.openMenu), expected, timeoutMs);
  }

  async expectOpenMenuContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.openMenu), substring, timeoutMs);
  }

  async scrollOpenMenuIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.openMenu));
  }

  async clickShoppingCart(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.shoppingCart));
  }

  async doubleClickShoppingCart(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.shoppingCart));
  }

  async expectShoppingCartVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.shoppingCart), timeoutMs);
  }

  async expectShoppingCartHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.shoppingCart), timeoutMs);
  }

  async expectShoppingCartText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.shoppingCart), expected, timeoutMs);
  }

  async expectShoppingCartContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.shoppingCart), substring, timeoutMs);
  }

  async scrollShoppingCartIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.shoppingCart));
  }

  async getInnerTextTitle(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, InventoryPage.L.title));
  }

  async expectTitleVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.title), timeoutMs);
  }

  async expectTitleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.title), timeoutMs);
  }

  async expectTitleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.title), expected, timeoutMs);
  }

  async expectTitleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.title), substring, timeoutMs);
  }

  async scrollTitleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.title));
  }

  async getInnerTextActiveOption(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, InventoryPage.L.activeOption));
  }

  async expectActiveOptionVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.activeOption), timeoutMs);
  }

  async expectActiveOptionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.activeOption), timeoutMs);
  }

  async expectActiveOptionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.activeOption), expected, timeoutMs);
  }

  async expectActiveOptionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.activeOption), substring, timeoutMs);
  }

  async scrollActiveOptionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.activeOption));
  }

  async selectProductSort(value: string): Promise<void> {
    await selectOptionWhenVisible(webLocator(this.page, InventoryPage.L.productSort), value);
  }

  async expectProductSortVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.productSort), timeoutMs);
  }

  async expectProductSortHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.productSort), timeoutMs);
  }

  async expectProductSortEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.productSort), timeoutMs);
  }

  async expectProductSortDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.productSort), timeoutMs);
  }

  async expectProductSortValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.productSort), expected, timeoutMs);
  }

  async expectProductSortFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.productSort), timeoutMs);
  }

  async scrollProductSortIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.productSort));
  }

  async clickItem4Img(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.item4Img));
  }

  async doubleClickItem4Img(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.item4Img));
  }

  async expectItem4ImgVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.item4Img), timeoutMs);
  }

  async expectItem4ImgHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.item4Img), timeoutMs);
  }

  async expectItem4ImgText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.item4Img), expected, timeoutMs);
  }

  async expectItem4ImgContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.item4Img), substring, timeoutMs);
  }

  async scrollItem4ImgIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.item4Img));
  }

  async clickItem4Title(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.item4Title));
  }

  async doubleClickItem4Title(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.item4Title));
  }

  async expectItem4TitleVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.item4Title), timeoutMs);
  }

  async expectItem4TitleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.item4Title), timeoutMs);
  }

  async expectItem4TitleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.item4Title), expected, timeoutMs);
  }

  async expectItem4TitleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.item4Title), substring, timeoutMs);
  }

  async scrollItem4TitleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.item4Title));
  }

  async getInnerTextInventoryItemNameSauceLabsBackpack(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsBackpack));
  }

  async expectInventoryItemNameSauceLabsBackpackVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsBackpack), timeoutMs);
  }

  async expectInventoryItemNameSauceLabsBackpackHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsBackpack), timeoutMs);
  }

  async expectInventoryItemNameSauceLabsBackpackText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsBackpack), expected, timeoutMs);
  }

  async expectInventoryItemNameSauceLabsBackpackContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsBackpack), substring, timeoutMs);
  }

  async scrollInventoryItemNameSauceLabsBackpackIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsBackpack));
  }

  async getInnerTextInventoryItemDescSauceLabsBackpack(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemDescSauceLabsBackpack));
  }

  async expectInventoryItemDescSauceLabsBackpackVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.inventoryItemDescSauceLabsBackpack), timeoutMs);
  }

  async expectInventoryItemDescSauceLabsBackpackHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.inventoryItemDescSauceLabsBackpack), timeoutMs);
  }

  async expectInventoryItemDescSauceLabsBackpackText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.inventoryItemDescSauceLabsBackpack), expected, timeoutMs);
  }

  async expectInventoryItemDescSauceLabsBackpackContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.inventoryItemDescSauceLabsBackpack), substring, timeoutMs);
  }

  async scrollInventoryItemDescSauceLabsBackpackIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemDescSauceLabsBackpack));
  }

  async getInnerTextInventoryItemPriceSauceLabsBackpack(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemPriceSauceLabsBackpack));
  }

  async expectInventoryItemPriceSauceLabsBackpackVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.inventoryItemPriceSauceLabsBackpack), timeoutMs);
  }

  async expectInventoryItemPriceSauceLabsBackpackHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.inventoryItemPriceSauceLabsBackpack), timeoutMs);
  }

  async expectInventoryItemPriceSauceLabsBackpackText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.inventoryItemPriceSauceLabsBackpack), expected, timeoutMs);
  }

  async expectInventoryItemPriceSauceLabsBackpackContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.inventoryItemPriceSauceLabsBackpack), substring, timeoutMs);
  }

  async scrollInventoryItemPriceSauceLabsBackpackIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemPriceSauceLabsBackpack));
  }

  async clickAddToCartSauceLabsBackpack(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBackpack));
  }

  async doubleClickAddToCartSauceLabsBackpack(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBackpack));
  }

  async expectAddToCartSauceLabsBackpackVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBackpack), timeoutMs);
  }

  async expectAddToCartSauceLabsBackpackHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBackpack), timeoutMs);
  }

  async expectAddToCartSauceLabsBackpackEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBackpack), timeoutMs);
  }

  async expectAddToCartSauceLabsBackpackDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBackpack), timeoutMs);
  }

  async expectAddToCartSauceLabsBackpackText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBackpack), expected, timeoutMs);
  }

  async expectAddToCartSauceLabsBackpackContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBackpack), substring, timeoutMs);
  }

  async scrollAddToCartSauceLabsBackpackIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBackpack));
  }

  async clickItem0Img(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.item0Img));
  }

  async doubleClickItem0Img(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.item0Img));
  }

  async expectItem0ImgVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.item0Img), timeoutMs);
  }

  async expectItem0ImgHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.item0Img), timeoutMs);
  }

  async expectItem0ImgText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.item0Img), expected, timeoutMs);
  }

  async expectItem0ImgContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.item0Img), substring, timeoutMs);
  }

  async scrollItem0ImgIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.item0Img));
  }

  async clickItem0Title(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.item0Title));
  }

  async doubleClickItem0Title(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.item0Title));
  }

  async expectItem0TitleVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.item0Title), timeoutMs);
  }

  async expectItem0TitleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.item0Title), timeoutMs);
  }

  async expectItem0TitleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.item0Title), expected, timeoutMs);
  }

  async expectItem0TitleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.item0Title), substring, timeoutMs);
  }

  async scrollItem0TitleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.item0Title));
  }

  async getInnerTextInventoryItemName(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemName));
  }

  async expectInventoryItemNameVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.inventoryItemName), timeoutMs);
  }

  async expectInventoryItemNameHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.inventoryItemName), timeoutMs);
  }

  async expectInventoryItemNameText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.inventoryItemName), expected, timeoutMs);
  }

  async expectInventoryItemNameContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.inventoryItemName), substring, timeoutMs);
  }

  async scrollInventoryItemNameIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemName));
  }

  async getInnerTextInventoryItemDesc(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemDesc));
  }

  async expectInventoryItemDescVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.inventoryItemDesc), timeoutMs);
  }

  async expectInventoryItemDescHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.inventoryItemDesc), timeoutMs);
  }

  async expectInventoryItemDescText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.inventoryItemDesc), expected, timeoutMs);
  }

  async expectInventoryItemDescContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.inventoryItemDesc), substring, timeoutMs);
  }

  async scrollInventoryItemDescIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemDesc));
  }

  async getInnerTextInventoryItemPrice(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemPrice));
  }

  async expectInventoryItemPriceVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.inventoryItemPrice), timeoutMs);
  }

  async expectInventoryItemPriceHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.inventoryItemPrice), timeoutMs);
  }

  async expectInventoryItemPriceText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.inventoryItemPrice), expected, timeoutMs);
  }

  async expectInventoryItemPriceContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.inventoryItemPrice), substring, timeoutMs);
  }

  async scrollInventoryItemPriceIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemPrice));
  }

  async clickAddToCartSauceLabsBikeLight(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBikeLight));
  }

  async doubleClickAddToCartSauceLabsBikeLight(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBikeLight));
  }

  async expectAddToCartSauceLabsBikeLightVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBikeLight), timeoutMs);
  }

  async expectAddToCartSauceLabsBikeLightHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBikeLight), timeoutMs);
  }

  async expectAddToCartSauceLabsBikeLightEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBikeLight), timeoutMs);
  }

  async expectAddToCartSauceLabsBikeLightDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBikeLight), timeoutMs);
  }

  async expectAddToCartSauceLabsBikeLightText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBikeLight), expected, timeoutMs);
  }

  async expectAddToCartSauceLabsBikeLightContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBikeLight), substring, timeoutMs);
  }

  async scrollAddToCartSauceLabsBikeLightIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBikeLight));
  }

  async clickItem1Img(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.item1Img));
  }

  async doubleClickItem1Img(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.item1Img));
  }

  async expectItem1ImgVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.item1Img), timeoutMs);
  }

  async expectItem1ImgHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.item1Img), timeoutMs);
  }

  async expectItem1ImgText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.item1Img), expected, timeoutMs);
  }

  async expectItem1ImgContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.item1Img), substring, timeoutMs);
  }

  async scrollItem1ImgIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.item1Img));
  }

  async clickItem1Title(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.item1Title));
  }

  async doubleClickItem1Title(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.item1Title));
  }

  async expectItem1TitleVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.item1Title), timeoutMs);
  }

  async expectItem1TitleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.item1Title), timeoutMs);
  }

  async expectItem1TitleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.item1Title), expected, timeoutMs);
  }

  async expectItem1TitleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.item1Title), substring, timeoutMs);
  }

  async scrollItem1TitleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.item1Title));
  }

  async getInnerTextInventoryItemNameSauceLabsBoltTShirt(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsBoltTShirt));
  }

  async expectInventoryItemNameSauceLabsBoltTShirtVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsBoltTShirt), timeoutMs);
  }

  async expectInventoryItemNameSauceLabsBoltTShirtHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsBoltTShirt), timeoutMs);
  }

  async expectInventoryItemNameSauceLabsBoltTShirtText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsBoltTShirt), expected, timeoutMs);
  }

  async expectInventoryItemNameSauceLabsBoltTShirtContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsBoltTShirt), substring, timeoutMs);
  }

  async scrollInventoryItemNameSauceLabsBoltTShirtIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsBoltTShirt));
  }

  async getInnerTextInventoryItemDescGetYourTestingSuperheroOn(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemDescGetYourTestingSuperheroOn));
  }

  async expectInventoryItemDescGetYourTestingSuperheroOnVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.inventoryItemDescGetYourTestingSuperheroOn), timeoutMs);
  }

  async expectInventoryItemDescGetYourTestingSuperheroOnHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.inventoryItemDescGetYourTestingSuperheroOn), timeoutMs);
  }

  async expectInventoryItemDescGetYourTestingSuperheroOnText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.inventoryItemDescGetYourTestingSuperheroOn), expected, timeoutMs);
  }

  async expectInventoryItemDescGetYourTestingSuperheroOnContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.inventoryItemDescGetYourTestingSuperheroOn), substring, timeoutMs);
  }

  async scrollInventoryItemDescGetYourTestingSuperheroOnIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemDescGetYourTestingSuperheroOn));
  }

  async getInnerTextInventoryItemPrice2(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemPrice2));
  }

  async expectInventoryItemPrice2Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.inventoryItemPrice2), timeoutMs);
  }

  async expectInventoryItemPrice2Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.inventoryItemPrice2), timeoutMs);
  }

  async expectInventoryItemPrice2Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.inventoryItemPrice2), expected, timeoutMs);
  }

  async expectInventoryItemPrice2ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.inventoryItemPrice2), substring, timeoutMs);
  }

  async scrollInventoryItemPrice2IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemPrice2));
  }

  async clickAddToCartSauceLabsBoltTShirt(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBoltTShirt));
  }

  async doubleClickAddToCartSauceLabsBoltTShirt(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBoltTShirt));
  }

  async expectAddToCartSauceLabsBoltTShirtVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBoltTShirt), timeoutMs);
  }

  async expectAddToCartSauceLabsBoltTShirtHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBoltTShirt), timeoutMs);
  }

  async expectAddToCartSauceLabsBoltTShirtEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBoltTShirt), timeoutMs);
  }

  async expectAddToCartSauceLabsBoltTShirtDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBoltTShirt), timeoutMs);
  }

  async expectAddToCartSauceLabsBoltTShirtText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBoltTShirt), expected, timeoutMs);
  }

  async expectAddToCartSauceLabsBoltTShirtContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBoltTShirt), substring, timeoutMs);
  }

  async scrollAddToCartSauceLabsBoltTShirtIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBoltTShirt));
  }

  async clickItem5Img(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.item5Img));
  }

  async doubleClickItem5Img(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.item5Img));
  }

  async expectItem5ImgVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.item5Img), timeoutMs);
  }

  async expectItem5ImgHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.item5Img), timeoutMs);
  }

  async expectItem5ImgText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.item5Img), expected, timeoutMs);
  }

  async expectItem5ImgContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.item5Img), substring, timeoutMs);
  }

  async scrollItem5ImgIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.item5Img));
  }

  async clickItem5Title(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.item5Title));
  }

  async doubleClickItem5Title(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.item5Title));
  }

  async expectItem5TitleVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.item5Title), timeoutMs);
  }

  async expectItem5TitleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.item5Title), timeoutMs);
  }

  async expectItem5TitleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.item5Title), expected, timeoutMs);
  }

  async expectItem5TitleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.item5Title), substring, timeoutMs);
  }

  async scrollItem5TitleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.item5Title));
  }

  async getInnerTextInventoryItemNameSauceLabsFleeceJacket(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsFleeceJacket));
  }

  async expectInventoryItemNameSauceLabsFleeceJacketVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsFleeceJacket), timeoutMs);
  }

  async expectInventoryItemNameSauceLabsFleeceJacketHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsFleeceJacket), timeoutMs);
  }

  async expectInventoryItemNameSauceLabsFleeceJacketText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsFleeceJacket), expected, timeoutMs);
  }

  async expectInventoryItemNameSauceLabsFleeceJacketContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsFleeceJacket), substring, timeoutMs);
  }

  async scrollInventoryItemNameSauceLabsFleeceJacketIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsFleeceJacket));
  }

  async getInnerTextInventoryItemDescItSNotEveryDayThatYouCo(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemDescItSNotEveryDayThatYouCo));
  }

  async expectInventoryItemDescItSNotEveryDayThatYouCoVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.inventoryItemDescItSNotEveryDayThatYouCo), timeoutMs);
  }

  async expectInventoryItemDescItSNotEveryDayThatYouCoHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.inventoryItemDescItSNotEveryDayThatYouCo), timeoutMs);
  }

  async expectInventoryItemDescItSNotEveryDayThatYouCoText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.inventoryItemDescItSNotEveryDayThatYouCo), expected, timeoutMs);
  }

  async expectInventoryItemDescItSNotEveryDayThatYouCoContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.inventoryItemDescItSNotEveryDayThatYouCo), substring, timeoutMs);
  }

  async scrollInventoryItemDescItSNotEveryDayThatYouCoIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemDescItSNotEveryDayThatYouCo));
  }

  async getInnerTextInventoryItemPrice3(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemPrice3));
  }

  async expectInventoryItemPrice3Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.inventoryItemPrice3), timeoutMs);
  }

  async expectInventoryItemPrice3Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.inventoryItemPrice3), timeoutMs);
  }

  async expectInventoryItemPrice3Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.inventoryItemPrice3), expected, timeoutMs);
  }

  async expectInventoryItemPrice3ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.inventoryItemPrice3), substring, timeoutMs);
  }

  async scrollInventoryItemPrice3IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemPrice3));
  }

  async clickAddToCartSauceLabsFleeceJacket(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsFleeceJacket));
  }

  async doubleClickAddToCartSauceLabsFleeceJacket(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsFleeceJacket));
  }

  async expectAddToCartSauceLabsFleeceJacketVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsFleeceJacket), timeoutMs);
  }

  async expectAddToCartSauceLabsFleeceJacketHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.addToCartSauceLabsFleeceJacket), timeoutMs);
  }

  async expectAddToCartSauceLabsFleeceJacketEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.addToCartSauceLabsFleeceJacket), timeoutMs);
  }

  async expectAddToCartSauceLabsFleeceJacketDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.addToCartSauceLabsFleeceJacket), timeoutMs);
  }

  async expectAddToCartSauceLabsFleeceJacketText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.addToCartSauceLabsFleeceJacket), expected, timeoutMs);
  }

  async expectAddToCartSauceLabsFleeceJacketContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.addToCartSauceLabsFleeceJacket), substring, timeoutMs);
  }

  async scrollAddToCartSauceLabsFleeceJacketIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsFleeceJacket));
  }

  async clickItem2Img(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.item2Img));
  }

  async doubleClickItem2Img(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.item2Img));
  }

  async expectItem2ImgVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.item2Img), timeoutMs);
  }

  async expectItem2ImgHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.item2Img), timeoutMs);
  }

  async expectItem2ImgText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.item2Img), expected, timeoutMs);
  }

  async expectItem2ImgContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.item2Img), substring, timeoutMs);
  }

  async scrollItem2ImgIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.item2Img));
  }

  async clickItem2Title(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.item2Title));
  }

  async doubleClickItem2Title(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.item2Title));
  }

  async expectItem2TitleVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.item2Title), timeoutMs);
  }

  async expectItem2TitleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.item2Title), timeoutMs);
  }

  async expectItem2TitleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.item2Title), expected, timeoutMs);
  }

  async expectItem2TitleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.item2Title), substring, timeoutMs);
  }

  async scrollItem2TitleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.item2Title));
  }

  async getInnerTextInventoryItemNameSauceLabsOnesie(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsOnesie));
  }

  async expectInventoryItemNameSauceLabsOnesieVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsOnesie), timeoutMs);
  }

  async expectInventoryItemNameSauceLabsOnesieHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsOnesie), timeoutMs);
  }

  async expectInventoryItemNameSauceLabsOnesieText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsOnesie), expected, timeoutMs);
  }

  async expectInventoryItemNameSauceLabsOnesieContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsOnesie), substring, timeoutMs);
  }

  async scrollInventoryItemNameSauceLabsOnesieIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsOnesie));
  }

  async getInnerTextInventoryItemDescRibSnapInfantOnesieForThe(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemDescRibSnapInfantOnesieForThe));
  }

  async expectInventoryItemDescRibSnapInfantOnesieForTheVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.inventoryItemDescRibSnapInfantOnesieForThe), timeoutMs);
  }

  async expectInventoryItemDescRibSnapInfantOnesieForTheHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.inventoryItemDescRibSnapInfantOnesieForThe), timeoutMs);
  }

  async expectInventoryItemDescRibSnapInfantOnesieForTheText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.inventoryItemDescRibSnapInfantOnesieForThe), expected, timeoutMs);
  }

  async expectInventoryItemDescRibSnapInfantOnesieForTheContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.inventoryItemDescRibSnapInfantOnesieForThe), substring, timeoutMs);
  }

  async scrollInventoryItemDescRibSnapInfantOnesieForTheIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemDescRibSnapInfantOnesieForThe));
  }

  async getInnerTextInventoryItemPrice4(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemPrice4));
  }

  async expectInventoryItemPrice4Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.inventoryItemPrice4), timeoutMs);
  }

  async expectInventoryItemPrice4Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.inventoryItemPrice4), timeoutMs);
  }

  async expectInventoryItemPrice4Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.inventoryItemPrice4), expected, timeoutMs);
  }

  async expectInventoryItemPrice4ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.inventoryItemPrice4), substring, timeoutMs);
  }

  async scrollInventoryItemPrice4IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemPrice4));
  }

  async clickAddToCartSauceLabsOnesie(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsOnesie));
  }

  async doubleClickAddToCartSauceLabsOnesie(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsOnesie));
  }

  async expectAddToCartSauceLabsOnesieVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsOnesie), timeoutMs);
  }

  async expectAddToCartSauceLabsOnesieHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.addToCartSauceLabsOnesie), timeoutMs);
  }

  async expectAddToCartSauceLabsOnesieEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.addToCartSauceLabsOnesie), timeoutMs);
  }

  async expectAddToCartSauceLabsOnesieDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.addToCartSauceLabsOnesie), timeoutMs);
  }

  async expectAddToCartSauceLabsOnesieText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.addToCartSauceLabsOnesie), expected, timeoutMs);
  }

  async expectAddToCartSauceLabsOnesieContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.addToCartSauceLabsOnesie), substring, timeoutMs);
  }

  async scrollAddToCartSauceLabsOnesieIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsOnesie));
  }

  async clickItem3Img(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.item3Img));
  }

  async doubleClickItem3Img(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.item3Img));
  }

  async expectItem3ImgVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.item3Img), timeoutMs);
  }

  async expectItem3ImgHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.item3Img), timeoutMs);
  }

  async expectItem3ImgText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.item3Img), expected, timeoutMs);
  }

  async expectItem3ImgContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.item3Img), substring, timeoutMs);
  }

  async scrollItem3ImgIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.item3Img));
  }

  async clickItem3Title(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.item3Title));
  }

  async doubleClickItem3Title(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.item3Title));
  }

  async expectItem3TitleVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.item3Title), timeoutMs);
  }

  async expectItem3TitleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.item3Title), timeoutMs);
  }

  async expectItem3TitleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.item3Title), expected, timeoutMs);
  }

  async expectItem3TitleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.item3Title), substring, timeoutMs);
  }

  async scrollItem3TitleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.item3Title));
  }

  async getInnerTextInventoryItemNameTestAllTheThingsTShirtR(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemNameTestAllTheThingsTShirtR));
  }

  async expectInventoryItemNameTestAllTheThingsTShirtRVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.inventoryItemNameTestAllTheThingsTShirtR), timeoutMs);
  }

  async expectInventoryItemNameTestAllTheThingsTShirtRHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.inventoryItemNameTestAllTheThingsTShirtR), timeoutMs);
  }

  async expectInventoryItemNameTestAllTheThingsTShirtRText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.inventoryItemNameTestAllTheThingsTShirtR), expected, timeoutMs);
  }

  async expectInventoryItemNameTestAllTheThingsTShirtRContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.inventoryItemNameTestAllTheThingsTShirtR), substring, timeoutMs);
  }

  async scrollInventoryItemNameTestAllTheThingsTShirtRIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemNameTestAllTheThingsTShirtR));
  }

  async getInnerTextInventoryItemDescThisClassicSauceLabsTShir(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemDescThisClassicSauceLabsTShir));
  }

  async expectInventoryItemDescThisClassicSauceLabsTShirVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.inventoryItemDescThisClassicSauceLabsTShir), timeoutMs);
  }

  async expectInventoryItemDescThisClassicSauceLabsTShirHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.inventoryItemDescThisClassicSauceLabsTShir), timeoutMs);
  }

  async expectInventoryItemDescThisClassicSauceLabsTShirText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.inventoryItemDescThisClassicSauceLabsTShir), expected, timeoutMs);
  }

  async expectInventoryItemDescThisClassicSauceLabsTShirContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.inventoryItemDescThisClassicSauceLabsTShir), substring, timeoutMs);
  }

  async scrollInventoryItemDescThisClassicSauceLabsTShirIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemDescThisClassicSauceLabsTShir));
  }

  async getInnerTextInventoryItemPrice5(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemPrice5));
  }

  async expectInventoryItemPrice5Visible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.inventoryItemPrice5), timeoutMs);
  }

  async expectInventoryItemPrice5Hidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.inventoryItemPrice5), timeoutMs);
  }

  async expectInventoryItemPrice5Text(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.inventoryItemPrice5), expected, timeoutMs);
  }

  async expectInventoryItemPrice5ContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.inventoryItemPrice5), substring, timeoutMs);
  }

  async scrollInventoryItemPrice5IntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemPrice5));
  }

  async clickAddToCartTestAllthethingsTShirtRed(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.addToCartTestAllthethingsTShirtRed));
  }

  async doubleClickAddToCartTestAllthethingsTShirtRed(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.addToCartTestAllthethingsTShirtRed));
  }

  async expectAddToCartTestAllthethingsTShirtRedVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.addToCartTestAllthethingsTShirtRed), timeoutMs);
  }

  async expectAddToCartTestAllthethingsTShirtRedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.addToCartTestAllthethingsTShirtRed), timeoutMs);
  }

  async expectAddToCartTestAllthethingsTShirtRedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.addToCartTestAllthethingsTShirtRed), timeoutMs);
  }

  async expectAddToCartTestAllthethingsTShirtRedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.addToCartTestAllthethingsTShirtRed), timeoutMs);
  }

  async expectAddToCartTestAllthethingsTShirtRedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.addToCartTestAllthethingsTShirtRed), expected, timeoutMs);
  }

  async expectAddToCartTestAllthethingsTShirtRedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.addToCartTestAllthethingsTShirtRed), substring, timeoutMs);
  }

  async scrollAddToCartTestAllthethingsTShirtRedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.addToCartTestAllthethingsTShirtRed));
  }

  async clickSocialTwitter(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.socialTwitter));
  }

  async doubleClickSocialTwitter(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.socialTwitter));
  }

  async expectSocialTwitterVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.socialTwitter), timeoutMs);
  }

  async expectSocialTwitterHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.socialTwitter), timeoutMs);
  }

  async expectSocialTwitterText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.socialTwitter), expected, timeoutMs);
  }

  async expectSocialTwitterContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.socialTwitter), substring, timeoutMs);
  }

  async scrollSocialTwitterIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.socialTwitter));
  }

  async clickSocialFacebook(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.socialFacebook));
  }

  async doubleClickSocialFacebook(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.socialFacebook));
  }

  async expectSocialFacebookVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.socialFacebook), timeoutMs);
  }

  async expectSocialFacebookHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.socialFacebook), timeoutMs);
  }

  async expectSocialFacebookText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.socialFacebook), expected, timeoutMs);
  }

  async expectSocialFacebookContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.socialFacebook), substring, timeoutMs);
  }

  async scrollSocialFacebookIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.socialFacebook));
  }

  async clickSocialLinkedin(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.socialLinkedin));
  }

  async doubleClickSocialLinkedin(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.socialLinkedin));
  }

  async expectSocialLinkedinVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.socialLinkedin), timeoutMs);
  }

  async expectSocialLinkedinHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.socialLinkedin), timeoutMs);
  }

  async expectSocialLinkedinText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.socialLinkedin), expected, timeoutMs);
  }

  async expectSocialLinkedinContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.socialLinkedin), substring, timeoutMs);
  }

  async scrollSocialLinkedinIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.socialLinkedin));
  }

  async getInnerTextFooterCopy(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, InventoryPage.L.footerCopy));
  }

  async expectFooterCopyVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.footerCopy), timeoutMs);
  }

  async expectFooterCopyHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.footerCopy), timeoutMs);
  }

  async expectFooterCopyText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.footerCopy), expected, timeoutMs);
  }

  async expectFooterCopyContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.footerCopy), substring, timeoutMs);
  }

  async scrollFooterCopyIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.footerCopy));
  }

  async getPageTitle(): Promise<string> {
    return this.page.title();
  }

  async expectPageTitle(expected: string | RegExp, timeoutMs = 30_000): Promise<void> {
    await expect(this.page).toHaveTitle(expected, { timeout: timeoutMs });
  }

  async clickRemoveSauceLabsBackpack(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.removeSauceLabsBackpack));
  }

  async doubleClickRemoveSauceLabsBackpack(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.removeSauceLabsBackpack));
  }

  async expectRemoveSauceLabsBackpackVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.removeSauceLabsBackpack), timeoutMs);
  }

  async expectRemoveSauceLabsBackpackHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.removeSauceLabsBackpack), timeoutMs);
  }

  async expectRemoveSauceLabsBackpackEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.removeSauceLabsBackpack), timeoutMs);
  }

  async expectRemoveSauceLabsBackpackDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.removeSauceLabsBackpack), timeoutMs);
  }

  async expectRemoveSauceLabsBackpackText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.removeSauceLabsBackpack), expected, timeoutMs);
  }

  async expectRemoveSauceLabsBackpackContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.removeSauceLabsBackpack), substring, timeoutMs);
  }

  async scrollRemoveSauceLabsBackpackIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.removeSauceLabsBackpack));
  }

  async clickRemoveSauceLabsBikeLight(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.removeSauceLabsBikeLight));
  }

  async doubleClickRemoveSauceLabsBikeLight(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.removeSauceLabsBikeLight));
  }

  async expectRemoveSauceLabsBikeLightVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.removeSauceLabsBikeLight), timeoutMs);
  }

  async expectRemoveSauceLabsBikeLightHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.removeSauceLabsBikeLight), timeoutMs);
  }

  async expectRemoveSauceLabsBikeLightEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.removeSauceLabsBikeLight), timeoutMs);
  }

  async expectRemoveSauceLabsBikeLightDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.removeSauceLabsBikeLight), timeoutMs);
  }

  async expectRemoveSauceLabsBikeLightText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.removeSauceLabsBikeLight), expected, timeoutMs);
  }

  async expectRemoveSauceLabsBikeLightContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.removeSauceLabsBikeLight), substring, timeoutMs);
  }

  async scrollRemoveSauceLabsBikeLightIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.removeSauceLabsBikeLight));
  }

  async clickRemoveSauceLabsBoltTShirt(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.removeSauceLabsBoltTShirt));
  }

  async doubleClickRemoveSauceLabsBoltTShirt(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.removeSauceLabsBoltTShirt));
  }

  async expectRemoveSauceLabsBoltTShirtVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.removeSauceLabsBoltTShirt), timeoutMs);
  }

  async expectRemoveSauceLabsBoltTShirtHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.removeSauceLabsBoltTShirt), timeoutMs);
  }

  async expectRemoveSauceLabsBoltTShirtEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.removeSauceLabsBoltTShirt), timeoutMs);
  }

  async expectRemoveSauceLabsBoltTShirtDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.removeSauceLabsBoltTShirt), timeoutMs);
  }

  async expectRemoveSauceLabsBoltTShirtText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.removeSauceLabsBoltTShirt), expected, timeoutMs);
  }

  async expectRemoveSauceLabsBoltTShirtContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.removeSauceLabsBoltTShirt), substring, timeoutMs);
  }

  async scrollRemoveSauceLabsBoltTShirtIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.removeSauceLabsBoltTShirt));
  }

  async clickRemoveSauceLabsFleeceJacket(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.removeSauceLabsFleeceJacket));
  }

  async doubleClickRemoveSauceLabsFleeceJacket(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.removeSauceLabsFleeceJacket));
  }

  async expectRemoveSauceLabsFleeceJacketVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.removeSauceLabsFleeceJacket), timeoutMs);
  }

  async expectRemoveSauceLabsFleeceJacketHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.removeSauceLabsFleeceJacket), timeoutMs);
  }

  async expectRemoveSauceLabsFleeceJacketEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.removeSauceLabsFleeceJacket), timeoutMs);
  }

  async expectRemoveSauceLabsFleeceJacketDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.removeSauceLabsFleeceJacket), timeoutMs);
  }

  async expectRemoveSauceLabsFleeceJacketText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.removeSauceLabsFleeceJacket), expected, timeoutMs);
  }

  async expectRemoveSauceLabsFleeceJacketContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.removeSauceLabsFleeceJacket), substring, timeoutMs);
  }

  async scrollRemoveSauceLabsFleeceJacketIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.removeSauceLabsFleeceJacket));
  }

  async clickRemoveSauceLabsOnesie(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.removeSauceLabsOnesie));
  }

  async doubleClickRemoveSauceLabsOnesie(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.removeSauceLabsOnesie));
  }

  async expectRemoveSauceLabsOnesieVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.removeSauceLabsOnesie), timeoutMs);
  }

  async expectRemoveSauceLabsOnesieHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.removeSauceLabsOnesie), timeoutMs);
  }

  async expectRemoveSauceLabsOnesieEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.removeSauceLabsOnesie), timeoutMs);
  }

  async expectRemoveSauceLabsOnesieDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.removeSauceLabsOnesie), timeoutMs);
  }

  async expectRemoveSauceLabsOnesieText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.removeSauceLabsOnesie), expected, timeoutMs);
  }

  async expectRemoveSauceLabsOnesieContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.removeSauceLabsOnesie), substring, timeoutMs);
  }

  async scrollRemoveSauceLabsOnesieIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.removeSauceLabsOnesie));
  }

  async clickRemoveTestAllthethingsTShirtRed(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.removeTestAllthethingsTShirtRed));
  }

  async doubleClickRemoveTestAllthethingsTShirtRed(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.removeTestAllthethingsTShirtRed));
  }

  async expectRemoveTestAllthethingsTShirtRedVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryPage.L.removeTestAllthethingsTShirtRed), timeoutMs);
  }

  async expectRemoveTestAllthethingsTShirtRedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryPage.L.removeTestAllthethingsTShirtRed), timeoutMs);
  }

  async expectRemoveTestAllthethingsTShirtRedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.removeTestAllthethingsTShirtRed), timeoutMs);
  }

  async expectRemoveTestAllthethingsTShirtRedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.removeTestAllthethingsTShirtRed), timeoutMs);
  }

  async expectRemoveTestAllthethingsTShirtRedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.removeTestAllthethingsTShirtRed), expected, timeoutMs);
  }

  async expectRemoveTestAllthethingsTShirtRedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.removeTestAllthethingsTShirtRed), substring, timeoutMs);
  }

  async scrollRemoveTestAllthethingsTShirtRedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryPage.L.removeTestAllthethingsTShirtRed));
  }


  async longPressOpenMenu(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.openMenu));
  }

  async expectOpenMenuValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.openMenu), value, timeoutMs);
  }

  async expectOpenMenuChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.openMenu), count, timeoutMs);
  }

  async longPressShoppingCart(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.shoppingCart));
  }

  async expectShoppingCartValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.shoppingCart), value, timeoutMs);
  }

  async expectShoppingCartEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.shoppingCart), timeoutMs);
  }

  async expectShoppingCartDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.shoppingCart), timeoutMs);
  }

  async expectShoppingCartChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.shoppingCart), timeoutMs);
  }

  async expectShoppingCartUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.shoppingCart), timeoutMs);
  }

  async expectShoppingCartFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.shoppingCart), timeoutMs);
  }

  async expectShoppingCartCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.shoppingCart), count, timeoutMs);
  }

  async clickTitle(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.title));
  }

  async doubleClickTitle(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.title));
  }

  async longPressTitle(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.title));
  }

  async expectTitleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.title), value, timeoutMs);
  }

  async expectTitleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.title), timeoutMs);
  }

  async expectTitleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.title), timeoutMs);
  }

  async expectTitleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.title), timeoutMs);
  }

  async expectTitleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.title), timeoutMs);
  }

  async expectTitleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.title), timeoutMs);
  }

  async expectTitleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.title), count, timeoutMs);
  }

  async clickActiveOption(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.activeOption));
  }

  async doubleClickActiveOption(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.activeOption));
  }

  async longPressActiveOption(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.activeOption));
  }

  async expectActiveOptionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.activeOption), value, timeoutMs);
  }

  async expectActiveOptionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.activeOption), timeoutMs);
  }

  async expectActiveOptionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.activeOption), timeoutMs);
  }

  async expectActiveOptionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.activeOption), timeoutMs);
  }

  async expectActiveOptionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.activeOption), timeoutMs);
  }

  async expectActiveOptionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.activeOption), timeoutMs);
  }

  async expectActiveOptionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.activeOption), count, timeoutMs);
  }

  async expectProductSortText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryPage.L.productSort), expected, timeoutMs);
  }

  async expectProductSortContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryPage.L.productSort), substring, timeoutMs);
  }

  async expectProductSortChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.productSort), timeoutMs);
  }

  async expectProductSortUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.productSort), timeoutMs);
  }

  async expectProductSortCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.productSort), count, timeoutMs);
  }

  async longPressItem4Img(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.item4Img));
  }

  async expectItem4ImgValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.item4Img), value, timeoutMs);
  }

  async expectItem4ImgEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.item4Img), timeoutMs);
  }

  async expectItem4ImgDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.item4Img), timeoutMs);
  }

  async expectItem4ImgChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.item4Img), timeoutMs);
  }

  async expectItem4ImgUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.item4Img), timeoutMs);
  }

  async expectItem4ImgFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.item4Img), timeoutMs);
  }

  async expectItem4ImgCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.item4Img), count, timeoutMs);
  }

  async longPressItem4Title(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.item4Title));
  }

  async expectItem4TitleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.item4Title), value, timeoutMs);
  }

  async expectItem4TitleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.item4Title), timeoutMs);
  }

  async expectItem4TitleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.item4Title), timeoutMs);
  }

  async expectItem4TitleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.item4Title), timeoutMs);
  }

  async expectItem4TitleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.item4Title), timeoutMs);
  }

  async expectItem4TitleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.item4Title), timeoutMs);
  }

  async expectItem4TitleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.item4Title), count, timeoutMs);
  }

  async clickInventoryItemNameSauceLabsBackpack(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsBackpack));
  }

  async doubleClickInventoryItemNameSauceLabsBackpack(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsBackpack));
  }

  async longPressInventoryItemNameSauceLabsBackpack(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsBackpack));
  }

  async expectInventoryItemNameSauceLabsBackpackValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsBackpack), value, timeoutMs);
  }

  async expectInventoryItemNameSauceLabsBackpackEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsBackpack), timeoutMs);
  }

  async expectInventoryItemNameSauceLabsBackpackDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsBackpack), timeoutMs);
  }

  async expectInventoryItemNameSauceLabsBackpackChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsBackpack), timeoutMs);
  }

  async expectInventoryItemNameSauceLabsBackpackUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsBackpack), timeoutMs);
  }

  async expectInventoryItemNameSauceLabsBackpackFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsBackpack), timeoutMs);
  }

  async expectInventoryItemNameSauceLabsBackpackCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsBackpack), count, timeoutMs);
  }

  async clickInventoryItemDescSauceLabsBackpack(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemDescSauceLabsBackpack));
  }

  async doubleClickInventoryItemDescSauceLabsBackpack(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemDescSauceLabsBackpack));
  }

  async longPressInventoryItemDescSauceLabsBackpack(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemDescSauceLabsBackpack));
  }

  async expectInventoryItemDescSauceLabsBackpackValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.inventoryItemDescSauceLabsBackpack), value, timeoutMs);
  }

  async expectInventoryItemDescSauceLabsBackpackEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.inventoryItemDescSauceLabsBackpack), timeoutMs);
  }

  async expectInventoryItemDescSauceLabsBackpackDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.inventoryItemDescSauceLabsBackpack), timeoutMs);
  }

  async expectInventoryItemDescSauceLabsBackpackChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.inventoryItemDescSauceLabsBackpack), timeoutMs);
  }

  async expectInventoryItemDescSauceLabsBackpackUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.inventoryItemDescSauceLabsBackpack), timeoutMs);
  }

  async expectInventoryItemDescSauceLabsBackpackFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.inventoryItemDescSauceLabsBackpack), timeoutMs);
  }

  async expectInventoryItemDescSauceLabsBackpackCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.inventoryItemDescSauceLabsBackpack), count, timeoutMs);
  }

  async clickInventoryItemPriceSauceLabsBackpack(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemPriceSauceLabsBackpack));
  }

  async doubleClickInventoryItemPriceSauceLabsBackpack(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemPriceSauceLabsBackpack));
  }

  async longPressInventoryItemPriceSauceLabsBackpack(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemPriceSauceLabsBackpack));
  }

  async expectInventoryItemPriceSauceLabsBackpackValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.inventoryItemPriceSauceLabsBackpack), value, timeoutMs);
  }

  async expectInventoryItemPriceSauceLabsBackpackEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.inventoryItemPriceSauceLabsBackpack), timeoutMs);
  }

  async expectInventoryItemPriceSauceLabsBackpackDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.inventoryItemPriceSauceLabsBackpack), timeoutMs);
  }

  async expectInventoryItemPriceSauceLabsBackpackChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.inventoryItemPriceSauceLabsBackpack), timeoutMs);
  }

  async expectInventoryItemPriceSauceLabsBackpackUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.inventoryItemPriceSauceLabsBackpack), timeoutMs);
  }

  async expectInventoryItemPriceSauceLabsBackpackFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.inventoryItemPriceSauceLabsBackpack), timeoutMs);
  }

  async expectInventoryItemPriceSauceLabsBackpackCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.inventoryItemPriceSauceLabsBackpack), count, timeoutMs);
  }

  async longPressAddToCartSauceLabsBackpack(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBackpack));
  }

  async expectAddToCartSauceLabsBackpackValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBackpack), value, timeoutMs);
  }

  async expectAddToCartSauceLabsBackpackChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBackpack), timeoutMs);
  }

  async expectAddToCartSauceLabsBackpackUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBackpack), timeoutMs);
  }

  async expectAddToCartSauceLabsBackpackFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBackpack), timeoutMs);
  }

  async expectAddToCartSauceLabsBackpackCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBackpack), count, timeoutMs);
  }

  async longPressItem0Img(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.item0Img));
  }

  async expectItem0ImgValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.item0Img), value, timeoutMs);
  }

  async expectItem0ImgEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.item0Img), timeoutMs);
  }

  async expectItem0ImgDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.item0Img), timeoutMs);
  }

  async expectItem0ImgChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.item0Img), timeoutMs);
  }

  async expectItem0ImgUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.item0Img), timeoutMs);
  }

  async expectItem0ImgFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.item0Img), timeoutMs);
  }

  async expectItem0ImgCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.item0Img), count, timeoutMs);
  }

  async longPressItem0Title(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.item0Title));
  }

  async expectItem0TitleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.item0Title), value, timeoutMs);
  }

  async expectItem0TitleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.item0Title), timeoutMs);
  }

  async expectItem0TitleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.item0Title), timeoutMs);
  }

  async expectItem0TitleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.item0Title), timeoutMs);
  }

  async expectItem0TitleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.item0Title), timeoutMs);
  }

  async expectItem0TitleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.item0Title), timeoutMs);
  }

  async expectItem0TitleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.item0Title), count, timeoutMs);
  }

  async clickInventoryItemName(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemName));
  }

  async doubleClickInventoryItemName(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemName));
  }

  async longPressInventoryItemName(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemName));
  }

  async expectInventoryItemNameValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.inventoryItemName), value, timeoutMs);
  }

  async expectInventoryItemNameEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.inventoryItemName), timeoutMs);
  }

  async expectInventoryItemNameDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.inventoryItemName), timeoutMs);
  }

  async expectInventoryItemNameChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.inventoryItemName), timeoutMs);
  }

  async expectInventoryItemNameUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.inventoryItemName), timeoutMs);
  }

  async expectInventoryItemNameFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.inventoryItemName), timeoutMs);
  }

  async expectInventoryItemNameCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.inventoryItemName), count, timeoutMs);
  }

  async clickInventoryItemDesc(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemDesc));
  }

  async doubleClickInventoryItemDesc(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemDesc));
  }

  async longPressInventoryItemDesc(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemDesc));
  }

  async expectInventoryItemDescValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.inventoryItemDesc), value, timeoutMs);
  }

  async expectInventoryItemDescEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.inventoryItemDesc), timeoutMs);
  }

  async expectInventoryItemDescDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.inventoryItemDesc), timeoutMs);
  }

  async expectInventoryItemDescChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.inventoryItemDesc), timeoutMs);
  }

  async expectInventoryItemDescUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.inventoryItemDesc), timeoutMs);
  }

  async expectInventoryItemDescFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.inventoryItemDesc), timeoutMs);
  }

  async expectInventoryItemDescCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.inventoryItemDesc), count, timeoutMs);
  }

  async clickInventoryItemPrice(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemPrice));
  }

  async doubleClickInventoryItemPrice(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemPrice));
  }

  async longPressInventoryItemPrice(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemPrice));
  }

  async expectInventoryItemPriceValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.inventoryItemPrice), value, timeoutMs);
  }

  async expectInventoryItemPriceEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.inventoryItemPrice), timeoutMs);
  }

  async expectInventoryItemPriceDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.inventoryItemPrice), timeoutMs);
  }

  async expectInventoryItemPriceChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.inventoryItemPrice), timeoutMs);
  }

  async expectInventoryItemPriceUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.inventoryItemPrice), timeoutMs);
  }

  async expectInventoryItemPriceFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.inventoryItemPrice), timeoutMs);
  }

  async expectInventoryItemPriceCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.inventoryItemPrice), count, timeoutMs);
  }

  async longPressAddToCartSauceLabsBikeLight(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBikeLight));
  }

  async expectAddToCartSauceLabsBikeLightValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBikeLight), value, timeoutMs);
  }

  async expectAddToCartSauceLabsBikeLightChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBikeLight), timeoutMs);
  }

  async expectAddToCartSauceLabsBikeLightUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBikeLight), timeoutMs);
  }

  async expectAddToCartSauceLabsBikeLightFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBikeLight), timeoutMs);
  }

  async expectAddToCartSauceLabsBikeLightCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBikeLight), count, timeoutMs);
  }

  async longPressItem1Img(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.item1Img));
  }

  async expectItem1ImgValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.item1Img), value, timeoutMs);
  }

  async expectItem1ImgEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.item1Img), timeoutMs);
  }

  async expectItem1ImgDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.item1Img), timeoutMs);
  }

  async expectItem1ImgChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.item1Img), timeoutMs);
  }

  async expectItem1ImgUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.item1Img), timeoutMs);
  }

  async expectItem1ImgFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.item1Img), timeoutMs);
  }

  async expectItem1ImgCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.item1Img), count, timeoutMs);
  }

  async longPressItem1Title(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.item1Title));
  }

  async expectItem1TitleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.item1Title), value, timeoutMs);
  }

  async expectItem1TitleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.item1Title), timeoutMs);
  }

  async expectItem1TitleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.item1Title), timeoutMs);
  }

  async expectItem1TitleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.item1Title), timeoutMs);
  }

  async expectItem1TitleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.item1Title), timeoutMs);
  }

  async expectItem1TitleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.item1Title), timeoutMs);
  }

  async expectItem1TitleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.item1Title), count, timeoutMs);
  }

  async clickInventoryItemNameSauceLabsBoltTShirt(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsBoltTShirt));
  }

  async doubleClickInventoryItemNameSauceLabsBoltTShirt(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsBoltTShirt));
  }

  async longPressInventoryItemNameSauceLabsBoltTShirt(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsBoltTShirt));
  }

  async expectInventoryItemNameSauceLabsBoltTShirtValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsBoltTShirt), value, timeoutMs);
  }

  async expectInventoryItemNameSauceLabsBoltTShirtEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsBoltTShirt), timeoutMs);
  }

  async expectInventoryItemNameSauceLabsBoltTShirtDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsBoltTShirt), timeoutMs);
  }

  async expectInventoryItemNameSauceLabsBoltTShirtChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsBoltTShirt), timeoutMs);
  }

  async expectInventoryItemNameSauceLabsBoltTShirtUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsBoltTShirt), timeoutMs);
  }

  async expectInventoryItemNameSauceLabsBoltTShirtFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsBoltTShirt), timeoutMs);
  }

  async expectInventoryItemNameSauceLabsBoltTShirtCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsBoltTShirt), count, timeoutMs);
  }

  async clickInventoryItemDescGetYourTestingSuperheroOn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemDescGetYourTestingSuperheroOn));
  }

  async doubleClickInventoryItemDescGetYourTestingSuperheroOn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemDescGetYourTestingSuperheroOn));
  }

  async longPressInventoryItemDescGetYourTestingSuperheroOn(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemDescGetYourTestingSuperheroOn));
  }

  async expectInventoryItemDescGetYourTestingSuperheroOnValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.inventoryItemDescGetYourTestingSuperheroOn), value, timeoutMs);
  }

  async expectInventoryItemDescGetYourTestingSuperheroOnEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.inventoryItemDescGetYourTestingSuperheroOn), timeoutMs);
  }

  async expectInventoryItemDescGetYourTestingSuperheroOnDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.inventoryItemDescGetYourTestingSuperheroOn), timeoutMs);
  }

  async expectInventoryItemDescGetYourTestingSuperheroOnChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.inventoryItemDescGetYourTestingSuperheroOn), timeoutMs);
  }

  async expectInventoryItemDescGetYourTestingSuperheroOnUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.inventoryItemDescGetYourTestingSuperheroOn), timeoutMs);
  }

  async expectInventoryItemDescGetYourTestingSuperheroOnFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.inventoryItemDescGetYourTestingSuperheroOn), timeoutMs);
  }

  async expectInventoryItemDescGetYourTestingSuperheroOnCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.inventoryItemDescGetYourTestingSuperheroOn), count, timeoutMs);
  }

  async clickInventoryItemPrice2(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemPrice2));
  }

  async doubleClickInventoryItemPrice2(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemPrice2));
  }

  async longPressInventoryItemPrice2(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemPrice2));
  }

  async expectInventoryItemPrice2Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.inventoryItemPrice2), value, timeoutMs);
  }

  async expectInventoryItemPrice2Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.inventoryItemPrice2), timeoutMs);
  }

  async expectInventoryItemPrice2Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.inventoryItemPrice2), timeoutMs);
  }

  async expectInventoryItemPrice2Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.inventoryItemPrice2), timeoutMs);
  }

  async expectInventoryItemPrice2Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.inventoryItemPrice2), timeoutMs);
  }

  async expectInventoryItemPrice2Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.inventoryItemPrice2), timeoutMs);
  }

  async expectInventoryItemPrice2Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.inventoryItemPrice2), count, timeoutMs);
  }

  async longPressAddToCartSauceLabsBoltTShirt(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBoltTShirt));
  }

  async expectAddToCartSauceLabsBoltTShirtValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBoltTShirt), value, timeoutMs);
  }

  async expectAddToCartSauceLabsBoltTShirtChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBoltTShirt), timeoutMs);
  }

  async expectAddToCartSauceLabsBoltTShirtUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBoltTShirt), timeoutMs);
  }

  async expectAddToCartSauceLabsBoltTShirtFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBoltTShirt), timeoutMs);
  }

  async expectAddToCartSauceLabsBoltTShirtCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.addToCartSauceLabsBoltTShirt), count, timeoutMs);
  }

  async longPressItem5Img(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.item5Img));
  }

  async expectItem5ImgValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.item5Img), value, timeoutMs);
  }

  async expectItem5ImgEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.item5Img), timeoutMs);
  }

  async expectItem5ImgDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.item5Img), timeoutMs);
  }

  async expectItem5ImgChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.item5Img), timeoutMs);
  }

  async expectItem5ImgUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.item5Img), timeoutMs);
  }

  async expectItem5ImgFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.item5Img), timeoutMs);
  }

  async expectItem5ImgCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.item5Img), count, timeoutMs);
  }

  async longPressItem5Title(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.item5Title));
  }

  async expectItem5TitleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.item5Title), value, timeoutMs);
  }

  async expectItem5TitleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.item5Title), timeoutMs);
  }

  async expectItem5TitleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.item5Title), timeoutMs);
  }

  async expectItem5TitleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.item5Title), timeoutMs);
  }

  async expectItem5TitleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.item5Title), timeoutMs);
  }

  async expectItem5TitleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.item5Title), timeoutMs);
  }

  async expectItem5TitleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.item5Title), count, timeoutMs);
  }

  async clickInventoryItemNameSauceLabsFleeceJacket(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsFleeceJacket));
  }

  async doubleClickInventoryItemNameSauceLabsFleeceJacket(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsFleeceJacket));
  }

  async longPressInventoryItemNameSauceLabsFleeceJacket(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsFleeceJacket));
  }

  async expectInventoryItemNameSauceLabsFleeceJacketValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsFleeceJacket), value, timeoutMs);
  }

  async expectInventoryItemNameSauceLabsFleeceJacketEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsFleeceJacket), timeoutMs);
  }

  async expectInventoryItemNameSauceLabsFleeceJacketDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsFleeceJacket), timeoutMs);
  }

  async expectInventoryItemNameSauceLabsFleeceJacketChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsFleeceJacket), timeoutMs);
  }

  async expectInventoryItemNameSauceLabsFleeceJacketUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsFleeceJacket), timeoutMs);
  }

  async expectInventoryItemNameSauceLabsFleeceJacketFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsFleeceJacket), timeoutMs);
  }

  async expectInventoryItemNameSauceLabsFleeceJacketCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsFleeceJacket), count, timeoutMs);
  }

  async clickInventoryItemDescItSNotEveryDayThatYouCo(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemDescItSNotEveryDayThatYouCo));
  }

  async doubleClickInventoryItemDescItSNotEveryDayThatYouCo(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemDescItSNotEveryDayThatYouCo));
  }

  async longPressInventoryItemDescItSNotEveryDayThatYouCo(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemDescItSNotEveryDayThatYouCo));
  }

  async expectInventoryItemDescItSNotEveryDayThatYouCoValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.inventoryItemDescItSNotEveryDayThatYouCo), value, timeoutMs);
  }

  async expectInventoryItemDescItSNotEveryDayThatYouCoEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.inventoryItemDescItSNotEveryDayThatYouCo), timeoutMs);
  }

  async expectInventoryItemDescItSNotEveryDayThatYouCoDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.inventoryItemDescItSNotEveryDayThatYouCo), timeoutMs);
  }

  async expectInventoryItemDescItSNotEveryDayThatYouCoChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.inventoryItemDescItSNotEveryDayThatYouCo), timeoutMs);
  }

  async expectInventoryItemDescItSNotEveryDayThatYouCoUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.inventoryItemDescItSNotEveryDayThatYouCo), timeoutMs);
  }

  async expectInventoryItemDescItSNotEveryDayThatYouCoFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.inventoryItemDescItSNotEveryDayThatYouCo), timeoutMs);
  }

  async expectInventoryItemDescItSNotEveryDayThatYouCoCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.inventoryItemDescItSNotEveryDayThatYouCo), count, timeoutMs);
  }

  async clickInventoryItemPrice3(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemPrice3));
  }

  async doubleClickInventoryItemPrice3(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemPrice3));
  }

  async longPressInventoryItemPrice3(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemPrice3));
  }

  async expectInventoryItemPrice3Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.inventoryItemPrice3), value, timeoutMs);
  }

  async expectInventoryItemPrice3Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.inventoryItemPrice3), timeoutMs);
  }

  async expectInventoryItemPrice3Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.inventoryItemPrice3), timeoutMs);
  }

  async expectInventoryItemPrice3Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.inventoryItemPrice3), timeoutMs);
  }

  async expectInventoryItemPrice3Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.inventoryItemPrice3), timeoutMs);
  }

  async expectInventoryItemPrice3Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.inventoryItemPrice3), timeoutMs);
  }

  async expectInventoryItemPrice3Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.inventoryItemPrice3), count, timeoutMs);
  }

  async longPressAddToCartSauceLabsFleeceJacket(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsFleeceJacket));
  }

  async expectAddToCartSauceLabsFleeceJacketValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.addToCartSauceLabsFleeceJacket), value, timeoutMs);
  }

  async expectAddToCartSauceLabsFleeceJacketChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.addToCartSauceLabsFleeceJacket), timeoutMs);
  }

  async expectAddToCartSauceLabsFleeceJacketUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.addToCartSauceLabsFleeceJacket), timeoutMs);
  }

  async expectAddToCartSauceLabsFleeceJacketFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.addToCartSauceLabsFleeceJacket), timeoutMs);
  }

  async expectAddToCartSauceLabsFleeceJacketCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.addToCartSauceLabsFleeceJacket), count, timeoutMs);
  }

  async longPressItem2Img(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.item2Img));
  }

  async expectItem2ImgValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.item2Img), value, timeoutMs);
  }

  async expectItem2ImgEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.item2Img), timeoutMs);
  }

  async expectItem2ImgDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.item2Img), timeoutMs);
  }

  async expectItem2ImgChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.item2Img), timeoutMs);
  }

  async expectItem2ImgUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.item2Img), timeoutMs);
  }

  async expectItem2ImgFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.item2Img), timeoutMs);
  }

  async expectItem2ImgCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.item2Img), count, timeoutMs);
  }

  async longPressItem2Title(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.item2Title));
  }

  async expectItem2TitleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.item2Title), value, timeoutMs);
  }

  async expectItem2TitleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.item2Title), timeoutMs);
  }

  async expectItem2TitleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.item2Title), timeoutMs);
  }

  async expectItem2TitleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.item2Title), timeoutMs);
  }

  async expectItem2TitleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.item2Title), timeoutMs);
  }

  async expectItem2TitleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.item2Title), timeoutMs);
  }

  async expectItem2TitleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.item2Title), count, timeoutMs);
  }

  async clickInventoryItemNameSauceLabsOnesie(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsOnesie));
  }

  async doubleClickInventoryItemNameSauceLabsOnesie(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsOnesie));
  }

  async longPressInventoryItemNameSauceLabsOnesie(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsOnesie));
  }

  async expectInventoryItemNameSauceLabsOnesieValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsOnesie), value, timeoutMs);
  }

  async expectInventoryItemNameSauceLabsOnesieEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsOnesie), timeoutMs);
  }

  async expectInventoryItemNameSauceLabsOnesieDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsOnesie), timeoutMs);
  }

  async expectInventoryItemNameSauceLabsOnesieChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsOnesie), timeoutMs);
  }

  async expectInventoryItemNameSauceLabsOnesieUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsOnesie), timeoutMs);
  }

  async expectInventoryItemNameSauceLabsOnesieFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsOnesie), timeoutMs);
  }

  async expectInventoryItemNameSauceLabsOnesieCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.inventoryItemNameSauceLabsOnesie), count, timeoutMs);
  }

  async clickInventoryItemDescRibSnapInfantOnesieForThe(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemDescRibSnapInfantOnesieForThe));
  }

  async doubleClickInventoryItemDescRibSnapInfantOnesieForThe(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemDescRibSnapInfantOnesieForThe));
  }

  async longPressInventoryItemDescRibSnapInfantOnesieForThe(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemDescRibSnapInfantOnesieForThe));
  }

  async expectInventoryItemDescRibSnapInfantOnesieForTheValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.inventoryItemDescRibSnapInfantOnesieForThe), value, timeoutMs);
  }

  async expectInventoryItemDescRibSnapInfantOnesieForTheEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.inventoryItemDescRibSnapInfantOnesieForThe), timeoutMs);
  }

  async expectInventoryItemDescRibSnapInfantOnesieForTheDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.inventoryItemDescRibSnapInfantOnesieForThe), timeoutMs);
  }

  async expectInventoryItemDescRibSnapInfantOnesieForTheChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.inventoryItemDescRibSnapInfantOnesieForThe), timeoutMs);
  }

  async expectInventoryItemDescRibSnapInfantOnesieForTheUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.inventoryItemDescRibSnapInfantOnesieForThe), timeoutMs);
  }

  async expectInventoryItemDescRibSnapInfantOnesieForTheFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.inventoryItemDescRibSnapInfantOnesieForThe), timeoutMs);
  }

  async expectInventoryItemDescRibSnapInfantOnesieForTheCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.inventoryItemDescRibSnapInfantOnesieForThe), count, timeoutMs);
  }

  async clickInventoryItemPrice4(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemPrice4));
  }

  async doubleClickInventoryItemPrice4(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemPrice4));
  }

  async longPressInventoryItemPrice4(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemPrice4));
  }

  async expectInventoryItemPrice4Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.inventoryItemPrice4), value, timeoutMs);
  }

  async expectInventoryItemPrice4Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.inventoryItemPrice4), timeoutMs);
  }

  async expectInventoryItemPrice4Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.inventoryItemPrice4), timeoutMs);
  }

  async expectInventoryItemPrice4Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.inventoryItemPrice4), timeoutMs);
  }

  async expectInventoryItemPrice4Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.inventoryItemPrice4), timeoutMs);
  }

  async expectInventoryItemPrice4Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.inventoryItemPrice4), timeoutMs);
  }

  async expectInventoryItemPrice4Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.inventoryItemPrice4), count, timeoutMs);
  }

  async longPressAddToCartSauceLabsOnesie(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.addToCartSauceLabsOnesie));
  }

  async expectAddToCartSauceLabsOnesieValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.addToCartSauceLabsOnesie), value, timeoutMs);
  }

  async expectAddToCartSauceLabsOnesieChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.addToCartSauceLabsOnesie), timeoutMs);
  }

  async expectAddToCartSauceLabsOnesieUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.addToCartSauceLabsOnesie), timeoutMs);
  }

  async expectAddToCartSauceLabsOnesieFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.addToCartSauceLabsOnesie), timeoutMs);
  }

  async expectAddToCartSauceLabsOnesieCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.addToCartSauceLabsOnesie), count, timeoutMs);
  }

  async longPressItem3Img(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.item3Img));
  }

  async expectItem3ImgValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.item3Img), value, timeoutMs);
  }

  async expectItem3ImgEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.item3Img), timeoutMs);
  }

  async expectItem3ImgDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.item3Img), timeoutMs);
  }

  async expectItem3ImgChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.item3Img), timeoutMs);
  }

  async expectItem3ImgUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.item3Img), timeoutMs);
  }

  async expectItem3ImgFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.item3Img), timeoutMs);
  }

  async expectItem3ImgCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.item3Img), count, timeoutMs);
  }

  async longPressItem3Title(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.item3Title));
  }

  async expectItem3TitleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.item3Title), value, timeoutMs);
  }

  async expectItem3TitleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.item3Title), timeoutMs);
  }

  async expectItem3TitleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.item3Title), timeoutMs);
  }

  async expectItem3TitleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.item3Title), timeoutMs);
  }

  async expectItem3TitleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.item3Title), timeoutMs);
  }

  async expectItem3TitleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.item3Title), timeoutMs);
  }

  async expectItem3TitleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.item3Title), count, timeoutMs);
  }

  async clickInventoryItemNameTestAllTheThingsTShirtR(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemNameTestAllTheThingsTShirtR));
  }

  async doubleClickInventoryItemNameTestAllTheThingsTShirtR(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemNameTestAllTheThingsTShirtR));
  }

  async longPressInventoryItemNameTestAllTheThingsTShirtR(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemNameTestAllTheThingsTShirtR));
  }

  async expectInventoryItemNameTestAllTheThingsTShirtRValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.inventoryItemNameTestAllTheThingsTShirtR), value, timeoutMs);
  }

  async expectInventoryItemNameTestAllTheThingsTShirtREnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.inventoryItemNameTestAllTheThingsTShirtR), timeoutMs);
  }

  async expectInventoryItemNameTestAllTheThingsTShirtRDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.inventoryItemNameTestAllTheThingsTShirtR), timeoutMs);
  }

  async expectInventoryItemNameTestAllTheThingsTShirtRChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.inventoryItemNameTestAllTheThingsTShirtR), timeoutMs);
  }

  async expectInventoryItemNameTestAllTheThingsTShirtRUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.inventoryItemNameTestAllTheThingsTShirtR), timeoutMs);
  }

  async expectInventoryItemNameTestAllTheThingsTShirtRFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.inventoryItemNameTestAllTheThingsTShirtR), timeoutMs);
  }

  async expectInventoryItemNameTestAllTheThingsTShirtRCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.inventoryItemNameTestAllTheThingsTShirtR), count, timeoutMs);
  }

  async clickInventoryItemDescThisClassicSauceLabsTShir(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemDescThisClassicSauceLabsTShir));
  }

  async doubleClickInventoryItemDescThisClassicSauceLabsTShir(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemDescThisClassicSauceLabsTShir));
  }

  async longPressInventoryItemDescThisClassicSauceLabsTShir(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemDescThisClassicSauceLabsTShir));
  }

  async expectInventoryItemDescThisClassicSauceLabsTShirValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.inventoryItemDescThisClassicSauceLabsTShir), value, timeoutMs);
  }

  async expectInventoryItemDescThisClassicSauceLabsTShirEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.inventoryItemDescThisClassicSauceLabsTShir), timeoutMs);
  }

  async expectInventoryItemDescThisClassicSauceLabsTShirDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.inventoryItemDescThisClassicSauceLabsTShir), timeoutMs);
  }

  async expectInventoryItemDescThisClassicSauceLabsTShirChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.inventoryItemDescThisClassicSauceLabsTShir), timeoutMs);
  }

  async expectInventoryItemDescThisClassicSauceLabsTShirUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.inventoryItemDescThisClassicSauceLabsTShir), timeoutMs);
  }

  async expectInventoryItemDescThisClassicSauceLabsTShirFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.inventoryItemDescThisClassicSauceLabsTShir), timeoutMs);
  }

  async expectInventoryItemDescThisClassicSauceLabsTShirCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.inventoryItemDescThisClassicSauceLabsTShir), count, timeoutMs);
  }

  async clickInventoryItemPrice5(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemPrice5));
  }

  async doubleClickInventoryItemPrice5(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemPrice5));
  }

  async longPressInventoryItemPrice5(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.inventoryItemPrice5));
  }

  async expectInventoryItemPrice5Value(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.inventoryItemPrice5), value, timeoutMs);
  }

  async expectInventoryItemPrice5Enabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.inventoryItemPrice5), timeoutMs);
  }

  async expectInventoryItemPrice5Disabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.inventoryItemPrice5), timeoutMs);
  }

  async expectInventoryItemPrice5Checked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.inventoryItemPrice5), timeoutMs);
  }

  async expectInventoryItemPrice5Unchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.inventoryItemPrice5), timeoutMs);
  }

  async expectInventoryItemPrice5Focused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.inventoryItemPrice5), timeoutMs);
  }

  async expectInventoryItemPrice5Count(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.inventoryItemPrice5), count, timeoutMs);
  }

  async longPressSocialTwitter(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.socialTwitter));
  }

  async expectSocialTwitterValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.socialTwitter), value, timeoutMs);
  }

  async expectSocialTwitterEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.socialTwitter), timeoutMs);
  }

  async expectSocialTwitterDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.socialTwitter), timeoutMs);
  }

  async expectSocialTwitterChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.socialTwitter), timeoutMs);
  }

  async expectSocialTwitterUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.socialTwitter), timeoutMs);
  }

  async expectSocialTwitterFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.socialTwitter), timeoutMs);
  }

  async expectSocialTwitterCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.socialTwitter), count, timeoutMs);
  }

  async longPressSocialFacebook(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.socialFacebook));
  }

  async expectSocialFacebookValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.socialFacebook), value, timeoutMs);
  }

  async expectSocialFacebookEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.socialFacebook), timeoutMs);
  }

  async expectSocialFacebookDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.socialFacebook), timeoutMs);
  }

  async expectSocialFacebookChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.socialFacebook), timeoutMs);
  }

  async expectSocialFacebookUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.socialFacebook), timeoutMs);
  }

  async expectSocialFacebookFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.socialFacebook), timeoutMs);
  }

  async expectSocialFacebookCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.socialFacebook), count, timeoutMs);
  }

  async longPressSocialLinkedin(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.socialLinkedin));
  }

  async expectSocialLinkedinValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.socialLinkedin), value, timeoutMs);
  }

  async expectSocialLinkedinEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.socialLinkedin), timeoutMs);
  }

  async expectSocialLinkedinDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.socialLinkedin), timeoutMs);
  }

  async expectSocialLinkedinChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.socialLinkedin), timeoutMs);
  }

  async expectSocialLinkedinUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.socialLinkedin), timeoutMs);
  }

  async expectSocialLinkedinFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.socialLinkedin), timeoutMs);
  }

  async expectSocialLinkedinCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.socialLinkedin), count, timeoutMs);
  }

  async clickFooterCopy(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryPage.L.footerCopy));
  }

  async doubleClickFooterCopy(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryPage.L.footerCopy));
  }

  async longPressFooterCopy(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.footerCopy));
  }

  async expectFooterCopyValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.footerCopy), value, timeoutMs);
  }

  async expectFooterCopyEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryPage.L.footerCopy), timeoutMs);
  }

  async expectFooterCopyDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryPage.L.footerCopy), timeoutMs);
  }

  async expectFooterCopyChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.footerCopy), timeoutMs);
  }

  async expectFooterCopyUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.footerCopy), timeoutMs);
  }

  async expectFooterCopyFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.footerCopy), timeoutMs);
  }

  async expectFooterCopyCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.footerCopy), count, timeoutMs);
  }

  async longPressRemoveSauceLabsBackpack(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.removeSauceLabsBackpack));
  }

  async expectRemoveSauceLabsBackpackValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.removeSauceLabsBackpack), value, timeoutMs);
  }

  async expectRemoveSauceLabsBackpackChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.removeSauceLabsBackpack), timeoutMs);
  }

  async expectRemoveSauceLabsBackpackUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.removeSauceLabsBackpack), timeoutMs);
  }

  async expectRemoveSauceLabsBackpackFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.removeSauceLabsBackpack), timeoutMs);
  }

  async expectRemoveSauceLabsBackpackCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.removeSauceLabsBackpack), count, timeoutMs);
  }

  async longPressRemoveSauceLabsBikeLight(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.removeSauceLabsBikeLight));
  }

  async expectRemoveSauceLabsBikeLightValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.removeSauceLabsBikeLight), value, timeoutMs);
  }

  async expectRemoveSauceLabsBikeLightChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.removeSauceLabsBikeLight), timeoutMs);
  }

  async expectRemoveSauceLabsBikeLightUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.removeSauceLabsBikeLight), timeoutMs);
  }

  async expectRemoveSauceLabsBikeLightFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.removeSauceLabsBikeLight), timeoutMs);
  }

  async expectRemoveSauceLabsBikeLightCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.removeSauceLabsBikeLight), count, timeoutMs);
  }

  async longPressRemoveSauceLabsBoltTShirt(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.removeSauceLabsBoltTShirt));
  }

  async expectRemoveSauceLabsBoltTShirtValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.removeSauceLabsBoltTShirt), value, timeoutMs);
  }

  async expectRemoveSauceLabsBoltTShirtChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.removeSauceLabsBoltTShirt), timeoutMs);
  }

  async expectRemoveSauceLabsBoltTShirtUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.removeSauceLabsBoltTShirt), timeoutMs);
  }

  async expectRemoveSauceLabsBoltTShirtFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.removeSauceLabsBoltTShirt), timeoutMs);
  }

  async expectRemoveSauceLabsBoltTShirtCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.removeSauceLabsBoltTShirt), count, timeoutMs);
  }

  async longPressRemoveSauceLabsFleeceJacket(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.removeSauceLabsFleeceJacket));
  }

  async expectRemoveSauceLabsFleeceJacketValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.removeSauceLabsFleeceJacket), value, timeoutMs);
  }

  async expectRemoveSauceLabsFleeceJacketChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.removeSauceLabsFleeceJacket), timeoutMs);
  }

  async expectRemoveSauceLabsFleeceJacketUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.removeSauceLabsFleeceJacket), timeoutMs);
  }

  async expectRemoveSauceLabsFleeceJacketFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.removeSauceLabsFleeceJacket), timeoutMs);
  }

  async expectRemoveSauceLabsFleeceJacketCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.removeSauceLabsFleeceJacket), count, timeoutMs);
  }

  async longPressRemoveSauceLabsOnesie(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryPage.L.removeSauceLabsOnesie));
  }

  async expectRemoveSauceLabsOnesieValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryPage.L.removeSauceLabsOnesie), value, timeoutMs);
  }

  async expectRemoveSauceLabsOnesieChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryPage.L.removeSauceLabsOnesie), timeoutMs);
  }

  async expectRemoveSauceLabsOnesieUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryPage.L.removeSauceLabsOnesie), timeoutMs);
  }

  async expectRemoveSauceLabsOnesieFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryPage.L.removeSauceLabsOnesie), timeoutMs);
  }

  async expectRemoveSauceLabsOnesieCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryPage.L.removeSauceLabsOnesie), count, timeoutMs);
  }

}
