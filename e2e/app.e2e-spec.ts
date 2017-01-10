<<<<<<< HEAD
import { SpotifyPage } from './app.po';

describe('spotify App', function() {
  let page: SpotifyPage;

  beforeEach(() => {
    page = new SpotifyPage();
=======
import { SpotifyAppPage } from './app.po';

describe('spotify-app App', function() {
  let page: SpotifyAppPage;

  beforeEach(() => {
    page = new SpotifyAppPage();
>>>>>>> d88f20f86f03ae1bf23e56a730134c48f0e5d513
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
