const fetch = require('node-fetch')
const chromium = require('chrome-aws-lambda')

const takeScreenshot = async function(url) {
  const browser = await chromium.puppeteer.launch({
    // launch desktop chrome on local??
    executablePath: await chromium.executablePath,
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    headless: chromium.headless,
  })
  const page = await browser.newPage()
  await page.setViewport({ height: 630, width: 1200 })
  await page.goto(url)
  const buffer = await page.screenshot()
  await browser.close()
  return `${buffer.toString('base64')}`
}

function objectToParams(object) {
  const params = new URLSearchParams
  Object.entries(object).map(entry => {
    let [key, value] = entry
    params.set(key, value)
  })
  return params.toString()
}

exports.handler = async function(event,context) {
  if (!event.queryStringParameters) {
    console.log(`no params given`)
    return
  }

  const url = "https://youthful-jones-fe1131.netlify.app"
  const imageParams = objectToParams(event.queryStringParameters)
  const screenshot = await takeScreenshot(`${url}/?${imageParams}`)
  return {
      statusCode: 200,
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'max-age=0' //set to 0 as it prevents netlify caching
      },
      body: screenshot,
      isBase64Encoded: true
    }
}
