import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('http://localhost:4321/', { waitUntil: 'networkidle' });

  const downloadButton = page.locator('a[download]');
  await downloadButton.evaluate((node) => (node.innerHTML = ''));

  const body = page.locator('body');
  await body.evaluate((node) => node.classList.remove('bg-indigo-50'));

  await page.pdf({
    path: 'public/xabier_martinez.pdf',
    printBackground: true,
    format: 'A4'
  });

  await browser.close();
})();
