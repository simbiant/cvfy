const puppeteer = require('puppeteer')

async function printPDF() {
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()
  await page.goto('http://localhost:8099')
  const pdf = await page.pdf({
    path: './test.pdf',
    format: 'A4',
    printBackground: true,
  })
  return pdf
}
printPDF().then((res) => console.log(res))
