import { AngulerSpaPage } from './app.po';

describe('anguler-spa App', function() {
  let page: AngulerSpaPage;

  beforeEach(() => {
    page = new AngulerSpaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
