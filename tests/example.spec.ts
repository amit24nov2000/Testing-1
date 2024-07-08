import { test, expect } from '@playwright/test';

test('get started link', async ({ page }) => {
  await page.goto('https://artoftesting.com/samplesiteforselenium');
  var dropdown:string='Manual Testing';
  //await page.locator('//*[@id="testingDropdown"]').click();
  await page.locator('#testingDropdown').selectOption({ label: 'Manual Testing' });
  //In order to select the select option asd
  await page.waitForTimeout(5000);
});

