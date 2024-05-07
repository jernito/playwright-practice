import { test, expect } from '@playwright/test';
import { BlogPage } from '../pages/blog.page';

test.describe('Blog Exercice', () => {
    let blogPage: BlogPage;
    test('Verify recent Posts and verify the lenght of each list item', async ({ page }) => {
        blogPage = new BlogPage(page);
        // Acces Blog page
        // await page.goto('https://practice.sdetunicorns.com/blog/')

        await blogPage.navigate()



        // get the recent post list elements
        // const recentPostList = page.locator('#recent-posts-3 ul li')
        // console.log(recentPostList)

        // Assertion #1
        // Get the length of no. Of posts end verify if got 5 li 
         expect(await blogPage.recentPostsList.count()).toEqual(5)
        

        // Assertion #2
        // Expect min char length of Each individual post item > 10
        for (const el of await blogPage.recentPostsList.elementHandles()) {
            // (await el.textContent())! le point d'exclamation la réponse attendu ne peut être null
            expect(((await el.textContent())!.trim()).length).toBeGreaterThan(15)
          }
      

      
    })
})
