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
    shoppingCart: { strategy: 'css' as const, value: '[data-test="shopping-cart-link"]', actionKind: 'link' as const },
    title: { strategy: 'css' as const, value: '[data-test="title"]', actionKind: 'text' as const },
    cartQuantityLabel: { strategy: 'css' as const, value: '[data-test="cart-quantity-label"]', actionKind: 'text' as const },
    cartDescLabel: { strategy: 'css' as const, value: '[data-test="cart-desc-label"]', actionKind: 'text' as const },
    item4Title: { strategy: 'role' as const, value: 'Sauce Labs Backpack', role: 'link', actionKind: 'link' as const },
    inventoryItemName: { strategy: 'css' as const, value: '[data-test="inventory-item-name"]', actionKind: 'text' as const },
    inventoryItemDesc: { strategy: 'css' as const, value: '[data-test="inventory-item-desc"]', actionKind: 'text' as const },
    inventoryItemPrice: { strategy: 'css' as const, value: '[data-test="inventory-item-price"]', actionKind: 'text' as const },
    removeSauceLabsBackpack: { strategy: 'role' as const, value: 'Remove', role: 'button', actionKind: 'button' as const },
    continueShopping: { strategy: 'role' as const, value: 'Continue Shopping', role: 'button', actionKind: 'button' as const },
    checkout: { strategy: 'role' as const, value: 'Checkout', role: 'button', actionKind: 'button' as const },
    socialTwitter: { strategy: 'role' as const, value: 'Twitter', role: 'link', actionKind: 'link' as const },
    socialFacebook: { strategy: 'role' as const, value: 'Facebook', role: 'link', actionKind: 'link' as const },
    socialLinkedin: { strategy: 'role' as const, value: 'LinkedIn', role: 'link', actionKind: 'link' as const },
    footerCopy: { strategy: 'css' as const, value: '[data-test="footer-copy"]', actionKind: 'text' as const },
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

  async getInnerTextTitle(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CartPage.L.title));
  }

  async expectTitleVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.title), timeoutMs);
  }

  async expectTitleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.title), timeoutMs);
  }

  async expectTitleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.title), expected, timeoutMs);
  }

  async expectTitleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.title), substring, timeoutMs);
  }

  async scrollTitleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.title));
  }

  async getInnerTextCartQuantityLabel(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CartPage.L.cartQuantityLabel));
  }

  async expectCartQuantityLabelVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.cartQuantityLabel), timeoutMs);
  }

  async expectCartQuantityLabelHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.cartQuantityLabel), timeoutMs);
  }

  async expectCartQuantityLabelText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.cartQuantityLabel), expected, timeoutMs);
  }

  async expectCartQuantityLabelContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.cartQuantityLabel), substring, timeoutMs);
  }

  async scrollCartQuantityLabelIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.cartQuantityLabel));
  }

  async getInnerTextCartDescLabel(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CartPage.L.cartDescLabel));
  }

  async expectCartDescLabelVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.cartDescLabel), timeoutMs);
  }

  async expectCartDescLabelHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.cartDescLabel), timeoutMs);
  }

  async expectCartDescLabelText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.cartDescLabel), expected, timeoutMs);
  }

  async expectCartDescLabelContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.cartDescLabel), substring, timeoutMs);
  }

  async scrollCartDescLabelIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.cartDescLabel));
  }

  async clickItem4Title(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.item4Title));
  }

  async doubleClickItem4Title(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.item4Title));
  }

  async expectItem4TitleVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.item4Title), timeoutMs);
  }

  async expectItem4TitleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.item4Title), timeoutMs);
  }

  async expectItem4TitleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.item4Title), expected, timeoutMs);
  }

  async expectItem4TitleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.item4Title), substring, timeoutMs);
  }

  async scrollItem4TitleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.item4Title));
  }

  async getInnerTextInventoryItemName(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CartPage.L.inventoryItemName));
  }

  async expectInventoryItemNameVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.inventoryItemName), timeoutMs);
  }

  async expectInventoryItemNameHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.inventoryItemName), timeoutMs);
  }

  async expectInventoryItemNameText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.inventoryItemName), expected, timeoutMs);
  }

  async expectInventoryItemNameContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.inventoryItemName), substring, timeoutMs);
  }

  async scrollInventoryItemNameIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.inventoryItemName));
  }

  async getInnerTextInventoryItemDesc(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CartPage.L.inventoryItemDesc));
  }

  async expectInventoryItemDescVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.inventoryItemDesc), timeoutMs);
  }

  async expectInventoryItemDescHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.inventoryItemDesc), timeoutMs);
  }

  async expectInventoryItemDescText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.inventoryItemDesc), expected, timeoutMs);
  }

  async expectInventoryItemDescContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.inventoryItemDesc), substring, timeoutMs);
  }

  async scrollInventoryItemDescIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.inventoryItemDesc));
  }

  async getInnerTextInventoryItemPrice(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CartPage.L.inventoryItemPrice));
  }

  async expectInventoryItemPriceVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.inventoryItemPrice), timeoutMs);
  }

  async expectInventoryItemPriceHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.inventoryItemPrice), timeoutMs);
  }

  async expectInventoryItemPriceText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.inventoryItemPrice), expected, timeoutMs);
  }

  async expectInventoryItemPriceContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.inventoryItemPrice), substring, timeoutMs);
  }

  async scrollInventoryItemPriceIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.inventoryItemPrice));
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

  async clickSocialTwitter(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.socialTwitter));
  }

  async doubleClickSocialTwitter(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.socialTwitter));
  }

  async expectSocialTwitterVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.socialTwitter), timeoutMs);
  }

  async expectSocialTwitterHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.socialTwitter), timeoutMs);
  }

  async expectSocialTwitterText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.socialTwitter), expected, timeoutMs);
  }

  async expectSocialTwitterContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.socialTwitter), substring, timeoutMs);
  }

  async scrollSocialTwitterIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.socialTwitter));
  }

  async clickSocialFacebook(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.socialFacebook));
  }

  async doubleClickSocialFacebook(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.socialFacebook));
  }

  async expectSocialFacebookVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.socialFacebook), timeoutMs);
  }

  async expectSocialFacebookHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.socialFacebook), timeoutMs);
  }

  async expectSocialFacebookText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.socialFacebook), expected, timeoutMs);
  }

  async expectSocialFacebookContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.socialFacebook), substring, timeoutMs);
  }

  async scrollSocialFacebookIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.socialFacebook));
  }

  async clickSocialLinkedin(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.socialLinkedin));
  }

  async doubleClickSocialLinkedin(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.socialLinkedin));
  }

  async expectSocialLinkedinVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.socialLinkedin), timeoutMs);
  }

  async expectSocialLinkedinHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.socialLinkedin), timeoutMs);
  }

  async expectSocialLinkedinText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.socialLinkedin), expected, timeoutMs);
  }

  async expectSocialLinkedinContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.socialLinkedin), substring, timeoutMs);
  }

  async scrollSocialLinkedinIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.socialLinkedin));
  }

  async getInnerTextFooterCopy(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CartPage.L.footerCopy));
  }

  async expectFooterCopyVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CartPage.L.footerCopy), timeoutMs);
  }

  async expectFooterCopyHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CartPage.L.footerCopy), timeoutMs);
  }

  async expectFooterCopyText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CartPage.L.footerCopy), expected, timeoutMs);
  }

  async expectFooterCopyContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CartPage.L.footerCopy), substring, timeoutMs);
  }

  async scrollFooterCopyIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CartPage.L.footerCopy));
  }

  async getPageTitle(): Promise<string> {
    return this.page.title();
  }

  async expectPageTitle(expected: string | RegExp, timeoutMs = 30_000): Promise<void> {
    await expect(this.page).toHaveTitle(expected, { timeout: timeoutMs });
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

  async clickTitle(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.title));
  }

  async doubleClickTitle(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.title));
  }

  async longPressTitle(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.title));
  }

  async expectTitleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.title), value, timeoutMs);
  }

  async expectTitleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.title), timeoutMs);
  }

  async expectTitleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.title), timeoutMs);
  }

  async expectTitleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.title), timeoutMs);
  }

  async expectTitleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.title), timeoutMs);
  }

  async expectTitleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.title), timeoutMs);
  }

  async expectTitleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.title), count, timeoutMs);
  }

  async clickCartQuantityLabel(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.cartQuantityLabel));
  }

  async doubleClickCartQuantityLabel(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.cartQuantityLabel));
  }

  async longPressCartQuantityLabel(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.cartQuantityLabel));
  }

  async expectCartQuantityLabelValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.cartQuantityLabel), value, timeoutMs);
  }

  async expectCartQuantityLabelEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.cartQuantityLabel), timeoutMs);
  }

  async expectCartQuantityLabelDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.cartQuantityLabel), timeoutMs);
  }

  async expectCartQuantityLabelChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.cartQuantityLabel), timeoutMs);
  }

  async expectCartQuantityLabelUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.cartQuantityLabel), timeoutMs);
  }

  async expectCartQuantityLabelFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.cartQuantityLabel), timeoutMs);
  }

  async expectCartQuantityLabelCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.cartQuantityLabel), count, timeoutMs);
  }

  async clickCartDescLabel(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.cartDescLabel));
  }

  async doubleClickCartDescLabel(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.cartDescLabel));
  }

  async longPressCartDescLabel(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.cartDescLabel));
  }

  async expectCartDescLabelValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.cartDescLabel), value, timeoutMs);
  }

  async expectCartDescLabelEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.cartDescLabel), timeoutMs);
  }

  async expectCartDescLabelDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.cartDescLabel), timeoutMs);
  }

  async expectCartDescLabelChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.cartDescLabel), timeoutMs);
  }

  async expectCartDescLabelUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.cartDescLabel), timeoutMs);
  }

  async expectCartDescLabelFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.cartDescLabel), timeoutMs);
  }

  async expectCartDescLabelCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.cartDescLabel), count, timeoutMs);
  }

  async longPressItem4Title(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.item4Title));
  }

  async expectItem4TitleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.item4Title), value, timeoutMs);
  }

  async expectItem4TitleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.item4Title), timeoutMs);
  }

  async expectItem4TitleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.item4Title), timeoutMs);
  }

  async expectItem4TitleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.item4Title), timeoutMs);
  }

  async expectItem4TitleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.item4Title), timeoutMs);
  }

  async expectItem4TitleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.item4Title), timeoutMs);
  }

  async expectItem4TitleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.item4Title), count, timeoutMs);
  }

  async clickInventoryItemName(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.inventoryItemName));
  }

  async doubleClickInventoryItemName(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.inventoryItemName));
  }

  async longPressInventoryItemName(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.inventoryItemName));
  }

  async expectInventoryItemNameValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.inventoryItemName), value, timeoutMs);
  }

  async expectInventoryItemNameEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.inventoryItemName), timeoutMs);
  }

  async expectInventoryItemNameDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.inventoryItemName), timeoutMs);
  }

  async expectInventoryItemNameChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.inventoryItemName), timeoutMs);
  }

  async expectInventoryItemNameUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.inventoryItemName), timeoutMs);
  }

  async expectInventoryItemNameFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.inventoryItemName), timeoutMs);
  }

  async expectInventoryItemNameCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.inventoryItemName), count, timeoutMs);
  }

  async clickInventoryItemDesc(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.inventoryItemDesc));
  }

  async doubleClickInventoryItemDesc(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.inventoryItemDesc));
  }

  async longPressInventoryItemDesc(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.inventoryItemDesc));
  }

  async expectInventoryItemDescValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.inventoryItemDesc), value, timeoutMs);
  }

  async expectInventoryItemDescEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.inventoryItemDesc), timeoutMs);
  }

  async expectInventoryItemDescDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.inventoryItemDesc), timeoutMs);
  }

  async expectInventoryItemDescChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.inventoryItemDesc), timeoutMs);
  }

  async expectInventoryItemDescUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.inventoryItemDesc), timeoutMs);
  }

  async expectInventoryItemDescFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.inventoryItemDesc), timeoutMs);
  }

  async expectInventoryItemDescCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.inventoryItemDesc), count, timeoutMs);
  }

  async clickInventoryItemPrice(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.inventoryItemPrice));
  }

  async doubleClickInventoryItemPrice(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.inventoryItemPrice));
  }

  async longPressInventoryItemPrice(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.inventoryItemPrice));
  }

  async expectInventoryItemPriceValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.inventoryItemPrice), value, timeoutMs);
  }

  async expectInventoryItemPriceEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.inventoryItemPrice), timeoutMs);
  }

  async expectInventoryItemPriceDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.inventoryItemPrice), timeoutMs);
  }

  async expectInventoryItemPriceChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.inventoryItemPrice), timeoutMs);
  }

  async expectInventoryItemPriceUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.inventoryItemPrice), timeoutMs);
  }

  async expectInventoryItemPriceFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.inventoryItemPrice), timeoutMs);
  }

  async expectInventoryItemPriceCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.inventoryItemPrice), count, timeoutMs);
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

  async longPressSocialTwitter(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.socialTwitter));
  }

  async expectSocialTwitterValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.socialTwitter), value, timeoutMs);
  }

  async expectSocialTwitterEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.socialTwitter), timeoutMs);
  }

  async expectSocialTwitterDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.socialTwitter), timeoutMs);
  }

  async expectSocialTwitterChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.socialTwitter), timeoutMs);
  }

  async expectSocialTwitterUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.socialTwitter), timeoutMs);
  }

  async expectSocialTwitterFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.socialTwitter), timeoutMs);
  }

  async expectSocialTwitterCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.socialTwitter), count, timeoutMs);
  }

  async longPressSocialFacebook(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.socialFacebook));
  }

  async expectSocialFacebookValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.socialFacebook), value, timeoutMs);
  }

  async expectSocialFacebookEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.socialFacebook), timeoutMs);
  }

  async expectSocialFacebookDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.socialFacebook), timeoutMs);
  }

  async expectSocialFacebookChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.socialFacebook), timeoutMs);
  }

  async expectSocialFacebookUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.socialFacebook), timeoutMs);
  }

  async expectSocialFacebookFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.socialFacebook), timeoutMs);
  }

  async expectSocialFacebookCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.socialFacebook), count, timeoutMs);
  }

  async longPressSocialLinkedin(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.socialLinkedin));
  }

  async expectSocialLinkedinValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.socialLinkedin), value, timeoutMs);
  }

  async expectSocialLinkedinEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.socialLinkedin), timeoutMs);
  }

  async expectSocialLinkedinDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.socialLinkedin), timeoutMs);
  }

  async expectSocialLinkedinChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.socialLinkedin), timeoutMs);
  }

  async expectSocialLinkedinUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.socialLinkedin), timeoutMs);
  }

  async expectSocialLinkedinFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.socialLinkedin), timeoutMs);
  }

  async expectSocialLinkedinCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.socialLinkedin), count, timeoutMs);
  }

  async clickFooterCopy(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CartPage.L.footerCopy));
  }

  async doubleClickFooterCopy(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CartPage.L.footerCopy));
  }

  async longPressFooterCopy(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CartPage.L.footerCopy));
  }

  async expectFooterCopyValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CartPage.L.footerCopy), value, timeoutMs);
  }

  async expectFooterCopyEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CartPage.L.footerCopy), timeoutMs);
  }

  async expectFooterCopyDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CartPage.L.footerCopy), timeoutMs);
  }

  async expectFooterCopyChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CartPage.L.footerCopy), timeoutMs);
  }

  async expectFooterCopyUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CartPage.L.footerCopy), timeoutMs);
  }

  async expectFooterCopyFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CartPage.L.footerCopy), timeoutMs);
  }

  async expectFooterCopyCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CartPage.L.footerCopy), count, timeoutMs);
  }

}
