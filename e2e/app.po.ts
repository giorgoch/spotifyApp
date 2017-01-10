import { browser, element, by } from 'protractor';

<<<<<<< HEAD
export class SpotifyPage {
=======
export class SpotifyAppPage {
>>>>>>> d88f20f86f03ae1bf23e56a730134c48f0e5d513
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
