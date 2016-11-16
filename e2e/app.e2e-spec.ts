import { Ng2ScssPage } from './app.po';

describe('ng2-scss App', function() {
  let page: Ng2ScssPage;

  beforeEach(() => {
    page = new Ng2ScssPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
