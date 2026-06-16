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
    openMenu: [
      { strategy: 'role' as const, value: 'Open Menu', role: 'button', actionKind: 'button' as const },
      { strategy: 'css' as const, value: '#react-burger-menu-btn', actionKind: 'button' as const },
      { strategy: 'text' as const, value: 'Open Menu', actionKind: 'button' as const },
    ],
    a: [
      { strategy: 'role' as const, value: '1', role: 'link', actionKind: 'link' as const },
      { strategy: 'text' as const, value: '1', actionKind: 'link' as const },
    ],
    checkoutYourInformation: { strategy: 'text' as const, value: 'Checkout: Your Information', actionKind: 'text' as const },
    firstName: [
      { strategy: 'css' as const, value: '#first-name[name="firstName"]', actionKind: 'textbox' as const },
      { strategy: 'css' as const, value: '[name="firstName"][placeholder="First Name"]', actionKind: 'textbox' as const },
      { strategy: 'placeholder' as const, value: 'First Name', actionKind: 'textbox' as const },
    ],
    lastName: [
      { strategy: 'css' as const, value: '#last-name[name="lastName"]', actionKind: 'textbox' as const },
      { strategy: 'css' as const, value: '[name="lastName"][placeholder="Last Name"]', actionKind: 'textbox' as const },
      { strategy: 'placeholder' as const, value: 'Last Name', actionKind: 'textbox' as const },
    ],
    postalCode: [
      { strategy: 'css' as const, value: '#postal-code[name="postalCode"]', actionKind: 'textbox' as const },
      { strategy: 'css' as const, value: '[name="postalCode"][placeholder="Zip/Postal Code"]', actionKind: 'textbox' as const },
      { strategy: 'placeholder' as const, value: 'Zip/Postal Code', actionKind: 'textbox' as const },
    ],
    cancel: [
      { strategy: 'role' as const, value: 'Cancel', role: 'button', actionKind: 'button' as const },
      { strategy: 'css' as const, value: '#cancel[name="cancel"]', actionKind: 'button' as const },
      { strategy: 'css' as const, value: '[name="cancel"]', actionKind: 'button' as const },
      { strategy: 'text' as const, value: 'Cancel', actionKind: 'button' as const },
    ],
    continue: [
      { strategy: 'css' as const, value: '#continue[name="continue"]', actionKind: 'generic' as const },
      { strategy: 'css' as const, value: '[name="continue"][type="submit"]', actionKind: 'generic' as const },
    ],
    twitter: [
      { strategy: 'role' as const, value: 'Twitter', role: 'link', actionKind: 'link' as const },
      { strategy: 'text' as const, value: 'Twitter', actionKind: 'link' as const },
    ],
    facebook: [
      { strategy: 'role' as const, value: 'Facebook', role: 'link', actionKind: 'link' as const },
      { strategy: 'text' as const, value: 'Facebook', actionKind: 'link' as const },
    ],
    linkedIn: [
      { strategy: 'role' as const, value: 'LinkedIn', role: 'link', actionKind: 'link' as const },
      { strategy: 'text' as const, value: 'LinkedIn', actionKind: 'link' as const },
    ],
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

  async clickA(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.a));
  }

  async doubleClickA(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.a));
  }

  async expectAVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepOnePage.L.a), timeoutMs);
  }

  async expectAHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepOnePage.L.a), timeoutMs);
  }

  async expectAText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepOnePage.L.a), expected, timeoutMs);
  }

  async expectAContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepOnePage.L.a), substring, timeoutMs);
  }

  async scrollAIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepOnePage.L.a));
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

}
