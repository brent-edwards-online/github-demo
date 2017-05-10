import { GithubDemoPage } from './app.po';

describe('github-demo App', () => {
  let page: GithubDemoPage;

  beforeEach(() => {
    page = new GithubDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
