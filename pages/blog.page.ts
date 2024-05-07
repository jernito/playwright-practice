import { Page, Locator } from "@playwright/test";

export class BlogPage {
    private page: Page;
    recentPostsList: Locator;

    constructor(page: Page){
        this.page = page;
        this.recentPostsList = page.locator('#recent-posts-3 ul li');
    }
    async navigate(){
        await this.page.goto('/blog')
    }
}