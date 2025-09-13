import { chromium } from "playwright";

// Usage: node generate-pdf.js [url] [outputPath]
const url = process.argv[2] || "http://localhost:4321/";
const outputPath = process.argv[3] || "public/xabier_martinez.pdf";

(async () => {
  let browser;
  try {
    browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto(url, { waitUntil: "networkidle" });

    // Remove download button content for cleaner PDF
    const downloadButton = page.locator("a[download]");
    await downloadButton.evaluate((node) => (node.innerHTML = ""));

    // Remove background for print
    const body = page.locator("body");
    await body.evaluate((node) => node.classList.remove("bg-indigo-50"));

    await page.pdf({
      path: outputPath,
      printBackground: true,
      format: "A4",
    });
  } catch (err) {
    console.error("Error generating PDF:", err);
    process.exit(1);
  } finally {
    if (browser) await browser.close();
  }
})();
