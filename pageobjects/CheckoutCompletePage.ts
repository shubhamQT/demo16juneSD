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

export class CheckoutCompletePage {
  private static readonly L = {
    openMenu: { strategy: 'role' as const, value: 'Open Menu', role: 'button', actionKind: 'button' as const },
    shoppingCart: { strategy: 'css' as const, value: '[data-test="shopping-cart-link"]', actionKind: 'link' as const },
    title: { strategy: 'css' as const, value: '[data-test="title"]', actionKind: 'text' as const },
    completeHeader: { strategy: 'css' as const, value: '[data-test="complete-header"]', actionKind: 'text' as const },
    completeText: { strategy: 'css' as const, value: '[data-test="complete-text"]', actionKind: 'text' as const },
    backToProducts: { strategy: 'role' as const, value: 'Back Home', role: 'button', actionKind: 'button' as const },
    socialTwitter: { strategy: 'role' as const, value: 'Twitter', role: 'link', actionKind: 'link' as const },
    socialFacebook: { strategy: 'role' as const, value: 'Facebook', role: 'link', actionKind: 'link' as const },
    socialLinkedin: { strategy: 'role' as const, value: 'LinkedIn', role: 'link', actionKind: 'link' as const },
    footerCopy: { strategy: 'css' as const, value: '[data-test="footer-copy"]', actionKind: 'text' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickOpenMenu(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutCompletePage.L.openMenu));
  }

  async doubleClickOpenMenu(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutCompletePage.L.openMenu));
  }

  async expectOpenMenuVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutCompletePage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutCompletePage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutCompletePage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutCompletePage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutCompletePage.L.openMenu), expected, timeoutMs);
  }

  async expectOpenMenuContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutCompletePage.L.openMenu), substring, timeoutMs);
  }

  async scrollOpenMenuIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutCompletePage.L.openMenu));
  }

  async clickShoppingCart(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutCompletePage.L.shoppingCart));
  }

  async doubleClickShoppingCart(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutCompletePage.L.shoppingCart));
  }

  async expectShoppingCartVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutCompletePage.L.shoppingCart), timeoutMs);
  }

  async expectShoppingCartHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutCompletePage.L.shoppingCart), timeoutMs);
  }

  async expectShoppingCartText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutCompletePage.L.shoppingCart), expected, timeoutMs);
  }

  async expectShoppingCartContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutCompletePage.L.shoppingCart), substring, timeoutMs);
  }

  async scrollShoppingCartIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutCompletePage.L.shoppingCart));
  }

  async getInnerTextTitle(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CheckoutCompletePage.L.title));
  }

  async expectTitleVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutCompletePage.L.title), timeoutMs);
  }

  async expectTitleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutCompletePage.L.title), timeoutMs);
  }

  async expectTitleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutCompletePage.L.title), expected, timeoutMs);
  }

  async expectTitleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutCompletePage.L.title), substring, timeoutMs);
  }

  async scrollTitleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutCompletePage.L.title));
  }

  async getInnerTextCompleteHeader(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CheckoutCompletePage.L.completeHeader));
  }

  async expectCompleteHeaderVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutCompletePage.L.completeHeader), timeoutMs);
  }

  async expectCompleteHeaderHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutCompletePage.L.completeHeader), timeoutMs);
  }

  async expectCompleteHeaderText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutCompletePage.L.completeHeader), expected, timeoutMs);
  }

  async expectCompleteHeaderContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutCompletePage.L.completeHeader), substring, timeoutMs);
  }

  async scrollCompleteHeaderIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutCompletePage.L.completeHeader));
  }

  async getInnerTextCompleteText(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CheckoutCompletePage.L.completeText));
  }

  async expectCompleteTextVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutCompletePage.L.completeText), timeoutMs);
  }

  async expectCompleteTextHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutCompletePage.L.completeText), timeoutMs);
  }

  async expectCompleteTextText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutCompletePage.L.completeText), expected, timeoutMs);
  }

  async expectCompleteTextContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutCompletePage.L.completeText), substring, timeoutMs);
  }

  async scrollCompleteTextIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutCompletePage.L.completeText));
  }

  async clickBackToProducts(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutCompletePage.L.backToProducts));
  }

  async doubleClickBackToProducts(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutCompletePage.L.backToProducts));
  }

  async expectBackToProductsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutCompletePage.L.backToProducts), timeoutMs);
  }

  async expectBackToProductsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutCompletePage.L.backToProducts), timeoutMs);
  }

  async expectBackToProductsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutCompletePage.L.backToProducts), timeoutMs);
  }

  async expectBackToProductsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutCompletePage.L.backToProducts), timeoutMs);
  }

  async expectBackToProductsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutCompletePage.L.backToProducts), expected, timeoutMs);
  }

  async expectBackToProductsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutCompletePage.L.backToProducts), substring, timeoutMs);
  }

  async scrollBackToProductsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutCompletePage.L.backToProducts));
  }

  async clickSocialTwitter(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutCompletePage.L.socialTwitter));
  }

  async doubleClickSocialTwitter(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutCompletePage.L.socialTwitter));
  }

  async expectSocialTwitterVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutCompletePage.L.socialTwitter), timeoutMs);
  }

  async expectSocialTwitterHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutCompletePage.L.socialTwitter), timeoutMs);
  }

  async expectSocialTwitterText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutCompletePage.L.socialTwitter), expected, timeoutMs);
  }

  async expectSocialTwitterContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutCompletePage.L.socialTwitter), substring, timeoutMs);
  }

  async scrollSocialTwitterIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutCompletePage.L.socialTwitter));
  }

  async clickSocialFacebook(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutCompletePage.L.socialFacebook));
  }

  async doubleClickSocialFacebook(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutCompletePage.L.socialFacebook));
  }

  async expectSocialFacebookVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutCompletePage.L.socialFacebook), timeoutMs);
  }

  async expectSocialFacebookHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutCompletePage.L.socialFacebook), timeoutMs);
  }

  async expectSocialFacebookText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutCompletePage.L.socialFacebook), expected, timeoutMs);
  }

  async expectSocialFacebookContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutCompletePage.L.socialFacebook), substring, timeoutMs);
  }

  async scrollSocialFacebookIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutCompletePage.L.socialFacebook));
  }

  async clickSocialLinkedin(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutCompletePage.L.socialLinkedin));
  }

  async doubleClickSocialLinkedin(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutCompletePage.L.socialLinkedin));
  }

  async expectSocialLinkedinVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutCompletePage.L.socialLinkedin), timeoutMs);
  }

  async expectSocialLinkedinHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutCompletePage.L.socialLinkedin), timeoutMs);
  }

  async expectSocialLinkedinText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutCompletePage.L.socialLinkedin), expected, timeoutMs);
  }

  async expectSocialLinkedinContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutCompletePage.L.socialLinkedin), substring, timeoutMs);
  }

  async scrollSocialLinkedinIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutCompletePage.L.socialLinkedin));
  }

  async getInnerTextFooterCopy(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CheckoutCompletePage.L.footerCopy));
  }

  async expectFooterCopyVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutCompletePage.L.footerCopy), timeoutMs);
  }

  async expectFooterCopyHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutCompletePage.L.footerCopy), timeoutMs);
  }

  async expectFooterCopyText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutCompletePage.L.footerCopy), expected, timeoutMs);
  }

  async expectFooterCopyContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutCompletePage.L.footerCopy), substring, timeoutMs);
  }

  async scrollFooterCopyIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutCompletePage.L.footerCopy));
  }

  async getPageTitle(): Promise<string> {
    return this.page.title();
  }

  async expectPageTitle(expected: string | RegExp, timeoutMs = 30_000): Promise<void> {
    await expect(this.page).toHaveTitle(expected, { timeout: timeoutMs });
  }


  async longPressOpenMenu(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutCompletePage.L.openMenu));
  }

  async expectOpenMenuValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutCompletePage.L.openMenu), value, timeoutMs);
  }

  async expectOpenMenuChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutCompletePage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutCompletePage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutCompletePage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutCompletePage.L.openMenu), count, timeoutMs);
  }

  async longPressShoppingCart(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutCompletePage.L.shoppingCart));
  }

  async expectShoppingCartValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutCompletePage.L.shoppingCart), value, timeoutMs);
  }

  async expectShoppingCartEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutCompletePage.L.shoppingCart), timeoutMs);
  }

  async expectShoppingCartDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutCompletePage.L.shoppingCart), timeoutMs);
  }

  async expectShoppingCartChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutCompletePage.L.shoppingCart), timeoutMs);
  }

  async expectShoppingCartUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutCompletePage.L.shoppingCart), timeoutMs);
  }

  async expectShoppingCartFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutCompletePage.L.shoppingCart), timeoutMs);
  }

  async expectShoppingCartCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutCompletePage.L.shoppingCart), count, timeoutMs);
  }

  async clickTitle(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutCompletePage.L.title));
  }

  async doubleClickTitle(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutCompletePage.L.title));
  }

  async longPressTitle(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutCompletePage.L.title));
  }

  async expectTitleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutCompletePage.L.title), value, timeoutMs);
  }

  async expectTitleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutCompletePage.L.title), timeoutMs);
  }

  async expectTitleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutCompletePage.L.title), timeoutMs);
  }

  async expectTitleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutCompletePage.L.title), timeoutMs);
  }

  async expectTitleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutCompletePage.L.title), timeoutMs);
  }

  async expectTitleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutCompletePage.L.title), timeoutMs);
  }

  async expectTitleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutCompletePage.L.title), count, timeoutMs);
  }

  async clickCompleteHeader(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutCompletePage.L.completeHeader));
  }

  async doubleClickCompleteHeader(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutCompletePage.L.completeHeader));
  }

  async longPressCompleteHeader(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutCompletePage.L.completeHeader));
  }

  async expectCompleteHeaderValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutCompletePage.L.completeHeader), value, timeoutMs);
  }

  async expectCompleteHeaderEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutCompletePage.L.completeHeader), timeoutMs);
  }

  async expectCompleteHeaderDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutCompletePage.L.completeHeader), timeoutMs);
  }

  async expectCompleteHeaderChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutCompletePage.L.completeHeader), timeoutMs);
  }

  async expectCompleteHeaderUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutCompletePage.L.completeHeader), timeoutMs);
  }

  async expectCompleteHeaderFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutCompletePage.L.completeHeader), timeoutMs);
  }

  async expectCompleteHeaderCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutCompletePage.L.completeHeader), count, timeoutMs);
  }

  async clickCompleteText(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutCompletePage.L.completeText));
  }

  async doubleClickCompleteText(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutCompletePage.L.completeText));
  }

  async longPressCompleteText(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutCompletePage.L.completeText));
  }

  async expectCompleteTextValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutCompletePage.L.completeText), value, timeoutMs);
  }

  async expectCompleteTextEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutCompletePage.L.completeText), timeoutMs);
  }

  async expectCompleteTextDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutCompletePage.L.completeText), timeoutMs);
  }

  async expectCompleteTextChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutCompletePage.L.completeText), timeoutMs);
  }

  async expectCompleteTextUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutCompletePage.L.completeText), timeoutMs);
  }

  async expectCompleteTextFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutCompletePage.L.completeText), timeoutMs);
  }

  async expectCompleteTextCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutCompletePage.L.completeText), count, timeoutMs);
  }

  async longPressBackToProducts(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutCompletePage.L.backToProducts));
  }

  async expectBackToProductsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutCompletePage.L.backToProducts), value, timeoutMs);
  }

  async expectBackToProductsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutCompletePage.L.backToProducts), timeoutMs);
  }

  async expectBackToProductsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutCompletePage.L.backToProducts), timeoutMs);
  }

  async expectBackToProductsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutCompletePage.L.backToProducts), timeoutMs);
  }

  async expectBackToProductsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutCompletePage.L.backToProducts), count, timeoutMs);
  }

  async longPressSocialTwitter(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutCompletePage.L.socialTwitter));
  }

  async expectSocialTwitterValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutCompletePage.L.socialTwitter), value, timeoutMs);
  }

  async expectSocialTwitterEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutCompletePage.L.socialTwitter), timeoutMs);
  }

  async expectSocialTwitterDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutCompletePage.L.socialTwitter), timeoutMs);
  }

  async expectSocialTwitterChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutCompletePage.L.socialTwitter), timeoutMs);
  }

  async expectSocialTwitterUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutCompletePage.L.socialTwitter), timeoutMs);
  }

  async expectSocialTwitterFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutCompletePage.L.socialTwitter), timeoutMs);
  }

  async expectSocialTwitterCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutCompletePage.L.socialTwitter), count, timeoutMs);
  }

  async longPressSocialFacebook(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutCompletePage.L.socialFacebook));
  }

  async expectSocialFacebookValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutCompletePage.L.socialFacebook), value, timeoutMs);
  }

  async expectSocialFacebookEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutCompletePage.L.socialFacebook), timeoutMs);
  }

  async expectSocialFacebookDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutCompletePage.L.socialFacebook), timeoutMs);
  }

  async expectSocialFacebookChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutCompletePage.L.socialFacebook), timeoutMs);
  }

  async expectSocialFacebookUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutCompletePage.L.socialFacebook), timeoutMs);
  }

  async expectSocialFacebookFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutCompletePage.L.socialFacebook), timeoutMs);
  }

  async expectSocialFacebookCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutCompletePage.L.socialFacebook), count, timeoutMs);
  }

  async longPressSocialLinkedin(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutCompletePage.L.socialLinkedin));
  }

  async expectSocialLinkedinValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutCompletePage.L.socialLinkedin), value, timeoutMs);
  }

  async expectSocialLinkedinEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutCompletePage.L.socialLinkedin), timeoutMs);
  }

  async expectSocialLinkedinDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutCompletePage.L.socialLinkedin), timeoutMs);
  }

  async expectSocialLinkedinChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutCompletePage.L.socialLinkedin), timeoutMs);
  }

  async expectSocialLinkedinUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutCompletePage.L.socialLinkedin), timeoutMs);
  }

  async expectSocialLinkedinFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutCompletePage.L.socialLinkedin), timeoutMs);
  }

  async expectSocialLinkedinCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutCompletePage.L.socialLinkedin), count, timeoutMs);
  }

  async clickFooterCopy(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutCompletePage.L.footerCopy));
  }

  async doubleClickFooterCopy(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutCompletePage.L.footerCopy));
  }

  async longPressFooterCopy(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutCompletePage.L.footerCopy));
  }

  async expectFooterCopyValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutCompletePage.L.footerCopy), value, timeoutMs);
  }

  async expectFooterCopyEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutCompletePage.L.footerCopy), timeoutMs);
  }

  async expectFooterCopyDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutCompletePage.L.footerCopy), timeoutMs);
  }

  async expectFooterCopyChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutCompletePage.L.footerCopy), timeoutMs);
  }

  async expectFooterCopyUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutCompletePage.L.footerCopy), timeoutMs);
  }

  async expectFooterCopyFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutCompletePage.L.footerCopy), timeoutMs);
  }

  async expectFooterCopyCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutCompletePage.L.footerCopy), count, timeoutMs);
  }

}
