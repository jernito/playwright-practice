import { test, expect } from '@playwright/test'
import { CartPage } from '../pages/cart.page';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

test.describe('Upload File', () => {
    let cartPage: CartPage;

    const fileName = ['js-image.png','3mb-file.pdf']
    for (const name of fileName){
        test(`should upload a ${name} file`, async ({ page }) => {
            cartPage = new CartPage(page);
            // Open a url 
            await page.goto('https://practice.sdetunicorns.com/cart/')
            
            
    
            // store test file path 
            const filePath = path.join(__dirname,`../data/${name}`)
    
            
            // upload test file
            // première methode avant le POM et sans la création du upload.component
            // await page.setInputFiles('//input[@id="upfile_1"]',filePath)
    
            //upload test file avec le POM => upload.component
            cartPage.uploadComponent().uploadFile(filePath)
    
    
            // click on the submit button  
            // await page.locator('#upload_1').click();
    
            // HARDCORED SLEEP - WRONG WAY TRES TRES MAUVAISE PRATIQUE
            // await page.waitForTimeout(5000);
    
    
            // WAIT FOR CONDITION 
            
            // on impose une condition d'attente avant de passer à la ligne suivante 
            // await page.locator('#wfu_messageblock_header_1_label_1')
            //     .waitFor({ state: 'visible', timeout: 10000 })
    
            // ASSERTION TIMEOUT
            // await expect(page.locator('#wfu_messageblock_header_1_label_1')).toContainText('uploaded successfully', {timeout: 10000});
    
    
    
            // make a assertion for check 
            await expect(cartPage.uploadComponent().succesTxt).toContainText('uploaded successfully')
    
        }) 

    }
    
    


    test.skip('should upload a test file on a hidden input field', async ({ page }) => {
        // Open a url 
        await page.goto('https://practice.sdetunicorns.com/cart/')


        // store test file path 
        const filePath = path.join(__dirname,'../data/js-image.png')

        // DOM manipulation pour cibler des elemnents en utilisant du js 
        await page.evaluate(()=>{
           const selector = document.querySelector('input#upfile_1');
           // eslint-disable-next-line playwright/no-conditional-in-test
           if (selector) {
            selector.className=''
           } 
        })

        // upload test file 
        await page.setInputFiles('//input[@id="upfile_1"]',filePath) // Throws error

        // click on the submit button  
        await page.locator('#upload_1').click();
 
        // make a assertion for check 
        await expect(page.locator('#wfu_messageblock_header_1_label_1')).toContainText('uploaded successfully')
    })
    
    
})
