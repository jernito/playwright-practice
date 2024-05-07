import { Page, Locator } from "@playwright/test";
export class HomePage{
    page: Page;
    getStartedBtn: Locator;
    headingText: Locator;
    homeLink: Locator;
    searchIcon: Locator;
    navlinks: Locator;

    constructor(page: Page) {
        this.page = page;
        this.getStartedBtn = page.locator('#get-started')
        this.headingText = page.locator('text=Think different. Make different.')
        this.homeLink = page.locator('#zak-primary-menu:has-text("Home")')
        this.searchIcon = page.locator("//div[@class='zak-header-actions zak-header-actions--desktop']//a[@class='zak-header-search__toggle']")
        this.navlinks = page.locator('#zak-primary-menu li[id*=menu]')

    }
    async navigate () {
        // url est défini dans le fichier playwright config
        await this.page.goto('/')
    }
    async getNavlinksText(){
        return this.navlinks.allInnerTexts()
    }
}