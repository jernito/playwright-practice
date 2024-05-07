import { test, expect } from '@playwright/test';

test.describe('My Account', () => {
    // serial permet de lancer les test de manière séquentiel et non de manière parallèle.
    // Ici il est couplé avec le beforeAll concernant le login vas s'exucuter qu'une seule fois 
    // pour les deux tests
    //let page: Page
    // variable global page
    
    //test.beforeAll(async ({browser }) => {
        // Browser instance is shared between all tests in the SAME WORKER!! 

   // page = await browser.newPage()

    // await page.goto('/my-account')
    // await page.locator('#username').fill('practiceuser1')
    // await page.locator('#password').fill('PracticePass1!')
    // await page.locator('[value="Log in"]').click()
    // xpath //li/a[text()='Log out'] qui vérifie si la balise a contenant le text Log out est visible
    // await expect(page.locator('li > a:has-text("Log out")')).toBeVisible()
        
    // })
    
  test('Access Orders', async ({page}) => {
    await page.goto('/my-account')
    // await page.waitForTimeout(5000)
    await page.locator(`li a[href*='orders']`).click()
    await expect(page).toHaveURL(/.*orders/)
  });

  test('Access Downloads', async ({page}) => {
    await page.goto('/my-account')
    await page.locator(`li a[href*='downloads']`).click()
    await expect(page).toHaveURL(/.*downloads/)
  });
});


test.describe('Account Page', () => {
  // Ici on crée un test qui doit utiliser le 'notLoggedInState' du global-setup pcq nous ne souhaitons pas l'action login
  test.use({ storageState: 'notLoggedInState.json' })
  
  test('Verify login and register is visible', async ({ page }) => {
    await page.goto('/my-account')
    await page.waitForTimeout(5000)
    await expect(page.locator('form[class*="login"]')).toBeVisible()
    await expect(page.locator('form[class*="register"]')).toBeVisible()
  });
  
  
})


