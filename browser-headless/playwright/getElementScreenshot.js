const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch()
    const page = await browser.newPage()
    const navigationPromise = page.waitForNavigation()

    await page.goto('https://github.com/haroldocruz')

    await page.setViewportSize({ width: 1536, height: 722 })

    await page.waitForSelector('.container-xl:nth-child(1) > .Layout > .Layout-main > .UnderlineNav > .UnderlineNav-body > .UnderlineNav-item:nth-child(2)')
    await page.click('.container-xl:nth-child(1) > .Layout > .Layout-main > .UnderlineNav > .UnderlineNav-body > .UnderlineNav-item:nth-child(2)')

    await page.waitForSelector('.col-12:nth-child(1) > .col-10 > .d-inline-block > .wb-break-all > a')
    await page.click('.col-12:nth-child(1) > .col-10 > .d-inline-block > .wb-break-all > a')

    await navigationPromise

    await page.waitForSelector('.Details-content--hidden-not-important > .Box-row:nth-child(4) > .flex-auto > .css-truncate > .js-navigation-open')
    await page.click('.Details-content--hidden-not-important > .Box-row:nth-child(4) > .flex-auto > .css-truncate > .js-navigation-open')

    await page.waitForSelector('div > .Box > .js-details-container > .Details-content--hidden-not-important > .Box-row:nth-child(3)')
    const element1 = await page.$('div > .Box > .js-details-container > .Details-content--hidden-not-important > .Box-row:nth-child(3)')
    await element1.screenshot({ path: 'screenshot/screenshot_1.png' })

    await browser.close()
})()