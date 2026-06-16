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

export class CheckoutStepTwoPage {
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
    checkoutOverview: { strategy: 'text' as const, value: 'Checkout: Overview', actionKind: 'text' as const },
    sauceLabsBackpack: [
      { strategy: 'role' as const, value: 'Sauce Labs Backpack', role: 'link', actionKind: 'link' as const },
      { strategy: 'css' as const, value: '#item_4_title_link', actionKind: 'link' as const },
      { strategy: 'text' as const, value: 'Sauce Labs Backpack', actionKind: 'link' as const },
    ],
    cancel: [
      { strategy: 'role' as const, value: 'Cancel', role: 'button', actionKind: 'button' as const },
      { strategy: 'css' as const, value: '#cancel[name="cancel"]', actionKind: 'button' as const },
      { strategy: 'css' as const, value: '[name="cancel"]', actionKind: 'button' as const },
      { strategy: 'text' as const, value: 'Cancel', actionKind: 'button' as const },
    ],
    finish: [
      { strategy: 'role' as const, value: 'Finish', role: 'button', actionKind: 'button' as const },
      { strategy: 'css' as const, value: '#finish[name="finish"]', actionKind: 'button' as const },
      { strategy: 'css' as const, value: '[name="finish"]', actionKind: 'button' as const },
      { strategy: 'text' as const, value: 'Finish', actionKind: 'button' as const },
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
    await clickWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.openMenu));
  }

  async doubleClickOpenMenu(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.openMenu));
  }

  async expectOpenMenuVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepTwoPage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepTwoPage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutStepTwoPage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutStepTwoPage.L.openMenu), timeoutMs);
  }

  async expectOpenMenuText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepTwoPage.L.openMenu), expected, timeoutMs);
  }

  async expectOpenMenuContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepTwoPage.L.openMenu), substring, timeoutMs);
  }

  async scrollOpenMenuIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.openMenu));
  }

  async clickA(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.a));
  }

  async doubleClickA(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.a));
  }

  async expectAVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepTwoPage.L.a), timeoutMs);
  }

  async expectAHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepTwoPage.L.a), timeoutMs);
  }

  async expectAText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepTwoPage.L.a), expected, timeoutMs);
  }

  async expectAContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepTwoPage.L.a), substring, timeoutMs);
  }

  async scrollAIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.a));
  }

  async getInnerTextCheckoutOverview(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.checkoutOverview));
  }

  async expectCheckoutOverviewVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepTwoPage.L.checkoutOverview), timeoutMs);
  }

  async expectCheckoutOverviewHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepTwoPage.L.checkoutOverview), timeoutMs);
  }

  async expectCheckoutOverviewText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepTwoPage.L.checkoutOverview), expected, timeoutMs);
  }

  async expectCheckoutOverviewContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepTwoPage.L.checkoutOverview), substring, timeoutMs);
  }

  async scrollCheckoutOverviewIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.checkoutOverview));
  }

  async clickSauceLabsBackpack(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.sauceLabsBackpack));
  }

  async doubleClickSauceLabsBackpack(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.sauceLabsBackpack));
  }

  async expectSauceLabsBackpackVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepTwoPage.L.sauceLabsBackpack), timeoutMs);
  }

  async expectSauceLabsBackpackHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepTwoPage.L.sauceLabsBackpack), timeoutMs);
  }

  async expectSauceLabsBackpackText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepTwoPage.L.sauceLabsBackpack), expected, timeoutMs);
  }

  async expectSauceLabsBackpackContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepTwoPage.L.sauceLabsBackpack), substring, timeoutMs);
  }

  async scrollSauceLabsBackpackIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.sauceLabsBackpack));
  }

  async clickCancel(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.cancel));
  }

  async doubleClickCancel(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.cancel));
  }

  async expectCancelVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepTwoPage.L.cancel), timeoutMs);
  }

  async expectCancelHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepTwoPage.L.cancel), timeoutMs);
  }

  async expectCancelEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutStepTwoPage.L.cancel), timeoutMs);
  }

  async expectCancelDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutStepTwoPage.L.cancel), timeoutMs);
  }

  async expectCancelText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepTwoPage.L.cancel), expected, timeoutMs);
  }

  async expectCancelContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepTwoPage.L.cancel), substring, timeoutMs);
  }

  async scrollCancelIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.cancel));
  }

  async clickFinish(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.finish));
  }

  async doubleClickFinish(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.finish));
  }

  async expectFinishVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepTwoPage.L.finish), timeoutMs);
  }

  async expectFinishHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepTwoPage.L.finish), timeoutMs);
  }

  async expectFinishEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutStepTwoPage.L.finish), timeoutMs);
  }

  async expectFinishDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutStepTwoPage.L.finish), timeoutMs);
  }

  async expectFinishText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepTwoPage.L.finish), expected, timeoutMs);
  }

  async expectFinishContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepTwoPage.L.finish), substring, timeoutMs);
  }

  async scrollFinishIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.finish));
  }

  async clickTwitter(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.twitter));
  }

  async doubleClickTwitter(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.twitter));
  }

  async expectTwitterVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepTwoPage.L.twitter), timeoutMs);
  }

  async expectTwitterHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepTwoPage.L.twitter), timeoutMs);
  }

  async expectTwitterText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepTwoPage.L.twitter), expected, timeoutMs);
  }

  async expectTwitterContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepTwoPage.L.twitter), substring, timeoutMs);
  }

  async scrollTwitterIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.twitter));
  }

  async clickFacebook(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.facebook));
  }

  async doubleClickFacebook(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.facebook));
  }

  async expectFacebookVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepTwoPage.L.facebook), timeoutMs);
  }

  async expectFacebookHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepTwoPage.L.facebook), timeoutMs);
  }

  async expectFacebookText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepTwoPage.L.facebook), expected, timeoutMs);
  }

  async expectFacebookContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepTwoPage.L.facebook), substring, timeoutMs);
  }

  async scrollFacebookIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.facebook));
  }

  async clickLinkedIn(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.linkedIn));
  }

  async doubleClickLinkedIn(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.linkedIn));
  }

  async expectLinkedInVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CheckoutStepTwoPage.L.linkedIn), timeoutMs);
  }

  async expectLinkedInHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CheckoutStepTwoPage.L.linkedIn), timeoutMs);
  }

  async expectLinkedInText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CheckoutStepTwoPage.L.linkedIn), expected, timeoutMs);
  }

  async expectLinkedInContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CheckoutStepTwoPage.L.linkedIn), substring, timeoutMs);
  }

  async scrollLinkedInIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.linkedIn));
  }

  async getPageTitle(): Promise<string> {
    return this.page.title();
  }

  async expectPageTitle(expected: string | RegExp, timeoutMs = 30_000): Promise<void> {
    await expect(this.page).toHaveTitle(expected, { timeout: timeoutMs });
  }


  async clickCheckoutOverview(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.checkoutOverview));
  }

  async doubleClickCheckoutOverview(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.checkoutOverview));
  }

  async longPressCheckoutOverview(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CheckoutStepTwoPage.L.checkoutOverview));
  }

  async expectCheckoutOverviewValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CheckoutStepTwoPage.L.checkoutOverview), value, timeoutMs);
  }

  async expectCheckoutOverviewEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CheckoutStepTwoPage.L.checkoutOverview), timeoutMs);
  }

  async expectCheckoutOverviewDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CheckoutStepTwoPage.L.checkoutOverview), timeoutMs);
  }

  async expectCheckoutOverviewChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CheckoutStepTwoPage.L.checkoutOverview), timeoutMs);
  }

  async expectCheckoutOverviewUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CheckoutStepTwoPage.L.checkoutOverview), timeoutMs);
  }

  async expectCheckoutOverviewFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CheckoutStepTwoPage.L.checkoutOverview), timeoutMs);
  }

  async expectCheckoutOverviewCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CheckoutStepTwoPage.L.checkoutOverview), count, timeoutMs);
  }

}
