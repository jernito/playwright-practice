import { test, expect } from '@playwright/test';
import { ContactPage } from '../pages/contact.page';
import { faker } from '@faker-js/faker';


test.describe('Contact', () => {
    let contactPage : ContactPage
    test('Contact Exercice', async ({ page }) => {
        contactPage = new ContactPage(page)
        
        // await page.goto('https://practice.sdetunicorns.com/')
        // // 1 .Acces contact page
        //  const contact = page.locator('#zak-primary-menu >> text=Contact')
    
        // await expect(contact).toBeEnabled();
    
        // await contact.click()
    
        // await expect(page).toHaveURL(/.*contact/)
        contactPage.navigate()
        
    
    
        // Fill the form
        // xpath '//span[text()="Name"]/parent::label/following-sibling::input'
        // await page.locator('.contact-name input').fill('Jernito')

        // // xpath '//span[text()="Email"]/parent::label/following-sibling::input'
        // await page.locator('.contact-email input').fill('kaizoku@hotmail.com')

        // // xpath '//span[text()="Phone"]/parent::label/following-sibling::input'
        // await page.locator('//span[text()="Phone"]/parent::label/following-sibling::input').fill('0545856007')

        // // xpath '//span[text()="Message"]/parent::label/following-sibling::textarea'
        // await page.locator('.contact-message textarea').fill('Ceci est un test')


        // add a soft assertion (Make a few checks that will not stop the test when failed...)
        //await expect.soft(page.locator('.contact-message textarea')).toHaveText("errueur message non attendu")
        
        
        // Submit the form
        // await page.locator('button[type=submit]').click()


        // fill the form and submit avec le POM
        contactPage.submitForm(faker.person.firstName('male'),faker.internet.email(),faker.phone.number(),faker.lorem.paragraphs(2));
    
        // Assert the succes message
        // const succesMessage = page.locator('div[role="alert"]')
        await expect(contactPage.succesMsg).toHaveText('Thanks for contacting us! We will be in touch with you shortly',{ timeout: 10000 })
    
      
    })
    
})

