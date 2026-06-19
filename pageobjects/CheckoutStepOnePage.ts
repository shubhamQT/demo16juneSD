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

export class CheckoutStepOnePage {
  private static readonly L = {
    openMenu: { strategy: 'role' as const, value: 'Open Menu', role: 'button', actionKind: 'button' as const },
    shoppingCart: { strategy: 'css' as const, value: '[data-test="shopping-cart-link"]', actionKind: 'link' as const },
    title: { strategy: 'css' as const, value: '[data-test="title"]', actionKind: 'text' as const },
    firstname: { strategy: 'css' as const, value: '[data-test="firstName"]', actionKind: 'textbox' as const },
    lastname: { strategy: 'css' as const, value: '[data-test="lastName"]', actionKind: 'textbox' as const },
    postalcode: { strategy: 'css' as const, value: '[data-test="postalCode"]', actionKind: 'textbox' as const },
    canc: { strategy: 'role' as const, value: 'Cancel', role: 'button', actionKind: 'button' as const },
    continue: { strategy: 'css' as const, value: '[data-test="continue"]', actionKind: 'generic' as const },
    socialTwitter: { strategy: 'role' as const, value: 'Twitter', role: 'link', actionKind: 'link' as const },
    socialFacebook: { strategy: 'role' as const, value: 'Facebook', role: 'link', actionKind: 'link' as const },
    socialLinkedin: { strategy: 'role' as const, value: 'LinkedIn', role: 'link', actionKind: 'link' as const },
    footerCopy: { strategy: 'css' as const, value: '[data-test="footer-copy"]', actionKind: 'text' as const },
    error: { strategy: 'css' as const, value: '[data-test="error"]', actionKind: 'text' as const },
    errorButton: { strategy: 'css' as const, value: '[data-test="error-button"]', actionKind: 'button' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickOpenMenu(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.openMenu));
  }

  async doubleClickOpenMenu(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.openMenu));
  }

  async expectOpenMenuVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepOnePage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepOnePage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutStepOnePage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutStepOnePage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepOnePage.L.openMenu), expected, timeoutMs);
  }

  async expectOpenMenuContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepOnePage.L.openMenu), substring, timeoutMs);
  }

  async scrollOpenMenuIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.openMenu));
  }

  async clickShoppingCart(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.shoppingCart));
  }

  async doubleClickShoppingCart(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.shoppingCart));
  }

  async expectShoppingCartVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepOnePage.L.shoppingCart), timeoutMs);
  }

  async expectShoppingCartHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepOnePage.L.shoppingCart), timeoutMs);
  }

  async expectShoppingCartText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepOnePage.L.shoppingCart), expected, timeoutMs);
  }

  async expectShoppingCartContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepOnePage.L.shoppingCart), substring, timeoutMs);
  }

  async scrollShoppingCartIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.shoppingCart));
  }

  async getInnerTextTitle(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.title));
  }

  async expectTitleVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepOnePage.L.title), timeoutMs);
  }

  async expectTitleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepOnePage.L.title), timeoutMs);
  }

  async expectTitleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepOnePage.L.title), expected, timeoutMs);
  }

  async expectTitleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepOnePage.L.title), substring, timeoutMs);
  }

  async scrollTitleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.title));
  }

  async fillFirstname(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.firstname), value);
  }

  async clearFirstname(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.firstname));
  }

  async typeTextFirstname(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.firstname), value);
  }

  async expectFirstnameVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepOnePage.L.firstname), timeoutMs);
  }

  async expectFirstnameHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepOnePage.L.firstname), timeoutMs);
  }

  async expectFirstnameEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutStepOnePage.L.firstname), timeoutMs);
  }

  async expectFirstnameDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutStepOnePage.L.firstname), timeoutMs);
  }

  async expectFirstnameValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutStepOnePage.L.firstname), expected, timeoutMs);
  }

  async expectFirstnameFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutStepOnePage.L.firstname), timeoutMs);
  }

  async scrollFirstnameIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.firstname));
  }

  async fillLastname(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.lastname), value);
  }

  async clearLastname(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.lastname));
  }

  async typeTextLastname(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.lastname), value);
  }

  async expectLastnameVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepOnePage.L.lastname), timeoutMs);
  }

  async expectLastnameHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepOnePage.L.lastname), timeoutMs);
  }

  async expectLastnameEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutStepOnePage.L.lastname), timeoutMs);
  }

  async expectLastnameDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutStepOnePage.L.lastname), timeoutMs);
  }

  async expectLastnameValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutStepOnePage.L.lastname), expected, timeoutMs);
  }

  async expectLastnameFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutStepOnePage.L.lastname), timeoutMs);
  }

  async scrollLastnameIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.lastname));
  }

  async fillPostalcode(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.postalcode), value);
  }

  async clearPostalcode(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.postalcode));
  }

  async typeTextPostalcode(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.postalcode), value);
  }

  async expectPostalcodeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepOnePage.L.postalcode), timeoutMs);
  }

  async expectPostalcodeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepOnePage.L.postalcode), timeoutMs);
  }

  async expectPostalcodeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutStepOnePage.L.postalcode), timeoutMs);
  }

  async expectPostalcodeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutStepOnePage.L.postalcode), timeoutMs);
  }

  async expectPostalcodeValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutStepOnePage.L.postalcode), expected, timeoutMs);
  }

  async expectPostalcodeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutStepOnePage.L.postalcode), timeoutMs);
  }

  async scrollPostalcodeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.postalcode));
  }

  async clickCanc(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.canc));
  }

  async doubleClickCanc(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.canc));
  }

  async expectCancVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepOnePage.L.canc), timeoutMs);
  }

  async expectCancHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepOnePage.L.canc), timeoutMs);
  }

  async expectCancEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutStepOnePage.L.canc), timeoutMs);
  }

  async expectCancDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutStepOnePage.L.canc), timeoutMs);
  }

  async expectCancText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepOnePage.L.canc), expected, timeoutMs);
  }

  async expectCancContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepOnePage.L.canc), substring, timeoutMs);
  }

  async scrollCancIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.canc));
  }

  async clickContinue(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.continue));
  }

  async doubleClickContinue(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.continue));
  }

  async expectContinueVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepOnePage.L.continue), timeoutMs);
  }

  async expectContinueHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepOnePage.L.continue), timeoutMs);
  }

  async expectContinueEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutStepOnePage.L.continue), timeoutMs);
  }

  async expectContinueDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutStepOnePage.L.continue), timeoutMs);
  }

  async expectContinueText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepOnePage.L.continue), expected, timeoutMs);
  }

  async expectContinueContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepOnePage.L.continue), substring, timeoutMs);
  }

  async scrollContinueIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.continue));
  }

  async clickSocialTwitter(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.socialTwitter));
  }

  async doubleClickSocialTwitter(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.socialTwitter));
  }

  async expectSocialTwitterVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepOnePage.L.socialTwitter), timeoutMs);
  }

  async expectSocialTwitterHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepOnePage.L.socialTwitter), timeoutMs);
  }

  async expectSocialTwitterText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepOnePage.L.socialTwitter), expected, timeoutMs);
  }

  async expectSocialTwitterContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepOnePage.L.socialTwitter), substring, timeoutMs);
  }

  async scrollSocialTwitterIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.socialTwitter));
  }

  async clickSocialFacebook(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.socialFacebook));
  }

  async doubleClickSocialFacebook(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.socialFacebook));
  }

  async expectSocialFacebookVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepOnePage.L.socialFacebook), timeoutMs);
  }

  async expectSocialFacebookHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepOnePage.L.socialFacebook), timeoutMs);
  }

  async expectSocialFacebookText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepOnePage.L.socialFacebook), expected, timeoutMs);
  }

  async expectSocialFacebookContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepOnePage.L.socialFacebook), substring, timeoutMs);
  }

  async scrollSocialFacebookIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.socialFacebook));
  }

  async clickSocialLinkedin(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.socialLinkedin));
  }

  async doubleClickSocialLinkedin(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.socialLinkedin));
  }

  async expectSocialLinkedinVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepOnePage.L.socialLinkedin), timeoutMs);
  }

  async expectSocialLinkedinHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepOnePage.L.socialLinkedin), timeoutMs);
  }

  async expectSocialLinkedinText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepOnePage.L.socialLinkedin), expected, timeoutMs);
  }

  async expectSocialLinkedinContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepOnePage.L.socialLinkedin), substring, timeoutMs);
  }

  async scrollSocialLinkedinIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.socialLinkedin));
  }

  async getInnerTextFooterCopy(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.footerCopy));
  }

  async expectFooterCopyVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepOnePage.L.footerCopy), timeoutMs);
  }

  async expectFooterCopyHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepOnePage.L.footerCopy), timeoutMs);
  }

  async expectFooterCopyText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepOnePage.L.footerCopy), expected, timeoutMs);
  }

  async expectFooterCopyContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepOnePage.L.footerCopy), substring, timeoutMs);
  }

  async scrollFooterCopyIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.footerCopy));
  }

  async getPageTitle(): Promise<string> {
    return this.page.title();
  }

  async expectPageTitle(expected: string | RegExp, timeoutMs = 30_000): Promise<void> {
    await expect(this.page).toHaveTitle(expected, { timeout: timeoutMs });
  }

  async getInnerTextError(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.error));
  }

  async expectErrorVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepOnePage.L.error), timeoutMs);
  }

  async expectErrorHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepOnePage.L.error), timeoutMs);
  }

  async expectErrorText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepOnePage.L.error), expected, timeoutMs);
  }

  async expectErrorContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepOnePage.L.error), substring, timeoutMs);
  }

  async scrollErrorIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.error));
  }

  async clickErrorButton(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.errorButton));
  }

  async doubleClickErrorButton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.errorButton));
  }

  async expectErrorButtonVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepOnePage.L.errorButton), timeoutMs);
  }

  async expectErrorButtonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepOnePage.L.errorButton), timeoutMs);
  }

  async expectErrorButtonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutStepOnePage.L.errorButton), timeoutMs);
  }

  async expectErrorButtonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutStepOnePage.L.errorButton), timeoutMs);
  }

  async expectErrorButtonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepOnePage.L.errorButton), expected, timeoutMs);
  }

  async expectErrorButtonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepOnePage.L.errorButton), substring, timeoutMs);
  }

  async scrollErrorButtonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.errorButton));
  }


  async longPressOpenMenu(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.openMenu));
  }

  async expectOpenMenuValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutStepOnePage.L.openMenu), value, timeoutMs);
  }

  async expectOpenMenuChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutStepOnePage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutStepOnePage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutStepOnePage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutStepOnePage.L.openMenu), count, timeoutMs);
  }

  async longPressShoppingCart(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.shoppingCart));
  }

  async expectShoppingCartValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutStepOnePage.L.shoppingCart), value, timeoutMs);
  }

  async expectShoppingCartEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutStepOnePage.L.shoppingCart), timeoutMs);
  }

  async expectShoppingCartDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutStepOnePage.L.shoppingCart), timeoutMs);
  }

  async expectShoppingCartChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutStepOnePage.L.shoppingCart), timeoutMs);
  }

  async expectShoppingCartUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutStepOnePage.L.shoppingCart), timeoutMs);
  }

  async expectShoppingCartFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutStepOnePage.L.shoppingCart), timeoutMs);
  }

  async expectShoppingCartCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutStepOnePage.L.shoppingCart), count, timeoutMs);
  }

  async clickTitle(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.title));
  }

  async doubleClickTitle(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.title));
  }

  async longPressTitle(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.title));
  }

  async expectTitleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutStepOnePage.L.title), value, timeoutMs);
  }

  async expectTitleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutStepOnePage.L.title), timeoutMs);
  }

  async expectTitleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutStepOnePage.L.title), timeoutMs);
  }

  async expectTitleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutStepOnePage.L.title), timeoutMs);
  }

  async expectTitleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutStepOnePage.L.title), timeoutMs);
  }

  async expectTitleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutStepOnePage.L.title), timeoutMs);
  }

  async expectTitleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutStepOnePage.L.title), count, timeoutMs);
  }

  async expectFirstnameText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepOnePage.L.firstname), expected, timeoutMs);
  }

  async expectFirstnameContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepOnePage.L.firstname), substring, timeoutMs);
  }

  async expectFirstnameChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutStepOnePage.L.firstname), timeoutMs);
  }

  async expectFirstnameUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutStepOnePage.L.firstname), timeoutMs);
  }

  async expectFirstnameCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutStepOnePage.L.firstname), count, timeoutMs);
  }

  async expectLastnameText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepOnePage.L.lastname), expected, timeoutMs);
  }

  async expectLastnameContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepOnePage.L.lastname), substring, timeoutMs);
  }

  async expectLastnameChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutStepOnePage.L.lastname), timeoutMs);
  }

  async expectLastnameUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutStepOnePage.L.lastname), timeoutMs);
  }

  async expectLastnameCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutStepOnePage.L.lastname), count, timeoutMs);
  }

  async expectPostalcodeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepOnePage.L.postalcode), expected, timeoutMs);
  }

  async expectPostalcodeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepOnePage.L.postalcode), substring, timeoutMs);
  }

  async expectPostalcodeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutStepOnePage.L.postalcode), timeoutMs);
  }

  async expectPostalcodeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutStepOnePage.L.postalcode), timeoutMs);
  }

  async expectPostalcodeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutStepOnePage.L.postalcode), count, timeoutMs);
  }

  async longPressCanc(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.canc));
  }

  async expectCancValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutStepOnePage.L.canc), value, timeoutMs);
  }

  async expectCancChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutStepOnePage.L.canc), timeoutMs);
  }

  async expectCancUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutStepOnePage.L.canc), timeoutMs);
  }

  async expectCancFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutStepOnePage.L.canc), timeoutMs);
  }

  async expectCancCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutStepOnePage.L.canc), count, timeoutMs);
  }

  async longPressContinue(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.continue));
  }

  async expectContinueValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutStepOnePage.L.continue), value, timeoutMs);
  }

  async expectContinueChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutStepOnePage.L.continue), timeoutMs);
  }

  async expectContinueUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutStepOnePage.L.continue), timeoutMs);
  }

  async expectContinueFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutStepOnePage.L.continue), timeoutMs);
  }

  async expectContinueCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutStepOnePage.L.continue), count, timeoutMs);
  }

  async longPressSocialTwitter(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.socialTwitter));
  }

  async expectSocialTwitterValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutStepOnePage.L.socialTwitter), value, timeoutMs);
  }

  async expectSocialTwitterEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutStepOnePage.L.socialTwitter), timeoutMs);
  }

  async expectSocialTwitterDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutStepOnePage.L.socialTwitter), timeoutMs);
  }

  async expectSocialTwitterChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutStepOnePage.L.socialTwitter), timeoutMs);
  }

  async expectSocialTwitterUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutStepOnePage.L.socialTwitter), timeoutMs);
  }

  async expectSocialTwitterFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutStepOnePage.L.socialTwitter), timeoutMs);
  }

  async expectSocialTwitterCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutStepOnePage.L.socialTwitter), count, timeoutMs);
  }

  async longPressSocialFacebook(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.socialFacebook));
  }

  async expectSocialFacebookValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutStepOnePage.L.socialFacebook), value, timeoutMs);
  }

  async expectSocialFacebookEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutStepOnePage.L.socialFacebook), timeoutMs);
  }

  async expectSocialFacebookDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutStepOnePage.L.socialFacebook), timeoutMs);
  }

  async expectSocialFacebookChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutStepOnePage.L.socialFacebook), timeoutMs);
  }

  async expectSocialFacebookUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutStepOnePage.L.socialFacebook), timeoutMs);
  }

  async expectSocialFacebookFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutStepOnePage.L.socialFacebook), timeoutMs);
  }

  async expectSocialFacebookCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutStepOnePage.L.socialFacebook), count, timeoutMs);
  }

  async longPressSocialLinkedin(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.socialLinkedin));
  }

  async expectSocialLinkedinValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutStepOnePage.L.socialLinkedin), value, timeoutMs);
  }

  async expectSocialLinkedinEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutStepOnePage.L.socialLinkedin), timeoutMs);
  }

  async expectSocialLinkedinDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutStepOnePage.L.socialLinkedin), timeoutMs);
  }

  async expectSocialLinkedinChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutStepOnePage.L.socialLinkedin), timeoutMs);
  }

  async expectSocialLinkedinUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutStepOnePage.L.socialLinkedin), timeoutMs);
  }

  async expectSocialLinkedinFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutStepOnePage.L.socialLinkedin), timeoutMs);
  }

  async expectSocialLinkedinCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutStepOnePage.L.socialLinkedin), count, timeoutMs);
  }

  async clickFooterCopy(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.footerCopy));
  }

  async doubleClickFooterCopy(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.footerCopy));
  }

  async longPressFooterCopy(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.footerCopy));
  }

  async expectFooterCopyValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutStepOnePage.L.footerCopy), value, timeoutMs);
  }

  async expectFooterCopyEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutStepOnePage.L.footerCopy), timeoutMs);
  }

  async expectFooterCopyDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutStepOnePage.L.footerCopy), timeoutMs);
  }

  async expectFooterCopyChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutStepOnePage.L.footerCopy), timeoutMs);
  }

  async expectFooterCopyUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutStepOnePage.L.footerCopy), timeoutMs);
  }

  async expectFooterCopyFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutStepOnePage.L.footerCopy), timeoutMs);
  }

  async expectFooterCopyCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutStepOnePage.L.footerCopy), count, timeoutMs);
  }

  async clickError(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.error));
  }

  async doubleClickError(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.error));
  }

  async longPressError(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.error));
  }

  async expectErrorValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutStepOnePage.L.error), value, timeoutMs);
  }

  async expectErrorEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutStepOnePage.L.error), timeoutMs);
  }

  async expectErrorDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutStepOnePage.L.error), timeoutMs);
  }

  async expectErrorChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutStepOnePage.L.error), timeoutMs);
  }

  async expectErrorUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutStepOnePage.L.error), timeoutMs);
  }

  async expectErrorFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutStepOnePage.L.error), timeoutMs);
  }

  async expectErrorCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutStepOnePage.L.error), count, timeoutMs);
  }

  async longPressErrorButton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.errorButton));
  }

  async expectErrorButtonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutStepOnePage.L.errorButton), value, timeoutMs);
  }

  async expectErrorButtonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutStepOnePage.L.errorButton), timeoutMs);
  }

  async expectErrorButtonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutStepOnePage.L.errorButton), timeoutMs);
  }

  async expectErrorButtonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutStepOnePage.L.errorButton), timeoutMs);
  }

  async expectErrorButtonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutStepOnePage.L.errorButton), count, timeoutMs);
  }

}
