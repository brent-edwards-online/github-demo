import { Brentedwardsonline02Page } from './app.po';

describe('brentedwardsonline-02 App', function() {
  let page: Brentedwardsonline02Page;

  beforeEach(() => {
    page = new Brentedwardsonline02Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
