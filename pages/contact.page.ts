import { Page, Locator } from "@playwright/test";

export class ContactPage{
    page: Page;
    nameInput: Locator;
    emailInput: Locator;
    phone: Locator;
    submitBtn: Locator;
    succesMsg: Locator;
    msgArea: Locator;

    constructor(page:Page){
        this.page = page;
        this.nameInput = page.locator('.contact-name input')
        this.emailInput = page.locator('.contact-email input')
        this.phone = page.locator('//span[text()="Phone"]/parent::label/following-sibling::input')
        this.msgArea =  page.locator('.contact-message textarea')
        this.submitBtn = page.locator('button[type=submit]')
        this.succesMsg = page.locator('div[role="alert"]')

    }

    async navigate(){
        await this.page.goto('/contact');
    }

    async submitForm(name: string, email: string, phone: string, message: string) {

        await this.nameInput.fill(name)
        await this.emailInput.fill(email)
        await this.phone.fill(phone)
        await this.msgArea.fill(message)
        await this.submitBtn.click()
        
    }
}