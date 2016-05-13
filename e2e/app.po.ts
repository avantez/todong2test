export class TodoappPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('todoapp-app h1')).getText();
  }
}
