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

export class InventoryItemPage {
  private static readonly L = {
    openMenu: { strategy: 'role' as const, value: 'Open Menu', role: 'button', actionKind: 'button' as const },
    shoppingCart: { strategy: 'css' as const, value: '[data-test="shopping-cart-link"]', actionKind: 'link' as const },
    backToProducts: { strategy: 'role' as const, value: 'Back to products', role: 'button', actionKind: 'button' as const },
    inventoryItemName: { strategy: 'css' as const, value: '[data-test="inventory-item-name"]', actionKind: 'text' as const },
    inventoryItemDesc: { strategy: 'css' as const, value: '[data-test="inventory-item-desc"]', actionKind: 'text' as const },
    inventoryItemPrice: { strategy: 'css' as const, value: '[data-test="inventory-item-price"]', actionKind: 'text' as const },
    remove: { strategy: 'role' as const, value: 'Remove', role: 'button', actionKind: 'button' as const },
    socialTwitter: { strategy: 'role' as const, value: 'Twitter', role: 'link', actionKind: 'link' as const },
    socialFacebook: { strategy: 'role' as const, value: 'Facebook', role: 'link', actionKind: 'link' as const },
    socialLinkedin: { strategy: 'role' as const, value: 'LinkedIn', role: 'link', actionKind: 'link' as const },
    footerCopy: { strategy: 'css' as const, value: '[data-test="footer-copy"]', actionKind: 'text' as const },
    addToCart: { strategy: 'role' as const, value: 'Add to cart', role: 'button', actionKind: 'button' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickOpenMenu(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryItemPage.L.openMenu));
  }

  async doubleClickOpenMenu(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryItemPage.L.openMenu));
  }

  async expectOpenMenuVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryItemPage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryItemPage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryItemPage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryItemPage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryItemPage.L.openMenu), expected, timeoutMs);
  }

  async expectOpenMenuContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryItemPage.L.openMenu), substring, timeoutMs);
  }

  async scrollOpenMenuIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryItemPage.L.openMenu));
  }

  async clickShoppingCart(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryItemPage.L.shoppingCart));
  }

  async doubleClickShoppingCart(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryItemPage.L.shoppingCart));
  }

  async expectShoppingCartVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryItemPage.L.shoppingCart), timeoutMs);
  }

  async expectShoppingCartHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryItemPage.L.shoppingCart), timeoutMs);
  }

  async expectShoppingCartText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryItemPage.L.shoppingCart), expected, timeoutMs);
  }

  async expectShoppingCartContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryItemPage.L.shoppingCart), substring, timeoutMs);
  }

  async scrollShoppingCartIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryItemPage.L.shoppingCart));
  }

  async clickBackToProducts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryItemPage.L.backToProducts));
  }

  async doubleClickBackToProducts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryItemPage.L.backToProducts));
  }

  async expectBackToProductsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryItemPage.L.backToProducts), timeoutMs);
  }

  async expectBackToProductsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryItemPage.L.backToProducts), timeoutMs);
  }

  async expectBackToProductsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryItemPage.L.backToProducts), timeoutMs);
  }

  async expectBackToProductsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryItemPage.L.backToProducts), timeoutMs);
  }

  async expectBackToProductsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryItemPage.L.backToProducts), expected, timeoutMs);
  }

  async expectBackToProductsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryItemPage.L.backToProducts), substring, timeoutMs);
  }

  async scrollBackToProductsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryItemPage.L.backToProducts));
  }

  async getInnerTextInventoryItemName(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, InventoryItemPage.L.inventoryItemName));
  }

  async expectInventoryItemNameVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryItemPage.L.inventoryItemName), timeoutMs);
  }

  async expectInventoryItemNameHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryItemPage.L.inventoryItemName), timeoutMs);
  }

  async expectInventoryItemNameText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryItemPage.L.inventoryItemName), expected, timeoutMs);
  }

  async expectInventoryItemNameContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryItemPage.L.inventoryItemName), substring, timeoutMs);
  }

  async scrollInventoryItemNameIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryItemPage.L.inventoryItemName));
  }

  async getInnerTextInventoryItemDesc(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, InventoryItemPage.L.inventoryItemDesc));
  }

  async expectInventoryItemDescVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryItemPage.L.inventoryItemDesc), timeoutMs);
  }

  async expectInventoryItemDescHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryItemPage.L.inventoryItemDesc), timeoutMs);
  }

  async expectInventoryItemDescText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryItemPage.L.inventoryItemDesc), expected, timeoutMs);
  }

  async expectInventoryItemDescContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryItemPage.L.inventoryItemDesc), substring, timeoutMs);
  }

  async scrollInventoryItemDescIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryItemPage.L.inventoryItemDesc));
  }

  async getInnerTextInventoryItemPrice(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, InventoryItemPage.L.inventoryItemPrice));
  }

  async expectInventoryItemPriceVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryItemPage.L.inventoryItemPrice), timeoutMs);
  }

  async expectInventoryItemPriceHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryItemPage.L.inventoryItemPrice), timeoutMs);
  }

  async expectInventoryItemPriceText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryItemPage.L.inventoryItemPrice), expected, timeoutMs);
  }

  async expectInventoryItemPriceContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryItemPage.L.inventoryItemPrice), substring, timeoutMs);
  }

  async scrollInventoryItemPriceIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryItemPage.L.inventoryItemPrice));
  }

  async clickRemove(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryItemPage.L.remove));
  }

  async doubleClickRemove(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryItemPage.L.remove));
  }

  async expectRemoveVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryItemPage.L.remove), timeoutMs);
  }

  async expectRemoveHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryItemPage.L.remove), timeoutMs);
  }

  async expectRemoveEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryItemPage.L.remove), timeoutMs);
  }

  async expectRemoveDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryItemPage.L.remove), timeoutMs);
  }

  async expectRemoveText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryItemPage.L.remove), expected, timeoutMs);
  }

  async expectRemoveContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryItemPage.L.remove), substring, timeoutMs);
  }

  async scrollRemoveIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryItemPage.L.remove));
  }

  async clickSocialTwitter(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryItemPage.L.socialTwitter));
  }

  async doubleClickSocialTwitter(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryItemPage.L.socialTwitter));
  }

  async expectSocialTwitterVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryItemPage.L.socialTwitter), timeoutMs);
  }

  async expectSocialTwitterHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryItemPage.L.socialTwitter), timeoutMs);
  }

  async expectSocialTwitterText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryItemPage.L.socialTwitter), expected, timeoutMs);
  }

  async expectSocialTwitterContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryItemPage.L.socialTwitter), substring, timeoutMs);
  }

  async scrollSocialTwitterIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryItemPage.L.socialTwitter));
  }

  async clickSocialFacebook(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryItemPage.L.socialFacebook));
  }

  async doubleClickSocialFacebook(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryItemPage.L.socialFacebook));
  }

  async expectSocialFacebookVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryItemPage.L.socialFacebook), timeoutMs);
  }

  async expectSocialFacebookHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryItemPage.L.socialFacebook), timeoutMs);
  }

  async expectSocialFacebookText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryItemPage.L.socialFacebook), expected, timeoutMs);
  }

  async expectSocialFacebookContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryItemPage.L.socialFacebook), substring, timeoutMs);
  }

  async scrollSocialFacebookIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryItemPage.L.socialFacebook));
  }

  async clickSocialLinkedin(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryItemPage.L.socialLinkedin));
  }

  async doubleClickSocialLinkedin(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryItemPage.L.socialLinkedin));
  }

  async expectSocialLinkedinVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryItemPage.L.socialLinkedin), timeoutMs);
  }

  async expectSocialLinkedinHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryItemPage.L.socialLinkedin), timeoutMs);
  }

  async expectSocialLinkedinText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryItemPage.L.socialLinkedin), expected, timeoutMs);
  }

  async expectSocialLinkedinContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryItemPage.L.socialLinkedin), substring, timeoutMs);
  }

  async scrollSocialLinkedinIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryItemPage.L.socialLinkedin));
  }

  async getInnerTextFooterCopy(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, InventoryItemPage.L.footerCopy));
  }

  async expectFooterCopyVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryItemPage.L.footerCopy), timeoutMs);
  }

  async expectFooterCopyHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryItemPage.L.footerCopy), timeoutMs);
  }

  async expectFooterCopyText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryItemPage.L.footerCopy), expected, timeoutMs);
  }

  async expectFooterCopyContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryItemPage.L.footerCopy), substring, timeoutMs);
  }

  async scrollFooterCopyIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryItemPage.L.footerCopy));
  }

  async getPageTitle(): Promise<string> {
    return this.page.title();
  }

  async expectPageTitle(expected: string | RegExp, timeoutMs = 30_000): Promise<void> {
    await expect(this.page).toHaveTitle(expected, { timeout: timeoutMs });
  }

  async clickAddToCart(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryItemPage.L.addToCart));
  }

  async doubleClickAddToCart(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryItemPage.L.addToCart));
  }

  async expectAddToCartVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryItemPage.L.addToCart), timeoutMs);
  }

  async expectAddToCartHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryItemPage.L.addToCart), timeoutMs);
  }

  async expectAddToCartEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryItemPage.L.addToCart), timeoutMs);
  }

  async expectAddToCartDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryItemPage.L.addToCart), timeoutMs);
  }

  async expectAddToCartText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryItemPage.L.addToCart), expected, timeoutMs);
  }

  async expectAddToCartContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryItemPage.L.addToCart), substring, timeoutMs);
  }

  async scrollAddToCartIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryItemPage.L.addToCart));
  }


  async longPressOpenMenu(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryItemPage.L.openMenu));
  }

  async expectOpenMenuValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryItemPage.L.openMenu), value, timeoutMs);
  }

  async expectOpenMenuChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryItemPage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryItemPage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryItemPage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryItemPage.L.openMenu), count, timeoutMs);
  }

  async longPressShoppingCart(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryItemPage.L.shoppingCart));
  }

  async expectShoppingCartValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryItemPage.L.shoppingCart), value, timeoutMs);
  }

  async expectShoppingCartEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryItemPage.L.shoppingCart), timeoutMs);
  }

  async expectShoppingCartDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryItemPage.L.shoppingCart), timeoutMs);
  }

  async expectShoppingCartChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryItemPage.L.shoppingCart), timeoutMs);
  }

  async expectShoppingCartUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryItemPage.L.shoppingCart), timeoutMs);
  }

  async expectShoppingCartFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryItemPage.L.shoppingCart), timeoutMs);
  }

  async expectShoppingCartCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryItemPage.L.shoppingCart), count, timeoutMs);
  }

  async longPressBackToProducts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryItemPage.L.backToProducts));
  }

  async expectBackToProductsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryItemPage.L.backToProducts), value, timeoutMs);
  }

  async expectBackToProductsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryItemPage.L.backToProducts), timeoutMs);
  }

  async expectBackToProductsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryItemPage.L.backToProducts), timeoutMs);
  }

  async expectBackToProductsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryItemPage.L.backToProducts), timeoutMs);
  }

  async expectBackToProductsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryItemPage.L.backToProducts), count, timeoutMs);
  }

  async clickInventoryItemName(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryItemPage.L.inventoryItemName));
  }

  async doubleClickInventoryItemName(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryItemPage.L.inventoryItemName));
  }

  async longPressInventoryItemName(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryItemPage.L.inventoryItemName));
  }

  async expectInventoryItemNameValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryItemPage.L.inventoryItemName), value, timeoutMs);
  }

  async expectInventoryItemNameEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryItemPage.L.inventoryItemName), timeoutMs);
  }

  async expectInventoryItemNameDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryItemPage.L.inventoryItemName), timeoutMs);
  }

  async expectInventoryItemNameChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryItemPage.L.inventoryItemName), timeoutMs);
  }

  async expectInventoryItemNameUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryItemPage.L.inventoryItemName), timeoutMs);
  }

  async expectInventoryItemNameFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryItemPage.L.inventoryItemName), timeoutMs);
  }

  async expectInventoryItemNameCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryItemPage.L.inventoryItemName), count, timeoutMs);
  }

  async clickInventoryItemDesc(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryItemPage.L.inventoryItemDesc));
  }

  async doubleClickInventoryItemDesc(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryItemPage.L.inventoryItemDesc));
  }

  async longPressInventoryItemDesc(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryItemPage.L.inventoryItemDesc));
  }

  async expectInventoryItemDescValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryItemPage.L.inventoryItemDesc), value, timeoutMs);
  }

  async expectInventoryItemDescEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryItemPage.L.inventoryItemDesc), timeoutMs);
  }

  async expectInventoryItemDescDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryItemPage.L.inventoryItemDesc), timeoutMs);
  }

  async expectInventoryItemDescChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryItemPage.L.inventoryItemDesc), timeoutMs);
  }

  async expectInventoryItemDescUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryItemPage.L.inventoryItemDesc), timeoutMs);
  }

  async expectInventoryItemDescFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryItemPage.L.inventoryItemDesc), timeoutMs);
  }

  async expectInventoryItemDescCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryItemPage.L.inventoryItemDesc), count, timeoutMs);
  }

  async clickInventoryItemPrice(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryItemPage.L.inventoryItemPrice));
  }

  async doubleClickInventoryItemPrice(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryItemPage.L.inventoryItemPrice));
  }

  async longPressInventoryItemPrice(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryItemPage.L.inventoryItemPrice));
  }

  async expectInventoryItemPriceValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryItemPage.L.inventoryItemPrice), value, timeoutMs);
  }

  async expectInventoryItemPriceEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryItemPage.L.inventoryItemPrice), timeoutMs);
  }

  async expectInventoryItemPriceDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryItemPage.L.inventoryItemPrice), timeoutMs);
  }

  async expectInventoryItemPriceChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryItemPage.L.inventoryItemPrice), timeoutMs);
  }

  async expectInventoryItemPriceUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryItemPage.L.inventoryItemPrice), timeoutMs);
  }

  async expectInventoryItemPriceFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryItemPage.L.inventoryItemPrice), timeoutMs);
  }

  async expectInventoryItemPriceCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryItemPage.L.inventoryItemPrice), count, timeoutMs);
  }

  async longPressRemove(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryItemPage.L.remove));
  }

  async expectRemoveValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryItemPage.L.remove), value, timeoutMs);
  }

  async expectRemoveChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryItemPage.L.remove), timeoutMs);
  }

  async expectRemoveUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryItemPage.L.remove), timeoutMs);
  }

  async expectRemoveFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryItemPage.L.remove), timeoutMs);
  }

  async expectRemoveCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryItemPage.L.remove), count, timeoutMs);
  }

  async longPressSocialTwitter(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryItemPage.L.socialTwitter));
  }

  async expectSocialTwitterValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryItemPage.L.socialTwitter), value, timeoutMs);
  }

  async expectSocialTwitterEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryItemPage.L.socialTwitter), timeoutMs);
  }

  async expectSocialTwitterDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryItemPage.L.socialTwitter), timeoutMs);
  }

  async expectSocialTwitterChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryItemPage.L.socialTwitter), timeoutMs);
  }

  async expectSocialTwitterUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryItemPage.L.socialTwitter), timeoutMs);
  }

  async expectSocialTwitterFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryItemPage.L.socialTwitter), timeoutMs);
  }

  async expectSocialTwitterCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryItemPage.L.socialTwitter), count, timeoutMs);
  }

  async longPressSocialFacebook(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryItemPage.L.socialFacebook));
  }

  async expectSocialFacebookValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryItemPage.L.socialFacebook), value, timeoutMs);
  }

  async expectSocialFacebookEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryItemPage.L.socialFacebook), timeoutMs);
  }

  async expectSocialFacebookDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryItemPage.L.socialFacebook), timeoutMs);
  }

  async expectSocialFacebookChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryItemPage.L.socialFacebook), timeoutMs);
  }

  async expectSocialFacebookUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryItemPage.L.socialFacebook), timeoutMs);
  }

  async expectSocialFacebookFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryItemPage.L.socialFacebook), timeoutMs);
  }

  async expectSocialFacebookCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryItemPage.L.socialFacebook), count, timeoutMs);
  }

  async longPressSocialLinkedin(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryItemPage.L.socialLinkedin));
  }

  async expectSocialLinkedinValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryItemPage.L.socialLinkedin), value, timeoutMs);
  }

  async expectSocialLinkedinEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryItemPage.L.socialLinkedin), timeoutMs);
  }

  async expectSocialLinkedinDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryItemPage.L.socialLinkedin), timeoutMs);
  }

  async expectSocialLinkedinChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryItemPage.L.socialLinkedin), timeoutMs);
  }

  async expectSocialLinkedinUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryItemPage.L.socialLinkedin), timeoutMs);
  }

  async expectSocialLinkedinFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryItemPage.L.socialLinkedin), timeoutMs);
  }

  async expectSocialLinkedinCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryItemPage.L.socialLinkedin), count, timeoutMs);
  }

  async clickFooterCopy(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryItemPage.L.footerCopy));
  }

  async doubleClickFooterCopy(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryItemPage.L.footerCopy));
  }

  async longPressFooterCopy(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryItemPage.L.footerCopy));
  }

  async expectFooterCopyValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryItemPage.L.footerCopy), value, timeoutMs);
  }

  async expectFooterCopyEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryItemPage.L.footerCopy), timeoutMs);
  }

  async expectFooterCopyDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryItemPage.L.footerCopy), timeoutMs);
  }

  async expectFooterCopyChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryItemPage.L.footerCopy), timeoutMs);
  }

  async expectFooterCopyUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryItemPage.L.footerCopy), timeoutMs);
  }

  async expectFooterCopyFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryItemPage.L.footerCopy), timeoutMs);
  }

  async expectFooterCopyCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryItemPage.L.footerCopy), count, timeoutMs);
  }

  async longPressAddToCart(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryItemPage.L.addToCart));
  }

  async expectAddToCartValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryItemPage.L.addToCart), value, timeoutMs);
  }

  async expectAddToCartChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryItemPage.L.addToCart), timeoutMs);
  }

  async expectAddToCartUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryItemPage.L.addToCart), timeoutMs);
  }

  async expectAddToCartFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryItemPage.L.addToCart), timeoutMs);
  }

  async expectAddToCartCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryItemPage.L.addToCart), count, timeoutMs);
  }

}
