import { MyAppFoolongPage } from './app.po';

describe('my-app-foolong App', () => {
  let page: MyAppFoolongPage;

  beforeEach(() => {
    page = new MyAppFoolongPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
