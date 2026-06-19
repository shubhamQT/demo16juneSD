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

export class LoginPage {
  private static readonly L = {
    username: { strategy: 'css' as const, value: '[data-test="username"]', actionKind: 'textbox' as const },
    password: { strategy: 'css' as const, value: '[data-test="password"]', actionKind: 'textbox' as const },
    login: { strategy: 'css' as const, value: '[data-test="login-button"]', actionKind: 'generic' as const },
    loginCredentials: { strategy: 'css' as const, value: '[data-test="login-credentials"]', actionKind: 'text' as const },
    acceptedUsernamesAre: { strategy: 'text' as const, value: 'Accepted usernames are:', actionKind: 'text' as const },
    loginPassword: { strategy: 'css' as const, value: '[data-test="login-password"]', actionKind: 'text' as const },
    passwordForAllUsers: { strategy: 'text' as const, value: 'Password for all users:', actionKind: 'text' as const },
    error: { strategy: 'css' as const, value: '[data-test="error"]', actionKind: 'text' as const },
    errorButton: { strategy: 'css' as const, value: '[data-test="error-button"]', actionKind: 'button' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async fillUsername(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LoginPage.L.username), value);
  }

  async clearUsername(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LoginPage.L.username));
  }

  async typeTextUsername(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LoginPage.L.username), value);
  }

  async expectUsernameVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.username), timeoutMs);
  }

  async expectUsernameHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.username), timeoutMs);
  }

  async expectUsernameEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.username), timeoutMs);
  }

  async expectUsernameDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.username), timeoutMs);
  }

  async expectUsernameValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.username), expected, timeoutMs);
  }

  async expectUsernameFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.username), timeoutMs);
  }

  async scrollUsernameIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.username));
  }

  async fillPassword(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LoginPage.L.password), value);
  }

  async clearPassword(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LoginPage.L.password));
  }

  async typeTextPassword(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LoginPage.L.password), value);
  }

  async expectPasswordVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.password), timeoutMs);
  }

  async expectPasswordHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.password), timeoutMs);
  }

  async expectPasswordEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.password), timeoutMs);
  }

  async expectPasswordDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.password), timeoutMs);
  }

  async expectPasswordValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.password), expected, timeoutMs);
  }

  async expectPasswordFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.password), timeoutMs);
  }

  async scrollPasswordIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.password));
  }

  async clickLogin(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.login));
  }

  async doubleClickLogin(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.login));
  }

  async expectLoginVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.login), timeoutMs);
  }

  async expectLoginHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.login), timeoutMs);
  }

  async expectLoginEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.login), timeoutMs);
  }

  async expectLoginDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.login), timeoutMs);
  }

  async expectLoginText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.login), expected, timeoutMs);
  }

  async expectLoginContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.login), substring, timeoutMs);
  }

  async scrollLoginIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.login));
  }

  async getInnerTextLoginCredentials(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LoginPage.L.loginCredentials));
  }

  async expectLoginCredentialsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.loginCredentials), timeoutMs);
  }

  async expectLoginCredentialsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.loginCredentials), timeoutMs);
  }

  async expectLoginCredentialsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.loginCredentials), expected, timeoutMs);
  }

  async expectLoginCredentialsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.loginCredentials), substring, timeoutMs);
  }

  async scrollLoginCredentialsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.loginCredentials));
  }

  async getInnerTextAcceptedUsernamesAre(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LoginPage.L.acceptedUsernamesAre));
  }

  async expectAcceptedUsernamesAreVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.acceptedUsernamesAre), timeoutMs);
  }

  async expectAcceptedUsernamesAreHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.acceptedUsernamesAre), timeoutMs);
  }

  async expectAcceptedUsernamesAreText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.acceptedUsernamesAre), expected, timeoutMs);
  }

  async expectAcceptedUsernamesAreContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.acceptedUsernamesAre), substring, timeoutMs);
  }

  async scrollAcceptedUsernamesAreIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.acceptedUsernamesAre));
  }

  async getInnerTextLoginPassword(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LoginPage.L.loginPassword));
  }

  async expectLoginPasswordVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.loginPassword), timeoutMs);
  }

  async expectLoginPasswordHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.loginPassword), timeoutMs);
  }

  async expectLoginPasswordText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.loginPassword), expected, timeoutMs);
  }

  async expectLoginPasswordContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.loginPassword), substring, timeoutMs);
  }

  async scrollLoginPasswordIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.loginPassword));
  }

  async getInnerTextPasswordForAllUsers(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LoginPage.L.passwordForAllUsers));
  }

  async expectPasswordForAllUsersVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.passwordForAllUsers), timeoutMs);
  }

  async expectPasswordForAllUsersHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.passwordForAllUsers), timeoutMs);
  }

  async expectPasswordForAllUsersText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.passwordForAllUsers), expected, timeoutMs);
  }

  async expectPasswordForAllUsersContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.passwordForAllUsers), substring, timeoutMs);
  }

  async scrollPasswordForAllUsersIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.passwordForAllUsers));
  }

  async getPageTitle(): Promise<string> {
    return this.page.title();
  }

  async expectPageTitle(expected: string | RegExp, timeoutMs = 30_000): Promise<void> {
    await expect(this.page).toHaveTitle(expected, { timeout: timeoutMs });
  }

  async getInnerTextError(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LoginPage.L.error));
  }

  async expectErrorVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.error), timeoutMs);
  }

  async expectErrorHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.error), timeoutMs);
  }

  async expectErrorText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.error), expected, timeoutMs);
  }

  async expectErrorContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.error), substring, timeoutMs);
  }

  async scrollErrorIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.error));
  }

  async clickErrorButton(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.errorButton));
  }

  async doubleClickErrorButton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.errorButton));
  }

  async expectErrorButtonVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.errorButton), timeoutMs);
  }

  async expectErrorButtonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.errorButton), timeoutMs);
  }

  async expectErrorButtonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.errorButton), timeoutMs);
  }

  async expectErrorButtonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.errorButton), timeoutMs);
  }

  async expectErrorButtonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.errorButton), expected, timeoutMs);
  }

  async expectErrorButtonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.errorButton), substring, timeoutMs);
  }

  async scrollErrorButtonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.errorButton));
  }

  async performLogin(username: string, password: string): Promise<void> {
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.clickLogin();
  }


  async expectUsernameText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.username), expected, timeoutMs);
  }

  async expectUsernameContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.username), substring, timeoutMs);
  }

  async expectUsernameChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.username), timeoutMs);
  }

  async expectUsernameUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.username), timeoutMs);
  }

  async expectUsernameCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.username), count, timeoutMs);
  }

  async expectPasswordText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.password), expected, timeoutMs);
  }

  async expectPasswordContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.password), substring, timeoutMs);
  }

  async expectPasswordChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.password), timeoutMs);
  }

  async expectPasswordUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.password), timeoutMs);
  }

  async expectPasswordCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.password), count, timeoutMs);
  }

  async longPressLogin(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.login));
  }

  async expectLoginValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.login), value, timeoutMs);
  }

  async expectLoginChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.login), timeoutMs);
  }

  async expectLoginUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.login), timeoutMs);
  }

  async expectLoginFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.login), timeoutMs);
  }

  async expectLoginCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.login), count, timeoutMs);
  }

  async clickLoginCredentials(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.loginCredentials));
  }

  async doubleClickLoginCredentials(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.loginCredentials));
  }

  async longPressLoginCredentials(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.loginCredentials));
  }

  async expectLoginCredentialsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.loginCredentials), value, timeoutMs);
  }

  async expectLoginCredentialsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.loginCredentials), timeoutMs);
  }

  async expectLoginCredentialsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.loginCredentials), timeoutMs);
  }

  async expectLoginCredentialsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.loginCredentials), timeoutMs);
  }

  async expectLoginCredentialsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.loginCredentials), timeoutMs);
  }

  async expectLoginCredentialsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.loginCredentials), timeoutMs);
  }

  async expectLoginCredentialsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.loginCredentials), count, timeoutMs);
  }

  async clickAcceptedUsernamesAre(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.acceptedUsernamesAre));
  }

  async doubleClickAcceptedUsernamesAre(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.acceptedUsernamesAre));
  }

  async longPressAcceptedUsernamesAre(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.acceptedUsernamesAre));
  }

  async expectAcceptedUsernamesAreValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.acceptedUsernamesAre), value, timeoutMs);
  }

  async expectAcceptedUsernamesAreEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.acceptedUsernamesAre), timeoutMs);
  }

  async expectAcceptedUsernamesAreDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.acceptedUsernamesAre), timeoutMs);
  }

  async expectAcceptedUsernamesAreChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.acceptedUsernamesAre), timeoutMs);
  }

  async expectAcceptedUsernamesAreUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.acceptedUsernamesAre), timeoutMs);
  }

  async expectAcceptedUsernamesAreFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.acceptedUsernamesAre), timeoutMs);
  }

  async expectAcceptedUsernamesAreCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.acceptedUsernamesAre), count, timeoutMs);
  }

  async clickLoginPassword(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.loginPassword));
  }

  async doubleClickLoginPassword(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.loginPassword));
  }

  async longPressLoginPassword(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.loginPassword));
  }

  async expectLoginPasswordValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.loginPassword), value, timeoutMs);
  }

  async expectLoginPasswordEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.loginPassword), timeoutMs);
  }

  async expectLoginPasswordDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.loginPassword), timeoutMs);
  }

  async expectLoginPasswordChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.loginPassword), timeoutMs);
  }

  async expectLoginPasswordUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.loginPassword), timeoutMs);
  }

  async expectLoginPasswordFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.loginPassword), timeoutMs);
  }

  async expectLoginPasswordCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.loginPassword), count, timeoutMs);
  }

  async clickPasswordForAllUsers(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.passwordForAllUsers));
  }

  async doubleClickPasswordForAllUsers(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.passwordForAllUsers));
  }

  async longPressPasswordForAllUsers(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.passwordForAllUsers));
  }

  async expectPasswordForAllUsersValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.passwordForAllUsers), value, timeoutMs);
  }

  async expectPasswordForAllUsersEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.passwordForAllUsers), timeoutMs);
  }

  async expectPasswordForAllUsersDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.passwordForAllUsers), timeoutMs);
  }

  async expectPasswordForAllUsersChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.passwordForAllUsers), timeoutMs);
  }

  async expectPasswordForAllUsersUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.passwordForAllUsers), timeoutMs);
  }

  async expectPasswordForAllUsersFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.passwordForAllUsers), timeoutMs);
  }

  async expectPasswordForAllUsersCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.passwordForAllUsers), count, timeoutMs);
  }

  async clickError(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.error));
  }

  async doubleClickError(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.error));
  }

  async longPressError(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.error));
  }

  async expectErrorValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.error), value, timeoutMs);
  }

  async expectErrorEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.error), timeoutMs);
  }

  async expectErrorDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.error), timeoutMs);
  }

  async expectErrorChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.error), timeoutMs);
  }

  async expectErrorUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.error), timeoutMs);
  }

  async expectErrorFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.error), timeoutMs);
  }

  async expectErrorCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.error), count, timeoutMs);
  }

  async longPressErrorButton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.errorButton));
  }

  async expectErrorButtonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.errorButton), value, timeoutMs);
  }

  async expectErrorButtonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.errorButton), timeoutMs);
  }

  async expectErrorButtonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.errorButton), timeoutMs);
  }

  async expectErrorButtonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.errorButton), timeoutMs);
  }

  async expectErrorButtonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.errorButton), count, timeoutMs);
  }

}
