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
    shoppingCart: { strategy: 'testId' as const, value: 'shopping-cart-link', actionKind: 'link' as const },
    backToProducts: { strategy: 'role' as const, value: 'Back to products', role: 'button', actionKind: 'button' as const },
    addToCart: { strategy: 'role' as const, value: 'Add to cart', role: 'button', actionKind: 'button' as const },
    twitter: { strategy: 'role' as const, value: 'Twitter', role: 'link', actionKind: 'link' as const },
    facebook: { strategy: 'role' as const, value: 'Facebook', role: 'link', actionKind: 'link' as const },
    linkedIn: { strategy: 'role' as const, value: 'LinkedIn', role: 'link', actionKind: 'link' as const },
    remove: { strategy: 'role' as const, value: 'Remove', role: 'button', actionKind: 'button' as const },
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

  async clickTwitter(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryItemPage.L.twitter));
  }

  async doubleClickTwitter(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryItemPage.L.twitter));
  }

  async expectTwitterVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryItemPage.L.twitter), timeoutMs);
  }

  async expectTwitterHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryItemPage.L.twitter), timeoutMs);
  }

  async expectTwitterText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryItemPage.L.twitter), expected, timeoutMs);
  }

  async expectTwitterContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryItemPage.L.twitter), substring, timeoutMs);
  }

  async scrollTwitterIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryItemPage.L.twitter));
  }

  async clickFacebook(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryItemPage.L.facebook));
  }

  async doubleClickFacebook(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryItemPage.L.facebook));
  }

  async expectFacebookVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryItemPage.L.facebook), timeoutMs);
  }

  async expectFacebookHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryItemPage.L.facebook), timeoutMs);
  }

  async expectFacebookText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryItemPage.L.facebook), expected, timeoutMs);
  }

  async expectFacebookContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryItemPage.L.facebook), substring, timeoutMs);
  }

  async scrollFacebookIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryItemPage.L.facebook));
  }

  async clickLinkedIn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, InventoryItemPage.L.linkedIn));
  }

  async doubleClickLinkedIn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, InventoryItemPage.L.linkedIn));
  }

  async expectLinkedInVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, InventoryItemPage.L.linkedIn), timeoutMs);
  }

  async expectLinkedInHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, InventoryItemPage.L.linkedIn), timeoutMs);
  }

  async expectLinkedInText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, InventoryItemPage.L.linkedIn), expected, timeoutMs);
  }

  async expectLinkedInContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, InventoryItemPage.L.linkedIn), substring, timeoutMs);
  }

  async scrollLinkedInIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, InventoryItemPage.L.linkedIn));
  }

  async getPageTitle(): Promise<string> {
    return this.page.title();
  }

  async expectPageTitle(expected: string | RegExp, timeoutMs = 30_000): Promise<void> {
    await expect(this.page).toHaveTitle(expected, { timeout: timeoutMs });
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

  async longPressTwitter(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryItemPage.L.twitter));
  }

  async expectTwitterValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryItemPage.L.twitter), value, timeoutMs);
  }

  async expectTwitterEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryItemPage.L.twitter), timeoutMs);
  }

  async expectTwitterDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryItemPage.L.twitter), timeoutMs);
  }

  async expectTwitterChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryItemPage.L.twitter), timeoutMs);
  }

  async expectTwitterUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryItemPage.L.twitter), timeoutMs);
  }

  async expectTwitterFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryItemPage.L.twitter), timeoutMs);
  }

  async expectTwitterCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryItemPage.L.twitter), count, timeoutMs);
  }

  async longPressFacebook(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryItemPage.L.facebook));
  }

  async expectFacebookValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryItemPage.L.facebook), value, timeoutMs);
  }

  async expectFacebookEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryItemPage.L.facebook), timeoutMs);
  }

  async expectFacebookDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryItemPage.L.facebook), timeoutMs);
  }

  async expectFacebookChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryItemPage.L.facebook), timeoutMs);
  }

  async expectFacebookUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryItemPage.L.facebook), timeoutMs);
  }

  async expectFacebookFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryItemPage.L.facebook), timeoutMs);
  }

  async expectFacebookCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryItemPage.L.facebook), count, timeoutMs);
  }

  async longPressLinkedIn(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, InventoryItemPage.L.linkedIn));
  }

  async expectLinkedInValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, InventoryItemPage.L.linkedIn), value, timeoutMs);
  }

  async expectLinkedInEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, InventoryItemPage.L.linkedIn), timeoutMs);
  }

  async expectLinkedInDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, InventoryItemPage.L.linkedIn), timeoutMs);
  }

  async expectLinkedInChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, InventoryItemPage.L.linkedIn), timeoutMs);
  }

  async expectLinkedInUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, InventoryItemPage.L.linkedIn), timeoutMs);
  }

  async expectLinkedInFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, InventoryItemPage.L.linkedIn), timeoutMs);
  }

  async expectLinkedInCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, InventoryItemPage.L.linkedIn), count, timeoutMs);
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

}
