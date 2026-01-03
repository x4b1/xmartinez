import { chromium } from "playwright";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { existsSync, mkdirSync } from "node:fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Usage: node generate-pdf.js [url] [outputPath]
const url = process.argv[2] || "http://localhost:4321/";
const outputPath =
  process.argv[3] || resolve(__dirname, "../public/xabier_martinez.pdf");

// Ensure output directory exists
const outputDir = dirname(outputPath);
if (!existsSync(outputDir)) {
  console.log(`Creating output directory: ${outputDir}`);
  mkdirSync(outputDir, { recursive: true });
}

(async () => {
  let browser;
  try {
    console.log(`Launching browser...`);
    browser = await chromium.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();
    console.log(`Navigating to ${url}...`);

    await page.goto(url, {
      waitUntil: "networkidle",
      timeout: 30000,
    });

    console.log("Preparing page for PDF generation...");

    // Wait for fonts and styles to load completely
    await page.waitForLoadState("networkidle");

    // Add a small delay to ensure all styles are applied
    await page.waitForTimeout(500);

    // Emulate print media to apply print styles
    await page.emulateMedia({ media: 'print' });

    console.log(`Generating PDF at ${outputPath}...`);
    await page.pdf({
      path: outputPath,
      printBackground: true,
      format: "A4",
      preferCSSPageSize: true,
      displayHeaderFooter: false,
      margin: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
      scale: 1,
    });

    console.log(`✅ PDF successfully generated at ${outputPath}`);

  } catch (err) {
    console.error("Error generating PDF:", err);
    if (err.message?.includes("net::ERR_CONNECTION_REFUSED")) {
      console.error("\n💡 Make sure the preview server is running on", url);
    }
    process.exit(1);
  } finally {
    if (browser) {
      await browser.close();
      console.log("Browser closed.");
    }
  }
})();
