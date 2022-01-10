const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch()
    const page = await browser.newPage()
    const navigationPromise = page.waitForNavigation()

    await page.goto('http://localhost:4201/user')

    await page.setViewportSize({ width: 1707, height: 802 })

    await page.waitForSelector('app-user-filter > .container-fluid > .row > .col-6 > .btn')
    await page.click('app-user-filter > .container-fluid > .row > .col-6 > .btn')

    await page.waitForSelector('.card-body > .container-fluid > .row > .col-lg-8 > .form-control')
    await page.click('.card-body > .container-fluid > .row > .col-lg-8 > .form-control')

    await navigationPromise

    page.on('dialog', async alert => {
        await alert.accept()
    })

    await page.waitForSelector('app-user-form > .ng-untouched > .card > .modal-footer > .btn-primary')
    const e = await page.$('app-user-form > .ng-untouched > .card > .modal-footer > .btn-primary')
    await e.screenshot({ path: 'element.png' })
    await e.click()


    // await page.waitForEvent('dialog')

    await browser.close()
})()