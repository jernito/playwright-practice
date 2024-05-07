import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';

test.describe('Home', () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page)
        // j'utilise ceci parceque mon url est dorénavent stocké 
        await homePage.navigate()
    })
    
    test('Open HomePage and verify title', async ({ page }) => {
        
      // Ouvrir l'URL
      //await page.goto('https://practice.sdetunicorns.com/');

      // Verifier la présence du <title>
      await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns')
    })

    test.skip('Open About Page and verify title', async ({ page }) => {
        // Ouvrir l'URL
        await page.goto('https://practice.sdetunicorns.com/about/');
        
        // Verifier la présence du <title>
        await expect(page).toHaveTitle('About – Practice E-Commerce Site')
      })

    test('Click get started button using CSS Selector', async ({ page }) => {
        // await page.goto('https://practice.sdetunicorns.com/')
        
        // Vérifier que la page ne contient pas l'url /.*#get-started/
        // Cours 32 '$env:DEBUG="pw:api"' créer la variable d'environement pour le mode debug console
        // Cours 33 Remove-Item Env:DEBUG pour supprimer la variable d'env que j'ai créer 
        await expect(page).not.toHaveURL(/.*#get-started/);

        //await page.locator('#get-started').click();
        // Ici je vais utiliser le POM
        await homePage.getStartedBtn.click();

        await expect(page).toHaveURL(/.*#get-started/);
    })
    
    test('Verify heading text is visible using text selector', async ({ page }) => {
        //await page.goto('https://practice.sdetunicorns.com/');

        // find the text locator

        // Sans POM
        // const headingText = page.locator('text=Think different. Make different.')

        // POM
        const headingText = homePage.headingText

        // verify heading text is visible
        // headingText.isVisible()

        
        // vérifier avec la négation que l'élément N'EST PAS caché
        await expect(headingText).not.toBeHidden();
        //  If you need to assert that element is visible, prefer expect(locator).toBeVisible([options])
        await expect(headingText).toBeVisible();
    })

    test('Verify heading text is visible using text css selector', async ({ page }) => {
        //await page.goto('https://practice.sdetunicorns.com/')

        // find the home text première méthode
        // const homeText = await page.locator('#zak-primary-menu >> text=Home')

        // seconde méthode pour trouver le texte 
        // const homeText = page.locator('#zak-primary-menu:has-text("Home")')

        // const homeText = page.locator('#zak-primary-menu:has-text("Home")')
        const homeText = homePage.homeLink

       // verify home text is enabled
        await expect(homeText).toBeEnabled();
    })

    test('Search item is visible', async ({ page }) => {
        //await page.goto('https://practice.sdetunicorns.com/')

        //const searchIcon = await page.locator("//div[@class='zak-header-actions zak-header-actions--desktop']//a[@class='zak-header-search__toggle']")
        const searchIcon = homePage.searchIcon

        // verify search Icon is visble
        await expect(searchIcon).toBeVisible();
    })
    
    test('Verify text of all nav links', async ({ page }) => {
        // await page.goto('https://practice.sdetunicorns.com/')


        // variable créer que l'on vas utiliser pour vérifier le text dans le li avec avec la méthode 1
        
        const expectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account"

        ];

        //const navLinks = page.locator('#zak-primary-menu li[id*=menu]')
        const navLinks = homePage.navlinks
        
        // verify nav links text
        // expect(await navLinks.allTextContents()).toEqual(expectedLinks);
        expect(await homePage.getNavlinksText()).toEqual(expectedLinks)

        // le faire avec une boucle sur chaque el
        for (const el of await navLinks.elementHandles()) {
            console.log(await el.textContent())
            
        }
    })
    
})
