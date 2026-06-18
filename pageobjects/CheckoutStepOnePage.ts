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
    shoppingCart: { strategy: 'role' as const, value: '2', role: 'link', actionKind: 'link' as const },
    checkoutYourInformation: { strategy: 'testId' as const, value: 'title', actionKind: 'text' as const },
    firstName: { strategy: 'testId' as const, value: 'firstName', actionKind: 'textbox' as const },
    lastName: { strategy: 'testId' as const, value: 'lastName', actionKind: 'textbox' as const },
    postalCode: { strategy: 'testId' as const, value: 'postalCode', actionKind: 'textbox' as const },
    errorFirstNameIs: { strategy: 'testId' as const, value: 'error', actionKind: 'text' as const },
    error: { strategy: 'testId' as const, value: 'error-button', actionKind: 'button' as const },
    cancel: { strategy: 'role' as const, value: 'Cancel', role: 'button', actionKind: 'button' as const },
    continue: { strategy: 'testId' as const, value: 'continue', actionKind: 'generic' as const },
    twitter: { strategy: 'role' as const, value: 'Twitter', role: 'link', actionKind: 'link' as const },
    facebook: { strategy: 'role' as const, value: 'Facebook', role: 'link', actionKind: 'link' as const },
    linkedIn: { strategy: 'role' as const, value: 'LinkedIn', role: 'link', actionKind: 'link' as const },
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

  async getInnerTextCheckoutYourInformation(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.checkoutYourInformation));
  }

  async expectCheckoutYourInformationVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepOnePage.L.checkoutYourInformation), timeoutMs);
  }

  async expectCheckoutYourInformationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepOnePage.L.checkoutYourInformation), timeoutMs);
  }

  async expectCheckoutYourInformationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepOnePage.L.checkoutYourInformation), expected, timeoutMs);
  }

  async expectCheckoutYourInformationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepOnePage.L.checkoutYourInformation), substring, timeoutMs);
  }

  async scrollCheckoutYourInformationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.checkoutYourInformation));
  }

  async fillFirstName(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.firstName), value);
  }

  async clearFirstName(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.firstName));
  }

  async typeTextFirstName(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.firstName), value);
  }

  async expectFirstNameVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepOnePage.L.firstName), timeoutMs);
  }

  async expectFirstNameHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepOnePage.L.firstName), timeoutMs);
  }

  async expectFirstNameEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutStepOnePage.L.firstName), timeoutMs);
  }

  async expectFirstNameDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutStepOnePage.L.firstName), timeoutMs);
  }

  async expectFirstNameValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutStepOnePage.L.firstName), expected, timeoutMs);
  }

  async expectFirstNameFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutStepOnePage.L.firstName), timeoutMs);
  }

  async scrollFirstNameIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.firstName));
  }

  async fillLastName(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.lastName), value);
  }

  async clearLastName(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.lastName));
  }

  async typeTextLastName(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.lastName), value);
  }

  async expectLastNameVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepOnePage.L.lastName), timeoutMs);
  }

  async expectLastNameHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepOnePage.L.lastName), timeoutMs);
  }

  async expectLastNameEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutStepOnePage.L.lastName), timeoutMs);
  }

  async expectLastNameDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutStepOnePage.L.lastName), timeoutMs);
  }

  async expectLastNameValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutStepOnePage.L.lastName), expected, timeoutMs);
  }

  async expectLastNameFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutStepOnePage.L.lastName), timeoutMs);
  }

  async scrollLastNameIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.lastName));
  }

  async fillPostalCode(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.postalCode), value);
  }

  async clearPostalCode(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.postalCode));
  }

  async typeTextPostalCode(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.postalCode), value);
  }

  async expectPostalCodeVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepOnePage.L.postalCode), timeoutMs);
  }

  async expectPostalCodeHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepOnePage.L.postalCode), timeoutMs);
  }

  async expectPostalCodeEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutStepOnePage.L.postalCode), timeoutMs);
  }

  async expectPostalCodeDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutStepOnePage.L.postalCode), timeoutMs);
  }

  async expectPostalCodeValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutStepOnePage.L.postalCode), expected, timeoutMs);
  }

  async expectPostalCodeFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutStepOnePage.L.postalCode), timeoutMs);
  }

  async scrollPostalCodeIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.postalCode));
  }

  async getInnerTextErrorFirstNameIs(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.errorFirstNameIs));
  }

  async expectErrorFirstNameIsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepOnePage.L.errorFirstNameIs), timeoutMs);
  }

  async expectErrorFirstNameIsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepOnePage.L.errorFirstNameIs), timeoutMs);
  }

  async expectErrorFirstNameIsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepOnePage.L.errorFirstNameIs), expected, timeoutMs);
  }

  async expectErrorFirstNameIsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepOnePage.L.errorFirstNameIs), substring, timeoutMs);
  }

  async scrollErrorFirstNameIsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.errorFirstNameIs));
  }

  async clickError(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.error));
  }

  async doubleClickError(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.error));
  }

  async expectErrorVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepOnePage.L.error), timeoutMs);
  }

  async expectErrorHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepOnePage.L.error), timeoutMs);
  }

  async expectErrorEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutStepOnePage.L.error), timeoutMs);
  }

  async expectErrorDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutStepOnePage.L.error), timeoutMs);
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

  async clickCancel(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.cancel));
  }

  async doubleClickCancel(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.cancel));
  }

  async expectCancelVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepOnePage.L.cancel), timeoutMs);
  }

  async expectCancelHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepOnePage.L.cancel), timeoutMs);
  }

  async expectCancelEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutStepOnePage.L.cancel), timeoutMs);
  }

  async expectCancelDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutStepOnePage.L.cancel), timeoutMs);
  }

  async expectCancelText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepOnePage.L.cancel), expected, timeoutMs);
  }

  async expectCancelContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepOnePage.L.cancel), substring, timeoutMs);
  }

  async scrollCancelIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.cancel));
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

  async clickTwitter(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.twitter));
  }

  async doubleClickTwitter(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.twitter));
  }

  async expectTwitterVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepOnePage.L.twitter), timeoutMs);
  }

  async expectTwitterHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepOnePage.L.twitter), timeoutMs);
  }

  async expectTwitterText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepOnePage.L.twitter), expected, timeoutMs);
  }

  async expectTwitterContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepOnePage.L.twitter), substring, timeoutMs);
  }

  async scrollTwitterIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.twitter));
  }

  async clickFacebook(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.facebook));
  }

  async doubleClickFacebook(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.facebook));
  }

  async expectFacebookVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepOnePage.L.facebook), timeoutMs);
  }

  async expectFacebookHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepOnePage.L.facebook), timeoutMs);
  }

  async expectFacebookText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepOnePage.L.facebook), expected, timeoutMs);
  }

  async expectFacebookContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepOnePage.L.facebook), substring, timeoutMs);
  }

  async scrollFacebookIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.facebook));
  }

  async clickLinkedIn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.linkedIn));
  }

  async doubleClickLinkedIn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.linkedIn));
  }

  async expectLinkedInVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepOnePage.L.linkedIn), timeoutMs);
  }

  async expectLinkedInHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepOnePage.L.linkedIn), timeoutMs);
  }

  async expectLinkedInText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepOnePage.L.linkedIn), expected, timeoutMs);
  }

  async expectLinkedInContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepOnePage.L.linkedIn), substring, timeoutMs);
  }

  async scrollLinkedInIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.linkedIn));
  }

  async getPageTitle(): Promise<string> {
    return this.page.title();
  }

  async expectPageTitle(expected: string | RegExp, timeoutMs = 30_000): Promise<void> {
    await expect(this.page).toHaveTitle(expected, { timeout: timeoutMs });
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

  async clickCheckoutYourInformation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.checkoutYourInformation));
  }

  async doubleClickCheckoutYourInformation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.checkoutYourInformation));
  }

  async longPressCheckoutYourInformation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.checkoutYourInformation));
  }

  async expectCheckoutYourInformationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutStepOnePage.L.checkoutYourInformation), value, timeoutMs);
  }

  async expectCheckoutYourInformationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutStepOnePage.L.checkoutYourInformation), timeoutMs);
  }

  async expectCheckoutYourInformationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutStepOnePage.L.checkoutYourInformation), timeoutMs);
  }

  async expectCheckoutYourInformationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutStepOnePage.L.checkoutYourInformation), timeoutMs);
  }

  async expectCheckoutYourInformationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutStepOnePage.L.checkoutYourInformation), timeoutMs);
  }

  async expectCheckoutYourInformationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutStepOnePage.L.checkoutYourInformation), timeoutMs);
  }

  async expectCheckoutYourInformationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutStepOnePage.L.checkoutYourInformation), count, timeoutMs);
  }

  async expectFirstNameText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepOnePage.L.firstName), expected, timeoutMs);
  }

  async expectFirstNameContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepOnePage.L.firstName), substring, timeoutMs);
  }

  async expectFirstNameChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutStepOnePage.L.firstName), timeoutMs);
  }

  async expectFirstNameUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutStepOnePage.L.firstName), timeoutMs);
  }

  async expectFirstNameCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutStepOnePage.L.firstName), count, timeoutMs);
  }

  async expectLastNameText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepOnePage.L.lastName), expected, timeoutMs);
  }

  async expectLastNameContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepOnePage.L.lastName), substring, timeoutMs);
  }

  async expectLastNameChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutStepOnePage.L.lastName), timeoutMs);
  }

  async expectLastNameUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutStepOnePage.L.lastName), timeoutMs);
  }

  async expectLastNameCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutStepOnePage.L.lastName), count, timeoutMs);
  }

  async expectPostalCodeText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepOnePage.L.postalCode), expected, timeoutMs);
  }

  async expectPostalCodeContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepOnePage.L.postalCode), substring, timeoutMs);
  }

  async expectPostalCodeChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutStepOnePage.L.postalCode), timeoutMs);
  }

  async expectPostalCodeUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutStepOnePage.L.postalCode), timeoutMs);
  }

  async expectPostalCodeCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutStepOnePage.L.postalCode), count, timeoutMs);
  }

  async clickErrorFirstNameIs(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.errorFirstNameIs));
  }

  async doubleClickErrorFirstNameIs(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.errorFirstNameIs));
  }

  async longPressErrorFirstNameIs(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.errorFirstNameIs));
  }

  async expectErrorFirstNameIsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutStepOnePage.L.errorFirstNameIs), value, timeoutMs);
  }

  async expectErrorFirstNameIsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutStepOnePage.L.errorFirstNameIs), timeoutMs);
  }

  async expectErrorFirstNameIsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutStepOnePage.L.errorFirstNameIs), timeoutMs);
  }

  async expectErrorFirstNameIsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutStepOnePage.L.errorFirstNameIs), timeoutMs);
  }

  async expectErrorFirstNameIsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutStepOnePage.L.errorFirstNameIs), timeoutMs);
  }

  async expectErrorFirstNameIsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutStepOnePage.L.errorFirstNameIs), timeoutMs);
  }

  async expectErrorFirstNameIsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutStepOnePage.L.errorFirstNameIs), count, timeoutMs);
  }

  async longPressError(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.error));
  }

  async expectErrorValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutStepOnePage.L.error), value, timeoutMs);
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

  async longPressCancel(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.cancel));
  }

  async expectCancelValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutStepOnePage.L.cancel), value, timeoutMs);
  }

  async expectCancelChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutStepOnePage.L.cancel), timeoutMs);
  }

  async expectCancelUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutStepOnePage.L.cancel), timeoutMs);
  }

  async expectCancelFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutStepOnePage.L.cancel), timeoutMs);
  }

  async expectCancelCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutStepOnePage.L.cancel), count, timeoutMs);
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

  async longPressTwitter(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.twitter));
  }

  async expectTwitterValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutStepOnePage.L.twitter), value, timeoutMs);
  }

  async expectTwitterEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutStepOnePage.L.twitter), timeoutMs);
  }

  async expectTwitterDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutStepOnePage.L.twitter), timeoutMs);
  }

  async expectTwitterChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutStepOnePage.L.twitter), timeoutMs);
  }

  async expectTwitterUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutStepOnePage.L.twitter), timeoutMs);
  }

  async expectTwitterFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutStepOnePage.L.twitter), timeoutMs);
  }

  async expectTwitterCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutStepOnePage.L.twitter), count, timeoutMs);
  }

  async longPressFacebook(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.facebook));
  }

  async expectFacebookValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutStepOnePage.L.facebook), value, timeoutMs);
  }

  async expectFacebookEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutStepOnePage.L.facebook), timeoutMs);
  }

  async expectFacebookDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutStepOnePage.L.facebook), timeoutMs);
  }

  async expectFacebookChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutStepOnePage.L.facebook), timeoutMs);
  }

  async expectFacebookUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutStepOnePage.L.facebook), timeoutMs);
  }

  async expectFacebookFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutStepOnePage.L.facebook), timeoutMs);
  }

  async expectFacebookCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutStepOnePage.L.facebook), count, timeoutMs);
  }

  async longPressLinkedIn(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.linkedIn));
  }

  async expectLinkedInValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutStepOnePage.L.linkedIn), value, timeoutMs);
  }

  async expectLinkedInEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutStepOnePage.L.linkedIn), timeoutMs);
  }

  async expectLinkedInDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutStepOnePage.L.linkedIn), timeoutMs);
  }

  async expectLinkedInChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutStepOnePage.L.linkedIn), timeoutMs);
  }

  async expectLinkedInUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutStepOnePage.L.linkedIn), timeoutMs);
  }

  async expectLinkedInFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutStepOnePage.L.linkedIn), timeoutMs);
  }

  async expectLinkedInCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutStepOnePage.L.linkedIn), count, timeoutMs);
  }

}
