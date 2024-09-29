import { test } from '@playwright/test';

test('YouTube Search testing', async ({ page }) => {
  
    await page.goto("https://www.youtube.com/");
  

    let searchBox= page.locator("//input[@id='search']"); // i took from perplexity.ai 
    await searchBox.click();

    await searchBox.fill('Cydeo');

  

    await searchBox.press("Enter");

   

    let firstVideo= page.locator("//a[@id='video-title' and @title='Is AI killing software quality assurance jobs?']");

    await firstVideo.click();

});

/*
<input id="search" autocapitalize="none" autocomplete="off" autocorrect="off" name="search_query" tabindex="0" type="text" spellcheck="false" placeholder="Search" aria-label="Search" role="combobox" aria-haspopup="false" aria-autocomplete="list" dir="ltr" class="ytd-searchbox" style="outline: none;">
*/
//input[@name='search_query']