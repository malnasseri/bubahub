import { BubahubPage } from './app.po';

describe('bubahub App', () => {
  let page: BubahubPage;

  beforeEach(() => {
    page = new BubahubPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
