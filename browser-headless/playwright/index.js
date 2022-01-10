const { chromium, devices } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: true });

    let i = 0;
    for (const deviceName of ['Desktop Chrome', 'iPhone 11']) {
        const context = await browser.newContext({
            ...devices[deviceName],
            // recordVideo: {
            //     dir: 'recordings/'
            // }
        });

        const page = await context.newPage();
        await page.goto('https://github.com/haroldocruz');
        // await page.screenshot({ path: `screenshots/screenshot_${new Date().getTime()}.png`, fullPage: true, type: 'png' })
        // await page.pdf({
        //     displayHeaderFooter: true,
        //     footerTemplate: `<h1 class='text-center' style='font-size: 10pt; margin-left: 3cm'>sigilo.digital</h1>`,
        //     // path: path.join(WS_BUILD, 'pdfs/cv.pdf'), 
        //     path: `pdfs/pdf_${new Date().getTime()}.pdf`, 
        //     format: 'A4',
        //     margin: {
        //         top: '3cm',
        //         left: '3cm',
        //         right: '2cm',
        //         bottom: '2cm'
        //     }
        // });
        i++;
        await context.close();
    }

    await browser.close();
})();