import { TodoappPage } from './app.po';

describe('todoapp App', function() {
  let page: TodoappPage;

  beforeEach(() => {
    page = new TodoappPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('todoapp works!');
  });
});
