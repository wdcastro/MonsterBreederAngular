import { MonsterbreederfrontendPage } from './app.po';

describe('monsterbreederfrontend App', () => {
  let page: MonsterbreederfrontendPage;

  beforeEach(() => {
    page = new MonsterbreederfrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
