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
    userName: [
      { strategy: 'css' as const, value: '#user-name[name="user-name"]', actionKind: 'textbox' as const },
      { strategy: 'css' as const, value: '[name="user-name"][placeholder="Username"]', actionKind: 'textbox' as const },
      { strategy: 'placeholder' as const, value: 'Username', actionKind: 'textbox' as const },
    ],
    password: [
      { strategy: 'css' as const, value: '#password[name="password"]', actionKind: 'textbox' as const },
      { strategy: 'css' as const, value: '[name="password"][placeholder="Password"]', actionKind: 'textbox' as const },
      { strategy: 'placeholder' as const, value: 'Password', actionKind: 'textbox' as const },
    ],
    loginButton: [
      { strategy: 'css' as const, value: '#login-button[name="login-button"]', actionKind: 'generic' as const },
      { strategy: 'css' as const, value: '[name="login-button"][type="submit"]', actionKind: 'generic' as const },
    ],
    acceptedUsernamesAre: { strategy: 'text' as const, value: 'Accepted usernames are:', actionKind: 'text' as const },
    passwordForAllUsers: { strategy: 'text' as const, value: 'Password for all users:', actionKind: 'text' as const },
    epicSadfaceUsernameIs: { strategy: 'text' as const, value: 'Epic sadface: Username is required', actionKind: 'text' as const },
    epicSadfacePasswordIs: { strategy: 'text' as const, value: 'Epic sadface: Password is required', actionKind: 'text' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async fillUserName(value: string): Promise<void> {
    await fillWhenVisible(webLocator(this.page, LoginPage.L.userName), value);
  }

  async clearUserName(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, LoginPage.L.userName));
  }

  async typeTextUserName(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, LoginPage.L.userName), value);
  }

  async expectUserNameVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.userName), timeoutMs);
  }

  async expectUserNameHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.userName), timeoutMs);
  }

  async expectUserNameEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.userName), timeoutMs);
  }

  async expectUserNameDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.userName), timeoutMs);
  }

  async expectUserNameValue(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.userName), expected, timeoutMs);
  }

  async expectUserNameFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.userName), timeoutMs);
  }

  async scrollUserNameIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.userName));
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

  async clickLoginButton(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.loginButton));
  }

  async doubleClickLoginButton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.loginButton));
  }

  async expectLoginButtonVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.loginButton), timeoutMs);
  }

  async expectLoginButtonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.loginButton), timeoutMs);
  }

  async expectLoginButtonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.loginButton), timeoutMs);
  }

  async expectLoginButtonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.loginButton), timeoutMs);
  }

  async expectLoginButtonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.loginButton), expected, timeoutMs);
  }

  async expectLoginButtonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.loginButton), substring, timeoutMs);
  }

  async scrollLoginButtonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.loginButton));
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

  async getInnerTextEpicSadfaceUsernameIs(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LoginPage.L.epicSadfaceUsernameIs));
  }

  async expectEpicSadfaceUsernameIsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.epicSadfaceUsernameIs), timeoutMs);
  }

  async expectEpicSadfaceUsernameIsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.epicSadfaceUsernameIs), timeoutMs);
  }

  async expectEpicSadfaceUsernameIsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.epicSadfaceUsernameIs), expected, timeoutMs);
  }

  async expectEpicSadfaceUsernameIsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.epicSadfaceUsernameIs), substring, timeoutMs);
  }

  async scrollEpicSadfaceUsernameIsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.epicSadfaceUsernameIs));
  }

  async getInnerTextEpicSadfacePasswordIs(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, LoginPage.L.epicSadfacePasswordIs));
  }

  async expectEpicSadfacePasswordIsVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, LoginPage.L.epicSadfacePasswordIs), timeoutMs);
  }

  async expectEpicSadfacePasswordIsHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, LoginPage.L.epicSadfacePasswordIs), timeoutMs);
  }

  async expectEpicSadfacePasswordIsText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, LoginPage.L.epicSadfacePasswordIs), expected, timeoutMs);
  }

  async expectEpicSadfacePasswordIsContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, LoginPage.L.epicSadfacePasswordIs), substring, timeoutMs);
  }

  async scrollEpicSadfacePasswordIsIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, LoginPage.L.epicSadfacePasswordIs));
  }

  async performLogin(username: string, password: string): Promise<void> {
    await this.fillUserName(username);
    await this.fillPassword(password);
    await this.clickLoginButton();
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

  async clickEpicSadfaceUsernameIs(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.epicSadfaceUsernameIs));
  }

  async doubleClickEpicSadfaceUsernameIs(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.epicSadfaceUsernameIs));
  }

  async longPressEpicSadfaceUsernameIs(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.epicSadfaceUsernameIs));
  }

  async expectEpicSadfaceUsernameIsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.epicSadfaceUsernameIs), value, timeoutMs);
  }

  async expectEpicSadfaceUsernameIsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.epicSadfaceUsernameIs), timeoutMs);
  }

  async expectEpicSadfaceUsernameIsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.epicSadfaceUsernameIs), timeoutMs);
  }

  async expectEpicSadfaceUsernameIsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.epicSadfaceUsernameIs), timeoutMs);
  }

  async expectEpicSadfaceUsernameIsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.epicSadfaceUsernameIs), timeoutMs);
  }

  async expectEpicSadfaceUsernameIsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.epicSadfaceUsernameIs), timeoutMs);
  }

  async expectEpicSadfaceUsernameIsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.epicSadfaceUsernameIs), count, timeoutMs);
  }

  async clickEpicSadfacePasswordIs(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, LoginPage.L.epicSadfacePasswordIs));
  }

  async doubleClickEpicSadfacePasswordIs(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, LoginPage.L.epicSadfacePasswordIs));
  }

  async longPressEpicSadfacePasswordIs(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, LoginPage.L.epicSadfacePasswordIs));
  }

  async expectEpicSadfacePasswordIsValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, LoginPage.L.epicSadfacePasswordIs), value, timeoutMs);
  }

  async expectEpicSadfacePasswordIsEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, LoginPage.L.epicSadfacePasswordIs), timeoutMs);
  }

  async expectEpicSadfacePasswordIsDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, LoginPage.L.epicSadfacePasswordIs), timeoutMs);
  }

  async expectEpicSadfacePasswordIsChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, LoginPage.L.epicSadfacePasswordIs), timeoutMs);
  }

  async expectEpicSadfacePasswordIsUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, LoginPage.L.epicSadfacePasswordIs), timeoutMs);
  }

  async expectEpicSadfacePasswordIsFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, LoginPage.L.epicSadfacePasswordIs), timeoutMs);
  }

  async expectEpicSadfacePasswordIsCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, LoginPage.L.epicSadfacePasswordIs), count, timeoutMs);
  }

}
