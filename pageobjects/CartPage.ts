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

export class CartPage {
  private static readonly L = {
    openMenu: { strategy: 'role' as const, value: 'Open Menu', role: 'button', actionKind: 'button' as const },
    shoppingCart: { strategy: 'role' as const, value: '1', role: 'link', actionKind: 'link' as const },
    yourCart: { strategy: 'testId' as const, value: 'title', actionKind: 'text' as const },
    sauceLabsBackpack: { strategy: 'role' as const, value: 'Sauce Labs Backpack', role: 'link', actionKind: 'link' as const },
    removeSauceLabsBackpack: { strategy: 'role' as const, value: 'Remove', role: 'button', actionKind: 'button' as const },
    continueShopping: { strategy: 'role' as const, value: 'Continue Shopping', role: 'button', actionKind: 'button' as const },
    checkout: { strategy: 'role' as const, value: 'Checkout', role: 'button', actionKind: 'button' as const },
    twitter: { strategy: 'role' as const, value: 'Twitter', role: 'link', actionKind: 'link' as const },
    facebook: { strategy: 'role' as const, value: 'Facebook', role: 'link', actionKind: 'link' as const },
    linkedIn: { strategy: 'role' as const, value: 'LinkedIn', role: 'link', actionKind: 'link' as const },
    sauceLabsBikeLight: { strategy: 'role' as const, value: 'Sauce Labs Bike Light', role: 'link', actionKind: 'link' as const },
    removeSauceLabsBikeLight: { strategy: 'role' as const, value: 'Remove', role: 'button', actionKind: 'button' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickOpenMenu(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.openMenu));
  }

  async doubleClickOpenMenu(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.openMenu));
  }

  async expectOpenMenuVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.openMenu), expected, timeoutMs);
  }

  async expectOpenMenuContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.openMenu), substring, timeoutMs);
  }

  async scrollOpenMenuIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.openMenu));
  }

  async clickShoppingCart(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.shoppingCart));
  }

  async doubleClickShoppingCart(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.shoppingCart));
  }

  async expectShoppingCartVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.shoppingCart), timeoutMs);
  }

  async expectShoppingCartHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.shoppingCart), timeoutMs);
  }

  async expectShoppingCartText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.shoppingCart), expected, timeoutMs);
  }

  async expectShoppingCartContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.shoppingCart), substring, timeoutMs);
  }

  async scrollShoppingCartIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.shoppingCart));
  }

  async getInnerTextYourCart(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CartPage.L.yourCart));
  }

  async expectYourCartVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.yourCart), timeoutMs);
  }

  async expectYourCartHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.yourCart), timeoutMs);
  }

  async expectYourCartText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.yourCart), expected, timeoutMs);
  }

  async expectYourCartContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.yourCart), substring, timeoutMs);
  }

  async scrollYourCartIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.yourCart));
  }

  async clickSauceLabsBackpack(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.sauceLabsBackpack));
  }

  async doubleClickSauceLabsBackpack(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.sauceLabsBackpack));
  }

  async expectSauceLabsBackpackVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.sauceLabsBackpack), timeoutMs);
  }

  async expectSauceLabsBackpackHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.sauceLabsBackpack), timeoutMs);
  }

  async expectSauceLabsBackpackText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.sauceLabsBackpack), expected, timeoutMs);
  }

  async expectSauceLabsBackpackContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.sauceLabsBackpack), substring, timeoutMs);
  }

  async scrollSauceLabsBackpackIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.sauceLabsBackpack));
  }

  async clickRemoveSauceLabsBackpack(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.removeSauceLabsBackpack));
  }

  async doubleClickRemoveSauceLabsBackpack(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.removeSauceLabsBackpack));
  }

  async expectRemoveSauceLabsBackpackVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.removeSauceLabsBackpack), timeoutMs);
  }

  async expectRemoveSauceLabsBackpackHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.removeSauceLabsBackpack), timeoutMs);
  }

  async expectRemoveSauceLabsBackpackEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.removeSauceLabsBackpack), timeoutMs);
  }

  async expectRemoveSauceLabsBackpackDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.removeSauceLabsBackpack), timeoutMs);
  }

  async expectRemoveSauceLabsBackpackText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.removeSauceLabsBackpack), expected, timeoutMs);
  }

  async expectRemoveSauceLabsBackpackContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.removeSauceLabsBackpack), substring, timeoutMs);
  }

  async scrollRemoveSauceLabsBackpackIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.removeSauceLabsBackpack));
  }

  async clickContinueShopping(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.continueShopping));
  }

  async doubleClickContinueShopping(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.continueShopping));
  }

  async expectContinueShoppingVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.continueShopping), timeoutMs);
  }

  async expectContinueShoppingHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.continueShopping), timeoutMs);
  }

  async expectContinueShoppingEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.continueShopping), timeoutMs);
  }

  async expectContinueShoppingDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.continueShopping), timeoutMs);
  }

  async expectContinueShoppingText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.continueShopping), expected, timeoutMs);
  }

  async expectContinueShoppingContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.continueShopping), substring, timeoutMs);
  }

  async scrollContinueShoppingIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.continueShopping));
  }

  async clickCheckout(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.checkout));
  }

  async doubleClickCheckout(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.checkout));
  }

  async expectCheckoutVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.checkout), timeoutMs);
  }

  async expectCheckoutHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.checkout), timeoutMs);
  }

  async expectCheckoutEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.checkout), timeoutMs);
  }

  async expectCheckoutDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.checkout), timeoutMs);
  }

  async expectCheckoutText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.checkout), expected, timeoutMs);
  }

  async expectCheckoutContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.checkout), substring, timeoutMs);
  }

  async scrollCheckoutIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.checkout));
  }

  async clickTwitter(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.twitter));
  }

  async doubleClickTwitter(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.twitter));
  }

  async expectTwitterVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.twitter), timeoutMs);
  }

  async expectTwitterHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.twitter), timeoutMs);
  }

  async expectTwitterText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.twitter), expected, timeoutMs);
  }

  async expectTwitterContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.twitter), substring, timeoutMs);
  }

  async scrollTwitterIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.twitter));
  }

  async clickFacebook(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.facebook));
  }

  async doubleClickFacebook(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.facebook));
  }

  async expectFacebookVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.facebook), timeoutMs);
  }

  async expectFacebookHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.facebook), timeoutMs);
  }

  async expectFacebookText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.facebook), expected, timeoutMs);
  }

  async expectFacebookContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.facebook), substring, timeoutMs);
  }

  async scrollFacebookIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.facebook));
  }

  async clickLinkedIn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.linkedIn));
  }

  async doubleClickLinkedIn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.linkedIn));
  }

  async expectLinkedInVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.linkedIn), timeoutMs);
  }

  async expectLinkedInHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.linkedIn), timeoutMs);
  }

  async expectLinkedInText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.linkedIn), expected, timeoutMs);
  }

  async expectLinkedInContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.linkedIn), substring, timeoutMs);
  }

  async scrollLinkedInIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.linkedIn));
  }

  async getPageTitle(): Promise<string> {
    return this.page.title();
  }

  async expectPageTitle(expected: string | RegExp, timeoutMs = 30_000): Promise<void> {
    await expect(this.page).toHaveTitle(expected, { timeout: timeoutMs });
  }

  async clickSauceLabsBikeLight(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.sauceLabsBikeLight));
  }

  async doubleClickSauceLabsBikeLight(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.sauceLabsBikeLight));
  }

  async expectSauceLabsBikeLightVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.sauceLabsBikeLight), timeoutMs);
  }

  async expectSauceLabsBikeLightHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.sauceLabsBikeLight), timeoutMs);
  }

  async expectSauceLabsBikeLightText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.sauceLabsBikeLight), expected, timeoutMs);
  }

  async expectSauceLabsBikeLightContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.sauceLabsBikeLight), substring, timeoutMs);
  }

  async scrollSauceLabsBikeLightIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.sauceLabsBikeLight));
  }

  async clickRemoveSauceLabsBikeLight(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.removeSauceLabsBikeLight));
  }

  async doubleClickRemoveSauceLabsBikeLight(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.removeSauceLabsBikeLight));
  }

  async expectRemoveSauceLabsBikeLightVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.removeSauceLabsBikeLight), timeoutMs);
  }

  async expectRemoveSauceLabsBikeLightHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.removeSauceLabsBikeLight), timeoutMs);
  }

  async expectRemoveSauceLabsBikeLightEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.removeSauceLabsBikeLight), timeoutMs);
  }

  async expectRemoveSauceLabsBikeLightDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.removeSauceLabsBikeLight), timeoutMs);
  }

  async expectRemoveSauceLabsBikeLightText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.removeSauceLabsBikeLight), expected, timeoutMs);
  }

  async expectRemoveSauceLabsBikeLightContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.removeSauceLabsBikeLight), substring, timeoutMs);
  }

  async scrollRemoveSauceLabsBikeLightIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.removeSauceLabsBikeLight));
  }


  async longPressOpenMenu(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.openMenu));
  }

  async expectOpenMenuValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.openMenu), value, timeoutMs);
  }

  async expectOpenMenuChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.openMenu), count, timeoutMs);
  }

  async longPressShoppingCart(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.shoppingCart));
  }

  async expectShoppingCartValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.shoppingCart), value, timeoutMs);
  }

  async expectShoppingCartEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.shoppingCart), timeoutMs);
  }

  async expectShoppingCartDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.shoppingCart), timeoutMs);
  }

  async expectShoppingCartChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.shoppingCart), timeoutMs);
  }

  async expectShoppingCartUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.shoppingCart), timeoutMs);
  }

  async expectShoppingCartFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.shoppingCart), timeoutMs);
  }

  async expectShoppingCartCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.shoppingCart), count, timeoutMs);
  }

  async clickYourCart(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.yourCart));
  }

  async doubleClickYourCart(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.yourCart));
  }

  async longPressYourCart(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.yourCart));
  }

  async expectYourCartValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.yourCart), value, timeoutMs);
  }

  async expectYourCartEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.yourCart), timeoutMs);
  }

  async expectYourCartDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.yourCart), timeoutMs);
  }

  async expectYourCartChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.yourCart), timeoutMs);
  }

  async expectYourCartUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.yourCart), timeoutMs);
  }

  async expectYourCartFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.yourCart), timeoutMs);
  }

  async expectYourCartCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.yourCart), count, timeoutMs);
  }

  async longPressSauceLabsBackpack(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.sauceLabsBackpack));
  }

  async expectSauceLabsBackpackValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.sauceLabsBackpack), value, timeoutMs);
  }

  async expectSauceLabsBackpackEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.sauceLabsBackpack), timeoutMs);
  }

  async expectSauceLabsBackpackDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.sauceLabsBackpack), timeoutMs);
  }

  async expectSauceLabsBackpackChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.sauceLabsBackpack), timeoutMs);
  }

  async expectSauceLabsBackpackUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.sauceLabsBackpack), timeoutMs);
  }

  async expectSauceLabsBackpackFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.sauceLabsBackpack), timeoutMs);
  }

  async expectSauceLabsBackpackCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.sauceLabsBackpack), count, timeoutMs);
  }

  async longPressRemoveSauceLabsBackpack(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.removeSauceLabsBackpack));
  }

  async expectRemoveSauceLabsBackpackValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.removeSauceLabsBackpack), value, timeoutMs);
  }

  async expectRemoveSauceLabsBackpackChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.removeSauceLabsBackpack), timeoutMs);
  }

  async expectRemoveSauceLabsBackpackUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.removeSauceLabsBackpack), timeoutMs);
  }

  async expectRemoveSauceLabsBackpackFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.removeSauceLabsBackpack), timeoutMs);
  }

  async expectRemoveSauceLabsBackpackCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.removeSauceLabsBackpack), count, timeoutMs);
  }

  async longPressContinueShopping(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.continueShopping));
  }

  async expectContinueShoppingValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.continueShopping), value, timeoutMs);
  }

  async expectContinueShoppingChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.continueShopping), timeoutMs);
  }

  async expectContinueShoppingUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.continueShopping), timeoutMs);
  }

  async expectContinueShoppingFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.continueShopping), timeoutMs);
  }

  async expectContinueShoppingCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.continueShopping), count, timeoutMs);
  }

  async longPressCheckout(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.checkout));
  }

  async expectCheckoutValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.checkout), value, timeoutMs);
  }

  async expectCheckoutChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.checkout), timeoutMs);
  }

  async expectCheckoutUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.checkout), timeoutMs);
  }

  async expectCheckoutFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.checkout), timeoutMs);
  }

  async expectCheckoutCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.checkout), count, timeoutMs);
  }

  async longPressTwitter(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.twitter));
  }

  async expectTwitterValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.twitter), value, timeoutMs);
  }

  async expectTwitterEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.twitter), timeoutMs);
  }

  async expectTwitterDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.twitter), timeoutMs);
  }

  async expectTwitterChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.twitter), timeoutMs);
  }

  async expectTwitterUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.twitter), timeoutMs);
  }

  async expectTwitterFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.twitter), timeoutMs);
  }

  async expectTwitterCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.twitter), count, timeoutMs);
  }

  async longPressFacebook(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.facebook));
  }

  async expectFacebookValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.facebook), value, timeoutMs);
  }

  async expectFacebookEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.facebook), timeoutMs);
  }

  async expectFacebookDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.facebook), timeoutMs);
  }

  async expectFacebookChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.facebook), timeoutMs);
  }

  async expectFacebookUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.facebook), timeoutMs);
  }

  async expectFacebookFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.facebook), timeoutMs);
  }

  async expectFacebookCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.facebook), count, timeoutMs);
  }

  async longPressLinkedIn(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.linkedIn));
  }

  async expectLinkedInValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.linkedIn), value, timeoutMs);
  }

  async expectLinkedInEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.linkedIn), timeoutMs);
  }

  async expectLinkedInDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.linkedIn), timeoutMs);
  }

  async expectLinkedInChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.linkedIn), timeoutMs);
  }

  async expectLinkedInUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.linkedIn), timeoutMs);
  }

  async expectLinkedInFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.linkedIn), timeoutMs);
  }

  async expectLinkedInCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.linkedIn), count, timeoutMs);
  }

  async longPressSauceLabsBikeLight(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.sauceLabsBikeLight));
  }

  async expectSauceLabsBikeLightValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.sauceLabsBikeLight), value, timeoutMs);
  }

  async expectSauceLabsBikeLightEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.sauceLabsBikeLight), timeoutMs);
  }

  async expectSauceLabsBikeLightDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.sauceLabsBikeLight), timeoutMs);
  }

  async expectSauceLabsBikeLightChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.sauceLabsBikeLight), timeoutMs);
  }

  async expectSauceLabsBikeLightUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.sauceLabsBikeLight), timeoutMs);
  }

  async expectSauceLabsBikeLightFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.sauceLabsBikeLight), timeoutMs);
  }

  async expectSauceLabsBikeLightCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.sauceLabsBikeLight), count, timeoutMs);
  }

  async longPressRemoveSauceLabsBikeLight(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.removeSauceLabsBikeLight));
  }

  async expectRemoveSauceLabsBikeLightValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.removeSauceLabsBikeLight), value, timeoutMs);
  }

  async expectRemoveSauceLabsBikeLightChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.removeSauceLabsBikeLight), timeoutMs);
  }

  async expectRemoveSauceLabsBikeLightUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.removeSauceLabsBikeLight), timeoutMs);
  }

  async expectRemoveSauceLabsBikeLightFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.removeSauceLabsBikeLight), timeoutMs);
  }

  async expectRemoveSauceLabsBikeLightCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.removeSauceLabsBikeLight), count, timeoutMs);
  }

}
