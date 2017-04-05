import { BootQepPage } from './app.po';

describe('boot-qep App', () => {
  let page: BootQepPage;

  beforeEach(() => {
    page = new BootQepPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
